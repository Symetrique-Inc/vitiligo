'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Globe, Stethoscope, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { FindDoctorModal } from '@/components/FindDoctorModal';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/understand', label: t.nav.understand },
    { href: '/my-life', label: t.nav.myLife },
    { href: '/treatment', label: t.nav.treatment },
    { href: '/expert-insights', label: t.nav.expertInsights },
    { href: '/resources', label: t.nav.resources },
  ];

  const quickSuggestions = [
    { title: "What is vitiligo?", href: "/understand#basics" },
    { title: "Myths vs Facts (9 Common Myths)", href: "/understand/stigma" },
    { title: "Why see a dermatologist?", href: "/treatment#dermatologist" },
    { title: "Ask questions anonymously", href: "/expert-insights#ask" },
    { title: "Walk in My Skin daily timeline", href: "/my-life#timeline" },
    { title: "Global prevalence & 70M+ data", href: "/global-data" },
  ];

  const filteredSuggestions = searchQuery.trim()
    ? quickSuggestions.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : quickSuggestions;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#DDE5F5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5FE0] rounded-xl p-1"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0B1F6B] via-[#1D5FE0] to-[#7C5CE0] flex items-center justify-center shadow-md shadow-[#0B1F6B]/15 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  {/* Stylized vitiligo dual-pigment cell mark */}
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-2.38 1.05-4.52 2.73-6l1.27 1.27C6.73 8.35 6 9.84 6 12c0 3.31 2.69 6 6 6 2.16 0 3.65-.73 4.73-1.99l1.27 1.26C16.52 18.95 14.38 20 12 20z"
                    fill="currentColor"
                  />
                  <circle cx="15.5" cy="8.5" r="3.5" fill="#FFFFFF" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-[#0B1F6B] font-serif leading-none">
                  VITILIGO HUB
                </span>
                <span className="text-[11px] font-medium text-[#5B6785] tracking-wide mt-0.5">
                  See Beyond the Skin
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-[#0B1F6B] bg-[#EAF2FF] font-semibold'
                        : 'text-[#1E2A4A] hover:text-[#0B1F6B] hover:bg-gray-100/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Utilities: Search, Language, Find Doctor */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Search Toggle */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="flex items-center space-x-1.5 px-3 py-2 text-sm text-[#5B6785] hover:text-[#0B1F6B] rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Search vitiligo hub"
                  aria-expanded={isSearchOpen}
                >
                  <Search className="w-4 h-4 text-[#1D5FE0]" />
                  <span className="text-xs font-medium">Search</span>
                </button>

                {/* Search Dropdown Modal */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#DDE5F5] p-3 z-50 animate-fadeIn">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        autoFocus
                        placeholder={t.nav.searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0] focus:ring-1 focus:ring-[#1D5FE0]"
                      />
                    </div>
                    <div className="mt-3 divide-y divide-gray-100 max-h-60 overflow-y-auto">
                      <p className="text-[11px] font-semibold text-gray-400 px-2 py-1 uppercase tracking-wider">
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

              {/* Language Selector */}
              <div className="relative flex items-center bg-[#F4F8FF] border border-[#DDE5F5] rounded-full p-1 text-xs font-medium">
                <Globe className="w-3.5 h-3.5 text-[#1D5FE0] ml-2 mr-1" />
                <button
                  onClick={() => setLocale('en')}
                  className={`px-2 py-1 rounded-full transition-all ${
                    locale === 'en'
                      ? 'bg-white text-[#0B1F6B] font-bold shadow-xs'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  aria-label="Switch to English"
                >
                  English
                </button>
                <button
                  onClick={() => setLocale('hi')}
                  className={`px-2 py-1 rounded-full transition-all ${
                    locale === 'hi'
                      ? 'bg-white text-[#0B1F6B] font-bold shadow-xs'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  aria-label="Switch to Hindi (हिन्दी)"
                >
                  हिन्दी
                </button>
              </div>

              {/* Find a Doctor Navy Pill CTA */}
              <button
                onClick={() => setIsDoctorModalOpen(true)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-md shadow-[#0B1F6B]/15 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Stethoscope className="w-4 h-4 text-white" />
                <span>{t.nav.findDoctor}</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center space-x-2 xl:hidden">
              <button
                onClick={() => setIsDoctorModalOpen(true)}
                className="p-2 rounded-full bg-[#0B1F6B] text-white sm:hidden"
                aria-label="Find Doctor"
              >
                <Stethoscope className="w-4 h-4" />
              </button>
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
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDoctorModalOpen(true);
                }}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0]"
              >
                <Stethoscope className="w-4 h-4 text-white" />
                <span>{t.nav.findDoctor}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Doctor Modal */}
      <FindDoctorModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
      />
    </>
  );
};
