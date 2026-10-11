'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AudienceCards } from '@/components/AudienceCards';
import { FiveSectionCards } from '@/components/FiveSectionCards';
import { TwoPerspectives } from '@/components/TwoPerspectives';
import { AskChatbot } from '@/components/AskChatbot';
import { Footer } from '@/components/Footer';
import { MedicalBadge } from '@/components/MedicalBadge';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* 1. Sticky Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Top Hero Section with Panoramic Diverse Group Image and Script Quote */}
        <Hero />

        {/* 3. Audience Chooser Row ("How can we help you today?" 4 Cards) */}
        <AudienceCards />

        {/* 4. The 5 Main Section Landing Cards Side-by-Side (Matching Mockup exactly) */}
        <FiveSectionCards />

        {/* 5. Two Perspectives. One Condition. (Patient vs Doctor) */}
        <TwoPerspectives />

        {/* 6. Anonymous Question Chatbot & Weekly Reviewed Answers */}
        <AskChatbot />

        {/* 7. Global Medical Review Badge */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalBadge
            reviewerName="Dr. Rashmi Sharma, MD & Dr. Marcus Vance, MD, FAAD"
            reviewerTitle="Vitiligo Hub Global Advisory Panel"
            date="October 2026"
          />
        </div>
      </main>

      {/* 8. Global Footer */}
      <Footer />
    </div>
  );
}
