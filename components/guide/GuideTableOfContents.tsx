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
      <details className="lg:hidden w-full mb-6 rounded-2xl border border-[#DDE5F5] bg-white p-4 shadow-xs group">
        <summary className="cursor-pointer text-xs font-bold uppercase tracking-wider text-[#0B1F6B] flex items-center justify-between list-none select-none">
          <span className="flex items-center gap-2">
            <span>📖 In this guide</span>
            <span className="text-[11px] font-normal text-[#5B6785]">({items.length} sections)</span>
          </span>
          <span className="text-sm font-bold text-[#1D5FE0] group-open:rotate-180 transition-transform">
            ▾
          </span>
        </summary>
        <nav className="flex flex-col space-y-1.5 mt-3 pt-3 border-t border-[#E5ECF6]">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-medium text-[#1E2A4A] hover:text-[#1D5FE0] hover:bg-[#F4F8FF] px-2.5 py-1.5 rounded-lg leading-snug transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>

      {/* Desktop Sticky Sidebar in dedicated clean card container */}
      <aside
        className="guide-toc hidden lg:block sticky top-24 p-5 rounded-2xl bg-white border border-[#DDE5F5] shadow-xs max-h-[calc(100vh-120px)] overflow-y-auto"
        aria-label="On this page"
      >
        <div className="flex items-center gap-2 text-[11px] tracking-[2px] uppercase font-bold text-[#0B1F6B] mb-3 pb-2.5 border-b border-[#EDF2FA]">
          <span>IN THIS GUIDE</span>
        </div>
        <nav className="flex flex-col space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-medium text-[#1E2A4A] hover:text-[#1D5FE0] hover:bg-[#F4F8FF] px-2.5 py-2 rounded-lg leading-snug transition-all no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};
