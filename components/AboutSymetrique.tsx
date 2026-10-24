'use client';

import React from 'react';
import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Share2, ArrowRight } from 'lucide-react';
import { PlaceholderTag } from '@/components/PlaceholderTag';

export const AboutSymetrique: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 bg-white/60 relative" aria-labelledby="about-symetrique-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-bold text-[#1D5FE0] tracking-wider uppercase block mb-1">
            WHO WE ARE
          </span>
        </div>

        {/* Two-Column Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-[#1E2A4A] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          <div className="space-y-4">
            <p className="text-[#0B1F6B]">
              Vitiligo Hub is built by Symetrique. We started with a simple belief: the people who live with a condition understand it in ways no textbook can. Too often their experience is missing from the conversations where care is designed and new treatments are developed.
            </p>
            <p className="text-[#0A0A0A]">
              We are changing that. We listen to people living with vitiligo and to the doctors who care for them. With clear consent, we collect real experiences — how symptoms change, how treatment feels, what daily life is like — and turn them into reliable evidence. We then work with researchers and pharmaceutical companies so that new treatments and services reflect what patients actually need.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F8FF] border border-[#DDE5F5]">
              <p className="font-serif font-bold text-xl sm:text-2xl text-[#0B1F6B] leading-snug">
                &ldquo;We are not here to sell a product. We are here to make sure patients are heard, and to fight this disease together.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 sm:mb-10">
          {/* Card 1: Patients first */}
          <div className="p-6 rounded-3xl bg-[#EAF2FF] border border-[#D5E2FA] flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1D5FE0] text-white flex items-center justify-center mb-4 shadow-xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#0B1F6B] mb-2">
                Patients first
              </h3>
              <p className="text-sm text-[#5B6785] leading-relaxed">
                Everything starts with the patient voice. We design our questions, content and tools with people who live with vitiligo, not just for them.
              </p>
            </div>
          </div>

          {/* Card 2: Real, trusted evidence */}
          <div className="p-6 rounded-3xl bg-[#EFEAFF] border border-[#DCD3FC] flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7C5CE0] text-white flex items-center justify-center mb-4 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#0B1F6B] mb-2">
                Real, trusted evidence
              </h3>
              <p className="text-sm text-[#5B6785] leading-relaxed">
                We gather patient-reported experiences with consent, in English and Hindi, and handle them to strict privacy standards. Information is reviewed by medical experts before it is published.
              </p>
            </div>
          </div>

          {/* Card 3: Connecting innovators */}
          <div className="p-6 rounded-3xl bg-[#E3F6EF] border border-[#BCEBD7] flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1FA37A] text-white flex items-center justify-center mb-4 shadow-xs">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#0B1F6B] mb-2">
                Connecting innovators
              </h3>
              <p className="text-sm text-[#5B6785] leading-relaxed">
                We bring patients, dermatologists, researchers and pharmaceutical partners to the same table, so research is guided by real-world needs and progress reaches patients sooner.
              </p>
            </div>
          </div>
        </div>

        {/* Our Data Promise Callout Box */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DDE5F5] shadow-xs mb-8 sm:mb-10 max-w-4xl">
          <h3 className="text-lg font-bold font-serif text-[#0B1F6B] mb-2.5">
            Your experience, your choice
          </h3>
          <ul className="bullet-list bullet-blue mb-3 space-y-1">
            <li>You decide whether to share your experience. Taking part is always optional.</li>
            <li>We only share information with partners in a form that does not identify you.</li>
            <li>We never sell your personal data.</li>
            <li>You can withdraw your consent at any time.</li>
          </ul>
          <Link
            href="/privacy"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1D5FE0] hover:underline"
          >
            <span>Read our privacy policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* CTA Band */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1F6B] via-[#142B7E] to-[#1D5FE0] text-white p-7 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">
              Together, we can change what living with vitiligo looks like.
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Join patients, families, clinicians, and researchers working to improve vitiligo care worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/share"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-[#0B1F6B] hover:bg-blue-50 transition-colors shadow-sm inline-flex items-center"
            >
              <span>Share your experience →</span>
              <PlaceholderTag label="Coming Soon" />
            </Link>

            <Link
              href="/about#partner"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors"
            >
              Partner with Symetrique →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
