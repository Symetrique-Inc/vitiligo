import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GuideHero } from '@/components/guide/GuideHero';
import { GuideTableOfContents } from '@/components/guide/GuideTableOfContents';
import { GuideChapter } from '@/components/guide/GuideChapter';
import { GuideTable } from '@/components/guide/GuideTable';
import { GuideExample } from '@/components/guide/GuideExample';
import { GuideSources } from '@/components/guide/GuideSources';
import { GuidePigmentDiagram } from '@/components/guide/GuidePigmentDiagram';
import { GuideReviewStamp } from '@/components/guide/GuideReviewStamp';
import { GuideRelatedLinks } from '@/components/guide/GuideRelatedLinks';

export const metadata: Metadata = {
  title: 'Understand vitiligo | Vitiligo Hub',
  description:
    'A diagnosis can arrive with unfamiliar words and conflicting advice. This guide connects the changes in your skin to the decisions you may face.',
  openGraph: {
    title: 'Understand vitiligo | Vitiligo Hub',
    description:
      'A diagnosis can arrive with unfamiliar words and conflicting advice. This guide connects the changes in your skin to the decisions you may face.',
  },
};

const tocItems = [
  { id: 'pigment', label: '01 · What actually changes in the skin?' },
  { id: 'diagnosis', label: '02 · A lighter patch needs a diagnosis, not a guess.' },
  { id: 'pattern', label: '03 · Type, activity and extent answer different questions.' },
  { id: 'journey', label: '04 · The journey is not a straight line.' },
  { id: 'myths', label: '05 · Facts that take some weight off.' },
  { id: 'goals', label: '06 · Connect the facts to a useful outcome.' },
];

