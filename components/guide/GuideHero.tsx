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

  // Case 1: Illustrated Hero Layout (matching Target IMAGE 2 & 3)
  if (illustration) {
    return (
      <section className="relative w-full min-h-[520px] min-[750px]:min-h-[540px] lg:min-h-[580px] bg-transparent overflow-hidden flex flex-col justify-center border-b border-[#DDE5F5]/60 mb-6 sm:mb-8">
        {/* Mobile illustration banner (≤750px): fixed ~4/3 aspect ratio, centered subjects */}
        <div className="relative w-full aspect-[4/3] max-h-[380px] bg-[#EAF2FF] min-[750px]:hidden overflow-hidden">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 750px) 100vw, 50vw"
            className="object-cover"
            style={{
              objectPosition: 'center 25%',
            }}
          />
        </div>

        {/* Desktop & Tablet Background Illustration: positioned adjacent to text without awkward white gap */}
        <div className="hidden min-[750px]:block absolute top-0 right-0 bottom-0 w-[52%] lg:w-[58%] xl:w-[60%] h-full z-0 pointer-events-none overflow-hidden bg-[#E2EDFA]">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 750px) 60vw, 100vw"
            className="object-cover"
            style={{
              objectPosition: illustration.objectPosition || 'center center',
            }}
          />
          {/* Subtle edge blend gradient replacing the previous wide white block */}
          <div
            className="absolute inset-y-0 left-0 w-[14%] sm:w-[16%] bg-gradient-to-r from-white via-white/40 to-transparent z-10"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content Container aligned with site's 1160px width */}
        <div className="relative z-10 max-w-[1160px] mx-auto px-5 sm:px-10 w-full py-8 min-[750px]:py-12 lg:py-16 flex items-center">
          <div className="w-full min-[750px]:w-[55%] lg:w-[48%] xl:w-[45%] max-w-[540px]">
            {/* Back link: Underlined */}
            <Link
              href={crumbHref}
              className="guide-crumb text-xs font-medium text-[#1D5FE0] hover:text-[#0B1F6B] underline underline-offset-4 transition-colors mb-3 inline-block font-sans"
            >
              {crumbLabel}
            </Link>

            {/* Eyebrow: Small uppercase with letter-spacing in muted blue */}
            <p className="text-[11px] tracking-[2px] uppercase font-semibold text-[#5B6785] m-0 mb-2.5">
              {eyebrow}
            </p>

            {/* H1: Two lines with distinct navy and vibrant royal blue tokens */}
            <h1 className="font-serif font-normal text-[clamp(34px,4vw,50px)] leading-[1.12] -tracking-[1.5px] mt-2 mb-4">
              {renderTwoToneTitle(title)}
            </h1>

            {/* Intro paragraph */}
            <p className="text-[#5B6785] text-sm sm:text-base leading-relaxed m-0 mb-4 max-w-[480px]">
              {lead}
            </p>

            {/* Meta line: guide type, read time (date removed per design) */}
            <p className="text-[11px] tracking-[1.5px] text-[#5B6785] font-medium uppercase m-0 mb-6">
              {edition
                .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, ' · ')
                .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}/gi, '')
                .replace(/\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, '')
                .trim()}
            </p>

            {/* Two Action Buttons: same height, 6px radius */}
            <div className="guide-actions flex flex-wrap gap-3 items-center">
              <a
                href={startHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-[#0B1F6B] hover:bg-[#07154B] text-white px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
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

  // Case 2: Clean Text-Only Hero Layout (for pages without an illustration yet)
  return (
    <div className="guide-hero max-w-[850px] pt-7 pb-8 sm:pt-10 sm:pb-9">
      {/* Back link: Underlined */}
      <Link
        href={crumbHref}
        className="guide-crumb text-xs font-medium text-[#1D5FE0] hover:text-[#0B1F6B] underline underline-offset-4 transition-colors mb-3.5 inline-block font-sans"
      >
        {crumbLabel}
      </Link>

      {/* Eyebrow: Small uppercase with letter-spacing in muted blue */}
      <p className="text-[11px] tracking-[2px] uppercase font-semibold text-[#5B6785] m-0 mb-2">
        {eyebrow}
      </p>

      {/* H1: Two-tone Playfair serif */}
      <h1 className="font-serif font-normal text-[clamp(36px,4.5vw,54px)] leading-[1.12] -tracking-[1.7px] mt-2 mb-4">
        {renderTwoToneTitle(title)}
      </h1>

      {/* Intro paragraph */}
      <p className="text-[#5B6785] text-base sm:text-[17px] leading-relaxed max-w-[740px] m-0 mb-4">
        {lead}
      </p>

      {/* Meta line (date removed per design) */}
      <p className="text-[11px] tracking-[1.5px] text-[#5B6785] font-medium uppercase m-0 mb-6">
        {edition
          .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, ' · ')
          .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}/gi, '')
          .replace(/\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, '')
          .trim()}
      </p>

      {/* Action buttons */}
      <div className="guide-actions flex flex-wrap gap-3 items-center">
        <a
          href={startHref}
          className="inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-[#0B1F6B] hover:bg-[#07154B] text-white px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
        >
          <span>Start reading</span>
          <span aria-hidden="true">↓</span>
        </a>
        <GuidePrintButton />
      </div>
    </div>
  );
};
