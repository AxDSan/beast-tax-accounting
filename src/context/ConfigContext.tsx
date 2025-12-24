import React, { createContext, useContext, useEffect, useState } from 'react';

interface BrandConfig {
  companyName: string;
  brandNameFirst: string;
  brandNameSecond: string;
  logo: string;
  ceoName: string;
  ceoRole: string;
  ceoImage: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
}

interface ConfigContextType {
  config: BrandConfig;
  updateConfig: (newConfig: Partial<BrandConfig>) => void;
  resetConfig: () => void;
}

export const DEFAULT_CONFIG: BrandConfig = {
  companyName: 'Beast Tax Accounting LLC',
  brandNameFirst: 'Beast',
  brandNameSecond: 'Tax',
  logo: '',
  ceoName: 'Edwin Venezuela',
  ceoRole: 'CEO & Founder',
  ceoImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
  phone: '787-823-7777',
  email: 'info@beasttaxaccounting.com',
  whatsapp: '939-228-1422',
  address: 'Carr 115 Km 16 Bo Rio Grande, Rincón, PR 00677',
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BrandConfig>(DEFAULT_CONFIG);

  useEffect(() => {
    // 1. Try local storage first for speed
    const savedConfig = localStorage.getItem('beast-brand-config');
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (e) {}
    }

    // 2. Fetch from SQLite API for persistence
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setConfig(data);
          localStorage.setItem('beast-brand-config', JSON.stringify(data));
        }
      })
      .catch(err => console.error('Failed to fetch config from API', err));
  }, []);

  const updateConfig = async (newConfig: Partial<BrandConfig>) => {
    const updated = { ...config, ...newConfig };

    // Optimistic update
    setConfig(updated);
    localStorage.setItem('beast-brand-config', JSON.stringify(updated));

    // Persist to SQLite via API
    try {
      const response = await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Server responded with ${response.status}`);
      }
    } catch (err) {
      console.error('Failed to save config to API', err);
      throw err;
    }
  };

  const resetConfig = async () => {
    setConfig(DEFAULT_CONFIG);
    localStorage.removeItem('beast-brand-config');

    try {
      await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(DEFAULT_CONFIG),
      });
    } catch (err) {
      console.error('Failed to reset config on API', err);
    }
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
