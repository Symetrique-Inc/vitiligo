'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export const Footer: React.FC = () => {
  const { tById } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-[#DDE5F5] pt-14 pb-10 mt-16 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Columns Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1 — About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <Link href="/" className="inline-block" aria-label="OneVitiligo Home">
                <Image
                  src="/images/onevitiligo-logo.png"
                  alt={tById('VTH-00735', 'OneVitiligo - Every skin. Every story. One community.')}
                  width={200}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F6B]">
              {tById('VTH-00006', 'About')}
            </h4>
            <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
              {tById('VTH-00725', 'OneVitiligo is a dedicated initiative for people living with vitiligo and those who support them. Our aim is to make information easier to understand and help people prepare for conversations about their care.')}
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F6B]">
              {tById('VTH-00726', 'Explore')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B6785]">
              <li>
                <Link href="/understand-vitiligo" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00711', 'Understand Vitiligo')}
                </Link>
              </li>
              <li>
                <Link href="/understand-vitiligo/stigma-and-misconceptions" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00727', 'Stigma & Misconceptions')}
                </Link>
              </li>
              <li>
                <Link href="/living-with-vitiligo" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00712', 'My Life & Daily Living')}
                </Link>
              </li>
              <li>
                <Link href="/treatment-and-care" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00068', 'Treatment & Care')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00714', 'Resources & Support')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — OneVitiligo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F6B]">
              OneVitiligo
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B6785]">
              <li>
                <Link href="/about" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00006', 'About us')}
                </Link>
              </li>
              <li>
                <Link href="/about#partner" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00728', 'Partner with us')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00057', 'Contact')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00058', 'Privacy policy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#1D5FE0] transition-colors">
                  {tById('VTH-00059', 'Terms of use')}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem('vitiligo_hub_cookie_consent');
                    window.location.reload();
                  }}
                  className="hover:text-[#1D5FE0] transition-colors text-left"
                >
                  {tById('VTH-00729', 'Cookie settings')}
                </button>
              </li>
              <li className="pt-1 border-t border-gray-100">
                <Link
                  href="/admin/translations"
                  className="text-[#1D5FE0] hover:text-[#0B1F6B] font-semibold transition-colors flex items-center space-x-1"
                >
                  <span>Translation Management</span>
                  <span className="text-[10px] bg-[#EAF2FF] text-[#1D5FE0] px-1.5 py-0.2 rounded font-bold">
                    Super Admin
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] text-xs text-[#5B6785] leading-relaxed mb-8">
          <p className="font-semibold text-[#0B1F6B] mb-1">{tById('VTH-00730', 'Medical Disclaimer:')}</p>
          <p>
            {tById('VTH-00731', 'The information on OneVitiligo is for general education only. It is not medical advice and does not replace a consultation with a qualified doctor. Always speak to a dermatologist or your healthcare professional about your own skin and treatment. If you have urgent health concerns, contact a doctor or your local emergency service.')}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#5B6785]">
          <p>{tById('VTH-00732', '© 2026 OneVitiligo. All rights reserved.')}</p>

          <button
            onClick={scrollToTop}
            aria-label={tById('VTH-00741', 'Scroll back to top')}
            className="flex items-center space-x-1 hover:text-[#0B1F6B] transition-colors"
          >
            <span>{tById('VTH-00733', 'Back to top')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
