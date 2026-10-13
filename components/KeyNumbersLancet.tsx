'use client';

import React from 'react';
import { Users, BarChart3, Globe, BookOpen } from 'lucide-react';

export const KeyNumbersLancet: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm space-y-8" id="key-numbers">
      <div>
        <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
          Epidemiology
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
          Key numbers
        </h2>
        <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
          Evidence from global epidemiological research.
        </p>
      </div>

      {/* 3 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#1D5FE0]">
            <span className="text-xs font-bold uppercase tracking-wider">Global Prevalence</span>
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B1F6B] tracking-tight">
              28.5M
            </div>
            <p className="text-xs font-semibold text-[#1D5FE0] mt-1">
              0.36% Global Lifetime Prevalence
            </p>
          </div>
          <p className="text-xs text-[#5B6785] leading-relaxed">
            Estimated from a 2024 systematic review covering 90 international studies in <em>The Lancet Public Health</em>.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#7C5CE0]">
            <span className="text-xs font-bold uppercase tracking-wider">Adults</span>
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B1F6B] tracking-tight">
              37.1M
            </div>
            <p className="text-xs font-semibold text-[#7C5CE0] mt-1">
              0.67% Adult Lifetime Prevalence
            </p>
          </div>
          <p className="text-xs text-[#5B6785] leading-relaxed">
            Adult lifetime prevalence accounts for approximately 37.1 million adults globally.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#1FA37A]">
            <span className="text-xs font-bold uppercase tracking-wider">Children</span>
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B1F6B] tracking-tight">
              5.8M
            </div>
            <p className="text-xs font-semibold text-[#1FA37A] mt-1">
              0.24% Child Lifetime Prevalence
            </p>
          </div>
          <p className="text-xs text-[#5B6785] leading-relaxed">
            Child lifetime prevalence represents approximately 5.8 million children worldwide.
          </p>
        </div>
      </div>

      {/* Stylized World Map Visual highlighting South Asia & Central Europe */}
      <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-[#1D5FE0]" />
            <h4 className="font-bold text-sm text-[#0B1F6B]">
              Regional Distribution Highlights
            </h4>
          </div>
          <span className="text-xs font-semibold text-[#1D5FE0] bg-[#EAF2FF] px-2.5 py-1 rounded-full self-start sm:self-auto">
            Highest general-population estimates: ~0.52%
          </span>
        </div>

        <div className="relative h-44 sm:h-52 w-full bg-gradient-to-b from-[#F0F5FF] to-[#FAF8FF] rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center p-4">
          <svg viewBox="0 0 900 450" className="w-full h-full opacity-60">
            {/* World continents outline */}
            <path d="M 120 80 Q 220 70 260 120 Q 230 180 180 220 Q 150 200 120 150 Z" fill="#C5D9F8" />
            <path d="M 220 240 Q 280 250 290 320 Q 260 410 220 440 Q 190 350 200 280 Z" fill="#D2C7F7" />
            <path d="M 420 80 Q 520 70 540 140 Q 480 170 420 150 Z" fill="#93C5FD" stroke="#1D5FE0" strokeWidth="2" />
            <path d="M 410 180 Q 520 180 540 260 Q 500 380 440 390 Q 380 280 410 180 Z" fill="#F7D4DF" />
            <path d="M 540 90 Q 750 80 780 210 Q 680 320 570 240 Q 540 160 540 90 Z" fill="#FEDFCB" stroke="#F2884B" strokeWidth="2" />
            <path d="M 720 320 Q 820 310 830 380 Q 770 420 710 390 Z" fill="#D2EFE4" />

            {/* Glowing highlight markers on Central Europe and South Asia */}
            <circle cx="470" cy="110" r="10" fill="#1D5FE0" fillOpacity="0.3" className="animate-ping" />
            <circle cx="470" cy="110" r="5" fill="#1D5FE0" />
            <circle cx="610" cy="200" r="12" fill="#F2884B" fillOpacity="0.3" className="animate-ping" />
            <circle cx="610" cy="200" r="6" fill="#F2884B" />
          </svg>

          <div className="absolute bottom-3 left-4 text-[11px] text-[#5B6785] bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
            Highlighted: South Asia & Central Europe (~0.52% general population)
          </div>
        </div>

        {/* Bullet facts */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1E2A4A] list-disc list-inside pt-1">
          <li>South Asia and Central Europe have among the highest general-population estimates, each at approximately 0.52%.</li>
          <li>It can begin at any age; about half of cases appear before the age of 20.</li>
          <li>It affects men and women equally, and occurs in people of every skin tone.</li>
          <li>It is the most common depigmenting disorder in the world.</li>
        </ul>
      </div>

      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-[#5B6785]">
        <div className="flex items-center space-x-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#1D5FE0]" />
          <span>Source: Akl et al., <em>The Lancet Public Health</em>, 2024.</span>
        </div>
      </div>
    </div>
  );
};
