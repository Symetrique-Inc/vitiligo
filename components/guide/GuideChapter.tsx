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
    <section id={id} className="guide-chapter py-7 sm:py-8 border-t border-[#DDE5F5] scroll-mt-24">
      <div className="text-[11px] tracking-[2px] uppercase font-semibold text-[#0B1F6B] mb-2">
        {index}
      </div>
      <h2 className="font-serif font-normal text-2xl sm:text-[31px] text-[#0B1F6B] leading-[1.2] -tracking-[0.8px] mt-2 mb-4">
        {title}
      </h2>
      <div className="text-[#1E2A4A] text-sm sm:text-base leading-[1.8] space-y-4">
        {children}
      </div>
      {nextChapter && (
        <a
          href={`#${nextChapter.id}`}
          className="guide-next-link text-xs font-semibold text-[#0B1F6B] hover:text-[#1D5FE0] inline-block mt-5 underline underline-offset-4 transition-colors"
        >
          Next: {nextChapter.label} ↓
        </a>
      )}
    </section>
  );
};
