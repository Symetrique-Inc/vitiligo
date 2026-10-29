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
import { GuideReviewStamp } from '@/components/guide/GuideReviewStamp';
import { GuideRelatedLinks } from '@/components/guide/GuideRelatedLinks';

export const metadata: Metadata = {
  title: 'Treatment and care | OneVitiligo',
  description:
    'Treatment choices depend on activity, body area, age and your goals. Use this guide to compare the purpose, practical commitment and limitations before discussing a plan.',
  openGraph: {
    title: 'Treatment and care | OneVitiligo',
    description:
      'Treatment choices depend on activity, body area, age and your goals. Use this guide to compare the purpose, practical commitment and limitations before discussing a plan.',
  },
};

const tocItems = [
  { id: 'state', label: '01 · Start with your current state.' },
  { id: 'topicals', label: '02 · Skin medicines are not all the same.' },
  { id: 'ruxolitinib', label: '03 · Ruxolitinib cream is a targeted option for eligible patients.' },
  { id: 'phototherapy', label: '04 · What actually happens during narrowband UVB?' },
  { id: 'targeted', label: '05 · When might targeted light or surgery enter the discussion?' },
  { id: 'systemic', label: '06 · What are oral treatments intended to do?' },
  { id: 'maintenance', label: '07 · What happens after a response?' },
  { id: 'access', label: '08 · Check eligibility, access and cost separately.' },
];

