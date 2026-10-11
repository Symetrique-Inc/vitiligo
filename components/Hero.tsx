'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { VideoModal } from '@/components/VideoModal';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#DDE5F5] shadow-xl relative overflow-hidden">
            {/* Background decorative soft pastel circular glow */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#1D5FE0]/15 via-[#7C5CE0]/15 to-[#38BDF8]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Typography & CTAs */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#D5E2FA] text-[11px] font-bold text-[#0B1F6B] tracking-wider uppercase">
                  <span>{t.hero.eyebrow}</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-serif text-[#0B1F6B] leading-[1.12] tracking-tight">
                    {t.hero.title}
                  </h1>
                  <p className="text-base sm:text-lg font-medium text-[#1E2A4A]">
                    {t.hero.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-[#5B6785] leading-relaxed max-w-lg">
                    {t.hero.lead}
                  </p>
                </div>

                {/* Primary CTA button matching mockup */}
                <div className="pt-2 flex items-center space-x-4">
                  <Link
                    href="/understand"
                    className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-lg shadow-[#0B1F6B]/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{t.hero.ctaPrimary}</span>
                  </Link>

                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="text-xs font-semibold text-[#7C5CE0] hover:text-[#0B1F6B] underline underline-offset-4 transition-colors"
                  >
                    Watch introductory video
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Banner Image & Script Quote */}
              <div className="lg:col-span-7 relative">
                {/* Handwritten Script Quote matching mockup placement */}
                <div className="absolute -top-4 right-4 sm:right-8 z-20 pointer-events-none">
                  <p className="font-script text-3xl sm:text-4xl text-[#0B1F6B] tracking-wide rotate-[-6deg] drop-shadow-xs">
                    &ldquo;Different skin. Same dreams.&rdquo;
                  </p>
                </div>

                {/* Hero Panoramic Image with subtle rounded crop and soft border */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 aspect-[16/9] w-full">
                  <Image
                    src="/images/hero-group.jpg"
                    alt="Diverse group of smiling people with visible vitiligo of various skin tones and a doctor in white coat with stethoscope looking up towards the light"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle inner gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F6B]/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="See Beyond the Skin — Global Mission"
        speaker="Vitiligo Hub Global Community & Medical Panel"
        role="Community Documentary"
        duration="3:45 min"
        transcript="Welcome to Vitiligo Hub. Around the globe, over 70 million individuals live with vitiligo. It is an autoimmune condition where melanocytes are mistakenly targeted by the body's immune system. But beyond biology, living with vitiligo involves human hearts, social relationships, choices, and dignity. Remember: Treatment is a choice. Camouflage is a choice. Showing your skin is a choice. You are never alone."
      />
    </>
  );
};
