import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GuideHero } from '@/components/guide/GuideHero';
import { GuideTableOfContents } from '@/components/guide/GuideTableOfContents';
import { GuideChapter } from '@/components/guide/GuideChapter';
import { GuideTable } from '@/components/guide/GuideTable';
import { GuideSources } from '@/components/guide/GuideSources';
import { GuideReviewStamp } from '@/components/guide/GuideReviewStamp';
import { GuideRelatedLinks } from '@/components/guide/GuideRelatedLinks';

export const metadata: Metadata = {
  title: 'Treatment Developments | OneVitiligo',
  description:
    'Evidence checked 25 October 2026. This page separates authorised treatment, published studies and ongoing research. It is a dated review, not an automatically updated news feed.',
  openGraph: {
    title: 'Treatment Developments | OneVitiligo',
    description:
      'Evidence checked 25 October 2026. This page separates authorised treatment, published studies and ongoing research. It is a dated review, not an automatically updated news feed.',
  },
};

const tocItems = [
  { id: 'brand-names', label: '01 · Know the brand, the medicine and the company.' },
  { id: 'availability', label: '02 · Where is a vitiligo indication or access route verified?' },
  { id: 'ruxolitinib', label: '03 · Opzelura by Incyte — ruxolitinib cream.' },
  { id: 'upadacitinib', label: '04 · Rinvoq by AbbVie — upadacitinib tablets.' },
  { id: 'research', label: '05 · Povorcitinib — investigational treatment developed by Incyte.' },
  { id: 'read-results', label: '06 · Read the number before reading the headline.' },
  { id: 'access', label: '07 · Approval, prescribing and access are separate steps.' },
];

