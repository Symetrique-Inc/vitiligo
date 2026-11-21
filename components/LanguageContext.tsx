'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import vthTranslations from '@/data/vth_translations.json';
import enTranslations from '@/data/en_translations.json';
import legacyTranslationsData from '@/data/translations.json';

export type Locale = 'en' | 'hi' | 'mr' | 'bn' | 'ta' | 'te' | 'kn';

export const SUPPORTED_LOCALES: { code: Locale; label: string; native: string; script: string }[] = [
  { code: 'en', label: 'English',   native: 'English',  script: 'Latin' },
  { code: 'hi', label: 'Hindi',     native: 'हिन्दी',     script: 'Devanagari' },
  { code: 'mr', label: 'Marathi',   native: 'मराठी',    script: 'Devanagari' },
  { code: 'bn', label: 'Bengali',   native: 'বাংলা',    script: 'Bengali' },
  { code: 'ta', label: 'Tamil',     native: 'தமிழ்',    script: 'Tamil' },
  { code: 'te', label: 'Telugu',    native: 'తెలుగు',   script: 'Telugu' },
  { code: 'kn', label: 'Kannada',   native: 'ಕನ್ನಡ',   script: 'Kannada' },
];

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
  /** Whether the user is viewing draft/unpublished translations in preview mode */
  previewMode: boolean;
  setPreviewMode: (enabled: boolean) => void;
  /** Force refetch latest translations from CMS */
  refreshTranslations: () => Promise<void>;
  isLoading: boolean;
}

const defaultTranslate = ((textOrId: string, fallback?: string) => fallback ?? textOrId) as TranslateFunction;
Object.assign(defaultTranslate, legacyTranslationsData.en);

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  tById: (id: string, fallback?: string) => fallback ?? id,
  t: defaultTranslate,
  previewMode: false,
  setPreviewMode: () => {},
  refreshTranslations: async () => {},
  isLoading: false,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [previewMode, setPreviewModeState] = useState<boolean>(false);
  const [dynamicTranslations, setDynamicTranslations] = useState<Record<string, string>>({});
  const [dynamicVthMap, setDynamicVthMap] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize from localStorage & URL params
  useEffect(() => {
    try {
      const saved = localStorage.getItem('onevitiligo_locale') as Locale | null;
      if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }

      // Check preview mode in URL or localStorage
      const params = new URLSearchParams(window.location.search);
      const isParamPreview = params.get('preview') === 'true';
      const isSavedPreview = localStorage.getItem('onevitiligo_preview_mode') === 'true';
      if (isParamPreview || isSavedPreview) {
        setPreviewModeState(true);
      }
    } catch {
      // localStorage unavailable in SSR
    }
  }, []);

  // Fetch latest published or draft translations from CMS database
  const fetchTranslations = useCallback(async (targetLocale: Locale, isPreview: boolean) => {
    if (targetLocale === 'en' && !isPreview) return;

    try {
      setIsLoading(true);
      const res = await fetch(`/api/translations?locale=${targetLocale}&preview=${isPreview}`);
      if (res.ok) {
        const data = await res.json();
        if (data.translations && typeof data.translations === 'object') {
          setDynamicTranslations((prev) => ({ ...prev, ...data.translations }));
        }
        if (data.vthMap && typeof data.vthMap === 'object') {
          setDynamicVthMap((prev) => ({ ...prev, ...data.vthMap }));
        }
      }
    } catch (e) {
      // Graceful fallback to static files if fetch fails
      console.warn('Using static translations fallback:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTranslations(locale, previewMode);
  }, [locale, previewMode, fetchTranslations]);

  const setLocale = useCallback(
    (l: Locale) => {
      setLocaleState(l);
      try {
        localStorage.setItem('onevitiligo_locale', l);
      } catch {
        /* ignore */
      }
      if (typeof document !== 'undefined') {
        document.documentElement.lang = l;
      }
    },
    []
  );

  const setPreviewMode = useCallback((enabled: boolean) => {
    setPreviewModeState(enabled);
    try {
      localStorage.setItem('onevitiligo_preview_mode', enabled ? 'true' : 'false');
    } catch {
      /* ignore */
    }
  }, []);

  const refreshTranslations = useCallback(async () => {
    await fetchTranslations(locale, previewMode);
  }, [locale, previewMode, fetchTranslations]);

  const tById = useCallback(
    (id: string, fallback?: string): string => {
      // 1. Dynamic CMS database translation takes first priority!
      if (dynamicVthMap[id]) {
        return dynamicVthMap[id];
      }

      // 2. Static vthTranslations fallback
      const block = (vthTranslations as Record<string, Record<string, string>>)[id];
      if (!block) return fallback ?? id;
      return block[locale] || block['en'] || fallback || id;
    },
    [locale, dynamicVthMap]
  );

  const tFn = useCallback(
    (textOrId: string, fallback?: string): string => {
      if (!textOrId) return fallback ?? '';

      // If it's a block ID (starts with VTH-)
      if (textOrId.startsWith('VTH-')) {
        return tById(textOrId, fallback);
      }

      if (locale === 'en' && !previewMode) {
        return fallback ?? textOrId;
      }

      // 1. Check dynamic CMS database translations
      if (dynamicTranslations[textOrId]) {
        return dynamicTranslations[textOrId];
      }

      // 2. Check direct English match in static data
      const direct = (enTranslations as Record<string, Record<string, string>>)[textOrId];
      if (direct && direct[locale]) {
        return direct[locale];
      }

      // 3. Check normalized whitespace
      const normalized = textOrId.trim().replace(/\s+/g, ' ');
      if (dynamicTranslations[normalized]) {
        return dynamicTranslations[normalized];
      }
      const normMatch = (enTranslations as Record<string, Record<string, string>>)[normalized];
      if (normMatch && normMatch[locale]) {
        return normMatch[locale];
      }

      // 4. Check with straight vs curly quote variants
      const straightQuotes = normalized.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
      const curlyQuotes = normalized.replace(/'/g, '’');
      const quoteMatch =
        dynamicTranslations[straightQuotes] ||
        dynamicTranslations[curlyQuotes] ||
        (enTranslations as Record<string, Record<string, string>>)[straightQuotes]?.[locale] ||
        (enTranslations as Record<string, Record<string, string>>)[curlyQuotes]?.[locale];

      if (quoteMatch) {
        return quoteMatch;
      }

      return fallback ?? textOrId;
    },
    [locale, previewMode, dynamicTranslations, tById]
  );

  const legacyT: LegacyTranslations =
    locale === 'hi' ? legacyTranslationsData.hi : legacyTranslationsData.en;

  const t = Object.assign(
    (textOrId: string, fallback?: string) => tFn(textOrId, fallback),
    legacyT
  ) as TranslateFunction;

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        tById,
        t,
        previewMode,
        setPreviewMode,
        refreshTranslations,
        isLoading,
      }}
    >
      {previewMode && (
        <div className="bg-amber-500 text-white text-xs font-semibold px-4 py-1.5 flex items-center justify-between sticky top-0 z-[60] shadow-sm">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Translation Preview Mode Active: Showing draft & unpublished translations.</span>
          </div>
          <button
            onClick={() => setPreviewMode(false)}
            className="text-[11px] underline hover:text-amber-100 transition-colors"
          >
            Exit Preview
          </button>
        </div>
      )}
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
