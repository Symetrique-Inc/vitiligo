import React from 'react';

interface GuideChapterProps {
  id: string;
  index: string;
  title: string;
  nextChapter?: {
    id: string;
    label: string;
  };
  children: React.ReactNode;
}

export const GuideChapter: React.FC<GuideChapterProps> = ({
  id,
  index,
  title,
  nextChapter,
  children,
}) => {
  return (
    <section id={id} className="guide-chapter py-6 sm:py-9 border-t border-[#DDE5F5] scroll-mt-24">
      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5FE0] tracking-[2px] uppercase mb-2">
        {index}
      </div>
      <h2 className="font-serif font-bold text-xl sm:text-2xl lg:text-[30px] text-[#0B1F6B] leading-[1.22] -tracking-[0.5px] sm:-tracking-[0.8px] mt-1 mb-4">
        {title}
      </h2>
      <div className="text-[#1E2A4A] text-sm sm:text-base leading-[1.8] space-y-4">
        {children}
      </div>
      {nextChapter && (
        <a
          href={`#${nextChapter.id}`}
          className="guide-next-link text-xs font-bold text-[#0B1F6B] hover:text-[#1D5FE0] inline-flex items-center gap-1.5 mt-6 px-3.5 py-2 rounded-lg bg-[#F4F8FF] hover:bg-[#EAF2FF] transition-all no-underline"
        >
          <span>Next: {nextChapter.label}</span>
          <span aria-hidden="true">↓</span>
        </a>
      )}
    </section>
  );
};
