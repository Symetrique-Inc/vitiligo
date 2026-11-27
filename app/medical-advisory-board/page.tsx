'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck, Award, Stethoscope, BookCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function MedicalAdvisoryBoardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Medical Advisory Board' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mt-4 mb-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1D5FE0] uppercase tracking-wider bg-[#EAF2FF] px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Clinical Governance & E-E-A-T</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B] leading-tight">
                Our Medical Advisory Board
              </h1>
              <p className="text-base text-[#5B6785] leading-relaxed">
                OneVitiligo collaborates with board-certified dermatologists, autoimmune specialists,
                and academic researchers globally to ensure that every patient guide, treatment breakdown,
                and clinical insight reflects current medical consensus and peer-reviewed dermatology literature.
              </p>
            </div>
          </section>

          {/* Standards & Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl border border-[#DDE5F5] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#1D5FE0]/10 flex items-center justify-center text-[#1D5FE0] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#0B1F6B] mb-2">Rigorous Credentials</h2>
              <p className="text-sm text-[#5B6785] leading-relaxed">
                All reviewers hold active medical licenses (MD / MBBS / FAAD), specialized postgraduate training in dermatology, and peer-reviewed contributions to pigmentary disorder literature.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDE5F5] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#1FA37A]/10 flex items-center justify-center text-[#1FA37A] mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#0B1F6B] mb-2">Evidence-First Review</h2>
              <p className="text-sm text-[#5B6785] leading-relaxed">
                Guidance is benchmarked against international clinical bodies including the American Academy of Dermatology (AAD), European Academy of Dermatology and Venereology (EADV), and Indian Association of Dermatologists (IADVL).
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDE5F5] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CE0]/10 flex items-center justify-center text-[#7C5CE0] mb-4">
                <BookCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#0B1F6B] mb-2">Ongoing Audits</h2>
              <p className="text-sm text-[#5B6785] leading-relaxed">
                Medical articles undergo scheduled re-review every 6 to 12 months, or immediately following new FDA/EMA approvals, landmark phase-3 clinical trial publications, or guideline updates.
              </p>
            </div>
          </div>

          {/* Board Members Section */}
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-12">
            <h2 className="text-2xl font-bold font-serif text-[#0B1F6B] mb-6">
              Advisory Board & Clinical Reviewers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#FAFBFF]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F6B]">Dr. Rashmi Sharma, MD</h3>
                    <p className="text-xs font-semibold text-[#1D5FE0] mt-0.5">Consultant Dermatologist & Pigmentary Disorder Specialist</p>
                    <p className="text-xs text-[#64748B] mt-1">New Delhi, India</p>
                  </div>
                  <span className="text-xs bg-[#E3F6EF] text-[#1FA37A] font-medium px-2.5 py-1 rounded-full flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
                <p className="text-xs text-[#475569] mt-4 leading-relaxed">
                  Focuses on non-cultured epidermal cell suspension (MKTP), phototherapy optimization, and holistic vitiligo management across Fitzpatrick skin phototypes IV–VI.
                </p>
              </div>

              <div className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#FAFBFF]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F6B]">Dr. Marcus Vance, MD, FAAD</h3>
                    <p className="text-xs font-semibold text-[#1D5FE0] mt-0.5">Clinical Associate Professor of Dermatology</p>
                    <p className="text-xs text-[#64748B] mt-1">Boston, MA, United States</p>
                  </div>
                  <span className="text-xs bg-[#E3F6EF] text-[#1FA37A] font-medium px-2.5 py-1 rounded-full flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
                <p className="text-xs text-[#475569] mt-4 leading-relaxed">
                  Specializes in targeted immunology, JAK inhibitor mechanisms, systemic treatments, and clinical trial endpoint design for progressive autoimmune disorders.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#64748B] flex items-start space-x-3">
              <ShieldCheck className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
              <p>
                <strong>Editorial Independence:</strong> Members of our Medical Advisory Board receive no compensation from pharmaceutical manufacturers or medical device sponsors for their review of content on OneVitiligo. Reviewers evaluate scientific literature based strictly on clinical trial validity, safety profiles, and patient outcomes. Read our full{' '}
                <Link href="/editorial-policy" className="text-[#1D5FE0] underline hover:text-[#0B1F6B]">
                  Editorial Policy
                </Link>.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

