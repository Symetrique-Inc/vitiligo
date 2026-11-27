'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BookOpen, CheckCircle, RefreshCw, FileText, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Editorial Policy' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mt-4 mb-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1D5FE0] uppercase tracking-wider bg-[#EAF2FF] px-3 py-1 rounded-full">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Editorial Principles</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B] leading-tight">
                Editorial & Clinical Sourcing Policy
              </h1>
              <p className="text-base text-[#5B6785] leading-relaxed">
                OneVitiligo is committed to providing accurate, accessible, and evidence-based information
                about vitiligo. We adhere to rigorous standards of medical verification, transparent authorship,
                and strict editorial independence.
              </p>
            </div>
          </section>

          {/* Core Principles */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#1D5FE0]/10 flex items-center justify-center text-[#1D5FE0]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1F6B]">1. Primary Evidence & Sourcing</h2>
              </div>
              <div className="text-sm text-[#475569] leading-relaxed space-y-3 pl-12">
                <p>
                  Every clinical statement, treatment mechanism, and epidemiological data point published on OneVitiligo is sourced directly from peer-reviewed scientific journals (such as the <em>Journal of the American Academy of Dermatology</em>, <em>British Journal of Dermatology</em>, and <em>The Lancet</em>) or authoritative public health organizations (including the WHO, AAD, and IFPCS).
                </p>
                <p>
                  We explicitly avoid commercial promotions, unsupported anecdotal claims, and unverified miracle cures. Where evidence is emerging or inconclusive, we explicitly state the preliminary nature of the findings.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#1FA37A]/10 flex items-center justify-center text-[#1FA37A]">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1F6B]">2. Clinical Review Workflow</h2>
              </div>
              <div className="text-sm text-[#475569] leading-relaxed space-y-3 pl-12">
                <p>
                  Our medical writers draft content focusing on plain-language clarity, emotional empathy, and patient comprehension. Before publication, every clinical guide is reviewed and signed off by a qualified member of our{' '}
                  <Link href="/medical-advisory-board" className="text-[#1D5FE0] font-semibold underline hover:text-[#0B1F6B]">
                    Medical Advisory Board
                  </Link>.
                </p>
                <p>
                  Articles display a visible medical review badge indicating the reviewing physician, credentials, and the date of last clinical audit.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#7C5CE0]/10 flex items-center justify-center text-[#7C5CE0]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1F6B]">3. Editorial Independence & Non-Commercial Bias</h2>
              </div>
              <div className="text-sm text-[#475569] leading-relaxed space-y-3 pl-12">
                <p>
                  OneVitiligo is an educational resource developed under Symetrique Inc. Our editorial team operates with strict autonomy. We do not accept sponsored content, pay-for-placement reviews, or pharmaceutical advertisements that could influence educational objectivity.
                </p>
                <p>
                  Mention of specific treatments (such as topical JAK inhibitors, phototherapy units, or surgical techniques) is based solely on clinical trial validation, regulatory approvals, and established standard-of-care guidelines.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1F6B]">4. Continuous Updates & Corrections Policy</h2>
              </div>
              <div className="text-sm text-[#475569] leading-relaxed space-y-3 pl-12">
                <p>
                  Medical science evolves rapidly. When new clinical trials are published or safety warnings are issued by regulatory authorities, our content is promptly updated.
                </p>
                <p>
                  If you notice an inaccuracy or have a clinical question regarding our materials, please contact our editorial board via{' '}
                  <Link href="/contact" className="text-[#1D5FE0] font-semibold underline hover:text-[#0B1F6B]">
                    our contact page
                  </Link>. We review all legitimate inquiries within five business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

