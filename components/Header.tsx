'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Globe, Stethoscope, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { FindDoctorModal } from '@/components/FindDoctorModal';
import { div } from 'framer-motion/client';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/understand-vitiligo', label: 'Understand Vitiligo' },
    { href: '/living-with-vitiligo', label: 'My Life & Daily Living' },
    { href: '/treatment-and-care', label: 'Treatment & Care' },
    { href: '/expert-insights', label: 'Expert Insights' },
    { href: '/resources', label: 'Resources & Support' },
  ];

  const quickSuggestions = [
    { title: "What is vitiligo?", href: "/understand-vitiligo#p02-s03" },
    { title: "Myths vs Facts (10 Common Myths)", href: "/understand-vitiligo/stigma-and-misconceptions#p03-s02" },
    { title: "Skin biology & melanocytes infographic", href: "/understand-vitiligo#p02-s04" },
    { title: "Why see a dermatologist?", href: "/understand-vitiligo/stigma-and-misconceptions#p03-s05" },
    { title: "Ask questions anonymously", href: "/expert-insights#ask" },
    { title: "Treatment & Care Options", href: "/treatment-and-care" },
    { title: "Global prevalence: The Lancet Public Health 2024", href: "/understand-vitiligo#p02-s06" },
  ];

  const filteredSuggestions = searchQuery.trim()
    ? quickSuggestions.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : quickSuggestions;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5ECF6] transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* 3-petal Logo matching reference screenshot */}
            <Link
              href="/"
              className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5FE0] rounded-xl py-1 pr-2 shrink-0"
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none">
                  {/* Left Navy Petal */}
                  <path
                    d="M12 7 C7 13, 6 21, 14 27 C11 21, 10 13, 12 7 Z"
                    fill="#0B1F6B"
                  />
                  {/* Center Royal Blue Petal */}
                  <path
                    d="M16 4 C14 11, 14 21, 16 28 C18 21, 18 11, 16 4 Z"
                    fill="#1D5FE0"
                  />
                  {/* Right Teal Petal */}
                  <path
                    d="M20 7 C25 13, 26 21, 18 27 C21 21, 22 13, 20 7 Z"
                    fill="#1FA37A"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[17px] tracking-tight text-[#0B1F6B] font-serif leading-none">
                  VITILIGO HUB
                </span>
                <span className="text-[11px] font-medium text-[#5B6785] tracking-wide mt-0.5">
                  See Beyond the Skin
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with active blue underline indicator */}
            <nav className="hidden xl:flex items-center space-x-5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 text-[13px] transition-all relative ${
                      isActive
                        ? 'text-[#0B1F6B] font-bold border-b-[2.5px] border-[#1D5FE0]'
                        : 'text-[#1E2A4A] hover:text-[#0B1F6B] font-medium hover:border-b-2 hover:border-[#1D5FE0]/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Utilities matching screenshot */}
            <div className="hidden md:flex items-center space-x-3 shrink-0">
              {/* Search Button */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1E2A4A] bg-[#F8FAFF] hover:bg-[#EAF2FF] rounded-full border border-[#DDE5F5] transition-colors"
                  aria-label="Search vitiligo hub"
                  aria-expanded={isSearchOpen}
                >
                  <Search className="w-3.5 h-3.5 text-[#1D5FE0]" />
                  <span>Search</span>
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#DDE5F5] p-3 z-50 animate-fadeIn">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search topics, questions, treatments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0] focus:ring-1 focus:ring-[#1D5FE0]"
                      />
                    </div>
                    <div className="mt-3 divide-y divide-gray-100 max-h-60 overflow-y-auto">
                      <p className="text-[10px] font-bold text-gray-400 px-2 py-1 uppercase tracking-wider">
                        Suggested Topics
                      </p>
                      {filteredSuggestions.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setIsSearchOpen(false)}
                          className="block px-2.5 py-2 text-xs text-[#1E2A4A] hover:bg-[#EAF2FF] hover:text-[#0B1F6B] rounded-lg transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language Dropdown Selector (English v / हिन्दी) */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1E2A4A] bg-[#F8FAFF] hover:bg-[#EAF2FF] rounded-full border border-[#DDE5F5] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#1D5FE0]" />
                  <span>{locale === 'hi' ? 'हिन्दी' : 'English'}</span>
                  <ChevronDown className="w-3 h-3 text-gray-500" />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-[#DDE5F5] py-1 z-50 animate-fadeIn">
                    <button
                      onClick={() => {
                        setLocale('en');
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#EAF2FF] transition-colors ${
                        locale === 'en' ? 'font-bold text-[#0B1F6B]' : 'text-gray-700'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLocale('hi');
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#EAF2FF] transition-colors ${
                        locale === 'hi' ? 'font-bold text-[#0B1F6B]' : 'text-gray-700'
                      }`}
                    >
                      हिन्दी (Hindi)
                    </button>
                  </div>
                )}
              </div>

              {/* Find a Doctor Navy Pill CTA */}
              <Link
                href="/find-a-doctor"
                className="inline-flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-md shadow-[#0B1F6B]/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Stethoscope className="w-3.5 h-3.5 text-white" />
                <span>Find a Doctor</span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center space-x-2 xl:hidden">
              <Link
                href="/find-a-doctor"
                className="p-2 rounded-full bg-[#0B1F6B] text-white sm:hidden"
                aria-label="Find Doctor"
              >
                <Stethoscope className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl text-gray-700 hover:text-[#0B1F6B] hover:bg-gray-100"
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#DDE5F5] px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-500">Language / भाषा:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLocale('en')}
                  className={`px-3 py-1 rounded-full text-xs ${
                    locale === 'en' ? 'bg-[#0B1F6B] text-white font-bold' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLocale('hi')}
                  className={`px-3 py-1 rounded-full text-xs ${
                    locale === 'hi' ? 'bg-[#0B1F6B] text-white font-bold' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium ${
                      isActive ? 'bg-[#EAF2FF] text-[#0B1F6B] font-bold' : 'text-[#1E2A4A] hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2">
              <Link
                href="/find-a-doctor"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0]"
              >
                <Stethoscope className="w-4 h-4 text-white" />
                <span>Find a Doctor</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Doctor Directory Modal */}
      <FindDoctorModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
      />
    </>
  );
};
