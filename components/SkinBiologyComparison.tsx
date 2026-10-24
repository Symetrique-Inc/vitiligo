'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ShieldAlert,
  Maximize2,
  X,
  Sparkles,
  Sun,
  Heart,
  Info,
  HelpCircle,
} from 'lucide-react';

export const SkinBiologyComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'vitiligo' | 'healthy'>('both');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="space-y-8">
      {/* Header & View Mode Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E2EAF8] pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2">
            <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
              Cellular Dermatology
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
            How Skin Normally Works vs. What Happens in Vitiligo
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6785] max-w-2xl leading-relaxed">
            Compare the biological structure of healthy, pigmented skin with the autoimmune process that causes melanocytes to lose pigment in vitiligo.
          </p>
        </div>

        {/* View Controls */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#EEF4FF] border border-[#D5E3FA] shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('both')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'both'
                ? 'bg-white text-[#0B1F6B] shadow-xs'
                : 'text-[#5B6785] hover:text-[#0B1F6B]'
            }`}
          >
            Side-by-Side
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vitiligo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'vitiligo'
                ? 'bg-[#E8456B] text-white shadow-xs'
                : 'text-[#E8456B] hover:bg-white/60'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>Vitiligo Skin</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('healthy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'healthy'
                ? 'bg-[#1FA37A] text-white shadow-xs'
                : 'text-[#1FA37A] hover:bg-white/60'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Healthy Skin</span>
          </button>
        </div>
      </div>

      {/* Primary Visual Showcase: Side-by-Side Native Aspect Ratio Infographics */}
      <div
        className={`grid gap-8 items-stretch ${
          activeTab === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'
        }`}
      >
        {/* Card 1: What Happens in Vitiligo */}
        {(activeTab === 'both' || activeTab === 'vitiligo') && (
          <div className="rounded-3xl border border-[#FAD0DC] bg-gradient-to-b from-[#FFF5F7] via-white to-[#FFF8FA] p-5 sm:p-7 shadow-xs flex flex-col justify-between relative overflow-hidden transition-all group">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E8456B] to-[#F2884B]" />

            <div className="space-y-4">
              {/* Category Pill & Enlarge CTA */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FDE8EE] border border-[#FAD0DC] text-[#E8456B] text-xs font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Autoimmune Mechanism</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: '/images/vitiligo-mechanism.jpg',
                      title: 'What Happens in Vitiligo (Cellular Diagram)',
                    })
                  }
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#E8456B] hover:text-[#0B1F6B] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View full size</span>
                </button>
              </div>

              {/* Native Aspect Ratio Diagram Container (No letterboxing, 100% sharp) */}
              <div
                className="relative rounded-2xl overflow-hidden border border-[#FAD0DC] shadow-xs bg-white cursor-pointer"
                onClick={() =>
                  setLightboxImage({
                    src: '/images/vitiligo-mechanism.jpg',
                    title: 'What Happens in Vitiligo (Cellular Diagram)',
                  })
                }
              >
                <Image
                  src="/images/vitiligo-mechanism.jpg"
                  alt="Medical diagram explaining the autoimmune cascade in vitiligo leading to loss of melanocytes and skin pigment"
                  width={1024}
                  height={764}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              {/* Clinical Significance Highlights */}
              <div className="p-4 rounded-2xl bg-[#FFF0F4] border border-[#FAD0DC] space-y-1.5 text-xs text-[#2A3654]">
                <strong className="text-[#E8456B] block uppercase tracking-wider text-[11px] font-bold">
                  Clinical Significance:
                </strong>
                <p className="leading-relaxed">
                  In vitiligo, the immune system mistakenly targets melanocytes located in the basal layer. The outer physical skin barrier remains smooth and unbroken, but the lack of melanin causes lighter patches and reduces natural protection against UV sunlight.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Card 2: Healthy Skin Function & Barrier */}
        {(activeTab === 'both' || activeTab === 'healthy') && (
          <div className="rounded-3xl border border-[#BCEBD7] bg-gradient-to-b from-[#F2FBF7] via-white to-[#F6FCF9] p-5 sm:p-7 shadow-xs flex flex-col justify-between relative overflow-hidden transition-all group">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1FA37A] to-[#1D5FE0]" />

            <div className="space-y-4">
              {/* Category Pill & Enlarge CTA */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E3F6EF] border border-[#BCEBD7] text-[#1FA37A] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Healthy Skin Baseline</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: '/images/healthy-skin-mechanism.jpg',
                      title: 'Healthy Skin Structure & Barrier Function',
                    })
                  }
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#1FA37A] hover:text-[#0B1F6B] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View full size</span>
                </button>
              </div>

              {/* Native Aspect Ratio Diagram Container (No letterboxing, 100% sharp) */}
              <div
                className="relative rounded-2xl overflow-hidden border border-[#BCEBD7] shadow-xs bg-white cursor-pointer"
                onClick={() =>
                  setLightboxImage({
                    src: '/images/healthy-skin-mechanism.jpg',
                    title: 'Healthy Skin Structure & Barrier Function',
                  })
                }
              >
                <Image
                  src="/images/healthy-skin-mechanism.jpg"
                  alt="Medical diagram showing healthy skin function: intact barrier, active melanocyte melanin production and moisture balance"
                  width={1024}
                  height={764}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              {/* Clinical Significance Highlights */}
              <div className="p-4 rounded-2xl bg-[#EAF8F2] border border-[#BCEBD7] space-y-1.5 text-xs text-[#2A3654]">
                <strong className="text-[#1FA37A] block uppercase tracking-wider text-[11px] font-bold">
                  Clinical Significance:
                </strong>
                <p className="leading-relaxed">
                  Healthy skin relies on functioning melanocytes to continuously synthesize melanin and distribute it evenly. This melanin shields deeper epidermal layers from DNA damage, while tight cellular junctions preserve hydration.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Complementary Patient Insights: Plain-English Takeaways */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5F8FF] via-white to-[#F3F7FD] border border-[#D5E2FA] shadow-xs">
        <div className="flex items-center space-x-2 text-xs font-bold text-[#1D5FE0] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-[#1D5FE0]" />
          <span>Practical Understanding</span>
        </div>

        <h4 className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F6B] mb-2">
          What This Means in Plain English
        </h4>
        <p className="text-xs sm:text-sm text-[#5B6785] max-w-3xl mb-6">
          Understanding the difference between healthy skin and vitiligo helps clear up common misconceptions and guides sensible day-to-day care:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-[#D9E6FC] space-y-2 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center font-bold text-sm">
              <Sun className="w-5 h-5 text-[#1D5FE0]" />
            </div>
            <h5 className="font-bold text-sm text-[#0B1F6B]">Why sun protection matters</h5>
            <p className="text-xs text-[#5B6785] leading-relaxed">
              Because affected patches have lost their melanin shield, they burn much faster in UV light. Using broad-spectrum sunscreen protects against sunburn and reduces contrasting tanning in surrounding skin.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#D9E6FC] space-y-2 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-[#E3F6EF] text-[#1FA37A] flex items-center justify-center font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-[#1FA37A]" />
            </div>
            <h5 className="font-bold text-sm text-[#0B1F6B]">The skin barrier is unbroken</h5>
            <p className="text-xs text-[#5B6785] leading-relaxed">
              Vitiligo is not eczema or an infection. The outer skin texture remains smooth and structurally intact — it does not peel, flake, or become contagious to others.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#D9E6FC] space-y-2 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center font-bold text-sm">
              <Heart className="w-5 h-5 text-[#7C5CE0]" />
            </div>
            <h5 className="font-bold text-sm text-[#0B1F6B]">Hair follicles hold dormant cells</h5>
            <p className="text-xs text-[#5B6785] leading-relaxed">
              Deep inside hair follicles, reservoir melanocytes often survive. Modern therapies like phototherapy and topical treatments work by stimulating these dormant cells to migrate outward and restore colour.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal for High-Res Inspection */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-5xl w-full p-4 sm:p-6 space-y-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3">
              <h4 className="font-bold font-serif text-base sm:text-lg text-[#0B1F6B]">
                {lightboxImage.title}
              </h4>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-gray-50 border">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                width={1024}
                height={764}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#5B6785]">
                Click outside or press Close to return to the page
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="px-6 py-2.5 rounded-full bg-[#0B1F6B] text-white text-xs font-semibold hover:bg-[#1D5FE0] transition-colors shadow-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
