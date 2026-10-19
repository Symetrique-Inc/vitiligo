'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { tenMyths } from '@/content/siteContent';
import { PlaceholderTag } from '@/components/PlaceholderTag';

interface StigmaCarouselProps {
  selectedMythId?: number | null;
  onSelectMyth?: (id: number) => void;
}

export const StigmaCarousel: React.FC<StigmaCarouselProps> = ({
  selectedMythId,
  onSelectMyth,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  // When selectedMythId changes from a chip click, make sure it is in view
  React.useEffect(() => {
    if (selectedMythId) {
      const idx = tenMyths.findIndex((m) => m.id === selectedMythId);
      if (idx !== -1) {
        setStartIndex(Math.min(idx, tenMyths.length - 1));
        setExpandedCardId(selectedMythId);
      }
    }
  }, [selectedMythId]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : tenMyths.length - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < tenMyths.length - 1 ? prev + 1 : 0));
  };

  const visibleCards = [
    tenMyths[startIndex],
    tenMyths[(startIndex + 1) % tenMyths.length],
    tenMyths[(startIndex + 2) % tenMyths.length],
  ];

  return (
    <div className="space-y-6" id="p03-s02">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
            Evidence vs Misconception
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
            Myths vs Facts
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
            Let&apos;s separate myth from reality.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Previous myths"
            className="w-10 h-10 rounded-full border border-[#DDE5F5] bg-white flex items-center justify-center text-[#0B1F6B] hover:bg-[#F8FAFF] transition-colors shadow-xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold text-[#5B6785] px-2">
            {startIndex + 1} of {tenMyths.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next myths"
            className="w-10 h-10 rounded-full border border-[#DDE5F5] bg-white flex items-center justify-center text-[#0B1F6B] hover:bg-[#F8FAFF] transition-colors shadow-xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards View: 3 on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleCards.map((card, i) => {
          const isHighlighted = selectedMythId === card.id;
          const isExpanded = expandedCardId === card.id;

          return (
            <div
              key={`${card.id}-${i}`}
              id={`myth-card-${card.id}`}
              className={`rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between shadow-xs ${
                isHighlighted
                  ? 'bg-white border-[#E8456B] ring-2 ring-[#E8456B]/20 shadow-lg'
                  : 'bg-white border-[#DDE5F5] hover:border-[#1D5FE0]'
              }`}
            >
              <div className="space-y-4">
                {/* Header: Visual icon & Myth number */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl p-2 rounded-2xl bg-[#F8FAFF] border border-gray-100">
                    {card.visualIcon}
                  </div>
                  <span className="text-[11px] font-bold text-[#5B6785] bg-gray-50 px-2.5 py-1 rounded-full">
                    Myth #{card.id}
                  </span>
                </div>

                {/* Front: Myth in quotes */}
                <h3 className="font-serif font-bold text-lg text-[#0B1F6B] leading-snug">
                  &ldquo;{card.myth}&rdquo;
                </h3>

                {/* Verdict: Red ✕ icon with verdict word & one-line fact */}
                <div className="p-3.5 rounded-2xl bg-[#FDE8EE] border border-[#FAD0DC] space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-[#E8456B]">
                    <div className="w-4 h-4 rounded-full bg-[#E8456B] text-white flex items-center justify-center">
                      <X className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{card.verdict}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#1E2A4A] pl-5">
                    {card.oneLineFact}
                  </p>
                </div>

                {/* Expanded Full Explanation (Back of card toggle) */}
                {isExpanded && (
                  <div className="pt-3 animate-fadeIn space-y-3">
                    <div className="p-4 rounded-2xl bg-[#F4F8FF] border border-[#D5E2FA] space-y-2.5">
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-[#1D5FE0]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-wider text-[11px]">The Medical Fact</span>
                      </div>
                      <p className="text-sm sm:text-[15px] font-medium text-[#1E2A4A] leading-relaxed">
                        {card.fullExplanation}
                      </p>
                      {card.visualCaption && (
                        <div className="pt-2.5 border-t border-[#D5E2FA]/70 flex items-start space-x-2 text-xs sm:text-sm text-[#0B1F6B] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1D5FE0] mt-1.5 shrink-0" />
                          <span>{card.visualCaption}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom: Read more expander & source */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm">
                <button
                  onClick={() => setExpandedCardId(isExpanded ? null : card.id)}
                  className="font-bold text-[#1D5FE0] hover:text-[#0B1F6B] transition-colors py-1 inline-flex items-center space-x-1"
                >
                  <span>{isExpanded ? 'Show less ↑' : 'Read more →'}</span>
                </button>

                <span
                  className="text-[11px] font-semibold text-[#5B6785] bg-[#F8FAFF] border border-[#DDE5F5] px-2.5 py-1 rounded-full"
                  title={`Source: ${card.source}`}
                >
                  {card.source}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Dots indicator */}
      <div className="flex items-center justify-center space-x-1.5 pt-2">
        {tenMyths.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => {
              setStartIndex(idx);
              onSelectMyth?.(m.id);
            }}
            aria-label={`Go to myth ${m.id}`}
            className={`h-2 rounded-full transition-all ${
              startIndex === idx ? 'w-6 bg-[#0B1F6B]' : 'w-2 bg-gray-200 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Carousel Footer CTA */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF8F4] border border-[#FEDDC7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#1E2A4A]">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-4 h-4 text-[#F2884B] shrink-0" />
          <span>Have a question you&apos;re afraid to ask?</span>
        </div>
        <Link
          href="/expert-insights#ask"
          className="font-bold text-[#F2884B] hover:text-[#d9743a] inline-flex items-center space-x-1 shrink-0"
        >
          <span>Ask anonymously →</span>
          <PlaceholderTag label="Form Pending" />
        </Link>
      </div>
    </div>
  );
};
