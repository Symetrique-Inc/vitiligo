'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AudienceCards } from '@/components/AudienceCards';
import { TopicTiles } from '@/components/TopicTiles';
import { StarterQuiz } from '@/components/StarterQuiz';
import { StatBanner } from '@/components/StatBanner';
import { TwoPerspectives } from '@/components/TwoPerspectives';
import { AskChatbot } from '@/components/AskChatbot';
import { QuickHelpIcons } from '@/components/QuickHelpIcons';
import { Footer } from '@/components/Footer';
import { MedicalBadge } from '@/components/MedicalBadge';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Sticky Header */}
      <Header />

      <main className="flex-1">
        {/* Top Hero Section */}
        <Hero />

        {/* Audience Chooser Row ("How can we help you today?") */}
        <AudienceCards />

        {/* Section Navigation & Subtopic Explorer */}
        <TopicTiles />

        {/* 3-Question "Not sure where to start?" Quiz */}
        <StarterQuiz />

        {/* Global 70M+ Prevalence Banner */}
        <StatBanner />

        {/* Two Perspectives. One Condition. (Patient vs Doctor) */}
        <TwoPerspectives />

        {/* Anonymous Question Chatbot & Weekly Reviewed Q&A */}
        <AskChatbot />

        {/* Quick Resource Access Icons */}
        <QuickHelpIcons />

        {/* Global Medical Badge */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalBadge
            reviewerName="Dr. Rashmi Sharma, MD & Dr. Marcus Vance, MD, FAAD"
            reviewerTitle="Vitiligo Hub Global Advisory Panel"
            date="October 2026"
          />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
