'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { WorldMap } from '@/components/WorldMap';
import { Globe, Users, TrendingUp, ShieldCheck, Database, BookOpen } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function GlobalDataPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: t('Global Data & Prevalence') }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EAF2FF] text-[#1D5FE0] text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>{t('Global Epidemiology')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B]">
              {t('Vitiligo Around the World')}
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-2xl mx-auto">
              {t('Epidemiological estimates, prevalence ranges across regions, and international research consortium datasets.')}
            </p>
          </section>

          {/* Key Metric Headline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-sm text-center space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('Worldwide Impact')}</span>
              <p className="text-4xl font-black text-[#0B1F6B]">70M+</p>
              <p className="text-xs text-[#5B6785]">{t('Estimated individuals living with vitiligo')}</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-sm text-center space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('Global Prevalence')}</span>
              <p className="text-4xl font-black text-[#1D5FE0]">0.5% – 2.0%</p>
              <p className="text-xs text-[#5B6785]">{t('Consensus range across population studies')}</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-sm text-center space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('Demographic Distribution')}</span>
              <p className="text-4xl font-black text-[#1FA37A]">1 : 1</p>
              <p className="text-xs text-[#5B6785]">{t('Equal incidence across male and female populations')}</p>
            </div>
          </div>

          {/* Interactive Choropleth Map Component */}
          <WorldMap />

          {/* Data Sources and Methodology */}
          <section className="mt-14 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex items-center space-x-3">
              <Database className="w-6 h-6 text-[#1D5FE0]" />
              <h2 className="text-2xl font-bold font-serif text-[#0B1F6B]">
                {t('Methodology & Sources')}
              </h2>
            </div>
            <p className="text-sm text-[#5B6785] leading-relaxed">
              {t('Prevalence statistics reflect peer-reviewed meta-analyses, registry data from the Global Vitiligo Foundation, and published regional epidemiological studies. Variations reflect diagnostic methodology, cutaneous phototype distribution, and reporting mechanisms across healthcare jurisdictions.')}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
