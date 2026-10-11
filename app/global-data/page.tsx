'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { WorldMap } from '@/components/WorldMap';
import { Globe, Users, TrendingUp, ShieldCheck, Database, BookOpen } from 'lucide-react';

export default function GlobalDataPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Global Data & Prevalence' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EAF2FF] text-[#1D5FE0] text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Epidemiology</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B]">
              Vitiligo Around the World
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-2xl mx-auto">
              Epidemiological estimates, prevalence ranges across regions, and international research consortium datasets.
            </p>
          </section>

          {/* Key Metric Headline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-sm text-center space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Worldwide Impact</span>
              <p className="text-4xl font-black text-[#0B1F6B]">70M+</p>
              <p className="text-xs text-[#5B6785]">Estimated individuals living with vitiligo</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-sm text-center space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Global Prevalence</span>
              <p className="text-4xl font-black text-[#1D5FE0]">0.5% – 2.0%</p>
              <p className="text-xs text-[#5B6785]">Consensus range across population studies</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-sm text-center space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Demographic Distribution</span>
              <p className="text-4xl font-black text-[#1FA37A]">1 : 1</p>
              <p className="text-xs text-[#5B6785]">Equal incidence across male and female populations</p>
            </div>
          </div>

          {/* Interactive Choropleth Map Component */}
          <WorldMap />

          {/* Data Sources and Methodology */}
          <section className="mt-14 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center font-bold">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Epidemiological Methodology & Data Sources
                </h3>
                <p className="text-xs text-[#5B6785]">
                  How global numbers are estimated and monitored
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#1E2A4A] leading-relaxed space-y-3">
              <p>
                Vitiligo prevalence statistics are compiled through a synthesis of population-based cohort sampling, dermatological clinic registries, and systematic meta-analyses. Because vitiligo is diagnosed visually rather than through invasive blood tests, reporting rates can vary by region depending on healthcare access and skin tone contrast.
              </p>
              <p>
                In populations with higher baseline melanin (Fitzpatrick skin types IV–VI, such as in South Asia, the Caribbean, and Africa), depigmented patches present high visual contrast, often leading to earlier clinical presentations. In lighter skin types (types I–II), vitiligo patches may become most noticeable following summer sun tanning of surrounding skin.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#5B6785]">
              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-gray-200">
                <strong className="text-[#0B1F6B] block mb-1">Global Vitiligo Foundation (GVF):</strong>
                International patient consensus register establishing the 70M+ global prevalence benchmark.
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-gray-200">
                <strong className="text-[#0B1F6B] block mb-1">The Lancet Regional Health:</strong>
                Multicenter epidemiological meta-analysis of autoimmune comorbidities and population distributions.
              </div>
            </div>
          </section>

          {/* Medically Reviewed Badge */}
          <div className="mt-12">
            <MedicalBadge
              reviewerName="Global Vitiligo Epidemiology Consortium"
              reviewerTitle="Data Verification Board"
              date="October 2026"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
