'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';

export const LandingFactBand: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#EAF2FF] border-y border-[#D5E2FA]" aria-label={t('A reassuring fact')}>
      <div className="max-w-[1160px] mx-auto px-5 sm:px-10 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-9">
        <div className="font-serif text-[38px] sm:text-[48px] leading-none text-[#0B1F6B] whitespace-nowrap -tracking-[2px]">
          {t('1 in 200')}
        </div>
        <div>
          <p className="m-0 text-sm sm:text-[17px] text-[#1E2A4A] leading-snug">
            {t('About 1 in 200 people in South Asia have vitiligo.')}
          </p>
          <small className="block text-[11px] text-[#5B6785] mt-1">
            {t('A rounded regional estimate.')}{' '}
            <a
              href="https://doi.org/10.1016/S2468-2667(24)00026-4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D5FE0] hover:underline underline-offset-2"
            >
              {t('Read the 2024 study')} <span aria-hidden="true">↗</span>
            </a>
          </small>
        </div>
      </div>
    </section>
  );
};
