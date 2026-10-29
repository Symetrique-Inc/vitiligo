'use client';

import React, { useState } from 'react';
import { XCircle, CheckCircle, ChevronLeft, ChevronRight, ExternalLink, HelpCircle, Sparkles } from 'lucide-react';
import mythsData from '@/data/myths.json';

export const MythsFactsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedMap, setFlippedMap] = useState<Record<number, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 9 Myths' },
    { id: 'transmission', label: 'Contagion' },
    { id: 'biology', label: 'Biology & Leprosy' },
    { id: 'diet', label: 'Food & Diet' },
    { id: 'moral-stigma', label: 'Fault & Karma' },
    { id: 'treatment', label: 'Treatment Hope' },
    { id: 'social', label: 'Camouflage & Choice' },
  ];

  const filteredMyths = activeCategory === 'all'
    ? mythsData
    : mythsData.filter((m) => m.category === activeCategory);

  const currentItem = filteredMyths[currentIndex] || filteredMyths[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredMyths.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredMyths.length) % filteredMyths.length);
  };

  const toggleFlip = (index: number) => {
    setFlippedMap((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-16 relative" aria-labelledby="myths-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FDE8EE] text-[#E8456B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Science vs Misconceptions</span>
          </div>
          <h2 id="myths-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B]">
            Myths vs Facts
          </h2>
          <p className="text-base text-[#5B6785] mt-2">
            Let&apos;s separate myth from reality. Tap any card to reveal the evidence-based truth.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start md:justify-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#0B1F6B] text-white shadow-md'
                  : 'bg-white border border-[#DDE5F5] text-[#5B6785] hover:bg-[#F4F8FF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel Presentation */}
        <div className="max-w-3xl mx-auto">
          {filteredMyths.length > 0 && (
            <div className="relative">
              {/* Card Container */}
              <div
                onClick={() => toggleFlip(currentIndex)}
                className="bg-white rounded-3xl border-2 border-[#DDE5F5] hover:border-[#1D5FE0] p-6 sm:p-10 shadow-xl transition-all cursor-pointer min-h-[380px] flex flex-col justify-between group"
              >
                {/* Card Top: Status & Visual Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-full bg-[#FDE8EE] text-[#E8456B] flex items-center justify-center font-bold text-lg">
                      ✕
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#E8456B] tracking-wide uppercase block">
                        Common Myth #{currentIndex + 1}
                      </span>
                      <span className="text-xs text-[#5B6785]">
                        Tap to {flippedMap[currentIndex] ? 'see myth' : 'reveal verified fact'}
                      </span>
                    </div>
                  </div>

                  <div className="text-3xl p-2 bg-[#F8FAFF] rounded-2xl border border-gray-100">
                    {currentItem.visualIcon}
                  </div>
                </div>

                {/* Center Content: Myth vs Fact State */}
                <div className="my-6 space-y-4">
                  {!flippedMap[currentIndex] ? (
                    /* Myth State */
                    <div className="space-y-3">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FDE8EE] text-[#E8456B] text-xs font-bold">
                        <XCircle className="w-4 h-4" />
                        <span>Not true</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F6B] leading-snug">
                        &ldquo;{currentItem.myth}&rdquo;
                      </h3>
                      <p className="text-xs text-[#5B6785] italic">
                        {currentItem.visualCaption}
                      </p>
                    </div>
                  ) : (
                    /* Fact State */
                    <div className="space-y-3 animate-fadeIn">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E3F6EF] text-[#1FA37A] text-xs font-bold">
                        <CheckCircle className="w-4 h-4" />
                        <span>Medical Fact</span>
                      </div>
                      <p className="text-lg sm:text-xl font-medium text-[#1E2A4A] leading-relaxed">
                        {currentItem.fact}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Source & Action */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#5B6785] gap-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-semibold text-[#0B1F6B]">Source:</span>
                    <a
                      href={currentItem.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#1D5FE0] hover:underline flex items-center"
                    >
                      <span>{currentItem.source}</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>

                  <span className="text-[#1D5FE0] font-semibold group-hover:underline">
                    {flippedMap[currentIndex] ? 'Tap to view myth' : 'Tap to flip to fact →'}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-6 px-2">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#DDE5F5] text-xs font-semibold text-[#0B1F6B] hover:bg-[#EAF2FF] transition-colors shadow-xs"
                  aria-label="Previous myth"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center space-x-1.5">
                  {filteredMyths.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === i
                          ? 'w-7 bg-[#0B1F6B]'
                          : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to myth ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#DDE5F5] text-xs font-semibold text-[#0B1F6B] hover:bg-[#EAF2FF] transition-colors shadow-xs"
                  aria-label="Next myth"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Prominent Signature Stigma Quote */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-3xl bg-[#EFEAFF] border border-[#DCD3FC]">
          <p className="font-serif font-bold text-xl sm:text-2xl text-[#0B1F6B]">
            &ldquo;Treatment is a choice. Camouflage is a choice. Showing your skin is a choice.&rdquo;
          </p>
          <p className="text-xs font-medium text-[#7C5CE0] mt-2">
            OneVitiligo Core Value &bull; Autonomy Without Judgment
          </p>
        </div>
      </div>
    </section>
  );
};
