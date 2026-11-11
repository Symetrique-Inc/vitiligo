'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage, SUPPORTED_LOCALES, Locale } from '@/components/LanguageContext';

interface NavItem {
  href: string;
  labels: Record<Locale, string>;
}

/**
 * Short, sweet navigation items for all supported languages.
 * Matches the clean single-line aesthetic from onevitiligo.com (Image 3).
 */
const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    labels: {
      en: 'Home',
      hi: 'होम',
      mr: 'मुखपृष्ठ',
      bn: 'হোম',
      ta: 'முகப்பு',
      te: 'హోమ్',
      kn: 'ಮುಖಪುಟ',
    },
  },
  {
    href: '/about',
    labels: {
      en: 'About',
      hi: 'हमारे बारे में',
      mr: 'आमच्याविषयी',
      bn: 'আমাদের সম্পর্কে',
      ta: 'எங்களைப் பற்றி',
      te: 'మా గురించి',
      kn: 'ನಮ್ಮ ಬಗ್ಗೆ',
    },
  },
  {
    href: '/understand-vitiligo',
    labels: {
      en: 'Understand Vitiligo',
      hi: 'विटिलिगो समझें',
      mr: 'विटिलिगो समजून घ्या',
      bn: 'ভিটিলিগো বুঝুন',
      ta: 'விட்டிலிகோ புரிதல்',
      te: 'విటిలిగో అవగాహన',
      kn: 'ವಿಟಿಲಿಗೋ ತಿಳಿಯಿರಿ',
    },
  },
  {
    href: '/living-with-vitiligo',
    labels: {
      en: 'My Life & Daily Living',
      hi: 'दैनिक जीवन',
      mr: 'दैनंदिन जीवन',
      bn: 'দৈনন্দিন জীবন',
      ta: 'அன்றாட வாழ்வு',
      te: 'రోజువారీ జీవనం',
      kn: 'ದಿನನಿತ್ಯದ ಬದುಕು',
    },
  },
  {
    href: '/treatment-and-care',
    labels: {
      en: 'Treatment & Care',
      hi: 'उपचार एवं देखभाल',
      mr: 'उपचार आणि काळजी',
      bn: 'চিকিৎসা ও পরিচর্যা',
      ta: 'சிகிச்சை & பராமரிப்பு',
      te: 'చికిత్స & సంరక్షణ',
      kn: 'ಚಿಕಿತ್ಸೆ & ಆರೈಕೆ',
    },
  },
  {
    href: '/latest-developments',
    labels: {
      en: 'Treatment Developments',
      hi: 'उपचार में नए विकास',
      mr: 'उपचार घडामोडी',
      bn: 'চিকিৎসায় নতুন অগ্রগতি',
      ta: 'சிகிச்சை முன்னேற்றங்கள்',
      te: 'చికిత్స పురోగతులు',
      kn: 'ಚಿಕಿತ್ಸಾ ಬೆಳವಣಿಗೆಗಳು',
    },
  },
  {
    href: '/resources',
    labels: {
      en: 'Resources & Support',
      hi: 'संसाधन व सहायता',
      mr: 'साधने व आधार',
      bn: 'উৎস ও সহায়তা',
      ta: 'வளங்கள் & ஆதரவு',
      te: 'వనరులు & మద్దతు',
      kn: 'ಸಂಪನ್ಮೂಲ & ಬೆಂಬಲ',
    },
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { locale, setLocale, tById } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const quickSuggestions = [
    { title: 'What is vitiligo?', href: '/understand-vitiligo#p02-s03' },
    { title: 'Myths vs Facts (10 Common Myths)', href: '/understand-vitiligo/stigma-and-misconceptions#p03-s02' },
    { title: 'Skin biology & melanocytes infographic', href: '/understand-vitiligo#p02-s04' },
    { title: 'Why see a dermatologist?', href: '/understand-vitiligo/stigma-and-misconceptions#p03-s05' },
    { title: 'Treatment developments & clinical updates', href: '/latest-developments' },
    { title: 'Treatment & Care Options', href: '/treatment-and-care' },
    { title: 'Global prevalence: The Lancet Public Health 2024', href: '/understand-vitiligo#p02-s06' },
  ];

  const filteredSuggestions = searchQuery.trim()
    ? quickSuggestions.filter((s) => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : quickSuggestions;

  const currentLangInfo = SUPPORTED_LOCALES.find((l) => l.code === locale) ?? SUPPORTED_LOCALES[0];

  const getNavLabel = (item: NavItem): string => {
    return item.labels[locale] || item.labels.en;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5ECF6] transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* OneVitiligo Brand Logo with Tagline */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5FE0] rounded-xl py-1 pr-2 shrink-0"
              aria-label="OneVitiligo Home"
            >
              <Image
                src="/images/onevitiligo-logo.png"
                alt="OneVitiligo - Every skin. Every story. One community."
                width={220}
                height={54}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation matching Image 3: short, sweet, single line */}
            <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6" aria-label="Main Navigation">
              {NAV_ITEMS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 text-[13px] whitespace-nowrap transition-all relative ${
                      isActive
                        ? 'text-[#0B1F6B] font-bold border-b-[2.5px] border-[#1D5FE0]'
                        : 'text-[#1E2A4A] hover:text-[#0B1F6B] font-medium hover:border-b-2 hover:border-[#1D5FE0]/40'
                    }`}
                  >
                    {getNavLabel(link)}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Utilities */}
            <div className="hidden md:flex items-center space-x-3 shrink-0">
              {/* Search Button */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1E2A4A] bg-[#F8FAFF] hover:bg-[#EAF2FF] rounded-full border border-[#DDE5F5] transition-colors"
                  aria-label="Search OneVitiligo"
                  aria-expanded={isSearchOpen}
                >
                  <Search className="w-3.5 h-3.5 text-[#1D5FE0]" />
                  <span>{tById('VTH-00715', 'Search')}</span>
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#DDE5F5] p-3 z-50 animate-fadeIn">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        autoFocus
                        placeholder={tById('VTH-01079', 'Search topics, questions, treatments...')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0] focus:ring-1 focus:ring-[#1D5FE0]"
                      />
                    </div>
                    <div className="mt-3 divide-y divide-gray-100 max-h-60 overflow-y-auto">
                      <p className="text-[10px] font-bold text-gray-400 px-2 py-1 uppercase tracking-wider">
                        {tById('VTH-01080', 'Suggested Topics')}
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

              {/* Language Dropdown Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1E2A4A] bg-[#F8FAFF] hover:bg-[#EAF2FF] rounded-full border border-[#DDE5F5] transition-colors"
                  aria-label="Select language"
                  aria-expanded={isLangOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-[#1D5FE0]" />
                  <span>{currentLangInfo.native}</span>
                  <ChevronDown className="w-3 h-3 text-gray-500" />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-[#DDE5F5] py-1 z-50 animate-fadeIn max-h-72 overflow-y-auto">
                    {SUPPORTED_LOCALES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLocale(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs hover:bg-[#EAF2FF] transition-colors flex items-center justify-between ${
                          locale === lang.code ? 'font-bold text-[#0B1F6B] bg-[#F0F5FF]' : 'text-gray-700'
                        }`}
                      >
                        <span>{lang.native}</span>
                        <span className="text-gray-400 text-[10px]">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center space-x-2 xl:hidden">
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
            {/* Mobile Language Switcher */}
            <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-500 mr-1">Language:</span>
              {SUPPORTED_LOCALES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLocale(lang.code)}
                  className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                    locale === lang.code
                      ? 'bg-[#0B1F6B] text-white font-bold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {lang.native}
                </button>
              ))}
            </div>

            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((link) => {
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
                    {getNavLabel(link)}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