export default function UnderstandVitiligoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Existing Original Header (Untouched) */}
      <Header />

      <main id="main-content" className="wrap flex-1 max-w-[1160px] mx-auto px-5 sm:px-10 w-full">
        {/* Guide Hero */}
        <GuideHero
          crumbLabel="← All starting points"
          crumbHref="/#start"
          eyebrow="Understand vitiligo"
          title="Understand the condition. Then understand your choices."
          lead="A diagnosis can arrive with unfamiliar words and conflicting advice. This guide connects the changes in your skin to the decisions you may face."
          edition="EXPANDED PATIENT GUIDE · 25 OCTOBER 2026 · 3 MIN READ"
          startHref="#pigment"
        />

        {/* Guide 2-Column Responsive Layout */}
        <div className="guide-layout grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)] gap-8 lg:gap-12 items-start mt-2">
          {/* Sticky Chapter Navigation on Desktop */}
          <GuideTableOfContents items={tocItems} />

          {/* Guide Article Content */}
          <article className="min-w-0">
            {/* Chapter 01 */}
            <GuideChapter
              id="pigment"
              index="01 / 06"
              title="What actually changes in the skin?"
              nextChapter={{
                id: 'diagnosis',
                label: 'A lighter patch needs a diagnosis, not a guess.',
              }}
            >
              <p className="my-0">
                Melanocytes make melanin, the pigment in skin. In vitiligo, immune activity targets these cells and areas lose colour. This is an autoimmune process rather than an infection.
              </p>
              <p className="my-0">
                Care can involve two linked tasks: reducing the attack on pigment-making cells and helping colour return. Understanding that difference makes treatment goals easier to follow.
              </p>

              {/* Pigment Diagram Figure */}
              <GuidePigmentDiagram />

              <GuideSources
                links={[
                  {
                    href: 'https://www.niams.nih.gov/health-topics/vitiligo',
                    label: 'NIAMS: understanding vitiligo',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 02 */}
            <GuideChapter
              id="diagnosis"
              index="02 / 06"
              title="A lighter patch needs a diagnosis, not a guess."
              nextChapter={{
                id: 'pattern',
                label: 'Type, activity and extent answer different questions.',
              }}
            >
              <p className="my-0">
                Fungal conditions and changes after inflammation or injury can also cause lighter patches. A dermatologist uses your history and skin examination; a Wood’s lamp may help show pigment loss.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 my-4 text-[#1E2A4A]">
                <li className="leading-relaxed">
                  Bring a timeline, earlier photographs and the names of products used on the area.
                </li>
                <li className="leading-relaxed">
                  Ask what supports the diagnosis and what remains uncertain.
                </li>
                <li className="leading-relaxed">
                  Ask whether any tests would change the plan.
                </li>
                <li className="leading-relaxed">
                  Leave knowing what to do next and when to return.
                </li>
              </ul>
              <p className="my-0">
                An online photograph cannot distinguish every cause. Establish what is being treated before comparing remedies.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://www.aad.org/public/diseases/a-z/vitiligo-treatment',
                    label: 'American Academy of Dermatology: treatment',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 03 */}
            <GuideChapter
              id="pattern"
              index="03 / 06"
              title="Type, activity and extent answer different questions."
              nextChapter={{
                id: 'journey',
                label: 'The journey is not a straight line.',
              }}
            >
              <GuideTable
                headers={['Term', 'What it describes', 'Why it matters']}
                rows={[
                  [
                    'Type',
                    'Non-segmental commonly affects both sides; segmental usually follows one side or region.',
                    'Frames patterns and treatment discussions.',
                  ],
                  [
                    'Activity',
                    'Whether patches are new or enlarging.',
                    'Separates controlling change from restoring colour.',
                  ],
                  [
                    'Extent and location',
                    'How much skin and which areas.',
                    'A small facial area and widespread patches can call for different approaches.',
                  ],
                ]}
              />
              <p className="my-0">
                These descriptions guide assessment. They do not tell you how someone feels or how much a patch affects their life.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://dermnetnz.org/topics/vitiligo',
                    label: 'DermNet: vitiligo',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 04 */}
            <GuideChapter
              id="journey"
              index="04 / 06"
              title="The journey is not a straight line."
              nextChapter={{
                id: 'myths',
                label: 'Facts that take some weight off.',
              }}
            >
              <p className="my-0">
                A visitor may move from diagnosis to changing patches, a quiet period, repigmentation, maintenance or renewed activity. Years since diagnosis do not automatically determine the next option.
              </p>
              <p className="my-0">
                Someone diagnosed long ago may need an activity review today. Someone newly diagnosed may mainly need an explanation and a manageable plan. The five starting points are doors into information, not permanent labels.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 my-4 text-[#1E2A4A]">
                <li className="leading-relaxed">
                  <Link
                    href="/journey-noticed"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    New patch or uncertain diagnosis →
                  </Link>
                </li>
                <li className="leading-relaxed">
                  <Link
                    href="/journey-changing"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    New or enlarging patches →
                  </Link>
                </li>
                <li className="leading-relaxed">
                  <Link
                    href="/journey-steady"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    Patches that seem unchanged →
                  </Link>
                </li>
                <li className="leading-relaxed">
                  <Link
                    href="/journey-long-journey"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    Reviewing previous treatment →
                  </Link>
                </li>
                <li className="leading-relaxed">
                  <Link
                    href="/journey-for-my-child"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    Supporting a child →
                  </Link>
                </li>
              </ul>
            </GuideChapter>

            {/* Chapter 05 */}
            <GuideChapter
              id="myths"
              index="05 / 06"
              title="Facts that take some weight off."
              nextChapter={{
                id: 'goals',
                label: 'Connect the facts to a useful outcome.',
              }}
            >
              <p className="my-0">
                Vitiligo is not contagious. There is no proven diet that cures it. A family tendency does not mean every child will develop it.
              </p>
              <p className="my-0">
                If someone offers a remedy, ask for its ingredients, evidence and possible harm. Avoid removing food groups because of a promise that doing so will restore colour. A confident claim is not the same as a tested treatment.
              </p>
              <GuideExample title="A practical example">
                <p>
                  “Is this a diagnosis or a possibility? What evidence supports this option for my type of vitiligo?” Those are reasonable questions even when advice sounds certain.
                </p>
              </GuideExample>
              <GuideSources
                links={[
                  {
                    href: 'https://www.bad.org.uk/pils/vitiligo',
                    label: 'British Association of Dermatologists: patient information',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 06 */}
            <GuideChapter
              id="goals"
              index="06 / 06"
              title="Connect the facts to a useful outcome."
              nextChapter={{
                id: 'related',
                label: 'Choose where to go next',
              }}
            >
              <p className="my-0">
                You might prioritise fewer new patches, colour in one particular area, a simpler routine, or less disruption to work or school. Write down the priority before comparing treatments.
              </p>
              <p className="my-0">
                A good discussion connects the clinical problem, the proposed option, the practical commitment and the review point. If one is missing, you have a specific question to bring back.
              </p>
              <p className="my-3">
                <Link
                  href="/treatment-and-care"
                  className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  Compare treatment options by purpose →
                </Link>
              </p>
            </GuideChapter>

            {/* Editorial Review Stamp */}
            <GuideReviewStamp />
          </article>
        </div>

        {/* Related Starting Points */}
        <GuideRelatedLinks currentPath="/understand-vitiligo" />
      </main>

      {/* Existing Original Footer (Untouched) */}
      <Footer />
    </div>
  );
}
