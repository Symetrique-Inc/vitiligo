'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { DermatologistSteps } from '@/components/DermatologistSteps';
import { FindDoctorModal } from '@/components/FindDoctorModal';
import { Activity, Sparkles, CheckCircle2, Stethoscope, ArrowRight, ShieldCheck, Microscope, Calendar } from 'lucide-react';

export default function TreatmentPage() {
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Treatment & Care' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 max-w-3xl">
            <span className="text-xs font-bold text-[#1FA37A] bg-[#E3F6EF] px-3.5 py-1 rounded-full uppercase tracking-wider">
              Section Overview &bull; Teal Palette
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] mt-3">
              Treatment and Care Options
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] mt-3 leading-relaxed">
              Understand the clinical journey, modern therapies, step therapy guidelines, and what to expect over time in clear, plain language.
            </p>
          </section>

          {/* 4 Numbered Cards: Why Should I See a Dermatologist? matching Page 8 mockups */}
          <DermatologistSteps />

          {/* Overview of Treatments in Simple Terms */}
          <section className="py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg my-8" id="overview">
            <div className="max-w-4xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
                  Therapeutic Options
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                  Overview of Treatments in Plain Language
                </h2>
                <p className="text-xs sm:text-sm text-[#5B6785]">
                  Modern vitiligo treatment focuses on two clinical objectives: halting active immune destruction and stimulating melanocyte stem cells to restore colour.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* 1. Topical JAK Inhibitors */}
                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] space-y-2">
                  <span className="text-[11px] font-bold text-[#147053] uppercase tracking-wider">
                    New Targeted Therapy
                  </span>
                  <h3 className="font-bold text-base text-[#0B1F6B]">Topical JAK Inhibitors</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Precision creams (such as ruxolitinib) that directly block the interferon-gamma (IFN-γ) signalling pathway inside skin cells, turning off the alarm that attracts destructive T-cells to melanocytes.
                  </p>
                </div>

                {/* 2. Narrowband UVB Phototherapy */}
                <div className="p-5 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] space-y-2">
                  <span className="text-[11px] font-bold text-[#1D5FE0] uppercase tracking-wider">
                    Light Therapy
                  </span>
                  <h3 className="font-bold text-base text-[#0B1F6B]">Narrowband UVB (NB-UVB)</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Administered 2 to 3 times weekly in a specialized clinic or home booth. Specific wavelengths (311 nm) suppress local cutaneous inflammation and stimulate follicular melanocyte stem cells to divide and repigment.
                  </p>
                </div>

                {/* 3. Topical Corticosteroids & Calcineurin Inhibitors */}
                <div className="p-5 rounded-2xl bg-[#FFF6EE] border border-[#FEDDC7] space-y-2">
                  <span className="text-[11px] font-bold text-[#F2884B] uppercase tracking-wider">
                    First-line Topicals
                  </span>
                  <h3 className="font-bold text-base text-[#0B1F6B]">Corticosteroids & Calcineurin Inhibitors</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Prescription ointments (e.g., tacrolimus, mometasone) used carefully under medical supervision to calm acute inflammation, particularly suitable for delicate facial and neck areas without skin thinning risks.
                  </p>
                </div>

                {/* 4. Surgical Grafting & Cellular Suspensions */}
                <div className="p-5 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC] space-y-2">
                  <span className="text-[11px] font-bold text-[#7C5CE0] uppercase tracking-wider">
                    For Stable Vitiligo
                  </span>
                  <h3 className="font-bold text-base text-[#0B1F6B]">Surgical Melanocyte Transplantation</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    When vitiligo has been completely inactive (no new or expanding patches) for at least 12 months, autologous skin or cellular grafting (MKTP) can transplant healthy pigment cells directly onto depigmented zones.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Treatment Journey Step-by-Step (Timeline) */}
          <section className="py-12" id="journey">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
                  What Typically Happens
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  The Treatment Journey: Setting Realistic Expectations
                </h2>
                <p className="text-sm text-[#5B6785]">
                  Repigmentation is biological and gradual. Knowing milestones in advance builds peace of mind.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white rounded-2xl border border-[#DDE5F5] shadow-xs flex items-start space-x-4">
                  <span className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] font-bold text-xs flex items-center justify-center shrink-0">
                    Month 1
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B1F6B]">Stabilization Phase</h3>
                    <p className="text-xs text-[#5B6785] mt-1">
                      The primary goal is arresting active disease. New patches stop appearing, and margins become well-defined. Visible repigmentation may not yet be evident to the naked eye.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-[#DDE5F5] shadow-xs flex items-start space-x-4">
                  <span className="w-10 h-10 rounded-xl bg-[#E3F6EF] text-[#1FA37A] font-bold text-xs flex items-center justify-center shrink-0">
                    Month 3
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B1F6B]">Follicular &lsquo;Freckling&rsquo; Appears</h3>
                    <p className="text-xs text-[#5B6785] mt-1">
                      Tiny dots of natural pigment (perifollicular repigmentation) begin emerging around hair follicles inside the white patch, like delicate islands of colour.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-[#DDE5F5] shadow-xs flex items-start space-x-4">
                  <span className="w-10 h-10 rounded-xl bg-[#EFEAFF] text-[#7C5CE0] font-bold text-xs flex items-center justify-center shrink-0">
                    Month 6+
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B1F6B]">Coalescence & Progress Evaluation</h3>
                    <p className="text-xs text-[#5B6785] mt-1">
                      Pigment islands expand and merge together. Your dermatologist compares high-resolution photographic logs and determines whether to maintain, taper, or rotate therapies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Plain-Language Innovation Explainer */}
          <section className="py-10 bg-gradient-to-r from-[#1FA37A]/10 via-[#1D5FE0]/10 to-[#7C5CE0]/10 rounded-3xl p-6 sm:p-10 border border-[#BCEBD7]" id="innovation">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white text-[#1FA37A] text-xs font-bold uppercase tracking-wider">
                <Microscope className="w-4 h-4" />
                <span>Science in Plain Language</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                Innovation in Vitiligo Science
              </h2>
              <p className="text-xs sm:text-sm text-[#1E2A4A] leading-relaxed">
                For decades, vitiligo was treated solely with broad immune-suppressing steroids. Today, translational medicine has pinpointed the exact cytokine signature (interferon-gamma / CXCL10) responsible for melanocyte detachment. Researchers are now developing oral JAK inhibitors, IL-15 receptor blockers to erase autoimmune memory cells, and peptide-based stimulators that wake up dormant hair-follicle stem cells without needing light exposure.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/expert-insights#innovation"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#1D5FE0] hover:underline"
                >
                  <span>Read clinical trial research updates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Medically Reviewed Badge */}
          <div className="mt-12">
            <MedicalBadge
              reviewerName="Dr. Marcus Vance, MD, FAAD & Dr. Rashmi Sharma, MD"
              reviewerTitle="Treatment & Clinical Guidelines Taskforce"
              date="October 2026"
            />
          </div>
        </div>
      </main>

      <Footer />

      <FindDoctorModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
      />
    </div>
  );
}
