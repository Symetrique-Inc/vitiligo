'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Eye,
  Stethoscope,
  HeartHandshake,
  FileCheck,
  Clock,
  RotateCcw,
  ArrowRight,
  ArrowDown,
  Info,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface JourneyStep {
  number: number;
  badgeColor: string;
  badgeBg: string;
  title: string;
  phaseLabel: string;
  icon: React.ElementType;
  image: string;
  imageAlt: string;
  description: string;
  calloutHeader: string;
  calloutHeaderColor: string;
  calloutBg: string;
  calloutBorder: string;
  calloutText: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: 1,
    badgeColor: 'text-white',
    badgeBg: 'bg-[#1D5FE0]',
    title: 'Notice changes in your skin',
    phaseLabel: 'Detection & Observation',
    icon: Eye,
    image: '/images/journey-step-1.jpg',
    imageAlt: 'Arm skin with light vitiligo patch being observed',
    description:
      'You may notice lighter patches, changes in existing patches or new areas of affected skin. Vitiligo does not progress in the same way for everyone.',
    calloutHeader: 'What you can do next',
    calloutHeaderColor: 'text-[#1D5FE0]',
    calloutBg: 'bg-[#F2F7FF]',
    calloutBorder: 'border-[#D9E6FC]',
    calloutText:
      'Note when the patches appeared, whether they are changing and any questions you want to ask.',
  },
  {
    number: 2,
    badgeColor: 'text-white',
    badgeBg: 'bg-[#1D5FE0]',
    title: 'See a dermatologist',
    phaseLabel: 'Clinical Diagnosis',
    icon: Stethoscope,
    image: '/images/journey-step-2.jpg',
    imageAlt: 'Dermatologist examining patient skin with dermatoscope in clinic',
    description:
      "A dermatologist assesses your skin and medical history and determines whether the changes are consistent with vitiligo. They may use a Wood's lamp or other examination methods when appropriate.",
    calloutHeader: 'What to discuss',
    calloutHeaderColor: 'text-[#1D5FE0]',
    calloutBg: 'bg-[#F2F7FF]',
    calloutBorder: 'border-[#D9E6FC]',
    calloutText:
      'Type of vitiligo, affected areas, recent changes, other health conditions, treatment goals and the impact on your daily life.',
  },
  {
    number: 3,
    badgeColor: 'text-white',
    badgeBg: 'bg-[#1D5FE0]',
    title: 'Choose a treatment approach together',
    phaseLabel: 'Shared Decision Making',
    icon: HeartHandshake,
    image: '/images/journey-step-3.jpg',
    imageAlt: 'Doctor and patient reviewing treatment options on a tablet screen',
    description:
      'Treatment depends on the type and extent of vitiligo, whether it is progressing, your preferences, potential risks, cost and local availability. Some people choose active treatment; others prefer camouflage, support or monitoring.',
    calloutHeader: 'Your options may include',
    calloutHeaderColor: 'text-[#1D5FE0]',
    calloutBg: 'bg-[#F2F7FF]',
    calloutBorder: 'border-[#D9E6FC]',
    calloutText:
      'Topical medicines, phototherapy, selected systemic treatments, or other approaches for appropriate cases.',
  },
  {
    number: 4,
    badgeColor: 'text-white',
    badgeBg: 'bg-[#1D5FE0]',
    title: 'Check access before starting',
    phaseLabel: 'Access & Logistics',
    icon: FileCheck,
    image: '/images/journey-step-4.jpg',
    imageAlt: 'Patient reviewing prescription and insurance paperwork at clinic reception',
    description:
      'A recommended treatment may not be immediately accessible. Check local approval, prescription requirements, insurance coverage, out-of-pocket costs, travel and equipment availability.',
    calloutHeader: 'Questions to ask',
    calloutHeaderColor: 'text-[#1D5FE0]',
    calloutBg: 'bg-[#F2F7FF]',
    calloutBorder: 'border-[#D9E6FC]',
    calloutText:
      'Is the treatment available in my country? Does my insurer require previous treatments? Where can I receive it, and what will it cost?',
  },
  {
    number: 5,
    badgeColor: 'text-white',
    badgeBg: 'bg-[#1D5FE0]',
    title: 'Start treatment and allow time',
    phaseLabel: 'Consistency & Adherence',
    icon: Clock,
    image: '/images/journey-step-5.jpg',
    imageAlt: 'Patient applying topical dermatological cream gently at home',
    description:
      'Follow the treatment plan agreed with your dermatologist. Different options have different schedules, and visible changes may take months. Consistency, tolerability and regular review all matter.',
    calloutHeader: 'Key principle',
    calloutHeaderColor: 'text-[#1D5FE0]',
    calloutBg: 'bg-[#F2F7FF]',
    calloutBorder: 'border-[#D9E6FC]',
    calloutText:
      'Patience and consistency are essential. Repigmentation typically starts around hair follicles and requires consistent treatment over several months.',
  },
  {
    number: 6,
    badgeColor: 'text-white',
    badgeBg: 'bg-[#1FA37A]',
    title: 'Review progress and plan what comes next',
    phaseLabel: 'Review & Refine',
    icon: RotateCcw,
    image: '/images/journey-step-6.jpg',
    imageAlt: 'Dermatologist and patient reviewing repigmentation progress photos in consultation',
    description:
      'Your dermatologist reviews changes in pigmentation, disease activity, side effects and how manageable the treatment is. They may continue, adjust or change the approach, or discuss maintenance.',
    calloutHeader: 'Remember',
    calloutHeaderColor: 'text-[#1FA37A]',
    calloutBg: 'bg-[#EAF8F2]',
    calloutBorder: 'border-[#C2E8D7]',
    calloutText:
      'Progress varies. Treatment may restore some skin colour or help stabilise the condition, but it is not currently a guaranteed cure.',
  },
];

