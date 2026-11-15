'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GuideHero } from './GuideHero';
import { GuideTableOfContents } from './GuideTableOfContents';
import { GuideChapter } from './GuideChapter';
import { GuideTable } from './GuideTable';
import { GuideExample } from './GuideExample';
import { GuideSources } from './GuideSources';
import { GuideReviewStamp } from './GuideReviewStamp';
import { GuideRelatedLinks } from './GuideRelatedLinks';
import type { JourneyPageData } from './journeyData';
import { useLanguage } from '@/components/LanguageContext';

interface JourneyPageTemplateProps {
  data: JourneyPageData;
}

export const JourneyPageTemplate: React.FC<JourneyPageTemplateProps> = ({ data }) => {
  const { t } = useLanguage();

  const translatedTocItems = data.tocItems.map((item) => ({
    id: item.id,
    label: t(item.label),
  }));

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Header */}
      <Header />

      {/* Guide Hero rendered full-width with responsive 2-column grid */}
      <GuideHero
        crumbLabel={t('← All starting points')}
        crumbHref="/#start"
        eyebrow={t(data.eyebrow)}
        title={t(data.heroTitle)}
        lead={t(data.lead)}
        edition={t(data.edition)}
        startHref={data.startHref}
        illustration={data.illustration}
      />

      <main id="main-content" className="wrap flex-1 max-w-[1160px] mx-auto px-5 sm:px-10 w-full">
        {/* Guide 2-Column Responsive Layout */}
        <div className="guide-layout grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)] gap-8 lg:gap-12 items-start mt-2">
          {/* Sticky Chapter Navigation on Desktop */}
          <GuideTableOfContents items={translatedTocItems} />

          {/* Guide Article Content */}
          <article className="min-w-0">
            {data.chapters.map((chapter) => (
              <GuideChapter
                key={chapter.id}
                id={chapter.id}
                index={chapter.index}
                title={t(chapter.title)}
                nextChapter={
                  chapter.nextChapter
                    ? {
                        id: chapter.nextChapter.id,
                        label: t(chapter.nextChapter.label),
                      }
                    : undefined
                }
              >
                {/* Paragraphs before callouts/lists */}
                {chapter.paragraphsBefore?.map((p, idx) => (
                  <p key={idx} className="my-0">
                    {t(p)}
                  </p>
                ))}

                {/* Practical Example Box */}
                {chapter.example && (
                  <GuideExample title={chapter.example.title ? t(chapter.example.title) : undefined}>
                    <p>{t(chapter.example.text)}</p>
                  </GuideExample>
                )}

                {/* Bullet List */}
                {chapter.bullets && chapter.bullets.length > 0 && (
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 my-4 text-[#1E2A4A]">
                    {chapter.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {t(bullet)}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Paragraphs after bullets */}
                {chapter.paragraphsAfterBullets?.map((p, idx) => (
                  <p key={idx} className="my-0">
                    {t(p)}
                  </p>
                ))}

                {/* Table */}
                {chapter.table && (
                  <GuideTable
                    headers={chapter.table.headers.map((h) => t(h))}
                    rows={chapter.table.rows.map((row) => row.map((cell) => t(cell)))}
                  />
                )}

                {/* Paragraphs after table */}
                {chapter.paragraphsAfterTable?.map((p, idx) => (
                  <p key={idx} className="my-0">
                    {t(p)}
                  </p>
                ))}

                {/* Action Links */}
                {chapter.actionLinks && chapter.actionLinks.length > 0 && (
                  <div className="my-4 space-y-2">
                    {chapter.actionLinks.map((action) => (
                      <p key={action.href} className="my-1.5">
                        <Link
                          href={action.href}
                          className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                        >
                          {t(action.label)}
                        </Link>
                      </p>
                    ))}
                  </div>
                )}

                {/* Sources */}
                {chapter.sources && chapter.sources.length > 0 && (
                  <GuideSources
                    links={chapter.sources.map((src) => ({
                      ...src,
                      label: t(src.label),
                    }))}
                  />
                )}
              </GuideChapter>
            ))}

            {/* Editorial Review Stamp (Suppressed by component) */}
            <GuideReviewStamp />
          </article>
        </div>

        {/* Related Starting Points */}
        <GuideRelatedLinks currentPath={`/${data.slug}`} />
      </main>

      <Footer />
    </div>
  );
};
