import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GuidePrintButton } from './GuidePrintButton';

export interface GuideHeroIllustration {
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface GuideHeroProps {
  crumbLabel?: string;
  crumbHref?: string;
  eyebrow: string;
  title: string;
  lead: string;
  edition: string;
  startHref: string;
  illustration?: GuideHeroIllustration;
}

export const GuideHero: React.FC<GuideHeroProps> = ({
  crumbLabel = '← All starting points',
  crumbHref = '/#start',
  eyebrow,
  title,
  lead,
  edition,
  startHref,
  illustration,
}) => {
  // Two-tone H1 rendering: first sentence in Navy (#0B1F6B), concluding sentence/phrase in Royal Blue (#1D5FE0)
  const renderTwoToneTitle = (rawTitle: string) => {
    const dotIndex = rawTitle.indexOf('. ');
    if (dotIndex !== -1) {
      const firstSentence = rawTitle.slice(0, dotIndex + 1);
      const secondSentence = rawTitle.slice(dotIndex + 2);
      return (
        <>
          <span className="block text-[#0B1F6B]">{firstSentence}</span>
          <span className="block text-[#1D5FE0]">{secondSentence}</span>
        </>
      );
    }
    const mattersIndex = rawTitle.indexOf('matters next.');
    if (mattersIndex !== -1) {
      const firstPart = rawTitle.slice(0, mattersIndex);
      const secondPart = rawTitle.slice(mattersIndex);
      return (
        <>
          <span className="block text-[#0B1F6B]">{firstPart}</span>
          <span className="block text-[#1D5FE0]">{secondPart}</span>
        </>
      );
    }
    const conversationIndex = rawTitle.indexOf('the conversation forward.');
    if (conversationIndex !== -1) {
      const firstPart = rawTitle.slice(0, conversationIndex);
      const secondPart = rawTitle.slice(conversationIndex);
      return (
        <>
          <span className="block text-[#0B1F6B]">{firstPart}</span>
          <span className="block text-[#1D5FE0]">{secondPart}</span>
        </>
      );
    }
    return <span className="text-[#0B1F6B]">{rawTitle}</span>;
  };

  const cleanedEdition = edition
    .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, ' · ')
    .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}/gi, '')
    .replace(/\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, '')
    .trim();

  // Case 1: Illustrated Hero Layout matching user reference image
  // Seamless, unboxed illustration on right with zero text overlap
  if (illustration) {
    return (
      <section className="relative w-full min-h-[460px] lg:min-h-[500px] xl:min-h-[520px] bg-gradient-to-r from-[#F6F9FF] via-white to-[#EEF5FF] border-b border-[#DDE5F5]/70 overflow-hidden flex flex-col justify-center mb-6 sm:mb-10">
        {/* Mobile illustration banner (≤900px): clean natural aspect ratio */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[300px] sm:max-h-[360px] bg-[#EAF2FF] min-[900px]:hidden overflow-hidden">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover"
            style={{
              objectPosition: illustration.objectPosition || 'center center',
            }}
          />
        </div>

        {/* Desktop & Tablet Seamless Illustration (≥900px): unboxed, seamless blend */}
        <div className="hidden min-[900px]:block absolute top-0 right-0 bottom-0 w-[56%] lg:w-[58%] xl:w-[60%] h-full z-0 pointer-events-none overflow-hidden">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 900px) 60vw, 100vw"
            className="object-cover"
            style={{
              objectPosition: illustration.objectPosition || 'center center',
            }}
          />
          {/* Smooth blend gradient on left edge of illustration for seamless transition to text */}
          <div
            className="absolute inset-y-0 left-0 w-[24%] bg-gradient-to-r from-white via-white/80 to-transparent z-10"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content Container: constrained width ensures zero overlap with illustration */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 w-full py-6 sm:py-10 lg:py-12 flex items-center">
          <div className="w-full min-[900px]:w-[44%] lg:w-[40%] xl:w-[38%] max-w-[440px]">
            {/* Back link */}
            <Link
              href={crumbHref}
              className="guide-crumb inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D5FE0] hover:text-[#0B1F6B] transition-colors mb-3 group font-sans w-fit"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
              <span>{crumbLabel.replace(/^[←\s]+/, '')}</span>
            </Link>

            {/* Eyebrow Pill Badge matching reference image */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#D5E2FA] text-[#1D5FE0] text-xs font-bold tracking-wider uppercase mb-3 w-fit">
              <span>{eyebrow}</span>
            </div>

            {/* H1: Playfair serif with existing brand colors */}
            <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] leading-[1.16] -tracking-[1px] sm:-tracking-[1.5px] mt-1 mb-4 text-[#0B1F6B]">
              {renderTwoToneTitle(title)}
            </h1>

            {/* Intro paragraph: Crisp typography, strictly constrained width */}
            <p className="text-[#1E2A4A] text-sm sm:text-[15.5px] leading-[1.68] m-0 mb-5 font-normal">
              {lead}
            </p>

            {/* Meta line: guide type, read time */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6785] tracking-wider uppercase mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1D5FE0]" />
              <span>{cleanedEdition}</span>
            </div>

            {/* Action buttons */}
            <div className="guide-actions flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a
                href={startHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0B1F6B] hover:bg-[#1D5FE0] text-white px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg text-center"
              >
                <span>Start reading</span>
                <span aria-hidden="true">↓</span>
              </a>
              <GuidePrintButton />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Case 2: Clean Text-Only Hero Layout (for pages without an illustration)
  return (
    <section className="relative w-full bg-gradient-to-r from-[#F6F9FF] via-white to-[#EEF5FF] border-b border-[#DDE5F5]/70 overflow-hidden mb-6 sm:mb-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 py-8 lg:py-12">
        <div className="max-w-[850px]">
          {/* Back link */}
          <Link
            href={crumbHref}
            className="guide-crumb inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D5FE0] hover:text-[#0B1F6B] transition-colors mb-3 group font-sans w-fit"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            <span>{crumbLabel.replace(/^[←\s]+/, '')}</span>
          </Link>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#D5E2FA] text-[#1D5FE0] text-xs font-bold tracking-wider uppercase mb-3 w-fit">
            <span>{eyebrow}</span>
          </div>

          {/* H1 */}
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.18] -tracking-[1px] sm:-tracking-[1.7px] mt-1 mb-4 text-[#0B1F6B]">
            {renderTwoToneTitle(title)}
          </h1>

          {/* Intro paragraph */}
          <p className="text-[#1E2A4A] text-base sm:text-lg leading-[1.7] max-w-[740px] m-0 mb-5 font-normal">
            {lead}
          </p>

          {/* Meta line */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6785] tracking-wider uppercase mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1D5FE0]" />
            <span>{cleanedEdition}</span>
          </div>

          {/* Action buttons */}
          <div className="guide-actions flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <a
              href={startHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0B1F6B] hover:bg-[#1D5FE0] text-white px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg text-center"
            >
              <span>Start reading</span>
              <span aria-hidden="true">↓</span>
            </a>
            <GuidePrintButton />
          </div>
        </div>
      </div>
    </section>
  );
};
