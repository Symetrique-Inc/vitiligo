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

interface JourneyPageTemplateProps {
  data: JourneyPageData;
}

export const JourneyPageTemplate: React.FC<JourneyPageTemplateProps> = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Header */}
      <Header />

      {/* Guide Hero rendered full-width with responsive 2-column grid (ZERO text overlap) */}
      <GuideHero
        crumbLabel="← All starting points"
        crumbHref="/#start"
        eyebrow={data.eyebrow}
        title={data.heroTitle}
        lead={data.lead}
        edition={data.edition}
        startHref={data.startHref}
        illustration={data.illustration}
      />

      <main id="main-content" className="wrap flex-1 max-w-[1160px] mx-auto px-5 sm:px-10 w-full">
        {/* Guide 2-Column Responsive Layout */}
        <div className="guide-layout grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)] gap-8 lg:gap-12 items-start mt-2">
          {/* Sticky Chapter Navigation on Desktop */}
          <GuideTableOfContents items={data.tocItems} />

          {/* Guide Article Content */}
          <article className="min-w-0">
            {data.chapters.map((chapter) => (
              <GuideChapter
                key={chapter.id}
                id={chapter.id}
                index={chapter.index}
                title={chapter.title}
                nextChapter={chapter.nextChapter}
              >
                {/* Paragraphs before callouts/lists */}
                {chapter.paragraphsBefore?.map((p, idx) => (
                  <p key={idx} className="my-0">
                    {p}
                  </p>
                ))}

                {/* Practical Example Box */}
                {chapter.example && (
                  <GuideExample title={chapter.example.title}>
                    <p>{chapter.example.text}</p>
                  </GuideExample>
                )}

                {/* Bullet List */}
                {chapter.bullets && chapter.bullets.length > 0 && (
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 my-4 text-[#1E2A4A]">
                    {chapter.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Paragraphs after bullets */}
                {chapter.paragraphsAfterBullets?.map((p, idx) => (
                  <p key={idx} className="my-0">
                    {p}
                  </p>
                ))}

                {/* Table */}
                {chapter.table && (
                  <GuideTable
                    headers={chapter.table.headers}
                    rows={chapter.table.rows}
                  />
                )}

                {/* Paragraphs after table */}
                {chapter.paragraphsAfterTable?.map((p, idx) => (
                  <p key={idx} className="my-0">
                    {p}
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
                          {action.label}
                        </Link>
                      </p>
                    ))}
                  </div>
                )}

                {/* Sources */}
                {chapter.sources && chapter.sources.length > 0 && (
                  <GuideSources links={chapter.sources} />
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
