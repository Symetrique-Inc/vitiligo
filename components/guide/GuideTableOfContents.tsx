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
    <aside
      className="guide-toc sticky top-24 pt-4 pb-6 border-t border-[#DDE5F5] max-h-[85vh] overflow-y-auto"
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
  );
};