export default function LatestDevelopmentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Existing Original Header (Untouched) */}
      <Header />

      <main id="main-content" className="wrap flex-1 max-w-[1160px] mx-auto px-5 sm:px-10 w-full">
        {/* Guide Hero */}
        <GuideHero
          crumbLabel="← All starting points"
          crumbHref="/#start"
          eyebrow="Treatment developments"
          title="What has changed, and what does it mean for you?"
          lead="Evidence checked 25 October 2026. This page separates authorised treatment, published studies and ongoing research. It is a dated review, not an automatically updated news feed."
          edition="EXPANDED PATIENT GUIDE · 8 MIN READ"
          startHref="#brand-names"
        />

        {/* Guide 2-Column Responsive Layout */}
        <div className="guide-layout grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)] gap-8 lg:gap-12 items-start mt-2">
          {/* Sticky Chapter Navigation on Desktop */}
          <GuideTableOfContents items={tocItems} />

          {/* Guide Article Content */}
          <article className="min-w-0">
            {/* Chapter 01 */}
            <GuideChapter
              id="brand-names"
              index="01 / 07"
              title="Know the brand, the medicine and the company."
              nextChapter={{
                id: 'availability',
                label: 'Where is a vitiligo indication or access route verified?',
              }}
            >
              <p className="my-0">
                A brand is the product name; the generic name identifies its active medicine. Keeping both together helps you recognise a prescription or discuss the correct formulation.
              </p>
              <GuideTable
                headers={['Brand and medicine', 'Company', 'What the name refers to']}
                rows={[
                  [
                    <div>
                      <strong className="font-semibold text-[#0B1F6B]">Opzelura</strong>
                      <br />
                      Ruxolitinib 1.5% cream
                    </div>,
                    <strong className="font-semibold text-[#0B1F6B]">Incyte</strong>,
                    <div>
                      Prescription topical JAK inhibitor.{' '}
                      <a
                        href="https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-topical-treatment-addressing-repigmentation-vitiligo-patients-aged-12-and-older"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        FDA <span aria-hidden="true">↗</span>
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://www.ema.europa.eu/en/medicines/human/EPAR/opzelura"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        EMA <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                  [
                    <div>
                      <strong className="font-semibold text-[#0B1F6B]">Rinvoq</strong>
                      <br />
                      Upadacitinib tablets
                    </div>,
                    <strong className="font-semibold text-[#0B1F6B]">AbbVie</strong>,
                    <div>
                      Prescription oral JAK inhibitor; EU vitiligo indication verified.{' '}
                      <a
                        href="https://www.ema.europa.eu/en/medicines/human/EPAR/rinvoq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        EMA <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                  [
                    <div>
                      <strong className="font-semibold text-[#0B1F6B]">Povorcitinib</strong>
                      <br />
                      Investigational oral medicine
                    </div>,
                    <div>
                      <strong className="font-semibold text-[#0B1F6B]">Incyte</strong> — developer; individual study sponsors can differ.
                    </div>,
                    <div>
                      No marketed vitiligo brand verified in this review. Research access is distinct from routine prescribing.{' '}
                      <a
                        href="https://www.incytemi.com/node/141"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        Developer information <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                ]}
              />
              <p className="my-0">
                The company column identifies the product company or developer, rather than a guarantee of a single factory location. Local marketing authorisation holders are listed below where verified. Names are provided to help identify medicines, not as product endorsements.
              </p>
            </GuideChapter>

            {/* Chapter 02 */}
            <GuideChapter
              id="availability"
              index="02 / 07"
              title="Where is a vitiligo indication or access route verified?"
              nextChapter={{
                id: 'ruxolitinib',
                label: 'Opzelura by Incyte — ruxolitinib cream.',
              }}
            >
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Checked 25 October 2026.</strong> This is a verified selection of locations, not a complete worldwide register or a live pharmacy-stock service. A country not listed is not automatically a country where treatment is unavailable. Product approval for another condition is not evidence of approval for vitiligo.
              </p>
              <GuideTable
                headers={[
                  'Medicine and location',
                  'Verified indication or status',
                  'Company or local holder',
                  'What access information establishes',
                ]}
                rows={[
                  [
                    <strong className="font-semibold text-[#0B1F6B]">Opzelura — United States</strong>,
                    'FDA-approved for non-segmental vitiligo from age 12.',
                    'Incyte.',
                    <div>
                      Prescription approval verified; pharmacy stock and insurance coverage need confirmation.{' '}
                      <a
                        href="https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-topical-treatment-addressing-repigmentation-vitiligo-patients-aged-12-and-older"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        FDA approval <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                  [
                    <strong className="font-semibold text-[#0B1F6B]">Opzelura — European Union</strong>,
                    'Authorised for non-segmental vitiligo with facial involvement from age 12.',
                    'Incyte Biosciences Distribution B.V.',
                    <div>
                      EU authorisation does not establish launch, funding or stock in every member country.{' '}
                      <a
                        href="https://www.ema.europa.eu/en/medicines/human/EPAR/opzelura"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        EMA product record <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                  [
                    <strong className="font-semibold text-[#0B1F6B]">Opzelura — United Kingdom</strong>,
                    'UK product information lists non-segmental vitiligo with facial involvement from age 12.',
                    'Incyte Biosciences UK Ltd.',
                    <div>
                      England: NHS access announced; NICE criteria include first-line topical treatments being ineffective or unsuitable and the commercial arrangement. Other UK funding routes require local checking.{' '}
                      <a
                        href="https://www.medicines.org.uk/emc/product/14903/smpc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        UK label <span aria-hidden="true">↗</span>
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://www.england.nhs.uk/2026/02/tens-thousands-vitiligo-offered-life-changing-new-cream-restore-skin-colour/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        NHS England <span aria-hidden="true">↗</span>
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://www.ncbi.nlm.nih.gov/books/NBK622042/?report=reader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        NICE criteria <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                  [
                    <strong className="font-semibold text-[#0B1F6B]">Opzelura — Canada</strong>,
                    'Non-segmental vitiligo from age 12; Health Canada lists the product as marketed.',
                    <div>
                      Health Canada product company: Incyte Corporation. Canadian review sponsor: Incyte Biosciences Canada Corporation.
                    </div>,
                    <div>
                      Marketed status is confirmed, not stock at an individual pharmacy. pCPA records that public-plan negotiations were not pursued; this does not determine every individual or private coverage route.{' '}
                      <a
                        href="https://health-products.canada.ca/dpd-bdpp/info?code=104109&lang=eng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        Health Canada <span aria-hidden="true">↗</span>
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://www.ncbi.nlm.nih.gov/books/NBK622165/table/tr8269868382083582_ch01_t01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        Indication <span aria-hidden="true">↗</span>
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://pcpa-app.ca/browse-negotiations/77005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        Public-plan negotiation status <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                  [
                    <strong className="font-semibold text-[#0B1F6B]">Opzelura — Switzerland</strong>,
                    'Swissmedic authorisation recorded 30 January 2025 for non-segmental vitiligo with facial involvement.',
                    'Incyte Biosciences International Sàrl.',
                    <div>
                      Authorisation verified; dispensing availability, eligibility and reimbursement need local confirmation.{' '}
                      <a
                        href="https://www.swissmedic.ch/dam/swissmedic/de/dokumente/stab/journal/swissmedic-journal01-2025.pdf.download.pdf/Swissmedic%20Journal%2001-2025_web.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        Swissmedic record <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                  [
                    <strong className="font-semibold text-[#0B1F6B]">Rinvoq — European Union</strong>,
                    'Non-segmental vitiligo from age 12 in people who are candidates for systemic therapy.',
                    'AbbVie Deutschland GmbH & Co. KG.',
                    <div>
                      EU vitiligo indication verified. Local reimbursement, launch and pharmacy supply have not been confirmed here.{' '}
                      <a
                        href="https://www.ema.europa.eu/en/medicines/human/EPAR/rinvoq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D5FE0] hover:underline underline-offset-2"
                      >
                        EMA product record <span aria-hidden="true">↗</span>
                      </a>
                    </div>,
                  ],
                ]}
              />
              <p className="my-0">
                For a local answer, a prescribing clinician or pharmacy can check the current label, supplier and funding criteria. This directory does not recommend importing a medicine or using a formulation intended for another condition.
              </p>
            </GuideChapter>

            {/* Chapter 03 */}
            <GuideChapter
              id="ruxolitinib"
              index="03 / 07"
              title="Opzelura by Incyte — ruxolitinib cream."
              nextChapter={{
                id: 'upadacitinib',
                label: 'Rinvoq by AbbVie — upadacitinib tablets.',
              }}
            >
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Brand:</strong> Opzelura.{' '}
                <strong className="font-semibold text-[#0B1F6B]">Product company:</strong> Incyte. The cream is distinct from oral ruxolitinib products used for other conditions. See the location table for verified vitiligo indications and access notes.
              </p>
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Status:</strong> authorised for specified non-segmental vitiligo populations in the US and EU. The EU indication includes facial involvement; eligibility should be checked against the current local label.
              </p>
              <p className="my-0">
                The cream inhibits JAK signalling involved in the immune response. The treatment guide describes the US trial endpoint and treated-area limit. It is a prescription option with safety considerations, not a cosmetic cream.
              </p>
              <p className="my-0">
                The FDA reports application-site acne and itching among common reactions. It also highlights serious JAK-inhibitor class risks, including infections, malignancy, cardiovascular events and thrombosis. These warnings require a prescriber’s assessment and should not be interpreted as an estimate of identical risk for every cream user.
              </p>
              <p className="my-0">
                Bring your full medicine list. Combining ruxolitinib with other JAK inhibitors, therapeutic biologics or strong immunosuppressants is not recommended in the FDA summary.
              </p>
              <p className="my-3">
                <Link
                  href="/treatment-and-care#ruxolitinib"
                  className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  See eligibility and trial results →
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
                  {
                    href: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215309s001lbl.pdf',
                    label: 'FDA prescribing information: boxed warnings and precautions',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 04 */}
            <GuideChapter
              id="upadacitinib"
              index="04 / 07"
              title="Rinvoq by AbbVie — upadacitinib tablets."
              nextChapter={{
                id: 'research',
                label: 'Povorcitinib — investigational treatment developed by Incyte.',
              }}
            >
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Brand:</strong> Rinvoq.{' '}
                <strong className="font-semibold text-[#0B1F6B]">Product company:</strong> AbbVie.{' '}
                <strong className="font-semibold text-[#0B1F6B]">EU authorisation holder:</strong> AbbVie Deutschland GmbH & Co. KG. The EU vitiligo indication does not establish approval for vitiligo in every other country.
              </p>
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Verified regulatory status:</strong> the EMA lists non-segmental vitiligo in adults and adolescents aged 12 and older who are candidates for systemic therapy. This is an EU statement, not a claim of worldwide authorisation.
              </p>
              <p className="my-0">
                The phase 3 Viti-Up publication reports two global placebo-controlled studies using oral upadacitinib, with facial and total-body repigmentation endpoints at week 48. Read the study for the specific population and results; the outcome of an oral study cannot be ranked against a cream study by headline percentages alone.
              </p>
              <p className="my-0">
                Systemic JAK treatment needs a risk discussion. EMA restrictions include serious infection and pregnancy; infection, blood-count and laboratory changes can require monitoring. Cardiovascular or cancer risk and older age affect prescribing decisions.
              </p>
              <p className="my-0">
                The practical question is whether a systemic option is appropriate for your disease and health history, not simply whether it is newer. Ask about screening, monitoring, alternatives, local authorisation and access before considering treatment.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://www.ema.europa.eu/en/medicines/human/EPAR/rinvoq',
                    label: 'EMA: upadacitinib indication and safety',
                  },
                  {
                    href: 'https://doi.org/10.1016/S0140-6736(26)00896-2',
                    label: 'Viti-Up phase 3 studies: The Lancet 2026',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 05 */}
            <GuideChapter
              id="research"
              index="05 / 07"
              title="Povorcitinib — investigational treatment developed by Incyte."
              nextChapter={{
                id: 'read-results',
                label: 'Read the number before reading the headline.',
              }}
            >
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Developer:</strong> Incyte. Its programme includes STOP-V1 and STOP-V2. No marketed vitiligo brand was verified in this review.{' '}
                <a
                  href="https://www.incytemi.com/node/141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D5FE0] hover:underline underline-offset-2"
                >
                  Development programme <span aria-hidden="true">↗</span>
                </a>
              </p>
              <p className="my-0">
                The UC Irvine STOP-V1 listing names Incyte Corporation as sponsor and states the study is in progress but not accepting new patients. This is a research-site status, not commercial availability.{' '}
                <a
                  href="https://clinicaltrials.icts.uci.edu/trial/NCT06113445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D5FE0] hover:underline underline-offset-2"
                >
                  Site listing <span aria-hidden="true">↗</span>
                </a>
              </p>
              <p className="my-0">
                The separate Chinese study described below lists Dermavon Holdings Limited as its sponsor; a regional trial sponsor and the original developer are different roles.
              </p>
              <p className="my-0">
                <strong className="font-semibold text-[#0B1F6B]">Registry status checked:</strong> NCT07865312 is a phase 3 study in Chinese adults with non-segmental vitiligo considered suitable for systemic treatment. Its registry entry, updated 8 October 2026, states “not yet recruiting”.
              </p>
              <p className="my-0">
                The planned study compares oral povorcitinib with placebo over 52 weeks. Its primary endpoint is the proportion reaching at least 75% improvement in the facial VASI score. These are study plans, not established benefits or an approval announcement.
              </p>
              <p className="my-0">
                A trial in one country is not an access route for every visitor. Eligibility, participating sites, recruitment status and travel requirements must be checked with the study team. A registry listing does not promise an enrolment place or clinical benefit.
              </p>
              <p className="my-0">
                This is a selected research example, not a complete worldwide pipeline. Open the source record to check whether its status has changed before acting.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://clinicaltrials.gov/study/NCT07865312',
                    label: 'ClinicalTrials.gov: NCT07865312',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 06 */}
            <GuideChapter
              id="read-results"
              index="06 / 07"
              title="Read the number before reading the headline."
              nextChapter={{
                id: 'access',
                label: 'Approval, prescribing and access are separate steps.',
              }}
            >
              <GuideTable
                headers={['Term', 'What it means', 'What it does not mean']}
                rows={[
                  [
                    'F-VASI75',
                    'At least 75% improvement from baseline in a facial vitiligo score.',
                    'Every participant regains 75% of all body colour.',
                  ],
                  [
                    'T-VASI50',
                    'At least 50% improvement in a total-body score.',
                    'A cure or a result in every treated area.',
                  ],
                  [
                    'Week 24 or week 48',
                    'The time at which a reported endpoint was assessed.',
                    'The first day any improvement can appear.',
                  ],
                  [
                    'Placebo or vehicle comparison',
                    'A study comparison helping assess treatment effect.',
                    'A direct comparison against every existing therapy.',
                  ],
                ]}
              />
              <p className="my-0">
                Check the denominator: how many participants reached the endpoint, out of how many treated? Check age, disease extent, time point, treatment combinations and adverse effects. If a result is from a conference announcement, ask whether a full peer-reviewed paper is available.
              </p>
              <p className="my-0">
                The same endpoint name does not make separate trials interchangeable. A clinician can help interpret whether a study population is relevant to your situation.
              </p>
            </GuideChapter>

            {/* Chapter 07 */}
            <GuideChapter
              id="access"
              index="07 / 07"
              title="Approval, prescribing and access are separate steps."
              nextChapter={{
                id: 'related',
                label: 'Choose where to go next',
              }}
            >
              <p className="my-0">
                A positive study can support a regulatory application, but it is not itself an approval. Approval in turn does not guarantee public coverage, insurance payment, supply or a clinic able to prescribe it.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 my-4 text-[#1E2A4A]">
                <li className="leading-relaxed">
                  Identify the exact medicine and formulation.
                </li>
                <li className="leading-relaxed">
                  Check the vitiligo indication with your local regulator or prescriber.
                </li>
                <li className="leading-relaxed">
                  Confirm age, disease type and other eligibility requirements.
                </li>
                <li className="leading-relaxed">
                  Check supply, coverage, costs and monitoring.
                </li>
              </ul>
              <p className="my-0">
                OneVitiligo’s next phase aims to work on difficult access through partnerships and innovative delivery strategies. No partnership or treatment-access service is being claimed as available in this prototype.
              </p>
              <p className="my-3">
                <Link
                  href="/treatment-and-care#access"
                  className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  Prepare an access conversation →
                </Link>
              </p>
            </GuideChapter>

            {/* Editorial Review Stamp */}
            <GuideReviewStamp />
          </article>
        </div>

        {/* Related Starting Points */}
        <GuideRelatedLinks currentPath="/latest-developments" />
      </main>

      {/* Existing Original Footer (Untouched) */}
      <Footer />
    </div>
  );
}
