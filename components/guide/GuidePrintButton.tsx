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
      className={`inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-white border border-[#0B1F6B] hover:bg-[#F5F8FF] text-[#0B1F6B] px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-2xs cursor-pointer ${className}`}
      aria-label="Print this guide"
    >
      <Printer className="w-4 h-4 text-[#0B1F6B]" aria-hidden="true" />
      <span>Print this guide</span>
    </button>
  );
};
