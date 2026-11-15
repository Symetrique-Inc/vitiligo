'use client';

import React from 'react';
import { Printer } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

interface GuidePrintButtonProps {
  className?: string;
}

export const GuidePrintButton: React.FC<GuidePrintButtonProps> = ({ className = '' }) => {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-[#DDE5F5] hover:border-[#1D5FE0] hover:bg-[#F8FAFF] text-[#0B1F6B] hover:text-[#1D5FE0] px-5 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs cursor-pointer ${className}`}
      aria-label={t('Print this guide')}
    >
      <Printer className="w-4 h-4 text-[#1D5FE0]" aria-hidden="true" />
      <span>{t('Print this guide')}</span>
    </button>
  );
};
