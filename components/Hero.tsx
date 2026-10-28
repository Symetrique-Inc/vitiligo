'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-3 pb-2" aria-label="Hero">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Unified Combined Hero Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E4DCF5] bg-[#F5F1FD] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px] lg:min-h-[480px]">
            
            {/* Left Content Portion (Larger: 7 cols / ~58%) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center items-center text-center z-10">
              
              {/* Top Label */}
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#5E4D9A] uppercase mb-3 sm:mb-4">
                OneVitiligo
              </span>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold font-serif text-[#1F1749] leading-tight tracking-tight mb-3">
                Your Skin. Your Choice.
              </h1>

              {/* Italic Empathy Subtitle */}
              <p className="text-base sm:text-lg lg:text-[19px] italic font-serif text-[#392E69] leading-snug mb-3.5 sm:mb-4 max-w-xl">
                Treatment is a choice. Camouflage is a choice. Showing your skin is a choice.
              </p>

              {/* Narrative Paragraph */}
              <p className="text-sm sm:text-base text-[#574F72] leading-relaxed max-w-lg mb-6 sm:mb-7">
                Your journey with vitiligo is uniquely yours. Whether you explore treatment, choose camouflage or embrace your skin as it is, your choices deserve respect.
              </p>

              {/* Action Area: Button + Slogan below */}
              <div className="flex flex-col items-center">
                <Link
                  href="/understand-vitiligo"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#433275] hover:bg-[#342460] text-white text-sm sm:text-base font-semibold shadow-md shadow-[#433275]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore Vitiligo
                </Link>

                <span className="text-xs sm:text-[13px] text-[#676180] font-normal mt-3">
                  Different skin. Same dreams.
                </span>
              </div>

            </div>

            {/* Right Photo Portion (5 cols / ~42%) */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[400px] lg:min-h-full h-full w-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[#E4DCF5]/70">
              <Image
                src="/images/home-hero.jpg"
                alt="Diverse group of smiling people with vitiligo standing proudly"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_right] sm:object-right"
              />

              {/* Overlaid Handwritten Script Quote */}
              <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20 pointer-events-none">
                <p className="font-script text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] text-[#1B3B86] drop-shadow-xs rotate-[-1.5deg] leading-tight">
                  &ldquo;Different skin. Same dreams.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
