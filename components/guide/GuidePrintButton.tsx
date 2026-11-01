'use client';

import React from 'react';
import { Printer } from 'lucide-react';

interface GuidePrintButtonProps {
  className?: string;
}

export const GuidePrintButton: React.FC<GuidePrintButtonProps> = ({ className = '' }) => {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-[#DDE5F5] hover:border-[#1D5FE0] hover:bg-[#F8FAFF] text-[#0B1F6B] hover:text-[#1D5FE0] px-5 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs cursor-pointer ${className}`}
      aria-label="Print this guide"
    >
      <Printer className="w-4 h-4 text-[#1D5FE0]" aria-hidden="true" />
      <span>Print this guide</span>
    </button>
  );
};
