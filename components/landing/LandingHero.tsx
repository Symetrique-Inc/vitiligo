import React from 'react';
import Image from 'next/image';

export const LandingHero: React.FC = () => {
  return (
    <section className="max-w-[1160px] mx-auto px-4 sm:px-10 py-7 sm:py-16" aria-label="Hero">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-8 sm:gap-14">
        {/* Left Column: Narrative & CTA */}
        <div>
          <div className="text-[11px] tracking-[2px] uppercase font-semibold text-[#0B1F6B] mb-3 sm:mb-4">
            Information. Understanding. Support.
          </div>
          <h1 className="font-serif font-normal text-[#0B1F6B] text-[30px] xs:text-[34px] sm:text-[42px] lg:text-[clamp(40px,4.8vw,64px)] leading-[1.12] -tracking-[1.7px] my-4 sm:my-6">
            Living with vitiligo.<br />
            <em className="not-italic text-[#1D5FE0]">You are not alone.</em>
          </h1>
          <p className="text-[#5B6785] text-sm sm:text-base leading-relaxed max-w-[470px] mb-3">
            Your journey with vitiligo is uniquely yours. Whether you explore treatment, choose camouflage or embrace your skin as it is, your choices deserve respect.
          </p>
          <p className="text-[#5B6785] text-sm sm:text-base leading-relaxed max-w-[470px] mb-5 sm:mb-6">
            Start with what matters to you, at your own pace.
          </p>
          <div>
            <a
              href="#start"
              className="inline-flex items-center gap-6 rounded-[5px] bg-[#0B1F6B] hover:bg-[#07154B] text-white px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <span>Find my starting point</span>
              <span aria-hidden="true">↗</span>
            </a>
            <p className="text-xs text-[#5B6785] mt-2">
              No account needed. Just a place to begin.
            </p>
          </div>
        </div>

        {/* Right Column: Visual with Arch Frame & Centered Subject Group */}
        <div className="relative w-full max-w-[400px] lg:max-w-none mx-auto">
          <div
            className="relative w-full aspect-[4/4.4] max-h-[380px] sm:max-h-[420px] lg:max-h-none overflow-hidden bg-[#EAF2FF] border border-[#DDE5F5] shadow-sm"
            style={{ borderRadius: '48% 48% 8px 8px' }}
          >
            <Image
              src="/images/home-hero.jpg"
              alt="Illustration of a diverse family and young people with vitiligo smiling and looking upward together"
              fill
              priority
              loading="eager"
              sizes="(max-width: 760px) 400px, (max-width: 1024px) 45vw, 500px"
              className="object-cover object-[68%_25%]"
            />
          </div>
          <p className="text-[11px] text-[#5B6785] text-right mt-2.5">
            Every experience is different. There is room for yours.
          </p>
        </div>
      </div>
    </section>
  );
};
