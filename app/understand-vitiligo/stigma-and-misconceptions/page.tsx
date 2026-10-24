'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { StigmaCarousel } from '@/components/StigmaCarousel';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import { Play } from 'lucide-react';

export default function StigmaAndMisconceptionsPage() {
  const [activeTab, setActiveTab] = useState<string>('p03-s02');
  const [selectedMythId, setSelectedMythId] = useState<number | null>(null);

  const tabs = [
    { id: 'p03-s02', label: 'Myths and Facts' },
    { id: 'p03-s04', label: 'Your Skin, Your Choice' },
    { id: 'p03-s06', label: 'Real Stories' },
  ];

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
                <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-4xl">
                  Vitiligo changes the skin. It shouldn&apos;t change how the world sees you. Stigma often grows from questions that never get a clear answer.
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

          {/* Sticky In-page Tab Bar: 3 Sub-sections */}
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

          {/* Sub-section 1: Myths and Facts Carousel */}
          <section id="p03-s02" className="py-2 mb-16 scroll-mt-32">
            <StigmaCarousel
              selectedMythId={selectedMythId}
              onSelectMyth={(id) => setSelectedMythId(id)}
            />
          </section>

          {/* Sub-section 2: Your Skin, Your Choice (One unified section) */}
          <section id="p03-s04" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-16 space-y-10 scroll-mt-32">
            
            {/* <div className="rounded-3xl bg-[#EFEAFF] border border-[#DCD3FC] p-8 sm:p-12 text-center space-y-3">
              <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider block">
                Core Principle
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                Your skin, your choice
              </h2>
              <p className="text-sm sm:text-base text-[#5B6785] max-w-2xl mx-auto leading-relaxed">
                How you live with vitiligo is up to you. Some people seek treatment. Some use camouflage. Some choose to show their skin as it is. All of these are valid, and you can change your mind at any time.
              </p>
              <div className="pt-3">
                <p className="font-serif italic font-bold text-xl sm:text-2xl lg:text-3xl text-[#0B1F6B]">
                  &ldquo;Treatment is a choice. Camouflage is a choice. Showing your skin is a choice.&rdquo;
                </p>
              </div>
            </div> */}

            {/* 4 Pillars of Medical Guidance */}
            <div className="space-y-4">
              <div className="max-w-3xl">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F6B]">
                  Why should I see a dermatologist?
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] mt-1 leading-relaxed">
                  A dermatologist is a doctor who specialises in the skin, hair and nails. If you think you may have vitiligo, an expert consultation helps inform your choices through four essential pillars:
                </p>
              </div>

              {/* 4 Numbered Cards (2 x 2 grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2 hover:border-[#1D5FE0] transition-colors">
                  <span className="text-xs font-bold text-[#1D5FE0] block">01</span>
                  <h4 className="font-bold text-base text-[#0B1F6B]">Get the diagnosis right</h4>
                  <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                    Not every light or white patch on the skin is vitiligo. Other conditions, including <em>tinea versicolor</em> (a common fungal skin infection) and <em>post-inflammatory hypopigmentation</em> (lighter skin after inflammation or injury), can also cause loss of skin colour. An accurate diagnosis matters before deciding on any treatment.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2 hover:border-[#1FA37A] transition-colors">
                  <span className="text-xs font-bold text-[#1FA37A] block">02</span>
                  <h4 className="font-bold text-base text-[#0B1F6B]">Get a treatment plan made for you</h4>
                  <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                    There are several treatment options for vitiligo. A dermatologist can build a plan around your needs, and sometimes this means using more than one treatment together in a specific way. Your goals may include restoring lost skin colour, preventing new areas of colour loss, or dealing with specific symptoms.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2 hover:border-[#7C5CE0] transition-colors">
                  <span className="text-xs font-bold text-[#7C5CE0] block">03</span>
                  <h4 className="font-bold text-base text-[#0B1F6B]">Talk about what matters to you</h4>
                  <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                    Not everyone wants to restore their skin colour. You might prefer to treat the condition, camouflage lighter areas, leave the affected skin as it is, or focus on managing discomfort. A good dermatologist will respect your choice.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-2 hover:border-[#F2884B] transition-colors">
                  <span className="text-xs font-bold text-[#F2884B] block">04</span>
                  <h4 className="font-bold text-base text-[#0B1F6B]">Keep an eye on related conditions</h4>
                  <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                    A dermatologist can also watch for signs of another autoimmune disease. If it affects the skin, hair or nails, they can diagnose and treat it. If another part of the body is affected, they can refer you to the right specialist.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sub-section 3: Real Stories */}
          <section id="p03-s06" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-6 scroll-mt-32">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
