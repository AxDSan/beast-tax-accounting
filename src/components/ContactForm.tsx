import * as React from "react"
import { motion } from "framer-motion"
import { useI18n } from "../i18n"

interface ContactFormProps {
  showHeader?: boolean
  className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ showHeader = false, className = "" }) => {
  const { t } = useI18n()
  
  return (
    <div className={`w-full ${className}`}>
      {showHeader && (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            {t.hero.cta}
          </h2>
          <p className="text-gray-400">
            Ready to reduce your tax bill? Send us a message.
          </p>
        </div>
      )}

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 bg-dark/50 p-8 rounded-lg border border-gold-900/30"
        action="https://formspree.io/f/YOUR_FORM_ID" // Placeholder for form action
        method="POST"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              {t.form.name}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t.form.namePlaceholder}
              className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-500 transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              {t.form.phone}
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder={t.form.phonePlaceholder}
              className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            {t.form.email}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t.form.emailPlaceholder}
            className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-500 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            {t.form.service}
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white transition-colors appearance-none"
            defaultValue=""
          >
             <option value="" disabled>{t.form.selectService}</option>
            <option value="tax-planning">{t.form.servicePlanning}</option>
            <option value="business-tax">{t.form.serviceBusiness}</option>
            <option value="individual-tax">{t.form.serviceIndividual}</option>
            <option value="corporate-tax">{t.form.serviceCorporate}</option>
            <option value="consulting">{t.form.serviceConsulting}</option>
            <option value="other">{t.form.serviceOther}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {t.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t.form.messagePlaceholder}
            className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white placeholder-gray-500 transition-colors"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-wide"
        >
          {t.form.submit}
        </button>
      </motion.form>
    </div>
  )
}

export default ContactForm
