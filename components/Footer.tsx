'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-[#DDE5F5] pt-14 pb-10 mt-16 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Columns Footer matching DOC A G2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1 — About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <path d="M12 7 C7 13, 6 21, 14 27 C11 21, 10 13, 12 7 Z" fill="#0B1F6B" />
                  <path d="M16 4 C14 11, 14 21, 16 28 C18 21, 18 11, 16 4 Z" fill="#1D5FE0" />
                  <path d="M20 7 C25 13, 26 21, 18 27 C21 21, 22 13, 20 7 Z" fill="#1FA37A" />
                </svg>
              </div>
              <span className="font-extrabold text-base font-serif text-[#0B1F6B]">
                VITILIGO HUB
              </span>
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F6B]">
              About
            </h4>
            <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
              Vitiligo Hub is a Symetrique initiative. We bring people living with vitiligo, their families, doctors and researchers together around one goal: better understanding and better care.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F6B]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B6785]">
              <li>
                <Link href="/understand-vitiligo" className="hover:text-[#1D5FE0] transition-colors">
                  Understand Vitiligo
                </Link>
              </li>
              <li>
                <Link href="/understand-vitiligo/stigma-and-misconceptions" className="hover:text-[#1D5FE0] transition-colors">
                  Stigma & Misconceptions
                </Link>
              </li>
              <li>
                <Link href="/living-with-vitiligo" className="hover:text-[#1D5FE0] transition-colors">
                  My Life & Daily Living
                </Link>
              </li>
              <li>
                <Link href="/treatment-and-care" className="hover:text-[#1D5FE0] transition-colors">
                  Treatment & Care
                </Link>
              </li>
              <li>
                <Link href="/find-a-doctor" className="hover:text-[#1D5FE0] transition-colors">
                  Find a Doctor
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Symetrique */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F6B]">
              Symetrique
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B6785]">
              <li>
                <Link href="/about" className="hover:text-[#1D5FE0] transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/about#partner" className="hover:text-[#1D5FE0] transition-colors">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1D5FE0] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#1D5FE0] transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#1D5FE0] transition-colors">
                  Terms of use
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
                  Cookie settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* G3 — Medical Disclaimer (always visible, not collapsed) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] text-xs text-[#5B6785] leading-relaxed mb-8">
          <p className="font-semibold text-[#0B1F6B] mb-1">Medical Disclaimer:</p>
          <p>
            The information on Vitiligo Hub is for general education only. It is not medical advice and does not replace a consultation with a qualified doctor. Always speak to a dermatologist or your healthcare professional about your own skin and treatment. If you have urgent health concerns, contact a doctor or your local emergency service.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#5B6785]">
          <p>© 2026 Symetrique. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center space-x-1 hover:text-[#0B1F6B] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
