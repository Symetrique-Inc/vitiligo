import React from 'react';

export interface TocItem {
  id: string;
  label: string;
}

interface GuideTableOfContentsProps {
  items: TocItem[];
}

export const GuideTableOfContents: React.FC<GuideTableOfContentsProps> = ({ items }) => {
  return (
    <>
      {/* Mobile Collapsible Dropdown: Clean, non-sticky, doesn't block reading flow */}
      <details className="lg:hidden w-full mb-6 rounded-xl border border-[#DDE5F5] bg-white p-4 shadow-2xs group">
        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wider text-[#0B1F6B] flex items-center justify-between list-none select-none">
          <span className="flex items-center gap-2">
            <span>📖 In this guide</span>
            <span className="text-[11px] font-normal text-[#5B6785]">({items.length} sections)</span>
          </span>
          <span className="text-sm font-bold text-[#1D5FE0] group-open:rotate-180 transition-transform">
            ▾
          </span>
        </summary>
        <nav className="flex flex-col space-y-2 mt-3 pt-3 border-t border-[#E5ECF6]">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs text-[#1E2A4A] hover:text-[#1D5FE0] py-1 leading-snug transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>

      {/* Desktop Sticky Sidebar (Visible only on lg screens and up) */}
      <aside
        className="guide-toc hidden lg:block sticky top-24 pt-4 pb-6 border-t border-[#DDE5F5] max-h-[85vh] overflow-y-auto"
        aria-label="On this page"
      >
        <div className="text-[11px] tracking-[2px] uppercase font-semibold text-[#0B1F6B] mb-2 sm:mb-3">
          IN THIS GUIDE
        </div>
        <nav className="flex flex-col space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs text-[#1E2A4A] hover:text-[#1D5FE0] py-1.5 leading-snug transition-colors no-underline hover:underline underline-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};
