import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfig, DEFAULT_CONFIG } from '../context/ConfigContext';
import { useI18n } from '../i18n';
import { getTextClasses } from '../theme';

interface ImageUploadProps {
  label: string;
  value: string | undefined;
  fieldName: string;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => void;
  hint?: string;
  aspectRatio?: 'cover' | 'contain';
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  label, 
  value, 
  fieldName, 
  onUpload, 
  hint,
  aspectRatio = 'cover'
}) => {
  const { t } = useI18n();
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1">{label}</label>
      <div className="flex items-center gap-4">
        {value && (
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 dark:border-white/10 flex-shrink-0">
            <img src={value} alt={`${label} Preview`} className={`w-full h-full object-${aspectRatio}`} />
          </div>
        )}
        <div className="flex-grow">
          <label className="relative flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium">{t.admin?.uploadImage || "Click to upload image"}</span>
                {hint && <span className="text-[10px] opacity-60">{hint}</span>}
              </div>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => onUpload(e, fieldName)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboard: React.FC = () => {
  const { t } = useI18n();
  const { config, updateConfig, resetConfig } = useConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('_0x_auth') !== 'true';
    }
    return true;
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState(config);
  const [isSaving, setIsSaving] = useState(false);

  // Obfuscated password check (7772)
  const _0x5f21 = (s: string) => {
    const _v = [103, 103, 103, 98]; 
    const res = s.length === 4 && s.split('').every((c, i) => c.charCodeAt(0) + 0x30 === _v[i]);
    if (res && typeof window !== 'undefined') {
      sessionStorage.setItem('_0x_auth', 'true');
    }
    return res;
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (_0x5f21(password)) {
      setIsLocked(false);
      setError(false);
      setFormData(config);
      setIsOpen(true);
    } else {
      setError(true);
      setPassword('');
      // Subtle shake effect could be added here
      setTimeout(() => setError(false), 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsSaving(true);

      try {
        // 1. Get a presigned upload URL from our backend
        const response = await fetch('/api/get-signed-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
            fieldName: fieldName
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to get upload URL');
        }

        const { uploadUrl, publicUrl } = await response.json();

        // 2. Upload the file directly to Supabase S3 using the signed URL
        const uploadResponse = await fetch(uploadUrl, {
          method: 'PUT',
          body: file,
          headers: {
            'Content-Type': file.type,
          },
        });

        if (!uploadResponse.ok) {
          throw new Error('Direct S3 upload failed');
        }

        // 3. Update the form state with the final public URL
        setFormData((prev) => ({ ...prev, [fieldName]: publicUrl }));
      } catch (error: any) {
        console.error('Upload failed:', error);
        alert(`Error al subir imagen: ${error.message}. Verifica que el bucket 'brand-assets' existe.`);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateConfig(formData);
      setIsOpen(false);
    } catch (error) {
      console.error('Save failed:', error);
      alert('Error: No se pudo guardar la configuración.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (!isLocked) setFormData(config);
          setIsOpen(true);
        }}
        className="fixed bottom-6 left-6 z-[60] w-12 h-12 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-red-700"
        aria-label={t.admin?.toggleLabel || "Open Admin Dashboard"}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.button>

      {/* Admin Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-dark rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-dark dark:text-white">{isLocked ? "Secure Access" : (t.admin?.title || "Admin Dashboard")}</h2>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setPassword('');
                      setError(false);
                    }}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {isLocked ? (
                  <form onSubmit={handleUnlock} className="space-y-6">
                    <div className="text-center space-y-4 py-8">
                      <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className={`w-8 h-8 ${error ? 'text-red-600 animate-bounce' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Please enter your access code to continue.</p>
                      <motion.div 
                        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                        className="max-w-[200px] mx-auto"
                      >
                        <input
                          type="password"
                          autoFocus
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••"
                          className={`w-full text-center text-2xl tracking-[1em] bg-gray-50 dark:bg-white/5 border ${error ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-red-600 transition-all font-mono`}
                          maxLength={4}
                        />
                      </motion.div>
                      {error && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-500 font-semibold"
                        >
                          Invalid access code. Please try again.
                        </motion.p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-red-600/20"
                    >
                      Unlock Dashboard
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-red-600">{t.admin?.companyBrand || "Company & Brand"}</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">{t.admin?.legalName || "Legal Company Name"}</label>
                          <input
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">{t.admin?.brandName1 || "Brand Name 1"}</label>
                            <input
                              name="brandNameFirst"
                              value={formData.brandNameFirst}
                              onChange={handleChange}
                              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">{t.admin?.brandName2 || "Brand Name 2"}</label>
                            <input
                              name="brandNameSecond"
                              value={formData.brandNameSecond}
                              onChange={handleChange}
                              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                            />
                          </div>
                        </div>
                        <ImageUpload
                          label="Logo"
                          value={formData.logo}
                          fieldName="logo"
                          onUpload={handleImageUpload}
                          hint="(PNG, SVG preferred)"
                          aspectRatio="contain"
                        />
                      </div>

                      <h3 className="text-sm font-bold uppercase tracking-widest text-red-600 mt-8">{t.admin?.ceoInfo || "CEO Info"}</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">{t.admin?.name || "Name"}</label>
                          <input
                            name="ceoName"
                            value={formData.ceoName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">{t.admin?.role || "Role"}</label>
                          <input
                            name="ceoRole"
                            value={formData.ceoRole}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                          />
                        </div>
                        <ImageUpload
                          label={t.admin?.imageUrl || "CEO / About Section Image"}
                          value={formData.ceoImage}
                          fieldName="ceoImage"
                          onUpload={handleImageUpload}
                          hint="(High Quality)"
                        />
                      </div>

                      <h3 className="text-sm font-bold uppercase tracking-widest text-red-600 mt-8">Contacto</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">Teléfono</label>
                            <input
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">WhatsApp</label>
                            <input
                              name="whatsapp"
                              value={formData.whatsapp}
                              onChange={handleChange}
                              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Dirección</label>
                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows={2}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-600 transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="submit"
                        disabled={isSaving}
                        className="flex-grow bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSaving ? (t.admin?.saving || "Saving...") : (t.admin?.saveChanges || "Save Changes")}
                      </button>
                      <button
                        type="button"
                        disabled={isSaving}
                        onClick={async () => {
                          setIsSaving(true);
                          await resetConfig();
                          setFormData(DEFAULT_CONFIG);
                          setIsSaving(false);
                          setIsOpen(false);
                        }}
                        className="px-6 border border-gray-200 dark:border-white/10 rounded-xl text-xs font-bold uppercase text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
                      >
                        {t.admin?.reset || "Reset"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
