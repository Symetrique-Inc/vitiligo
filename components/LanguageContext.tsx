'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import vthTranslations from '@/data/vth_translations.json';
import enTranslations from '@/data/en_translations.json';
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

export type TranslateFunction = {
  (textOrId: string, fallback?: string): string;
} & LegacyTranslations;

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Look up a translation by VTH block ID; falls back to English */
  tById: (id: string, fallback?: string) => string;
  /** Smart translate: accepts English text string OR block ID; falls back to English */
  t: TranslateFunction;
}

const defaultTranslate = ((textOrId: string, fallback?: string) => fallback ?? textOrId) as TranslateFunction;
Object.assign(defaultTranslate, legacyTranslationsData.en);

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  tById: (id: string, fallback?: string) => fallback ?? id,
  t: defaultTranslate,
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
      const block = (vthTranslations as Record<string, Record<string, string>>)[id];
      if (!block) return fallback ?? id;
      return block[locale] || block['en'] || fallback || id;
    },
    [locale],
  );

  const tFn = useCallback(
    (textOrId: string, fallback?: string): string => {
      if (!textOrId) return fallback ?? '';
      
      // If it's a block ID (starts with VTH-)
      if (textOrId.startsWith('VTH-')) {
        const block = (vthTranslations as Record<string, Record<string, string>>)[textOrId];
        if (block) {
          return block[locale] || block['en'] || fallback || textOrId;
        }
      }

      if (locale === 'en') {
        return fallback ?? textOrId;
      }

      // Check direct English match
      const direct = (enTranslations as Record<string, Record<string, string>>)[textOrId];
      if (direct && direct[locale]) {
        return direct[locale];
      }

      // Check normalized whitespace
      const normalized = textOrId.trim().replace(/\s+/g, ' ');
      const normMatch = (enTranslations as Record<string, Record<string, string>>)[normalized];
      if (normMatch && normMatch[locale]) {
        return normMatch[locale];
      }

      // Check with straight vs curly quote variants
      const straightQuotes = normalized.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
      const curlyQuotes = normalized.replace(/'/g, '’');
      const quoteMatch =
        (enTranslations as Record<string, Record<string, string>>)[straightQuotes] ||
        (enTranslations as Record<string, Record<string, string>>)[curlyQuotes];
      if (quoteMatch && quoteMatch[locale]) {
        return quoteMatch[locale];
      }

      return fallback ?? textOrId;
    },
    [locale],
  );

  const legacyT: LegacyTranslations =
    locale === 'hi' ? legacyTranslationsData.hi : legacyTranslationsData.en;

  const t = Object.assign(
    (textOrId: string, fallback?: string) => tFn(textOrId, fallback),
    legacyT,
  ) as TranslateFunction;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, tById, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

/** Helper component for inline text translation */
export const T: React.FC<{ text: string; fallback?: string }> = ({ text, fallback }) => {
  const { t } = useLanguage();
  return <>{t(text, fallback)}</>;
};
