'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import {
  Sun,
  ShieldCheck,
  Ear,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Activity,
  Layers,
} from 'lucide-react';

export default function UnderstandPage() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenCard((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Understand Vitiligo' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero */}
          <section className="py-8 sm:py-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-[#1D5FE0] bg-[#EAF2FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                Section Overview &bull; Blue Palette
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] mt-3">
                Understand Vitiligo
              </h1>
              <p className="text-base sm:text-lg text-[#5B6785] mt-3 leading-relaxed">
                Clear, reliable and easy-to-understand information for patients, families and the wider public.
              </p>
            </div>

            {/* Quick Links Row to Sub-pages */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Link
                href="/understand/stigma"
                className="p-5 rounded-2xl bg-white border border-[#DDE5F5] hover:border-[#E8456B] shadow-sm hover:shadow-md transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wide">
                    Deep Dive
                  </span>
                  <h3 className="text-base font-bold text-[#0B1F6B] group-hover:text-[#E8456B] transition-colors">
                    Stigma & Misconceptions →
                  </h3>
                  <p className="text-xs text-[#5B6785] mt-1">9 myths vs facts & cultural beliefs</p>
                </div>
              </Link>

              <Link
                href="/understand/biology"
                className="p-5 rounded-2xl bg-white border border-[#DDE5F5] hover:border-[#1FA37A] shadow-sm hover:shadow-md transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wide">
                    Infographic
                  </span>
                  <h3 className="text-base font-bold text-[#0B1F6B] group-hover:text-[#1FA37A] transition-colors">
                    Skin Biology Infographic →
                  </h3>
                  <p className="text-xs text-[#5B6785] mt-1">Interactive cellular mechanism</p>
                </div>
              </Link>

              <Link
                href="/global-data"
                className="p-5 rounded-2xl bg-white border border-[#DDE5F5] hover:border-[#1D5FE0] shadow-sm hover:shadow-md transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wide">
                    Prevalence
                  </span>
                  <h3 className="text-base font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors">
                    Global 70M+ Data →
                  </h3>
                  <p className="text-xs text-[#5B6785] mt-1">Interactive world map & numbers</p>
                </div>
              </Link>
            </div>
          </section>

          {/* Core Article: What is Vitiligo? */}
          <section className="py-8 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg my-6" id="basics">
            <div className="max-w-4xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  The Basics
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                  What is vitiligo? More than a change in skin colour
                </h2>
              </div>

              <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4">
                <p>
                  Vitiligo is a medical condition in which areas of the skin lose their natural colour. The affected areas appear lighter than the surrounding skin and can sometimes look white or pink.
                </p>
                <p>
                  It develops when the body&apos;s immune system mistakenly attacks <strong>melanocytes</strong> — the specialized cells responsible for producing pigment. Melanocytes give natural colour to the skin, hair, and eyes, and also play a vital protective role against ultraviolet (UV) radiation.
                </p>
                <div className="p-4 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] text-sm text-[#0B1F6B] font-medium flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#1D5FE0] shrink-0" />
                  <span>
                    Vitiligo is an autoimmune disease. It is not simply a cosmetic condition, nor is it an infection.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Does Vitiligo Matter Beyond the Skin? 3 Expandable Cards matching Page 5 */}
          <section className="py-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Holistic Health Context
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  Why does vitiligo matter beyond the skin?
                </h2>
                <p className="text-sm text-[#5B6785] mt-1">
                  Vitiligo is often thought of as a condition that only changes appearance. However, it can affect other aspects of health and wellbeing.
                </p>
              </div>

              {/* 3 Expandable Accordion Cards */}
              <div className="space-y-4">
                {/* Card 1: Sun Sensitivity */}
                <div className="bg-white rounded-2xl border border-[#DDE5F5] overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleCard(0)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-[#F8FAFF] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF6EE] text-[#F2884B] flex items-center justify-center font-bold">
                        <Sun className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0B1F6B]">
                          1. The skin can become more sensitive to sunlight
                        </h3>
                        <span className="text-xs text-gray-400">AAD Clinical Guidance</span>
                      </div>
                    </div>
                    {openCard === 0 ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>

                  {openCard === 0 && (
                    <div className="p-5 pt-0 border-t border-gray-100 text-xs sm:text-sm text-[#5B6785] leading-relaxed space-y-3 bg-[#FCFDFF]">
                      <p>
                        When melanocytes are lost, the affected skin has less protective melanin pigment to absorb UV radiation. As a result, areas affected by vitiligo can sunburn more easily.
                      </p>
                      <div className="p-3 bg-[#EAF2FF] rounded-xl text-[#0B1F6B] font-medium">
                        <strong>What this means:</strong> Sun protection (broad-spectrum SPF 50+, UV protective clothing, seeking shade) is an essential, healthy part of daily life.
                      </div>
                    </div>
                  )}
                </div>

                {/* Card 2: Autoimmune Comorbidities (Thyroid, etc.) */}
                <div className="bg-white rounded-2xl border border-[#DDE5F5] overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleCard(1)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-[#F8FAFF] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0B1F6B]">
                          2. Vitiligo can occur alongside other autoimmune conditions
                        </h3>
                        <span className="text-xs text-gray-400">Thyroid Disease &bull; Alopecia &bull; Rheumatoid Arthritis</span>
                      </div>
                    </div>
                    {openCard === 1 ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>

                  {openCard === 1 && (
                    <div className="p-5 pt-0 border-t border-gray-100 text-xs sm:text-sm text-[#5B6785] leading-relaxed space-y-3 bg-[#FCFDFF]">
                      <p>
                        People with vitiligo have an increased statistical likelihood of developing certain other autoimmune conditions, most commonly <strong>thyroid disease</strong> (Hashimoto&apos;s thyroiditis or Graves&apos; disease), alopecia areata, or rheumatoid arthritis.
                      </p>
                      <div className="p-4 bg-[#F8FAFF] rounded-xl border border-gray-200 space-y-2">
                        <p className="font-bold text-[#0B1F6B]">Possible symptoms of thyroid dysfunction to watch for:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Feeling unusually cold when others are comfortable</li>
                          <li>Persistent unexplained fatigue or sluggishness</li>
                          <li>Constipation</li>
                          <li>Difficulty losing weight or sudden unexplained weight changes</li>
                        </ul>
                        <p className="text-xs text-[#1D5FE0] pt-1">
                          A simple routine blood test (TSH and Free T4) ordered by your physician can check thyroid function. If identified, straightforward thyroid replacement therapy effectively manages symptoms.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card 3: Hearing Sensitivity */}
                <div className="bg-white rounded-2xl border border-[#DDE5F5] overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleCard(2)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-[#F8FAFF] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E3F6EF] text-[#1FA37A] flex items-center justify-center font-bold">
                        <Ear className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0B1F6B]">
                          3. Vitiligo can sometimes affect hearing
                        </h3>
                        <span className="text-xs text-gray-400">Inner Ear Melanocytes (12%–38% estimation)</span>
                      </div>
                    </div>
                    {openCard === 2 ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>

                  {openCard === 2 && (
                    <div className="p-5 pt-0 border-t border-gray-100 text-xs sm:text-sm text-[#5B6785] leading-relaxed space-y-3 bg-[#FCFDFF]">
                      <p>
                        Melanocytes are also naturally present in the stria vascularis of the inner ear, where they help maintain optimal fluid balance for auditory nerve signals. If these inner ear cells are affected, some people with vitiligo may experience subtle high-frequency hearing loss.
                      </p>
                      <p>
                        The American Academy of Dermatology (AAD) notes that an estimated 12%–38% of people with vitiligo have some degree of hearing change, although many individuals do not realize it because it is subclinical.
                      </p>
                      <div className="p-3 bg-[#E3F6EF] rounded-xl text-[#1FA37A] font-medium">
                        <strong>Why this matters:</strong> Identifying any hearing sensitivity early helps with auditory hygiene (avoiding loud industrial noise) and prevents unnecessary progression.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Reassurance Callout Box */}
              <div className="bg-[#FFF8F4] border-2 border-[#FEDDC7] rounded-3xl p-6 sm:p-8 flex items-start space-x-4">
                <HelpCircle className="w-6 h-6 text-[#F2884B] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-[#0B1F6B]">
                    Does everyone with vitiligo develop other health problems?
                  </h4>
                  <p className="text-sm text-[#5B6785] mt-1 leading-relaxed">
                    <strong className="text-[#0B1F6B]">No.</strong> Having vitiligo does not mean that you will automatically develop thyroid disease, another autoimmune condition, or hearing loss. Most individuals with vitiligo remain in excellent general health.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Facts for Different Ages (Page 2) */}
          <section className="py-12 border-t border-gray-200" id="ages">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Across The Lifespan
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  Facts for Different Ages
                </h2>
                <p className="text-sm text-[#5B6785]">
                  How vitiligo manifests and is managed across generations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-[#DDE5F5] shadow-xs space-y-3">
                  <span className="w-8 h-8 rounded-full bg-[#EAF2FF] text-[#1D5FE0] font-bold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h3 className="font-bold text-base text-[#0B1F6B]">Children & Teens</h3>
                  <p className="text-xs text-[#5B6785] leading-relaxed">
                    Often appears before age 20. Segmental vitiligo (unilateral) is more common in pediatric cases and tends to stabilize early. Peer support and anti-bullying education are key.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#DDE5F5] shadow-xs space-y-3">
                  <span className="w-8 h-8 rounded-full bg-[#EFEAFF] text-[#7C5CE0] font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h3 className="font-bold text-base text-[#0B1F6B]">Adults</h3>
                  <p className="text-xs text-[#5B6785] leading-relaxed">
                    Generalized vitiligo (bilateral symmetry) is common. Workplace confidence, marriage discussions, and balancing active phototherapy with careers are central priorities.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#DDE5F5] shadow-xs space-y-3">
                  <span className="w-8 h-8 rounded-full bg-[#FFEDE3] text-[#F2884B] font-bold text-xs flex items-center justify-center">
                    03
                  </span>
                  <h3 className="font-bold text-base text-[#0B1F6B]">Older Adults</h3>
                  <p className="text-xs text-[#5B6785] leading-relaxed">
                    Longstanding stable patches require diligent lifelong sun protection against actinic keratosis. Many embrace their natural dual-pigment symmetry with profound comfort.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Still Have Questions Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#0B1F6B] to-[#1D5FE0] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold font-serif">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Explore our expert insights library or ask your question anonymously.
              </p>
            </div>
            <Link
              href="/expert-insights"
              className="px-6 py-3 rounded-full text-xs font-bold bg-white text-[#0B1F6B] hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
            >
              Explore Expert Insights →
            </Link>
          </div>

          {/* Medically Reviewed Badge */}
          <MedicalBadge
            reviewerName="Dr. Rashmi Sharma, MD & Dr. Marcus Vance, MD, FAAD"
            reviewerTitle="Vitiligo Hub Global Advisory Board"
            date="October 2026"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
