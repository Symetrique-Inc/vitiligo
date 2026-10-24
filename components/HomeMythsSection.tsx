'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

interface MythCard {
  id: string;
  cardNumber: string;
  image: string;
  imageAlt: string;
  title: string;
  frontQuestion: string;
  revealText: string;
  ctaText: string;
  ctaHref: string;
}

const mythCards: MythCard[] = [
  {
    id: 'contagious',
    cardNumber: 'CARD 01',
    image: '/images/card-treatment.jpg',
    imageAlt: 'Hand showing vitiligo patches',
    title: 'Myth: Vitiligo is contagious.',
    frontQuestion: 'Can you catch vitiligo from someone?',
    revealText: 'Reveal: No. Vitiligo is not contagious.',
    ctaText: 'Discover the facts',
    ctaHref: '/understand-vitiligo/stigma-and-misconceptions',
  },
  {
    id: 'cosmetic',
    cardNumber: 'CARD 02',
    image: '/images/hero-group.jpg',
    imageAlt: 'Diverse group of people smiling together',
    title: 'Myth: Vitiligo only affects appearance.',
    frontQuestion: 'Is vitiligo just a cosmetic concern?',
    revealText: 'Reveal: It can also affect emotional wellbeing and quality of life.',
    ctaText: 'Understand the impact',
    ctaHref: '/understand-vitiligo/stigma-and-misconceptions',
  },
  {
    id: 'treatment',
    cardNumber: 'CARD 03',
    image: '/images/card-understand.jpg',
    imageAlt: 'Woman resting hands on her cheeks',
    title: 'Myth: Nothing can be done about vitiligo.',
    frontQuestion: 'Are there treatment options for vitiligo?',
    revealText: 'Reveal: Yes. Several options can help manage vitiligo, although results vary.',
    ctaText: 'Explore treatment options',
    ctaHref: '/treatment-and-care',
  },
];

export const HomeMythsSection: React.FC = () => {
  const [activeReveal, setActiveReveal] = useState<Record<string, boolean>>({
    contagious: true,
    cosmetic: true,
    treatment: true,
  });

  const toggleReveal = (id: string) => {
    setActiveReveal((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-3 sm:py-4 relative" aria-labelledby="home-myths-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-4">
          <h2
            id="home-myths-heading"
            className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-serif text-[#0B1F6B] tracking-tight leading-snug"
          >
            Think You Know Vitiligo? Let&apos;s Separate Myths from Facts.
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6785] mt-1.5 leading-relaxed">
            There is a lot of misinformation about vitiligo. Explore the facts, challenge misconceptions and help build a more understanding world
          </p>
        </div>

        {/* Myths Cards Grid + Explore CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {mythCards.map((card, index) => {
            const isRevealed = activeReveal[card.id];
            return (
              <div
                key={card.id}
                className="lg:col-span-4 bg-white rounded-2xl border border-[#DDE5F5] hover:border-[#1D5FE0]/40 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start gap-4">
                  {/* Left Thumbnail Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-[#E5ECF6] shadow-xs">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="96px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      {card.cardNumber}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#0B1F6B] leading-snug mt-0.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#5B6785] italic mt-1 leading-snug">
                      Front of card: &ldquo;{card.frontQuestion}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Reveal Callout */}
                <div className="mt-3 pt-3 border-t border-[#F0F4FA] flex flex-col justify-between flex-1">
                  <p className="text-xs sm:text-sm font-semibold text-[#1FA37A] leading-relaxed">
                    {card.revealText}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={card.ctaHref}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D5FE0] hover:text-[#0B1F6B] transition-colors"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated "Explore All Myths & Facts" Button row matching mockup */}
        <div className="mt-4 flex justify-end">
          <Link
            href="/understand-vitiligo/stigma-and-misconceptions"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#DDE5F5] hover:border-[#1D5FE0] text-sm font-bold text-[#0B1F6B] hover:text-[#1D5FE0] shadow-xs hover:shadow-md transition-all"
          >
            <span>Explore All Myths & Facts</span>
            <ArrowRight className="w-4 h-4 text-[#1D5FE0] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