export default function TreatmentAndCarePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Existing Original Header (Untouched) */}
      <Header />

      {/* Full-width Guide Hero matching journey-noticed & understand-vitiligo */}
      <GuideHero
        crumbLabel="← All starting points"
        crumbHref="/#start"
        eyebrow="Treatment and care"
        title="Know what each option does, demands and cannot promise."
        lead="Treatment choices depend on activity, body area, age and your goals. Use this guide to compare the purpose, practical commitment and limitations before discussing a plan."
        edition="EXPANDED PATIENT GUIDE · 7 MIN READ"
        startHref="#state"
        illustration={{
          src: '/images/treatment-and-care-hero.jpg',
          alt: 'Illustration of vitiligo treatment and care pathways: dermatological consultation, topical treatments, phototherapy, cosmetic camouflage, sun protection, balanced nutrition, and mindful living.',
          objectPosition: 'center center',
        }}
      />

      <main id="main-content" className="wrap flex-1 max-w-[1160px] mx-auto px-5 sm:px-10 w-full">
        {/* Guide 2-Column Responsive Layout */}
        <div className="guide-layout grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)] gap-8 lg:gap-12 items-start mt-2">
          {/* Sticky Chapter Navigation on Desktop */}
          <GuideTableOfContents items={tocItems} />

          {/* Guide Article Content */}
          <article className="min-w-0">
            {/* Chapter 01 */}
            <GuideChapter
              id="state"
              index="01 / 08"
              title="Start with your current state."
              nextChapter={{
                id: 'topicals',
                label: 'Skin medicines are not all the same.',
              }}
            >
              <GuideTable
                headers={['Your situation', 'Options to discuss', 'Before deciding']}
                rows={[
                  [
                    'Uncertain diagnosis',
                    'Confirm the cause of the patch',
                    'Do not select a pigment treatment from appearance alone.',
                  ],
                  [
                    'New or enlarging patches',
                    'Assess activity and consider controlling further loss',
                    'Colour return is a separate review question.',
                  ],
                  [
                    'Stable patches with a wish for colour return',
                    'Compare topical, light and selected procedural options',
                    'Location and previous response affect expectations.',
                  ],
                  [
                    'Improvement already achieved',
                    'Agree maintenance and monitoring',
                    'Clarify how the intensive starting routine changes.',
                  ],
                  [
                    'Previous limited benefit',
                    'Review the adequacy and burden of the trial',
                    'Identify what a different option would change.',
                  ],
                ]}
              />
              <p className="my-0">
                This is a map for a clinical conversation, not an automated treatment recommendation. A person may fit several rows at once. Read the relevant option in detail, then discuss eligibility and risks.
              </p>
            </GuideChapter>

            {/* Chapter 02 */}
            <GuideChapter
              id="topicals"
              index="02 / 08"
              title="Skin medicines are not all the same."
              nextChapter={{
                id: 'ruxolitinib',
                label: 'Ruxolitinib cream is a targeted option for eligible patients.',
              }}
            >
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Topical corticosteroids</strong> reduce local inflammation and can support colour return. They may suit limited areas, but prolonged or inappropriate use can cause skin thinning, stretch marks or visible vessels.
              </p>
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Tacrolimus and pimecrolimus</strong> are calcineurin inhibitors. They are often considered for sensitive sites because they do not thin skin; temporary burning or stinging can occur. Their use for vitiligo is off label in some jurisdictions.
              </p>
              <p className="my-0">
                Your written instructions should name the medicine, strength, exact areas, application schedule, planned duration and review date. Instructions for the body are not automatically suitable for eyelids or folds.
              </p>
              <GuideExample title="A practical example">
                <p>
                  Two creams may look similar but serve different roles. Keep their original labels and ask which goes on which area. If directions conflict with what you remember from the appointment, check with the prescriber or pharmacist.
                </p>
              </GuideExample>
              <p className="my-0">
                Ask what irritation is expected and what warrants contacting the clinic. More frequent application does not automatically improve a result. Do not extend or restart an old prescription without advice.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://www.nhs.uk/conditions/vitiligo/treatment/',
                    label: 'NHS: treatment',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 03 */}
            <GuideChapter
              id="ruxolitinib"
              index="03 / 08"
              title="Ruxolitinib cream is a targeted option for eligible patients."
              nextChapter={{
                id: 'phototherapy',
                label: 'What actually happens during narrowband UVB?',
              }}
            >
              <p className="my-0">
                Ruxolitinib is a topical JAK inhibitor. The US indication covers non-segmental vitiligo from age 12; treatment is limited to up to 10% body surface area. The EU indication also specifies facial involvement.
              </p>
              <p className="my-0">
                In the pivotal studies described by the FDA, about 30% reached at least 75% improvement in a facial score at week 24, versus about 10% using vehicle cream. This is not a guarantee or a measure of total-body clearance.
              </p>
              <p className="my-0">
                Response may require more than 24 weeks. The US label uses twice-daily application. The current local label, maximum treated area, other medicines and safety history must be checked.
              </p>
              <p className="my-0">
                Before deciding, ask whether your type and extent fit the indication, how much cream the plan requires, what it will cost over time and when the clinician would reassess benefit. Read the safety summary in the updates page before equating “a cream” with “risk free”.
              </p>
              <p className="my-3">
                <Link
                  href="/latest-developments#ruxolitinib"
                  className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  Read the approval and safety context →
                </Link>
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-topical-treatment-addressing-repigmentation-vitiligo-patients-aged-12-and-older',
                    label: 'FDA: ruxolitinib approval and trial results',
                  },
                  {
                    href: 'https://www.ema.europa.eu/en/medicines/human/EPAR/opzelura',
                    label: 'EMA: ruxolitinib cream',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 04 */}
            <GuideChapter
              id="phototherapy"
              index="04 / 08"
              title="What actually happens during narrowband UVB?"
              nextChapter={{
                id: 'targeted',
                label: 'When might targeted light or surgery enter the discussion?',
              }}
            >
              <p className="my-0">
                Narrowband UVB uses a controlled band of ultraviolet light. A clinic calculates and adjusts the exposure; it is not sunbathing or a tanning-bed session. Treatment may cover broader areas or be combined with prescribed skin medicines.
              </p>
              <p className="my-0">
                Common schedules involve two or three sessions weekly. A course can extend over 6–12 months, with earlier reassessment. Different guidance uses different response checkpoints, so the service should specify its own review and stopping criteria.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 my-4 text-[#1E2A4A]">
                <li className="leading-relaxed">
                  <strong className="font-semibold text-[#0B1F6B]">Before the session:</strong> the team checks the skin response, missed sessions and relevant medicine changes. Follow its instructions about products, shielding and eye protection.
                </li>
                <li className="leading-relaxed">
                  <strong className="font-semibold text-[#0B1F6B]">During treatment:</strong> exposure is measured and supervised; do not independently add exposure because progress feels slow.
                </li>
                <li className="leading-relaxed">
                  <strong className="font-semibold text-[#0B1F6B]">Between sessions:</strong> report painful redness, blistering or other problems to the service.
                </li>
                <li className="leading-relaxed">
                  <strong className="font-semibold text-[#0B1F6B]">At review:</strong> compare baseline and follow-up images and discuss whether benefit justifies continued treatment.
                </li>
              </ul>
              <p className="my-0">
                Redness, dryness and burning are possible. Home phototherapy requires a prescribed device, training and continued monitoring; it is not simply purchasing a UV lamp. Ask how device servicing, dosing adjustments and access to advice work.
              </p>
              <p className="my-0">
                The real commitment includes travel, missed work or school, total sessions and follow-up. Ask about those before purchasing a course.
              </p>
              <p className="my-3">
                <Link
                  href="/journey-changing"
                  className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  Connect phototherapy to changing patches →
                </Link>
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://doi.org/10.1007/s13555-025-01402-5',
                    label: 'Canadian consensus guideline 2025',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 05 */}
            <GuideChapter
              id="targeted"
              index="05 / 08"
              title="When might targeted light or surgery enter the discussion?"
              nextChapter={{
                id: 'systemic',
                label: 'What are oral treatments intended to do?',
              }}
            >
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Excimer light or laser</strong> treats selected patches rather than the whole body. It may be useful when localised treatment is practical, but attending repeated sessions and paying per treated area can matter.
              </p>
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Surgery</strong> transfers skin or pigment-producing cells. It is generally reserved for selected stable cases. Stability, past treatment and the donor and recipient sites need specialist assessment.
              </p>
              <p className="my-0">
                Ask which technique is proposed, why it fits the location, expected healing, scar or colour-mismatch risks, additional treatment and what a limited result would mean. A procedure changes the decision from repeated medicine or light exposure to an intervention with recovery and aftercare.
              </p>
              <p className="my-0">
                A clinic should distinguish suitable stable disease from ongoing activity before offering a procedure. A persuasive before-and-after image cannot establish that distinction for you.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://onlinelibrary.wiley.com/doi/10.1111/jdv.19450',
                    label: 'International Vitiligo Task Force: treatment recommendations 2023',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 06 */}
            <GuideChapter
              id="systemic"
              index="06 / 08"
              title="What are oral treatments intended to do?"
              nextChapter={{
                id: 'maintenance',
                label: 'What happens after a response?',
              }}
            >
              <p className="my-0">
                For selected rapidly progressive cases, a specialist may discuss a short oral corticosteroid course to suppress activity. This is different from a pigment-restoring plan and carries systemic risks.
              </p>
              <p className="my-0">
                Oral JAK inhibition is another pathway. The EMA currently lists upadacitinib for non-segmental vitiligo from age 12 in people who are candidates for systemic therapy. Eligibility, infection risks and monitoring need individual assessment.
              </p>
              <p className="my-0">
                A systemic medicine affects the body beyond the treated patches. Expect a discussion of health history, other medicines, pregnancy considerations, relevant screening and laboratory follow-up. An approval for one country or another condition does not establish a vitiligo indication everywhere.
              </p>
              <p className="my-3">
                <Link
                  href="/latest-developments#upadacitinib"
                  className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  Read the verified upadacitinib update →
                </Link>
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://onlinelibrary.wiley.com/doi/10.1111/jdv.19450',
                    label: 'International Vitiligo Task Force: treatment recommendations 2023',
                  },
                  {
                    href: 'https://www.ema.europa.eu/en/medicines/human/EPAR/rinvoq',
                    label: 'EMA: upadacitinib indication and safety',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 07 */}
            <GuideChapter
              id="maintenance"
              index="07 / 08"
              title="What happens after a response?"
              nextChapter={{
                id: 'access',
                label: 'Check eligibility, access and cost separately.',
              }}
            >
              <p className="my-0">
                Repigmented skin can lose colour again. Maintenance may use a lower-frequency prescribed topical plan or another individual approach.
              </p>
              <p className="my-0">
                Before the starting course ends, clarify which areas still need care, the new schedule, review intervals and what to do if new pigment loss appears. Ask for a plan that distinguishes maintaining benefit from restarting intensive treatment.
              </p>
              <p className="my-0">
                If benefit has been limited, review the goal, body area, actual use, duration, side effects and practical burden. The choices are not simply “keep going forever” or “give up”. A clinician may advise continuing, changing, combining or ending a treatment trial.
              </p>
              <p className="my-0">
                Do not compare treatment success only by how much colour returns. Track whether the outcome you chose at the start has improved and whether the plan remains acceptable.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://doi.org/10.1007/s13555-025-01402-5',
                    label: 'Canadian consensus guideline 2025',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 08 */}
            <GuideChapter
              id="access"
              index="08 / 08"
              title="Check eligibility, access and cost separately."
              nextChapter={{
                id: 'related',
                label: 'Choose where to go next',
              }}
            >
              <p className="my-0">
                A treatment can be authorised but not funded, stocked or offered locally. Ask the prescriber and pharmacy which local indication applies, whether prior approval is needed and what documentation supports it.
              </p>
              <p className="my-0">
                Before agreeing, compare ongoing supply, consultation, laboratory, travel and session costs. If an option is unavailable, ask about locally appropriate alternatives or a legitimate clinical study rather than buying an unknown formulation online.
              </p>
              <p className="my-0">
                OneVitiligo’s Phase 2 objective is to address difficult access through partnerships and new delivery strategies. That service is a future objective; this sample does not yet supply treatments or arrange cross-border care.
              </p>
              <p className="my-3">
                <Link
                  href="/latest-developments"
                  className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  See treatment developments and their status →
                </Link>
              </p>
            </GuideChapter>

            {/* Editorial Review Stamp */}
            <GuideReviewStamp />
          </article>
        </div>

        {/* Related Starting Points */}
        <GuideRelatedLinks currentPath="/treatment-and-care" />
      </main>

      {/* Existing Original Footer (Untouched) */}
      <Footer />
    </div>
  );
}
