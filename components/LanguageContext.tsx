'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import vthTranslations from '@/data/vth_translations.json';
import legacyTranslationsData from '@/data/translations.json';

export type Locale = 'en' | 'hi' | 'mr' | 'bn' | 'ta' | 'te' | 'kn';

export const SUPPORTED_LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'English',   native: 'English' },
  { code: 'hi', label: 'Hindi',     native: 'हिन्दी' },
  { code: 'mr', label: 'Marathi',   native: 'मराठी' },
  { code: 'bn', label: 'Bengali',   native: 'বাংলা' },
  { code: 'ta', label: 'Tamil',     native: 'தமிழ்' },
  { code: 'te', label: 'Telugu',    native: 'తెలుగు' },
  { code: 'kn', label: 'Kannada',   native: 'ಕನ್ನಡ' },
];

type VthTranslations = typeof vthTranslations;
type BlockId = keyof VthTranslations;
type LegacyTranslations = typeof legacyTranslationsData.en;

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Look up a translation by VTH block ID; falls back to English */
  tById: (id: string, fallback?: string) => string;
  /** Legacy nested-key lookup */
  t: LegacyTranslations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  tById: (id: string, fallback?: string) => fallback ?? id,
  t: legacyTranslationsData.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('onevitiligo_locale') as Locale | null;
      if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // localStorage unavailable in SSR
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem('onevitiligo_locale', l);
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
  }, []);

  const tById = useCallback(
    (id: string, fallback?: string): string => {
      const block = vthTranslations[id as BlockId] as Record<string, string> | undefined;
      if (!block) return fallback ?? id;
      return block[locale] || block['en'] || fallback || id;
    },
    [locale],
  );

  const legacyT: LegacyTranslations =
    locale === 'hi' ? legacyTranslationsData.hi : legacyTranslationsData.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, tById, t: legacyT }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
