'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { TwoPerspectives } from '@/components/TwoPerspectives';
import { AskChatbot } from '@/components/AskChatbot';
import { Sparkles, HelpCircle, FileText, Stethoscope, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import faqsData from '@/data/faqs.json';

export default function ExpertInsightsPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Expert Insights' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 max-w-3xl">
            <span className="text-xs font-bold text-[#F2884B] bg-[#FFEDE3] px-3.5 py-1 rounded-full uppercase tracking-wider">
              Section Overview &bull; Coral Palette
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] mt-3">
              Ask. Learn. Stay Informed.
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] mt-3 leading-relaxed">
              Trusted clinical perspectives, weekly clinician Q&A, latest research summaries, and resources for healthcare professionals.
            </p>
          </section>

          {/* Two Perspectives Split Cards (Patient rose vs Doctor blue) matching Page 9 */}
          <TwoPerspectives />

          {/* Anonymous Q&A Chatbot & Weekly Reviewed Answers matching Page 9 */}
          <AskChatbot />

          {/* Comprehensive Common Questions Library */}
          <section className="py-14 border-t border-gray-200" id="faq">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Knowledge Repository
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  Common Questions Library
                </h2>
                <p className="text-sm text-[#5B6785] mt-1">
                  Every answer is authored and updated by our board of certified dermatologists and pigment specialists.
                </p>
              </div>

              <div className="space-y-3">
                {faqsData.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-white rounded-2xl border border-[#DDE5F5] overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full p-5 text-left flex items-center justify-between hover:bg-[#F8FAFF] transition-colors"
                      >
                        <div className="flex items-center space-x-3 pr-4">
                          <span className="w-7 h-7 rounded-full bg-[#EAF2FF] text-[#1D5FE0] font-bold text-xs flex items-center justify-center shrink-0">
                            Q
                          </span>
                          <h3 className="font-bold text-sm sm:text-base text-[#0B1F6B]">
                            {faq.question}
                          </h3>
                        </div>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-gray-100 bg-[#FCFDFF] text-xs sm:text-sm text-[#1E2A4A] leading-relaxed space-y-3">
                          <p>{faq.answer}</p>
                          <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 gap-1">
                            <span className="font-semibold text-[#1FA37A] flex items-center">
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                              Reviewed by {faq.reviewedBy.name} ({faq.reviewedBy.specialty})
                            </span>
                            <span>{faq.reviewedBy.hospital} &bull; {faq.reviewedBy.reviewedDate}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Dedicated Section For Healthcare Professionals */}
          <section className="py-14 bg-gradient-to-br from-[#0B1F6B] to-[#1D5FE0] text-white rounded-3xl p-6 sm:p-12 my-8 shadow-xl" id="professionals">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-blue-200 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                <span>For Healthcare Professionals</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-serif">
                Clinical Guidelines, Scoring Tools & Scientific Resources
              </h2>

              <p className="text-sm text-blue-100 leading-relaxed">
                Evidence-based diagnostic criteria, validated scoring indices (VASI, VETF), step-therapy algorithms, and continuing education modules designed for dermatologists and primary care clinicians.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                  <h4 className="font-bold text-sm text-white">VASI / VETF Scoring Calculator</h4>
                  <p className="text-xs text-blue-200">
                    Standardized clinical percentage body surface area (BSA) repigmentation tracker.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                  <h4 className="font-bold text-sm text-white">Consensus Guidelines</h4>
                  <p className="text-xs text-blue-200">
                    AAD, EADV & IADVL joint consensus on topical JAK inhibitors and phototherapy timing.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                  <h4 className="font-bold text-sm text-white">Patient Consultation Aid</h4>
                  <p className="text-xs text-blue-200">
                    Printable shared decision-making visual charts for treatment options and camouflage choices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Medically Reviewed Badge */}
          <MedicalBadge
            reviewerName="Dr. Marcus Vance, MD, FAAD & Dr. Rashmi Sharma, MD"
            reviewerTitle="Executive Editorial Board"
            date="October 2026"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
