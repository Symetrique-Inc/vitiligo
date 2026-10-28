import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GuideHero } from '@/components/guide/GuideHero';
import { GuideTableOfContents } from '@/components/guide/GuideTableOfContents';
import { GuideChapter } from '@/components/guide/GuideChapter';
import { GuideSources } from '@/components/guide/GuideSources';
import { GuideReviewStamp } from '@/components/guide/GuideReviewStamp';
import { GuideRelatedLinks } from '@/components/guide/GuideRelatedLinks';

export const metadata: Metadata = {
  title: 'Living with vitiligo | OneVitiligo',
  description:
    'There are many ways to live with vitiligo. Understand what your skin needs, explore the care available and choose what fits your everyday life.',
  openGraph: {
    title: 'Living with vitiligo | OneVitiligo',
    description:
      'There are many ways to live with vitiligo. Understand what your skin needs, explore the care available and choose what fits your everyday life.',
  },
};

const tocItems = [
  { id: 'feelings', label: '01 · Choose what matters to you.' },
  { id: 'skin-care', label: '02 · Make skin protection part of the day you choose.' },
  { id: 'support', label: '03 · Choose the support that is useful to you.' },
  { id: 'care', label: '04 · Build a care routine around your priorities.' },
];

export default function LivingWithVitiligoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Existing Original Header (Untouched) */}
      <Header />

      {/* Full-width Guide Hero matching journey-noticed & understand-vitiligo */}
      <GuideHero
        crumbLabel="← All starting points"
        crumbHref="/#start"
        eyebrow="Living with vitiligo"
        title="Your skin. Your choice."
        lead="There are many ways to live with vitiligo. Understand what your skin needs, explore the care available and choose what fits your everyday life."
        edition="EXPANDED PATIENT GUIDE · 4 MIN READ"
        startHref="#feelings"
        illustration={{
          src: '/images/living-with-vitiligo-hero.jpg',
          alt: 'Illustration of a woman with vitiligo looking forward toward diverse pathways: learning, skincare, physical wellness, social connection, and sun protection.',
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
              id="feelings"
              index="01 / 04"
              title="Choose what matters to you."
              nextChapter={{
                id: 'skin-care',
                label: 'Make skin protection part of the day you choose.',
              }}
            >
              <p className="my-0">
                You might want to explore treatment, keep your current routine, or understand your skin before deciding. Your priorities can be different from someone else’s and can change over time.
              </p>
              <p className="my-0">
                Start with what you would like your day to look like. Perhaps you want to continue a sport, spend less time on a treatment routine, or focus care on an area that matters to you. Those priorities give information a purpose.
              </p>
              <p className="my-0">
                There is no single appearance or treatment result you have to aim for. You can decide how much attention to give your skin today, and return to a decision when you have more information.
              </p>
              <p className="my-0">
                Three useful starting points are: What do I want to understand? Which choices are available? What would each choice involve in my life? The pages on this site help you work through those questions at your own pace.
              </p>
            </GuideChapter>

            {/* Chapter 02 */}
            <GuideChapter
              id="skin-care"
              index="02 / 04"
              title="Make skin protection part of the day you choose."
              nextChapter={{
                id: 'support',
                label: 'Choose the support that is useful to you.',
              }}
            >
              <p className="my-0">
                Skin that has lost pigment burns easily. Clothing and shade can work alongside broad-spectrum, water-resistant sunscreen of at least SPF 30. Reapply every two hours outdoors and after swimming or sweating.
              </p>
              <p className="my-0">
                Choose protection that fits the activity. For a walk, that may mean a comfortable hat and sunscreen on exposed areas. For swimming, plan water-resistant protection and reapplication afterwards. For longer periods outdoors, include shade and clothing as well as sunscreen.
              </p>
              <p className="my-0">
                Texture and comfort matter. A sunscreen you like using is easier to include in a routine. If a product irritates or leaves a cast you dislike, ask about another formulation.
              </p>
              <p className="my-0">
                Tanning beds are not medical phototherapy. A prescribed light-treatment programme controls exposure and monitors the skin response. More sun or tanning is not a substitute for that plan.
              </p>
              <p className="my-0">
                You can bring your usual activities into a care discussion: “I enjoy being outdoors. How can I protect my skin and keep doing that?” This turns a general instruction into a useful routine.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://www.aad.org/public/diseases/a-z/vitiligo-self-care',
                    label: 'American Academy of Dermatology: self care',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 03 */}
            <GuideChapter
              id="support"
              index="03 / 04"
              title="Choose the support that is useful to you."
              nextChapter={{
                id: 'care',
                label: 'Build a care routine around your priorities.',
              }}
            >
              <p className="my-0">
                Support can mean understanding a treatment, having someone help with appointments, exchanging experiences, or making time to talk about how you feel. You can choose the kind and amount that helps.
              </p>
              <p className="my-0">
                A trusted person can help you remember information from an appointment or compare the practical demands of two options. A moderated peer group can offer different experiences of daily life. Another person’s result is not a prediction of your own, but their experience may help you identify a question you had not considered.
              </p>
              <p className="my-0">
                Professional emotional support is also an option when you want help with thoughts, feelings or the effect vitiligo has on daily life. It can sit alongside skin care, regardless of whether you choose pigment treatment.
              </p>
              <p className="my-0">
                You can be specific about what you want: someone to listen, help understanding information, or practical assistance. You also decide when sharing feels useful and how much of your experience remains private.
              </p>
              <GuideSources
                links={[
                  {
                    href: 'https://www.niams.nih.gov/health-topics/vitiligo/diagnosis-treatment-and-steps-to-take',
                    label: 'NIAMS: diagnosis and treatment',
                  },
                ]}
              />
            </GuideChapter>

            {/* Chapter 04 */}
            <GuideChapter
              id="care"
              index="04 / 04"
              title="Build a care routine around your priorities."
              nextChapter={{
                id: 'related',
                label: 'Choose where to go next',
              }}
            >
              <p className="my-0">
                A routine is easier to assess when you understand its purpose. Is it intended to limit new pigment loss, restore colour, maintain a result or protect your skin? Connect the daily task to the goal before deciding what fits.
              </p>
              <p className="my-0">
                If you choose treatment, compare its place in an ordinary week: application time, clinic visits, travel, monitoring and ongoing cost. Ask which parts are essential for safe and effective use and where there may be suitable alternatives.
              </p>
              <p className="my-0">
                For example, a person whose main constraint is travel needs a different practical conversation from someone who finds a cream irritating. Naming the constraint helps make the review specific.
              </p>
              <p className="my-0">
                You can revisit a plan as your priorities change. Discuss changes to prescribed care with the treating clinician, and agree what the next review will assess. Choosing a new direction can be an informed decision, rather than a judgement on how well you have coped.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 my-4 text-[#1E2A4A]">
                <li className="leading-relaxed">
                  <Link
                    href="/treatment-and-care"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    Understand the options and their demands →
                  </Link>
                </li>
                <li className="leading-relaxed">
                  <Link
                    href="/latest-developments"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    Explore treatment developments →
                  </Link>
                </li>
                <li className="leading-relaxed">
                  <Link
                    href="/#start"
                    className="text-[#1D5FE0] font-semibold hover:underline underline-offset-4"
                  >
                    Find a journey that fits today →
                  </Link>
                </li>
              </ul>
            </GuideChapter>

            {/* Editorial Review Stamp */}
            <GuideReviewStamp />
          </article>
        </div>

        {/* Related Starting Points */}
        <GuideRelatedLinks currentPath="/living-with-vitiligo" />
      </main>

      {/* Existing Original Footer (Untouched) */}
      <Footer />
    </div>
  );
}
