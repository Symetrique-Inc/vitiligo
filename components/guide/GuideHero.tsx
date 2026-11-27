'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GuidePrintButton } from './GuidePrintButton';
import { useLanguage } from '@/components/LanguageContext';

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
  const { t } = useLanguage();

  // Two-tone H1 rendering: first sentence in Navy (#0B1F6B), concluding sentence/phrase in Royal Blue (#1D5FE0)
  const renderTwoToneTitle = (rawTitle: string) => {
    // Check known split pairs first so both parts are translated directly with t()
    const KNOWN_PAIRS: [string, string][] = [
      ['Understand the condition.', 'Then understand your choices.'],
      ['Your skin.', 'Your choice.'],
      ['A new patch can bring questions.', 'Start with clarity.'],
      ['Understand the change.', 'Understand the purpose of treatment.'],
      ['When skin seems steady, choose what', 'matters next.'],
      ['Your history should move', 'the conversation forward.'],
    ];

    const normalized = rawTitle.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

    for (const [part1, part2] of KNOWN_PAIRS) {
      if (normalized === `${part1} ${part2}`) {
        return (
          <>
            <span className="block text-[#0B1F6B]">{t(part1)}</span>{' '}
            <span className="block text-[#1D5FE0]">{t(part2)}</span>
          </>
        );
      }
    }

    // Check direct translation of the whole title
    const translated = t(rawTitle);

    // If it contains newline
    if (translated.includes('\n')) {
      const [p1, ...rest] = translated.split('\n');
      return (
        <>
          <span className="block text-[#0B1F6B]">{p1}</span>{' '}
          <span className="block text-[#1D5FE0]">{rest.join(' ')}</span>
        </>
      );
    }

    // Check poorna viram (Hindi/Bengali/Marathi sentence separator)
    const pVirIndex = translated.indexOf('। ');
    if (pVirIndex !== -1) {
      const p1 = translated.slice(0, pVirIndex + 1);
      const p2 = translated.slice(pVirIndex + 2);
      return (
        <>
          <span className="block text-[#0B1F6B]">{p1}</span>{' '}
          <span className="block text-[#1D5FE0]">{p2}</span>
        </>
      );
    }

    // Check dot space
    const dotIndex = translated.indexOf('. ');
    if (dotIndex !== -1) {
      const p1 = translated.slice(0, dotIndex + 1);
      const p2 = translated.slice(dotIndex + 2);
      return (
        <>
          <span className="block text-[#0B1F6B]">{p1}</span>{' '}
          <span className="block text-[#1D5FE0]">{p2}</span>
        </>
      );
    }

    return <span className="text-[#0B1F6B]">{translated}</span>;
  };

  const cleanedEdition = edition
    .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, ' · ')
    .replace(/\s*·\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}/gi, '')
    .replace(/\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*·\s*/gi, '')
    .trim();

  const rawCrumb = t(crumbLabel.replace(/^[←\s]+/, ''));
  const cleanCrumb = rawCrumb.replace(/^[←\s]+/, '');
  const translatedEyebrow = t(eyebrow);
  const translatedLead = t(lead);
  const translatedEdition = t(cleanedEdition);
  const translatedAlt = illustration ? t(illustration.alt) : '';

  // Case 1: Illustrated Hero Layout
  if (illustration) {
    return (
      <section className="relative w-full min-h-[460px] lg:min-h-[500px] xl:min-h-[520px] bg-gradient-to-r from-[#F6F9FF] via-white to-[#EEF5FF] border-b border-[#DDE5F5]/70 overflow-hidden flex flex-col justify-center mb-6 sm:mb-10">
        {/* Single Unified Responsive Hero Illustration (prevents duplicate image downloads) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[300px] sm:max-h-[360px] min-[900px]:max-h-none min-[900px]:aspect-auto min-[900px]:absolute min-[900px]:top-0 min-[900px]:right-0 min-[900px]:bottom-0 min-[900px]:w-[56%] lg:min-[900px]:w-[58%] xl:min-[900px]:w-[60%] min-[900px]:h-full z-0 overflow-hidden bg-[#EAF2FF]">
          <Image
            src={illustration.src}
            alt={translatedAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
            className="object-cover"
            style={{
              objectPosition: illustration.objectPosition || 'center center',
            }}
          />
          <div
            className="hidden min-[900px]:block absolute inset-y-0 left-0 w-[24%] bg-gradient-to-r from-white via-white/80 to-transparent z-10"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 w-full py-6 sm:py-10 lg:py-12 flex items-center">
          <div className="w-full min-[900px]:w-[44%] lg:w-[40%] xl:w-[38%] max-w-[440px]">
            {/* Back link */}
            <Link
              href={crumbHref}
              className="guide-crumb inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D5FE0] hover:text-[#0B1F6B] transition-colors mb-3 group font-sans w-fit"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
              <span>{cleanCrumb}</span>
            </Link>

            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#D5E2FA] text-[#1D5FE0] text-xs font-bold tracking-wider uppercase mb-3 w-fit">
              <span>{translatedEyebrow}</span>
            </div>

            {/* H1 */}
            <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] leading-[1.16] -tracking-[1px] sm:-tracking-[1.5px] mt-1 mb-4 text-[#0B1F6B]">
              {renderTwoToneTitle(title)}
            </h1>

            {/* Intro paragraph */}
            <p className="text-[#1E2A4A] text-sm sm:text-[15.5px] leading-[1.68] m-0 mb-5 font-normal">
              {translatedLead}
            </p>

            {/* Meta line */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6785] tracking-wider uppercase mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1D5FE0]" />
              <span>{translatedEdition}</span>
            </div>

            {/* Action buttons */}
            <div className="guide-actions flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a
                href={startHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0B1F6B] hover:bg-[#1D5FE0] text-white px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg text-center"
              >
                <span>{t('Start reading')}</span>
                <span aria-hidden="true">↓</span>
              </a>
              <GuidePrintButton />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Case 2: Clean Text-Only Hero Layout
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
            <span>{cleanCrumb}</span>
          </Link>

          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] border border-[#D5E2FA] text-[#1D5FE0] text-xs font-bold tracking-wider uppercase mb-3 w-fit">
            <span>{translatedEyebrow}</span>
          </div>

          {/* H1 */}
          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.16] -tracking-[1px] sm:-tracking-[1.5px] mt-1 mb-4 text-[#0B1F6B]">
            {renderTwoToneTitle(title)}
          </h1>

          {/* Intro paragraph */}
          <p className="text-[#1E2A4A] text-base sm:text-[17px] leading-[1.68] m-0 mb-6 font-normal max-w-[720px]">
            {translatedLead}
          </p>

          {/* Meta line */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6785] tracking-wider uppercase mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1D5FE0]" />
            <span>{translatedEdition}</span>
          </div>

          {/* Action buttons */}
          <div className="guide-actions flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <a
              href={startHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0B1F6B] hover:bg-[#1D5FE0] text-white px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg text-center"
            >
              <span>{t('Start reading')}</span>
              <span aria-hidden="true">↓</span>
            </a>
            <GuidePrintButton />
          </div>
        </div>
      </div>
    </section>
  );
};
