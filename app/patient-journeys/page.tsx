'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { StoryFilterGrid } from '@/components/StoryFilterGrid';
import { Sparkles, Heart } from 'lucide-react';

export default function PatientJourneysPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Patient Journeys' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EFEAFF] text-[#7C5CE0] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>You Are Not Alone</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B]">
              Real Journeys. Shared Strength.
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed">
              Every patch has a story. Explore filterable first-person videos, quotes, and advice from individuals and families navigating vitiligo across the world.
            </p>
          </section>

          {/* Filterable Story Grid */}
          <StoryFilterGrid />

          {/* Signature Quote Banner */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-[#EFEAFF] border border-[#DCD3FC]">
            <p className="font-script text-3xl sm:text-4xl text-[#0B1F6B]">
              &ldquo;Different skin. Same dreams.&rdquo;
            </p>
            <p className="text-xs text-[#7C5CE0] font-semibold mt-2 uppercase tracking-wider">
              OneVitiligo Global Community
            </p>
          </div>

          {/* Medically Reviewed Badge */}
          <div className="mt-12">
            <MedicalBadge
              reviewerName="Patient Advisory Board & Dr. Rashmi Sharma, MD"
              reviewerTitle="Patient Advocacy Panel"
              date="October 2026"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
