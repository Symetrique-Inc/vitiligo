'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Globe, Shield, Sparkles, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export const Footer: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-[#DDE5F5] pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Soft gradient accents */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1D5FE0] via-[#7C5CE0] via-[#1FA37A] to-[#F2884B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Script Quote Banner */}
        <div className="text-center py-6 mb-12 border-b border-gray-100">
          <p className="font-script text-3xl sm:text-4xl text-[#0B1F6B] tracking-wide">
            &ldquo;{t.brand.footerQuote}&rdquo;
          </p>
          <p className="text-xs text-[#5B6785] mt-1 uppercase tracking-wider font-semibold">
            {t.brand.subline}
          </p>
        </div>

        {/* 4-column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0B1F6B] to-[#1D5FE0] flex items-center justify-center text-white font-bold text-sm">
                VH
              </div>
              <div>
                <span className="font-bold text-base font-serif text-[#0B1F6B] block">
                  VITILIGO HUB
                </span>
                <span className="text-xs text-[#5B6785]">
                  See Beyond the Skin
                </span>
              </div>
            </div>
            <p className="text-xs text-[#5B6785] leading-relaxed max-w-sm">
              An inclusive, science-backed global hub dedicated to understanding vitiligo, dismantling social stigma, and supporting patient confidence.
            </p>
            <div className="pt-2 text-xs text-gray-500 space-y-1">
              <p className="flex items-center space-x-1.5 font-medium text-[#0B1F6B]">
                <Shield className="w-3.5 h-3.5 text-[#1FA37A]" />
                <span>Reviewed by board-certified dermatologists</span>
              </p>
              <p className="flex items-center space-x-1.5 text-[#5B6785]">
                <Sparkles className="w-3.5 h-3.5 text-[#7C5CE0]" />
                <span>Non-judgmental &bull; Grade 8 reading level &bull; Free access</span>
              </p>
            </div>
          </div>

          {/* Column 1: Understand */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0B1F6B] uppercase tracking-wider">
              {t.nav.understand}
            </h4>
            <ul className="space-y-2 text-xs text-[#5B6785]">
              <li>
                <Link href="/understand#basics" className="hover:text-[#1D5FE0] transition-colors">
                  The Basics & Causes
                </Link>
              </li>
              <li>
                <Link href="/understand/stigma" className="hover:text-[#1D5FE0] transition-colors">
                  Myths vs Facts
                </Link>
              </li>
              <li>
                <Link href="/understand/biology" className="hover:text-[#1D5FE0] transition-colors">
                  Biology Infographic
                </Link>
              </li>
              <li>
                <Link href="/understand#ages" className="hover:text-[#1D5FE0] transition-colors">
                  Facts for Different Ages
                </Link>
              </li>
              <li>
                <Link href="/global-data" className="hover:text-[#1D5FE0] transition-colors">
                  Global Prevalence Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Care & Living */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0B1F6B] uppercase tracking-wider">
              Care & Community
            </h4>
            <ul className="space-y-2 text-xs text-[#5B6785]">
              <li>
                <Link href="/treatment#dermatologist" className="hover:text-[#1D5FE0] transition-colors">
                  Why See a Dermatologist
                </Link>
              </li>
              <li>
                <Link href="/treatment#overview" className="hover:text-[#1D5FE0] transition-colors">
                  Treatment Options
                </Link>
              </li>
              <li>
                <Link href="/my-life#timeline" className="hover:text-[#1D5FE0] transition-colors">
                  Walk in My Skin (Timeline)
                </Link>
              </li>
              <li>
                <Link href="/patient-journeys" className="hover:text-[#1D5FE0] transition-colors">
                  Patient Journeys
                </Link>
              </li>
              <li>
                <Link href="/my-life#wellbeing" className="hover:text-[#1D5FE0] transition-colors">
                  Emotional Wellbeing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Q&A */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0B1F6B] uppercase tracking-wider">
              Insights & Help
            </h4>
            <ul className="space-y-2 text-xs text-[#5B6785]">
              <li>
                <Link href="/expert-insights#ask" className="hover:text-[#1D5FE0] transition-colors">
                  Ask Anonymous Question
                </Link>
              </li>
              <li>
                <Link href="/expert-insights#perspectives" className="hover:text-[#1D5FE0] transition-colors">
                  Two Perspectives
                </Link>
              </li>
              <li>
                <Link href="/resources#find-doctor" className="hover:text-[#1D5FE0] transition-colors">
                  Doctor Directory
                </Link>
              </li>
              <li>
                <Link href="/resources#support-groups" className="hover:text-[#1D5FE0] transition-colors">
                  Support Groups
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1D5FE0] transition-colors">
                  Editorial & Medical Board
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer Banner (Mandatory & Visible) */}
        <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] text-xs text-[#5B6785] leading-relaxed mb-8 flex items-start space-x-3">
          <Shield className="w-4 h-4 text-[#0B1F6B] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#0B1F6B]">Medical Disclaimer: </span>
            {t.footer.disclaimer}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Accessibility */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>{t.footer.copyright}</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center text-green-700 bg-green-50 px-2 py-0.5 rounded-full font-medium">
              {t.footer.accessibility}
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <Link href="/about#transparency" className="hover:underline">
              Funding Transparency
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <button
                onClick={() => setLocale(locale === 'en' ? 'hi' : 'en')}
                className="text-xs text-[#1D5FE0] font-medium hover:underline"
              >
                {locale === 'en' ? 'Switch to हिन्दी (Hindi)' : 'Switch to English'}
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-100 hover:bg-[#EAF2FF] hover:text-[#0B1F6B] text-gray-600 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
