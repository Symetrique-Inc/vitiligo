'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export const StatBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-14 relative" aria-labelledby="stat-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1F6B] via-[#142B7E] to-[#1D5FE0] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background world map dots / circles graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-15 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 800 450" className="w-full h-full text-white fill-current">
              {/* World outline dots */}
              <circle cx="200" cy="180" r="16" />
              <circle cx="240" cy="190" r="22" />
              <circle cx="260" cy="220" r="18" />
              <circle cx="230" cy="250" r="14" />
              {/* South America */}
              <circle cx="280" cy="310" r="20" />
              <circle cx="290" cy="350" r="24" />
              {/* Europe & Africa */}
              <circle cx="430" cy="170" r="20" />
              <circle cx="460" cy="180" r="18" />
              <circle cx="440" cy="250" r="28" />
              <circle cx="460" cy="300" r="26" />
              {/* Asia & India */}
              <circle cx="560" cy="180" r="30" />
              <circle cx="550" cy="230" r="26" />
              <circle cx="610" cy="210" r="28" />
              <circle cx="640" cy="250" r="22" />
              {/* Australia */}
              <circle cx="670" cy="340" r="22" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-blue-200 uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Epidemiological Data</span>
              </div>

              <h2 id="stat-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
                {t.stats.headline}
              </h2>

              <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                Vitiligo knows no geographical, racial, or cultural borders. It affects children, women, and men worldwide with consistent biological prevalence.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight">
                    {t.stats.number}
                  </span>
                  <span className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
                    {t.stats.numberLabel}
                  </span>
                </div>

                <div className="h-8 w-px bg-white/20 hidden sm:block" />

                <div className="flex items-center space-x-2 text-xs text-blue-100">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>0.5% – 2.0% Estimated Prevalence</span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-blue-100">
                  <TrendingUp className="w-4 h-4 text-pink-400" />
                  <span>Equal incidence across all genders</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                href="/global-data"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#0B1F6B] hover:bg-blue-50 shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.stats.explore}</span>
                <ArrowRight className="w-4 h-4 text-[#1D5FE0]" />
              </Link>
              <p className="text-[11px] text-blue-200 mt-2 italic">
                Data sources: WHO, Global Vitiligo Foundation, Lancet Regional Health
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
