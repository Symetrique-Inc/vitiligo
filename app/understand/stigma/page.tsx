'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { MythsFactsCarousel } from '@/components/MythsFactsCarousel';
import { CulturalBeliefs } from '@/components/CulturalBeliefs';
import { Sparkles, Heart, Shield, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StigmaPage() {
  const [activeTab, setActiveTab] = useState<'myths' | 'why' | 'impact' | 'stories' | 'action'>('myths');

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs
        items={[
          { label: 'Understand Vitiligo', href: '/understand' },
          { label: 'Stigma & Misconceptions' },
        ]}
      />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Banner (matching Page 4 mockups) */}
          <section className="py-10 sm:py-14 text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FDE8EE] text-[#E8456B] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Change the Conversation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0B1F6B] leading-tight">
              Vitiligo changes the skin.
              <span className="block text-[#1D5FE0] mt-1">
                It shouldn&apos;t change how the world sees you.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-2xl mx-auto">
              Misinformation breeds fear. Science brings understanding. Explore the evidence and help build an empathetic society.
            </p>
          </section>

          {/* Subnav Tabs matching Page 4 mockups */}
          <div className="flex items-center justify-start md:justify-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: 'myths', label: 'Myths vs Facts' },
              { id: 'why', label: 'Why Stigma Happens' },
              { id: 'impact', label: 'Impact on Life' },
              { id: 'stories', label: 'Real Stories' },
              { id: 'action', label: 'What You Can Do' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 border ${
                  activeTab === tab.id
                    ? 'bg-[#0B1F6B] text-white border-[#0B1F6B] shadow-md'
                    : 'bg-white text-[#5B6785] border-[#DDE5F5] hover:bg-[#F4F8FF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Myths vs Facts Interactive Carousel */}
          {activeTab === 'myths' && (
            <div className="animate-fadeIn">
              <MythsFactsCarousel />
              <CulturalBeliefs />
            </div>
          )}

          {/* Tab 2: Why Stigma Happens */}
          {activeTab === 'why' && (
            <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-12 shadow-lg space-y-6 max-w-4xl mx-auto animate-fadeIn">
              <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
                Root Causes of Stigma
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                Why Stigma Happens: Fear of the Unknown
              </h2>
              <div className="text-sm text-[#1E2A4A] leading-relaxed space-y-4">
                <p>
                  Across anthropological studies, stigmatization of visible skin disorders roots primarily in two ancient psychological biases: <strong>the fear of contagion</strong> (evolutionary pathogen avoidance) and <strong>moral causation</strong> (assuming bodily differences reflect character faults or divine punishment).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5]">
                    <h4 className="font-bold text-sm text-[#0B1F6B] mb-1">Visual Contrast</h4>
                    <p className="text-xs text-[#5B6785]">
                      Because human brains are hardwired for rapid facial pattern recognition, contrasting skin patches draw unconscious second glances. Without education, curiosity turns into awkwardness.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFF6F0] border border-[#FEDDC7]">
                    <h4 className="font-bold text-sm text-[#F2884B] mb-1">Linguistic Conflation</h4>
                    <p className="text-xs text-[#5B6785]">
                      In several regional languages (such as in South Asia), vitiligo was historically referenced with terminology similar to leprosy, leaving lingering societal baggage despite zero medical relation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Impact on Life */}
          {activeTab === 'impact' && (
            <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-12 shadow-lg space-y-6 max-w-4xl mx-auto animate-fadeIn">
              <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                Psychosocial Reality
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                The Human Toll of Skin Stigma
              </h2>
              <p className="text-sm text-[#5B6785] leading-relaxed">
                Medical guidelines explicitly recognize that vitiligo is not just skin-deep. Stigma exerts profound psychosocial effects across daily domains:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#1E2A4A]">
                <div className="p-4 rounded-2xl bg-[#FDE8EE] border border-[#FAD0DC]">
                  <strong className="text-[#E8456B] block mb-1">Dating, Marriage & Relationships:</strong>
                  Surveys show up to 60% of young adults with vitiligo in traditional communities report intense marital anxiety or family resistance, fueled entirely by the false myth that vitiligo is contagious or universally inherited.
                </div>
                <div className="p-4 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC]">
                  <strong className="text-[#7C5CE0] block mb-1">Workplace & School Confidence:</strong>
                  Children may endure teasing on the playground; working professionals often feel pressured to wear long sleeves in heat to avoid endless questions from clients.
                </div>
                <div className="p-4 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA]">
                  <strong className="text-[#1D5FE0] block mb-1">Mental Health & Body Image:</strong>
                  Higher rates of social anxiety and depression are documented. Access to empathetic psychodermatology support is as vital as topical medications.
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Real Stories */}
          {activeTab === 'stories' && (
            <div className="text-center py-8 animate-fadeIn space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                Voices Overcoming Stigma
              </h2>
              <p className="text-sm text-[#5B6785] max-w-xl mx-auto">
                Read how Maya, David, and others transformed public stares into conversations of empowerment.
              </p>
              <Link
                href="/patient-journeys"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-md transition-colors"
              >
                <span>Explore All Patient Journeys →</span>
              </Link>
            </div>
          )}

          {/* Tab 5: What You Can Do */}
          {activeTab === 'action' && (
            <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-12 shadow-lg space-y-6 max-w-4xl mx-auto animate-fadeIn">
              <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
                Actionable Allyship
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                What You Can Do to Eliminate Stigma
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] space-y-2">
                  <h4 className="font-bold text-[#147053] flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>For Friends & Family</span>
                  </h4>
                  <p className="text-gray-700">
                    Never offer unprompted &apos;miracle home remedies&apos;. Treat the person normally, hug them without hesitation, and celebrate their authentic self.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] space-y-2">
                  <h4 className="font-bold text-[#0B1F6B] flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>For Educators & Employers</span>
                  </h4>
                  <p className="text-gray-700">
                    Introduce a 3-minute explanation about melanocytes in classroom biology. Enforce anti-discrimination policies without singling out affected individuals.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Medically Reviewed Badge */}
          <MedicalBadge
            reviewerName="Dr. Ananya Iyer, MD (Psychodermatology) & Dr. Rashmi Sharma, MD"
            reviewerTitle="Stigma & Advocacy Committee"
            date="October 2026"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
