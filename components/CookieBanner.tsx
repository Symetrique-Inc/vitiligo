'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

export const CookieBanner: React.FC = () => {
  const { tById, t } = useLanguage();
  const [hasConsented, setHasConsented] = useState<boolean>(true); // default true to avoid flash before hydration

  useEffect(() => {
    const consent = localStorage.getItem('vitiligo_hub_cookie_consent');
    if (!consent) {
      setHasConsented(false);
    }
  }, []);

  const handleChoice = (choice: 'all' | 'essential' | 'settings') => {
    localStorage.setItem('vitiligo_hub_cookie_consent', choice);
    setHasConsented(true);
  };

  if (hasConsented) return null;

  return (
    <div
      role="region"
      aria-label={tById('VTH-01067', 'Cookie consent banner')}
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-5 bg-white/95 backdrop-blur-md border-t border-[#DDE5F5] shadow-2xl animate-fadeIn"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-[#1E2A4A] leading-relaxed max-w-4xl">
          {tById('VTH-01085', 'We use essential cookies to run this site and, with your permission, analytics cookies to understand how it is used. We never sell your personal data. Read our')}{' '}
          <Link href="/privacy" className="text-[#1D5FE0] underline hover:text-[#0B1F6B]">
            {tById('VTH-01068', 'privacy policy')}
          </Link>{' '}
          {tById('VTH-01086', 'to learn more.')}
        </p>

        <div className="flex flex-wrap items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => handleChoice('all')}
            className="flex-1 sm:flex-none px-4 py-2 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors shadow-xs text-center"
          >
            {tById('VTH-01069', 'Accept all')}
          </button>
          <button
            onClick={() => handleChoice('essential')}
            className="flex-1 sm:flex-none px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#DDE5F5] text-[#1E2A4A] hover:bg-[#F8FAFF] transition-colors text-center"
          >
            {tById('VTH-01070', 'Essential only')}
          </button>
          <button
            onClick={() => handleChoice('settings')}
            className="px-3.5 py-2 rounded-full text-xs font-medium text-[#5B6785] hover:text-[#0B1F6B] transition-colors"
          >
            {tById('VTH-01071', 'Settings')}
          </button>
        </div>
      </div>
    </div>
  );
};
