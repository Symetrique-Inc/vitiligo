import React from 'react';
import Link from 'next/link';

export const LandingSupportPanel: React.FC = () => {
  return (
    <section className="max-w-[1160px] mx-auto px-5 sm:px-10 mb-10 sm:mb-15" aria-label="Support and everyday life">
      <div className="bg-[#EFEAFF] border border-[#DCD3FC] p-6 sm:p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-16 items-center">
        {/* Left Column */}
        <div>
          <div className="text-[11px] tracking-[2px] uppercase font-semibold text-[#0B1F6B] mb-2">
            Room for everyday life
          </div>
          <h2 className="font-serif font-normal text-2xl sm:text-[31px] text-[#0B1F6B] leading-[1.2] -tracking-[1.2px] my-2 sm:my-3">
            More than information<br className="hidden sm:inline" /> about skin.
          </h2>
          <p className="text-sm text-[#5B6785] leading-relaxed m-0 max-w-md">
            Explore the topics that matter to you, from understanding the science to talking about how you feel and preparing for care.
          </p>
        </div>

        {/* Right Column: Stacked divider-separated links */}
        <div className="flex flex-col">
          <Link
            href="/understand-vitiligo"
            className="flex items-center justify-between no-underline border-b border-[#D8CEFA] py-3.5 sm:py-4 text-sm sm:text-[15px] font-medium text-[#1E2A4A] hover:text-[#1D5FE0] transition-colors group"
          >
            <span>Understand vitiligo</span>
            <span
              aria-hidden="true"
              className="text-[#0B1F6B] group-hover:text-[#1D5FE0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              ↗
            </span>
          </Link>
          <Link
            href="/living-with-vitiligo"
            className="flex items-center justify-between no-underline border-b border-[#D8CEFA] py-3.5 sm:py-4 text-sm sm:text-[15px] font-medium text-[#1E2A4A] hover:text-[#1D5FE0] transition-colors group"
          >
            <span>Living with vitiligo</span>
            <span
              aria-hidden="true"
              className="text-[#0B1F6B] group-hover:text-[#1D5FE0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              ↗
            </span>
          </Link>
          <Link
            href="/treatment-and-care"
            className="flex items-center justify-between no-underline border-b border-[#D8CEFA] py-3.5 sm:py-4 text-sm sm:text-[15px] font-medium text-[#1E2A4A] hover:text-[#1D5FE0] transition-colors group"
          >
            <span>Treatment and care</span>
            <span
              aria-hidden="true"
              className="text-[#0B1F6B] group-hover:text-[#1D5FE0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
