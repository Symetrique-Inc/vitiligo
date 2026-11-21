'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Eye,
  Globe,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  RotateCw,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';

const PAGES = [
  { id: '/', name: 'Home Page' },
  { id: '/about', name: 'About' },
  { id: '/understand-vitiligo', name: 'Understand Vitiligo' },
  { id: '/living-with-vitiligo', name: 'My Life & Daily Living' },
  { id: '/treatment-and-care', name: 'Treatment & Care' },
  { id: '/latest-developments', name: 'Treatment Developments' },
  { id: '/resources', name: 'Resources & Support' },
  { id: '/journey-noticed', name: 'Journey: Noticed a white patch' },
  { id: '/journey-changing', name: 'Journey: Patches are changing' },
  { id: '/journey-steady', name: 'Journey: Patches seem steady' },
  { id: '/journey-long-journey', name: 'Journey: Long journey' },
  { id: '/journey-for-my-child', name: 'Journey: For my child' },
];

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
];

export default function TranslationPreviewPage() {
  const [selectedPage, setSelectedPage] = useState('/');
  const [selectedLanguage, setSelectedLanguage] = useState('hi');
  const [version, setVersion] = useState<'published' | 'draft'>('published');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);

  const previewUrl = `${selectedPage}?preview=${version === 'draft' ? 'true' : 'false'}`;

  const reloadIframe = () => setIframeKey((k) => k + 1);

  const viewportWidths = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]',
  };

  return (
    <>
      <AdminHeader
        title="Live Website Translation Preview"
        subtitle="Simulate and test how published or draft translations render across responsive viewports."
      />

      <main className="p-4 sm:p-6 space-y-4 max-w-[1700px] w-full mx-auto flex flex-col h-[calc(100vh-80px)]">
        {/* Controls Toolbar */}
        <div className="bg-white rounded-2xl border border-[#DDE5F5] p-3.5 shadow-xs flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Page Picker */}
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-gray-500 uppercase text-[10px]">Page:</span>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="px-2.5 py-1.5 rounded-lg border border-gray-200 font-semibold text-[#0B1F6B] focus:outline-none"
              >
                {PAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Picker */}
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-gray-500 uppercase text-[10px]">Language:</span>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-2.5 py-1.5 rounded-lg border border-gray-200 font-semibold text-[#0B1F6B] focus:outline-none"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name} ({l.native})
                  </option>
                ))}
              </select>
            </div>

            {/* Version Toggle */}
            <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setVersion('published')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  version === 'published'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Published Live
              </button>
              <button
                onClick={() => setVersion('draft')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  version === 'draft'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Draft (Unpublished)
              </button>
            </div>
          </div>

          {/* Viewport Width Controls */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setViewport('desktop')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewport === 'desktop' ? 'bg-white text-[#1D5FE0] shadow-xs' : 'text-gray-500'
                }`}
                title="Desktop (100%)"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport('tablet')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewport === 'tablet' ? 'bg-white text-[#1D5FE0] shadow-xs' : 'text-gray-500'
                }`}
                title="Tablet (768px)"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport('mobile')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewport === 'mobile' ? 'bg-white text-[#1D5FE0] shadow-xs' : 'text-gray-500'
                }`}
                title="Mobile (375px)"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={reloadIframe}
              className="p-2 text-gray-500 hover:text-[#0B1F6B] hover:bg-gray-100 rounded-lg transition-colors"
              title="Reload Frame"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            <Link
              href={previewUrl}
              target="_blank"
              className="px-3 py-1.5 text-xs font-semibold text-[#1D5FE0] hover:bg-[#EAF2FF] rounded-lg transition-colors flex items-center space-x-1 border border-[#CCD8EF]"
            >
              <span>Open Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Preview Frame Container */}
        <div className="flex-1 bg-gray-200/70 rounded-2xl p-4 flex items-center justify-center overflow-auto border border-[#DDE5F5]">
          <div
            className={`h-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-300 transition-all duration-300 flex flex-col ${viewportWidths[viewport]}`}
          >
            {/* Fake Browser Top bar */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center space-x-2 text-[11px] text-gray-500">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="flex-1 bg-white px-3 py-0.5 rounded-md border border-gray-200 text-center text-gray-600 truncate font-mono text-[10px]">
                https://onevitiligo.org{selectedPage}?lang={selectedLanguage}&mode={version}
              </div>
              <span className="text-[10px] font-bold uppercase text-[#1D5FE0] bg-blue-50 px-2 py-0.5 rounded">
                {selectedLanguage}
              </span>
            </div>

            {/* Live Interactive Iframe */}
            <iframe
              key={iframeKey}
              src={previewUrl}
              className="w-full flex-1 border-0"
              title="Translation Live Preview"
            />
          </div>
        </div>
      </main>
    </>
  );
}

