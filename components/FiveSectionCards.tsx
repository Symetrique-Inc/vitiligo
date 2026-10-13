'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  BookOpen,
  HelpCircle,
  Activity,
  Users,
  BarChart3,
  Briefcase,
  Smile,
  Palette,
  Sun,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  FileText,
  Building2,
  Calendar,
  Globe2,
  HeartHandshake,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { FindDoctorModal } from '@/components/FindDoctorModal';

export const FiveSectionCards: React.FC = () => {
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);

  return (
    <>
      <section className="py-10 relative" aria-labelledby="section-cards-heading">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Navigation Tab Headers Row matching mockup Row 2 */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mb-8">
            {/* Tab 1: Understand Vitiligo */}
            <Link
              href="/understand"
              className="bg-[#1D5FE0] text-white p-4 rounded-2xl text-center shadow-md hover:bg-[#174ec0] transition-colors"
            >
              <h3 className="font-bold text-sm">Understand Vitiligo</h3>
              <p className="text-[11px] text-blue-100 mt-1">Condition, causes, myths and facts</p>
            </Link>

            {/* Tab 2: My Life & Daily Living */}
            <Link
              href="/my-life"
              className="bg-white border-2 border-[#7C5CE0]/30 hover:border-[#7C5CE0] p-4 rounded-2xl text-center shadow-xs transition-colors"
            >
              <h3 className="font-bold text-sm text-[#0B1F6B]">My Life & Daily Living</h3>
              <p className="text-[11px] text-[#5B6785] mt-1">Social, emotional and practical aspects</p>
            </Link>

            {/* Tab 3: Treatment & Care */}
            <Link
              href="/treatment"
              className="bg-white border-2 border-[#1FA37A]/30 hover:border-[#1FA37A] p-4 rounded-2xl text-center shadow-xs transition-colors"
            >
              <h3 className="font-bold text-sm text-[#0B1F6B]">Treatment & Care</h3>
              <p className="text-[11px] text-[#5B6785] mt-1">Therapies, treatment journey, access to care</p>
            </Link>

            {/* Tab 4: Expert Insights */}
            <Link
              href="/expert-insights"
              className="bg-white border-2 border-[#F2884B]/30 hover:border-[#F2884B] p-4 rounded-2xl text-center shadow-xs transition-colors"
            >
              <h3 className="font-bold text-sm text-[#0B1F6B]">Expert Insights</h3>
              <p className="text-[11px] text-[#5B6785] mt-1">Doctors, Q&A, latest research</p>
            </Link>

            {/* Tab 5: Resources & Support */}
            <Link
              href="/resources"
              className="bg-white border-2 border-[#7C5CE0]/30 hover:border-[#7C5CE0] p-4 rounded-2xl text-center shadow-xs transition-colors"
            >
              <h3 className="font-bold text-sm text-[#0B1F6B]">Resources & Support</h3>
              <p className="text-[11px] text-[#5B6785] mt-1">Find a doctor, support groups, useful resources</p>
            </Link>
          </div>

          {/* 5 Section Landing Cards Grid matching exact Mockup Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* ---------------- CARD 1: UNDERSTAND VITILIGO ---------------- */}
            <div className="bg-white rounded-3xl border border-[#DDE5F5] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-5 pb-3">
                {/* Header Badge */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#1D5FE0] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="text-xs font-bold text-[#0B1F6B]">Understand Vitiligo</span>
                </div>

                {/* Title & Sub-text */}
                <h3 className="text-lg font-bold font-serif text-[#0B1F6B] leading-tight">
                  What is vitiligo?
                </h3>
                <p className="text-xs text-[#5B6785] mt-0.5 mb-3">
                  Clear answers to your questions.
                </p>

                {/* Hero Thumbnail Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-4 shadow-xs border border-gray-100">
                  <Image
                    src="/images/card-understand.jpg"
                    alt="Close up face portrait with vitiligo lighter skin patches around eye and cheek"
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Explore this section */}
                <span className="text-[11px] font-bold text-[#1D5FE0] uppercase tracking-wider block mb-2">
                  Explore this section
                </span>

                <div className="space-y-2.5 divide-y divide-gray-100">
                  <Link href="/understand#basics" className="pt-2 first:pt-0 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <BookOpen className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0]">The basics</h4>
                        <p className="text-[10px] text-[#5B6785]">What is it, symptoms, types, causes</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1D5FE0] shrink-0" />
                  </Link>

                  <Link href="/understand/stigma" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <HelpCircle className="w-4 h-4 text-[#E8456B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#E8456B]">Myths and misconceptions</h4>
                        <p className="text-[10px] text-[#5B6785]">What people think vs. what is true</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#E8456B] shrink-0" />
                  </Link>

                  <Link href="/understand/biology" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Activity className="w-4 h-4 text-[#1FA37A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1FA37A]">How vitiligo affects the skin</h4>
                        <p className="text-[10px] text-[#5B6785]">Disease process in simple terms</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1FA37A] shrink-0" />
                  </Link>

                  <Link href="/understand#ages" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Users className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#F2884B]">Facts for different ages</h4>
                        <p className="text-[10px] text-[#5B6785]">Children, adults and older adults</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#F2884B] shrink-0" />
                  </Link>

                  <Link href="/global-data" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <BarChart3 className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0]">Key numbers</h4>
                        <p className="text-[10px] text-[#5B6785]">Global overview and prevalence</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1D5FE0] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="p-4 bg-[#F8FAFF] border-t border-[#DDE5F5] flex flex-col justify-between space-y-2">
                <span className="text-[11px] font-bold text-[#0B1F6B]">Still have questions?</span>
                <Link
                  href="/expert-insights"
                  className="w-full text-center py-2 px-3 rounded-full text-xs font-semibold bg-[#1D5FE0] text-white hover:bg-[#1648ad] transition-colors"
                >
                  Explore Expert Insights →
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 2: MY LIFE & DAILY LIVING ---------------- */}
            <div className="bg-white rounded-3xl border border-[#DDE5F5] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-5 pb-3">
                {/* Header Badge */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#7C5CE0] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span className="text-xs font-bold text-[#0B1F6B]">My Life & Daily Living</span>
                </div>

                {/* Title & Sub-text */}
                <h3 className="text-lg font-bold font-serif text-[#0B1F6B] leading-tight">
                  Everyday life beyond the skin.
                </h3>
                <p className="text-xs text-[#5B6785] mt-0.5 mb-3">
                  Practical information for real-life situations.
                </p>

                {/* Hero Thumbnail Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-4 shadow-xs border border-gray-100">
                  <Image
                    src="/images/card-mylife.jpg"
                    alt="Portrait of a smiling confident young man with vitiligo"
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Explore this section */}
                <span className="text-[11px] font-bold text-[#7C5CE0] uppercase tracking-wider block mb-2">
                  Explore this section
                </span>

                <div className="space-y-2.5 divide-y divide-gray-100">
                  <Link href="/my-life#family" className="pt-2 first:pt-0 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Users className="w-4 h-4 text-[#7C5CE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#7C5CE0]">Family and relationships</h4>
                        <p className="text-[10px] text-[#5B6785]">Talking to family, friends and partners</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#7C5CE0] shrink-0" />
                  </Link>

                  <Link href="/my-life#work" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Briefcase className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0]">School and work</h4>
                        <p className="text-[10px] text-[#5B6785]">Managing social and professional life</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1D5FE0] shrink-0" />
                  </Link>

                  <Link href="/my-life#wellbeing" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Smile className="w-4 h-4 text-[#E8456B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#E8456B]">Emotional well-being</h4>
                        <p className="text-[10px] text-[#5B6785]">Confidence, mental health and support</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#E8456B] shrink-0" />
                  </Link>

                  <Link href="/my-life#appearance" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Palette className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#F2884B]">Appearance and clothing</h4>
                        <p className="text-[10px] text-[#5B6785]">Tips and personal choices</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#F2884B] shrink-0" />
                  </Link>

                  <Link href="/my-life#travel" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Sun className="w-4 h-4 text-[#1FA37A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1FA37A]">Travel, exercise & sun</h4>
                        <p className="text-[10px] text-[#5B6785]">Everyday practical guidance</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1FA37A] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="p-4 bg-[#F8FAFF] border-t border-[#DDE5F5] flex flex-col justify-between space-y-2">
                <span className="text-[11px] font-bold text-[#0B1F6B]">Need more support?</span>
                <Link
                  href="/resources"
                  className="w-full text-center py-2 px-3 rounded-full text-xs font-semibold bg-[#7C5CE0] text-white hover:bg-[#6848ce] transition-colors"
                >
                  Explore Resources →
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 3: TREATMENT & CARE ---------------- */}
            <div className="bg-white rounded-3xl border border-[#DDE5F5] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-5 pb-3">
                {/* Header Badge */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#1FA37A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <span className="text-xs font-bold text-[#0B1F6B]">Treatment & Care</span>
                </div>

                {/* Title & Sub-text */}
                <h3 className="text-lg font-bold font-serif text-[#0B1F6B] leading-tight">
                  Treatment and care options.
                </h3>
                <p className="text-xs text-[#5B6785] mt-0.5 mb-3">
                  Understand the journey and what to expect.
                </p>

                {/* Hero Thumbnail Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-4 shadow-xs border border-gray-100">
                  <Image
                    src="/images/card-treatment.jpg"
                    alt="Hands with vitiligo gently applying dermatological care cream"
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Explore this section */}
                <span className="text-[11px] font-bold text-[#1FA37A] uppercase tracking-wider block mb-2">
                  Explore this section
                </span>

                <div className="space-y-2.5 divide-y divide-gray-100">
                  <Link href="/treatment#overview" className="pt-2 first:pt-0 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Activity className="w-4 h-4 text-[#1FA37A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1FA37A]">Overview of treatments</h4>
                        <p className="text-[10px] text-[#5B6785]">Available options in simple terms</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1FA37A] shrink-0" />
                  </Link>

                  <Link href="/treatment#journey" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Calendar className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0]">Treatment journey</h4>
                        <p className="text-[10px] text-[#5B6785]">What typically happens step by step</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1D5FE0] shrink-0" />
                  </Link>

                  <Link href="/treatment#access" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <ShieldCheck className="w-4 h-4 text-[#7C5CE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#7C5CE0]">Access to care</h4>
                        <p className="text-[10px] text-[#5B6785]">Availability, affordability and support</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#7C5CE0] shrink-0" />
                  </Link>

                  <Link href="/treatment#steps" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <FileText className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#F2884B]">Step therapy & guidelines</h4>
                        <p className="text-[10px] text-[#5B6785]">How treatment decisions are made</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#F2884B] shrink-0" />
                  </Link>

                  <Link href="/treatment#living" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Sparkles className="w-4 h-4 text-[#1FA37A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1FA37A]">Living with treatment</h4>
                        <p className="text-[10px] text-[#5B6785]">Monitoring progress & what to expect</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1FA37A] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="p-4 bg-[#F8FAFF] border-t border-[#DDE5F5] flex flex-col justify-between space-y-2">
                <span className="text-[11px] font-bold text-[#0B1F6B]">Find a dermatologist in your area.</span>
                <button
                  onClick={() => setIsDoctorModalOpen(true)}
                  className="w-full text-center py-2 px-3 rounded-full text-xs font-semibold bg-[#1FA37A] text-white hover:bg-[#188563] transition-colors"
                >
                  Search now →
                </button>
              </div>
            </div>

            {/* ---------------- CARD 4: EXPERT INSIGHTS ---------------- */}
            <div className="bg-white rounded-3xl border border-[#DDE5F5] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-5 pb-3">
                {/* Header Badge */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#F2884B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <span className="text-xs font-bold text-[#0B1F6B]">Expert Insights</span>
                </div>

                {/* Title & Sub-text */}
                <h3 className="text-lg font-bold font-serif text-[#0B1F6B] leading-tight">
                  Ask. Learn. Stay informed.
                </h3>
                <p className="text-xs text-[#5B6785] mt-0.5 mb-3">
                  Expert answers to common questions.
                </p>

                {/* Hero Thumbnail Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-4 shadow-xs border border-gray-100">
                  <Image
                    src="/images/card-expert.jpg"
                    alt="Doctor portrait with glasses, white coat, and stethoscope smiling in clinic"
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Explore this section */}
                <span className="text-[11px] font-bold text-[#F2884B] uppercase tracking-wider block mb-2">
                  Explore this section
                </span>

                <div className="space-y-2.5 divide-y divide-gray-100">
                  <Link href="/expert-insights#ask" className="pt-2 first:pt-0 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <MessageSquare className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#F2884B]">Ask a question (Q&A)</h4>
                        <p className="text-[10px] text-[#5B6785]">Get expert answers anonymously</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#F2884B] shrink-0" />
                  </Link>

                  <Link href="/expert-insights#faq" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <HelpCircle className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0]">Common questions</h4>
                        <p className="text-[10px] text-[#5B6785]">Clear, trusted information</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1D5FE0] shrink-0" />
                  </Link>

                  <Link href="/expert-insights#perspectives" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Stethoscope className="w-4 h-4 text-[#1FA37A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1FA37A]">Doctor perspectives</h4>
                        <p className="text-[10px] text-[#5B6785]">Clinical insights in simple language</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1FA37A] shrink-0" />
                  </Link>

                  <Link href="/expert-insights#innovation" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Sparkles className="w-4 h-4 text-[#7C5CE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#7C5CE0]">Latest research & innovation</h4>
                        <p className="text-[10px] text-[#5B6785]">What&apos;s new in vitiligo science</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#7C5CE0] shrink-0" />
                  </Link>

                  <Link href="/expert-insights#professionals" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Building2 className="w-4 h-4 text-[#0B1F6B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#0B1F6B]">For healthcare professionals</h4>
                        <p className="text-[10px] text-[#5B6785]">Guidelines and scientific resources</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#0B1F6B] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="p-4 bg-[#F8FAFF] border-t border-[#DDE5F5] flex flex-col justify-between space-y-2">
                <span className="text-[11px] font-bold text-[#0B1F6B]">Have a question?</span>
                <Link
                  href="/expert-insights#ask"
                  className="w-full text-center py-2 px-3 rounded-full text-xs font-semibold bg-[#F2884B] text-white hover:bg-[#d9743a] transition-colors"
                >
                  Ask now →
                </Link>
              </div>
            </div>

            {/* ---------------- CARD 5: RESOURCES & SUPPORT ---------------- */}
            <div className="bg-white rounded-3xl border border-[#DDE5F5] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-5 pb-3">
                {/* Header Badge */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#7C5CE0] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <span className="text-xs font-bold text-[#0B1F6B]">Resources & Support</span>
                </div>

                {/* Title & Sub-text */}
                <h3 className="text-lg font-bold font-serif text-[#0B1F6B] leading-tight">
                  Find the right support.
                </h3>
                <p className="text-xs text-[#5B6785] mt-0.5 mb-3">
                  Trusted resources for your community.
                </p>

                {/* Hero Thumbnail Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full mb-4 shadow-xs border border-gray-100">
                  <Image
                    src="/images/card-resources.jpg"
                    alt="Two caring hands clasped tightly in support and community unity"
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Explore this section */}
                <span className="text-[11px] font-bold text-[#7C5CE0] uppercase tracking-wider block mb-2">
                  Explore this section
                </span>

                <div className="space-y-2.5 divide-y divide-gray-100">
                  <Link href="/resources#find-doctor" className="pt-2 first:pt-0 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Stethoscope className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0]">Find a doctor</h4>
                        <p className="text-[10px] text-[#5B6785]">Dermatologists & care centres</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1D5FE0] shrink-0" />
                  </Link>

                  <Link href="/resources#support-groups" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <HeartHandshake className="w-4 h-4 text-[#7C5CE0] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#7C5CE0]">Support groups</h4>
                        <p className="text-[10px] text-[#5B6785]">Patient and caregiver circles</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#7C5CE0] shrink-0" />
                  </Link>

                  <Link href="/resources#guides" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <FileText className="w-4 h-4 text-[#1FA37A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1FA37A]">Practical resources</h4>
                        <p className="text-[10px] text-[#5B6785]">Guides, tools & worksheets</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1FA37A] shrink-0" />
                  </Link>

                  <Link href="/resources#events" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Calendar className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#F2884B]">Events and awareness</h4>
                        <p className="text-[10px] text-[#5B6785]">Campaigns and important days</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#F2884B] shrink-0" />
                  </Link>

                  <Link href="/resources#map" className="pt-2 flex items-center justify-between group">
                    <div className="flex items-start space-x-2 pr-1">
                      <Globe2 className="w-4 h-4 text-[#0B1F6B] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#0B1F6B]">Global map of resources</h4>
                        <p className="text-[10px] text-[#5B6785]">Support in your country</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#0B1F6B] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="p-4 bg-[#F8FAFF] border-t border-[#DDE5F5] flex flex-col justify-between space-y-2">
                <span className="text-[11px] font-bold text-[#0B1F6B]">Explore resources in your language.</span>
                <Link
                  href="/resources"
                  className="w-full text-center py-2 px-3 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors"
                >
                  English / हिन्दी →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Left: Global Stat Card matching mockup */}
          {/* <div className="mt-8 max-w-sm">
            <div className="p-5 bg-gradient-to-br from-[#0B1F6B] via-[#142B7E] to-[#1D5FE0] text-white rounded-3xl shadow-lg space-y-3 relative overflow-hidden">
              <span className="text-[10px] font-bold tracking-wider uppercase text-blue-200">
                Millions of people worldwide live with vitiligo.
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-black text-amber-300">28.5M</span>
                <span className="text-xs text-blue-200 font-medium">(Lancet 2024)</span>
              </div>
              <Link
                href="/global-data"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white text-[#0B1F6B] hover:bg-blue-50 transition-colors shadow-xs"
              >
                <span>Explore global data</span>
                <ArrowRight className="w-3 h-3 text-[#1D5FE0]" />
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      <FindDoctorModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
      />
    </>
  );
};
