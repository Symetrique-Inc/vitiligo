'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '@/data/translations.json';

type Locale = 'en' | 'hi';
type Translations = typeof translationsData.en;

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: translationsData.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('vitiligo_hub_locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'hi')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('vitiligo_hub_locale', l);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
  };

  const t = locale === 'hi' ? translationsData.hi : translationsData.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
