'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContentReviewStamp } from '@/components/ContentReviewStamp';
import { SourcesBlock } from '@/components/SourcesBlock';
import { StigmaCarousel } from '@/components/StigmaCarousel';
import { regionCards, commonSources } from '@/content/siteContent';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import {
  Stethoscope,
  HeartHandshake,
  CheckCircle2,
  Play,
  ArrowRight,
  Globe2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export default function StigmaAndMisconceptionsPage() {
  const [activeTab, setActiveTab] = useState<string>('p03-s02');
  const [selectedMythId, setSelectedMythId] = useState<number | null>(null);
  const [expandedRegionIndex, setExpandedRegionIndex] = useState<number | null>(null);

  const tabs = [
    { id: 'p03-s02', label: 'Myths vs Facts' },
    { id: 'p03-s03', label: 'Why Stigma Happens' },
    { id: 'p03-s04', label: 'Your Skin, Your Choice' },
    { id: 'p03-s05', label: 'Your Care Team' },
    { id: 'p03-s06', label: 'Real Stories' },
  ];

  const questionChips = [
    { label: 'Is vitiligo contagious?', cardId: 1 },
    { label: 'Is it leprosy?', cardId: 2 },
    { label: 'Is it caused by food?', cardId: 3 },
    { label: 'Is it my fault?', cardId: 4 },
    { label: 'Is it only cosmetic?', cardId: 5 },
    { label: 'Can anyone get it?', cardId: 6 },
  ];

  const handleChipClick = (cardId: number) => {
    setSelectedMythId(cardId);
    const element = document.getElementById('p03-s02');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs
        items={[
          { label: 'Understand Vitiligo', href: '/understand-vitiligo' },
          { label: 'Stigma & Misconceptions' },
        ]}
      />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* P03-S01 — Hero (half height, image right) */}
          <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-6 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-[#E8456B] bg-[#FDE8EE] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Social Understanding & Misconceptions
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] tracking-tight">
                  Stigma & Misconceptions
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#E8456B]">
                  Let&apos;s change the conversation.
                </p>
                <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-xl">
                  Vitiligo changes the skin. It shouldn&apos;t change how the world sees you.
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-md mx-auto shadow-md border-4 border-white">
                  <Image
                    src="/images/card-mylife.jpg"
                    alt="Three smiling friends, one with vitiligo on her face."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Sticky In-page Tab Bar */}
          <nav
            aria-label="In-page section navigation"
            className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border border-[#DDE5F5] rounded-2xl px-3 py-2 mb-10 shadow-sm flex items-center space-x-2 overflow-x-auto no-scrollbar"
          >
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#0B1F6B] text-white shadow-xs'
                    : 'text-[#1E2A4A] hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          {/* P03-S02 — Myths vs Facts Carousel */}
          <section className="py-6 mb-16">
            <StigmaCarousel
              selectedMythId={selectedMythId}
              onSelectMyth={(id) => setSelectedMythId(id)}
            />
          </section>

          {/* P03-S03 — Why stigma happens */}
          <section id="p03-s03" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
                Root Causes & Culture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Why stigma happens
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
                Stigma often grows from questions that never get a clear answer. These are the ones we hear most:
              </p>
            </div>

            {/* 6 Clickable Question Chips linking to myth cards */}
            <div className="flex flex-wrap gap-2 pt-1">
              {questionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipClick(chip.cardId)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#F8FAFF] border border-[#DDE5F5] text-[#0B1F6B] hover:border-[#1D5FE0] hover:bg-[#EAF2FF] transition-all flex items-center space-x-1.5 shadow-2xs group"
                >
                  <span>{chip.label}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#1D5FE0]">→ Card {chip.cardId}</span>
                </button>
              ))}
            </div>

            {/* Beliefs about vitiligo differ across cultures */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B1F6B]">
                Beliefs about vitiligo differ across cultures
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {regionCards.map((rc, idx) => {
                  const isExpanded = expandedRegionIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[#7C5CE0]">
                          <Globe2 className="w-4 h-4" />
                          <h4 className="font-bold text-sm text-[#0B1F6B]">{rc.region}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                          {rc.body}
                        </p>
                        {isExpanded && rc.fullExplanation && (
                          <p className="text-xs text-[#1E2A4A] leading-relaxed pt-2 border-t border-gray-200 animate-fadeIn">
                            {rc.fullExplanation}
                          </p>
                        )}
                      </div>

                      {rc.fullExplanation && (
                        <button
                          onClick={() => setExpandedRegionIndex(isExpanded ? null : idx)}
                          className="inline-flex items-center space-x-1 text-xs font-semibold text-[#1D5FE0] hover:underline self-start pt-2"
                        >
                          <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Large Centred Closing Statement */}
              <div className="py-8 text-center max-w-3xl mx-auto">
                <p className="font-serif font-bold text-xl sm:text-2xl text-[#0B1F6B] leading-snug">
                  &ldquo;Different beliefs. Same need: accurate information without judgment.&rdquo;
                </p>
                <div className="mt-3 text-xs text-[#5B6785] flex items-center justify-center space-x-1.5">
                  <span>Source line: Published studies on cultural beliefs about vitiligo</span>
                  <PlaceholderTag label="Source links to be added" />
                </div>
              </div>
            </div>
          </section>

          {/* P03-S04 — Your skin, your choice (full-width quote band, accent background) */}
          <section id="p03-s04" className="rounded-3xl bg-[#EFEAFF] border border-[#DCD3FC] p-8 sm:p-14 mb-16 text-center space-y-4">
            <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider block">
              Core Principle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
              Your skin, your choice
            </h2>
            <p className="text-sm sm:text-base text-[#5B6785] max-w-2xl mx-auto leading-relaxed">
              How you live with vitiligo is up to you. Some people seek treatment. Some use camouflage. Some choose to show their skin as it is. All of these are valid, and you can change your mind at any time.
            </p>
            <div className="pt-4">
              <p className="font-serif italic font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F6B]">
                &ldquo;Treatment is a choice. Camouflage is a choice. Showing your skin is a choice.&rdquo;
              </p>
            </div>
          </section>

          {/* P03-S05 — Why should I see a dermatologist? & Your Care Team */}
          <section id="p03-s05" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-16 space-y-10">
            <div>
              <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
                Clinical Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Why should I see a dermatologist?
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
                A dermatologist is a doctor who specialises in the skin, hair and nails. If you think you may have vitiligo, a dermatologist can help with four important things.
              </p>
            </div>

            {/* 4 Numbered Cards (2 x 2 grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2">
                <span className="text-xs font-bold text-[#1D5FE0] block">01</span>
                <h3 className="font-bold text-base text-[#0B1F6B]">Get the diagnosis right</h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  Not every light or white patch on the skin is vitiligo. Other conditions, including <em>tinea versicolor</em> (a common fungal skin infection) and <em>post-inflammatory hypopigmentation</em> (lighter skin after inflammation or injury), can also cause loss of skin colour. An accurate diagnosis matters before deciding on any treatment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2">
                <span className="text-xs font-bold text-[#1FA37A] block">02</span>
                <h3 className="font-bold text-base text-[#0B1F6B]">Get a treatment plan made for you</h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  There are several treatment options for vitiligo. A dermatologist can build a plan around your needs, and sometimes this means using more than one treatment together in a specific way. Your goals may include restoring lost skin colour, preventing new areas of colour loss, or dealing with specific symptoms.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2">
                <span className="text-xs font-bold text-[#7C5CE0] block">03</span>
                <h3 className="font-bold text-base text-[#0B1F6B]">Talk about what matters to you</h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  Not everyone wants to restore their skin colour. You might prefer to treat the condition, camouflage lighter areas, leave the affected skin as it is, or focus on managing discomfort. A good dermatologist will respect your choice.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2">
                <span className="text-xs font-bold text-[#F2884B] block">04</span>
                <h3 className="font-bold text-base text-[#0B1F6B]">Keep an eye on related conditions</h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  A dermatologist can also watch for signs of another autoimmune disease. If it affects the skin, hair or nails, they can diagnose and treat it. If another part of the body is affected, they can refer you to the right specialist.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-gray-100 gap-4">
              <Link
                href="/find-a-doctor"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#1FA37A] text-white hover:bg-[#188563] shadow-xs transition-colors self-start"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Find a dermatologist near you →</span>
              </Link>
              <span className="text-xs text-[#5B6785]">Source: AAD</span>
            </div>

            {/* Your Care Team block from DOC B */}
            <div className="pt-8 border-t border-gray-100 space-y-5">
              <div>
                <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                  Multidisciplinary Support
                </span>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B] mt-1">
                  Your Care Team
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
                  Managing vitiligo is not just about one doctor. Your care team may include:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA]">
                  <h4 className="font-bold text-sm text-[#0B1F6B]">Dermatologist</h4>
                  <p className="text-xs text-[#5B6785] mt-1">
                    Your primary specialist for diagnosis, treatment and skin monitoring.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC]">
                  <h4 className="font-bold text-sm text-[#0B1F6B]">General practitioner (GP)</h4>
                  <p className="text-xs text-[#5B6785] mt-1">
                    Coordinates overall health, refers to specialists and monitors for related conditions like thyroid disease.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7]">
                  <h4 className="font-bold text-sm text-[#0B1F6B]">Psychologist or counsellor</h4>
                  <p className="text-xs text-[#5B6785] mt-1">
                    Supports emotional wellbeing, helps manage anxiety, depression or self-esteem issues.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#FFEDE3] border border-[#FEDDC7]">
                  <h4 className="font-bold text-sm text-[#0B1F6B]">Pharmacist</h4>
                  <p className="text-xs text-[#5B6785] mt-1">
                    Advises on medications, topical treatments and sun-protection products.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] text-xs sm:text-sm text-[#1E2A4A] leading-relaxed">
                <strong>You are the most important member of your care team.</strong> Your observations about how vitiligo is changing, what triggers flare-ups and how treatment feels help your doctors make the best decisions for you.
              </div>
            </div>
          </section>

          {/* P03-S06 — Real people. Real stories. */}
          <section id="p03-s06" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                Community Voices
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Real people. Real stories.
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
                Watch how others have faced stigma, found support and made their own choices about vitiligo.
              </p>
            </div>

            {/* Video Thumbnail Placeholder Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="rounded-2xl border border-dashed border-[#DDE5F5] bg-[#F8FAFF] p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[200px]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1F6B]">Patient Story #{num}</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Consented patient video with captions in English &amp; Hindi
                    </p>
                    <PlaceholderTag label="Video Pending" />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/living-with-vitiligo#stories"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[#1D5FE0] hover:underline"
              >
                <span>Watch stories →</span>
                <PlaceholderTag label="Link to Stories" />
              </Link>
            </div>
          </section>

          {/* G4 Review Stamp */}
          <ContentReviewStamp />

          {/* G5 Sources */}
          <SourcesBlock sources={commonSources.p03} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