export const TreatmentJourneyCycle: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const scrollToStep = (stepNumber: number) => {
    setActiveStep(stepNumber);
    const element = document.getElementById(`step-card-${stepNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="journey" className="mb-16 scroll-mt-24" aria-labelledby="journey-heading">
      {/* 1. Header Banner matching mockup */}
      <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
              Treatment & Care / Your Journey
            </span>
          </div>

          <h2
            id="journey-heading"
            className="text-2xl sm:text-4xl lg:text-[40px] font-bold font-serif text-[#0B1F6B] leading-tight"
          >
            Your vitiligo treatment journey, step by step
          </h2>

          <p className="text-sm sm:text-base text-[#5B6785] leading-relaxed">
            From your first appointment to exploring treatment options, understand what may happen
            next, how long treatments can take and what could affect access to care.
          </p>
        </div>

        {/* 2. Interactive Cycle Flow Roadmap Diagram */}
        <div className="mt-8 pt-8 border-t border-[#EEF2FA]">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F6B]">
                The Continuous Care Cycle
              </span>
              <p className="text-xs text-[#5B6785]">
                Click any stage to jump into details or view the full care cycle below
              </p>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EAF8F2] border border-[#BCEBD7] text-[11px] font-bold text-[#147053]">
              <RotateCcw className="w-3 h-3 text-[#1FA37A]" />
              <span>Ongoing Multi-Cycle Care</span>
            </div>
          </div>

          {/* Desktop & Tablet Cycle Roadmap Bar */}
          <div className="hidden md:grid grid-cols-6 gap-2 lg:gap-3 relative">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === step.number;
              const isLast = idx === journeySteps.length - 1;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => scrollToStep(step.number)}
                  className={`group relative text-left p-3.5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-[#F2F7FF] border-[#1D5FE0] shadow-sm'
                      : 'bg-[#F9FBFE] border-[#E2EAF8] hover:bg-white hover:border-[#1D5FE0]/60 hover:shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${step.badgeBg} ${step.badgeColor}`}
                    >
                      {step.number}
                    </span>
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isLast ? 'text-[#1FA37A]' : 'text-[#1D5FE0]'
                      }`}
                    />
                  </div>
                  <h4 className="text-xs font-bold text-[#0B1F6B] line-clamp-2 leading-snug group-hover:text-[#1D5FE0] transition-colors">
                    {step.title}
                  </h4>
                  <span className="text-[10px] text-[#7B88A8] block mt-1 line-clamp-1">
                    {step.phaseLabel}
                  </span>

                  {/* Flow Arrow Indicator to next step */}
                  {!isLast ? (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border border-[#D0DCF2] items-center justify-center text-[#1D5FE0] shadow-2xs">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  ) : (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-[#EAF8F2] border border-[#BCEBD7] items-center justify-center text-[#1FA37A] shadow-2xs title='Cycles back for maintenance'">
                      <RotateCcw className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Cycle Loop Callout Ribbon */}
          <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#F0F5FF] via-[#EBF3FF] to-[#EAF8F2] border border-[#D5E3FC] flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-[#CADCFA] text-[#1D5FE0] flex items-center justify-center shrink-0 shadow-2xs">
                <RotateCcw className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-[13px] text-[#1E2A4A] leading-relaxed">
                <strong>Why is this a cycle?</strong> Vitiligo treatment is rarely a one-time
                event. Progress is regularly reviewed (Step 6) to adjust approaches (Step 3) or
                enter long-term maintenance (Step 5).
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-[#1D5FE0]">
              <span>6 Connected Stages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Detailed Step Cards Grid with Images & Guidance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {journeySteps.map((step) => {
          const isSelected = activeStep === step.number;

          return (
            <article
              key={step.number}
              id={`step-card-${step.number}`}
              className={`rounded-3xl bg-white border p-6 flex flex-col justify-between transition-all duration-200 relative overflow-hidden ${
                isSelected
                  ? 'border-[#1D5FE0] ring-2 ring-[#1D5FE0]/20 shadow-md'
                  : 'border-[#DDE5F5] hover:border-[#1D5FE0]/50 hover:shadow-xs'
              }`}
            >
              <div className="space-y-4">
                {/* Header: Step Number Badge & Step Title */}
                <div className="flex items-start space-x-3">
                  <span
                    className={`w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center shrink-0 shadow-xs ${step.badgeBg} ${step.badgeColor}`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B88A8] block">
                      Stage 0{step.number} &bull; {step.phaseLabel}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B1F6B] leading-snug">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Step Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full border border-[#E9EFF8] bg-[#F7F9FD] shadow-xs">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Main Body Description */}
                <p className="text-xs sm:text-sm text-[#1E2A4A] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Specific Guidance Callout Box */}
              <div
                className={`mt-5 p-4 rounded-2xl border ${step.calloutBg} ${step.calloutBorder} space-y-1.5`}
              >
                <div className="flex items-center space-x-2">
                  {step.number === 6 ? (
                    <Sparkles className="w-3.5 h-3.5 text-[#1FA37A]" />
                  ) : step.number === 4 ? (
                    <HelpCircle className="w-3.5 h-3.5 text-[#1D5FE0]" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1D5FE0]" />
                  )}
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider ${step.calloutHeaderColor}`}
                  >
                    {step.calloutHeader}
                  </h4>
                </div>
                <p className="text-xs text-[#2A3654] leading-relaxed font-medium">
                  {step.calloutText}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* 4. Bottom Continuous Care Cycle Loop Banner */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0FAF5] border border-[#D5E3FC] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
              <RotateCcw className="w-4 h-4 text-[#1FA37A]" />
              <span>Full Cycle Summary</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F6B]">
              Your care adapts as your skin and needs change
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
              Vitiligo management is collaborative and cyclical. You and your healthcare team
              continually evaluate what works, accommodate lifestyle changes, explore new treatment
              developments, or transition between active repigmentation and maintenance care.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href="#checklist"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#0B1F6B] hover:bg-[#1D5FE0] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Doctor Discussion Checklist</span>
            </a>
            <a
              href="#topicals"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-white hover:bg-[#F2F7FF] border border-[#CCDDF7] text-[#0B1F6B] text-xs font-semibold shadow-2xs transition-colors"
            >
              <span>Explore Specific Treatments</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
