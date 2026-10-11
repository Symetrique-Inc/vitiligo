'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { VideoModal } from '@/components/VideoModal';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-[#D5E2FA] text-xs font-semibold text-[#1D5FE0] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#1D5FE0]" />
                <span>{t.hero.eyebrow}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0B1F6B] leading-[1.12] tracking-tight">
                  {t.hero.title}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#1D5FE0]">
                  {t.hero.subtitle}
                </p>
                <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-xl">
                  {t.hero.lead}
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/understand"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-lg shadow-[#0B1F6B]/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{t.hero.ctaPrimary}</span>
                </Link>

                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#EFEAFF] text-[#7C5CE0] hover:bg-[#7C5CE0] hover:text-white border border-[#DCD3FC] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{t.hero.ctaSecondary}</span>
                </button>
              </div>

              {/* Reassurance pill */}
              <div className="pt-2 text-xs text-[#5B6785] flex items-center space-x-4">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1FA37A]" />
                  <span>Grade 8 clear language</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1D5FE0]" />
                  <span>Non-judgmental & free</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F2884B]" />
                  <span>Dermatologist verified</span>
                </span>
              </div>
            </div>

            {/* Right Visual Column (Group portrait matching mockups with handwritten script badge) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Handwritten script quote floating as a warm sticker badge */}
                <div className="absolute -top-6 -right-2 sm:-right-6 z-20 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-4 border border-[#DDE5F5] rotate-3 hover:rotate-0 transition-transform duration-300">
                  <p className="font-script text-2xl sm:text-3xl text-[#0B1F6B] leading-none whitespace-nowrap">
                    &ldquo;{t.brand.quoteScript}&rdquo;
                  </p>
                  <p className="text-[10px] text-[#7C5CE0] font-semibold text-right mt-1 tracking-wider uppercase">
                    Vitiligo Community
                  </p>
                </div>

                {/* Illustrated Portrait Grid displaying diverse smiling people with visible vitiligo + doctor */}
                <div className="rounded-3xl bg-gradient-to-tr from-[#EAF2FF] via-[#EFEAFF] to-[#FFF0F4] p-4 sm:p-6 shadow-2xl border border-white/80">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Person 1: Warm smiling young woman with subtle vitiligo pattern */}
                    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-md border border-[#DDE5F5] p-3 text-center">
                      <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#F2D7C9] border-4 border-white shadow-inner flex items-center justify-center">
                        {/* Artistic SVG Face representation with authentic visible patches */}
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect width="100" height="100" fill="#DEB887" />
                          {/* Vitiligo depigmented natural patch on forehead and eyelid */}
                          <path d="M 45 15 Q 65 10 75 35 Q 85 45 68 55 Q 50 50 45 35 Z" fill="#F8F0E5" opacity="0.95" />
                          {/* Face details */}
                          <circle cx="38" cy="46" r="3.5" fill="#3D2314" />
                          <circle cx="64" cy="46" r="3.5" fill="#3D2314" />
                          <path d="M 46 62 Q 52 70 58 62" stroke="#B84A39" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          {/* Hair */}
                          <path d="M 20 40 Q 25 10 50 10 Q 75 10 80 40 Q 85 20 50 5 Q 15 20 20 40 Z" fill="#2E1A0C" />
                        </svg>
                      </div>
                      <p className="mt-2 text-xs font-bold text-[#0B1F6B]">Maya, 28</p>
                      <p className="text-[11px] text-[#5B6785]">Tech Lead &bull; UK/India</p>
                      <span className="inline-block mt-1 text-[10px] bg-[#EAF2FF] text-[#1D5FE0] font-medium px-2 py-0.5 rounded-full">
                        Confidence
                      </span>
                    </div>

                    {/* Person 2: Warm smiling young man with vitiligo */}
                    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-md border border-[#DDE5F5] p-3 text-center">
                      <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#8D5524] border-4 border-white shadow-inner flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect width="100" height="100" fill="#7A4B26" />
                          {/* Vitiligo depigmented pattern over cheek and temple */}
                          <path d="M 18 30 Q 35 25 45 45 Q 40 65 25 60 Q 15 50 18 30 Z" fill="#E8DCD0" opacity="0.95" />
                          <circle cx="36" cy="45" r="3.5" fill="#1C1108" />
                          <circle cx="64" cy="45" r="3.5" fill="#1C1108" />
                          <path d="M 44 64 Q 50 72 58 64" stroke="#FFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          <path d="M 20 30 Q 50 10 80 30" stroke="#1A1108" strokeWidth="12" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="mt-2 text-xs font-bold text-[#0B1F6B]">David, 34</p>
                      <p className="text-[11px] text-[#5B6785]">Biology Teacher &bull; Nigeria</p>
                      <span className="inline-block mt-1 text-[10px] bg-[#EFEAFF] text-[#7C5CE0] font-medium px-2 py-0.5 rounded-full">
                        Community
                      </span>
                    </div>

                    {/* Person 3: Smiling child / teen with vitiligo */}
                    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-md border border-[#DDE5F5] p-3 text-center">
                      <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#FCD7B6] border-4 border-white shadow-inner flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect width="100" height="100" fill="#F0C39E" />
                          {/* Butterfly / bilateral patch on forehead */}
                          <path d="M 35 20 Q 50 28 65 20 Q 58 38 48 34 Q 38 38 35 20 Z" fill="#FFF5ED" opacity="0.95" />
                          <circle cx="38" cy="48" r="3" fill="#3D2314" />
                          <circle cx="62" cy="48" r="3" fill="#3D2314" />
                          <path d="M 44 65 Q 50 72 56 65" stroke="#C25946" strokeWidth="2" fill="none" strokeLinecap="round" />
                          <path d="M 25 35 Q 50 12 75 35" stroke="#4A2F1B" strokeWidth="10" fill="none" />
                        </svg>
                      </div>
                      <p className="mt-2 text-xs font-bold text-[#0B1F6B]">Kabir, 8</p>
                      <p className="text-[11px] text-[#5B6785]">School &bull; India</p>
                      <span className="inline-block mt-1 text-[10px] bg-[#E3F6EF] text-[#1FA37A] font-medium px-2 py-0.5 rounded-full">
                        Youth
                      </span>
                    </div>

                    {/* Person 4: Certified Dermatologist in white coat with stethoscope */}
                    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-md border border-[#DDE5F5] p-3 text-center">
                      <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#D4E4FC] border-4 border-white shadow-inner flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect width="100" height="100" fill="#E8EFF8" />
                          {/* Face */}
                          <circle cx="50" cy="44" r="24" fill="#E4BA96" />
                          <circle cx="42" cy="42" r="3" fill="#1A1108" />
                          <circle cx="58" cy="42" r="3" fill="#1A1108" />
                          {/* Glasses */}
                          <rect x="36" y="37" width="12" height="10" rx="3" fill="none" stroke="#0B1F6B" strokeWidth="1.5" />
                          <rect x="52" y="37" width="12" height="10" rx="3" fill="none" stroke="#0B1F6B" strokeWidth="1.5" />
                          <line x1="48" y1="42" x2="52" y2="42" stroke="#0B1F6B" strokeWidth="1.5" />
                          <path d="M 45 56 Q 50 60 55 56" stroke="#8A422D" strokeWidth="2" fill="none" />
                          {/* White Doctor Coat */}
                          <path d="M 20 80 L 35 68 L 50 82 L 65 68 L 80 80 L 80 100 L 20 100 Z" fill="#FFFFFF" />
                          {/* Stethoscope */}
                          <path d="M 36 72 Q 40 92 50 92 Q 60 92 64 72" fill="none" stroke="#1D5FE0" strokeWidth="2" />
                          <circle cx="50" cy="93" r="3" fill="#0B1F6B" />
                        </svg>
                      </div>
                      <p className="mt-2 text-xs font-bold text-[#0B1F6B]">Dr. Marcus, MD</p>
                      <p className="text-[11px] text-[#5B6785]">Dermatologist &bull; FAAD</p>
                      <span className="inline-block mt-1 text-[10px] bg-[#FFEDE3] text-[#F2884B] font-medium px-2 py-0.5 rounded-full">
                        Care Team
                      </span>
                    </div>
                  </div>

                  {/* Caption underneath group portrait */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#5B6785]">
                    <span className="flex items-center space-x-1">
                      <span className="font-semibold text-[#0B1F6B]">Real Journeys.</span>
                      <span>Real Science.</span>
                    </span>
                    <Link
                      href="/patient-journeys"
                      className="text-[#1D5FE0] font-semibold hover:underline flex items-center"
                    >
                      <span>Explore all stories</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
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
        title="See Beyond the Skin — Our Global Mission"
        speaker="Vitiligo Hub Global Community & Medical Panel"
        role="Community Documentary"
        duration="3:45 min"
        transcript="Welcome to Vitiligo Hub. Around the globe, over 70 million individuals live with vitiligo. It is an autoimmune condition where melanocytes are mistakenly targeted by the body's immune system. But beyond biology, living with vitiligo involves human hearts, social relationships, choices, and dignity. Remember: Treatment is a choice. Camouflage is a choice. Showing your skin is a choice. You are never alone."
      />
    </>
  );
};
