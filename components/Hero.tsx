'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-white via-[#F4F9FF] to-[#EAF4FF] border-b border-[#E5ECF6]">
      {/* Decorative subtle pastel halo rings matching the mockup background */}
      <div className="absolute top-1/2 right-[25%] -translate-y-1/2 w-72 h-72 rounded-full border-4 border-[#C8B6F8]/35 pointer-events-none" />
      <div className="absolute top-[45%] right-[18%] -translate-y-1/2 w-64 h-64 rounded-full border-4 border-[#F8B6CE]/35 pointer-events-none" />
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-80 h-80 rounded-full border-4 border-[#7DD3FC]/35 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[380px] lg:min-h-[440px] flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0">
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-[42%] z-20 space-y-4 py-4 lg:py-12">
            <span className="text-[11px] sm:text-xs font-extrabold text-[#0B1F6B] uppercase tracking-wider block">
              THE GLOBAL VITILIGO HUB
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif text-[#0B1F6B] leading-[1.08] tracking-tight">
              See Beyond the Skin
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#1E2A4A] leading-snug">
              Clear information. Expert insights. Practical support.
            </p>

            <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed max-w-md">
              Helping people around the world understand vitiligo and live with greater confidence.
            </p>

            <div className="pt-2">
              <Link
                href="/understand"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-md shadow-[#0B1F6B]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Vitiligo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Center-Right Column: Panoramic People Lineup & Script Quote */}
          <div className="w-full lg:w-[58%] relative h-[280px] sm:h-[350px] lg:h-[420px] flex items-end justify-center lg:justify-end">
            {/* The Authentic Panoramic Lineup Image */}
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-panoramic.jpg"
                alt="Diverse group of smiling people with visible vitiligo and a physician looking upward with hope"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain lg:object-cover object-bottom lg:object-right"
              />
            </div>

            {/* Handwritten Script Quote matching top right placement */}
            <div className="absolute top-2 right-2 sm:right-6 lg:right-10 z-30 pointer-events-none">
              <p className="font-script text-3xl sm:text-4xl lg:text-[42px] text-[#0B1F6B] tracking-wide rotate-[-4deg] drop-shadow-xs">
                &ldquo;Different skin. Same dreams.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
