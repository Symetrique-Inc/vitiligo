import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContentReviewStamp } from '@/components/ContentReviewStamp';
import { SourcesBlock } from '@/components/SourcesBlock';
import { commonSources } from '@/content/siteContent';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import {
  Smile,
  Users,
  Briefcase,
  Sun,
  Palette,
  Play,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Living with Vitiligo — Daily Life, Relationships & Wellbeing | Vitiligo Hub',
  description:
    'Everyday life beyond the skin: practical guidance on emotional wellbeing, relationships, workplace confidence, sun safety and personal cosmetic choices.',
};

export default function LivingWithVitiligoPage() {
  const exploreSections = [
    { title: 'Emotional Wellbeing', icon: Smile, href: '#wellbeing', color: 'text-[#E8456B]', bg: 'bg-[#FDE8EE]' },
    { title: 'Relationships and Family', icon: Users, href: '#relationships', color: 'text-[#7C5CE0]', bg: 'bg-[#EFEAFF]' },
    { title: 'Work and Social Life', icon: Briefcase, href: '#work', color: 'text-[#1D5FE0]', bg: 'bg-[#EAF2FF]' },
    { title: 'Sun Protection', icon: Sun, href: '#sun', color: 'text-[#1FA37A]', bg: 'bg-[#E3F6EF]' },
    { title: 'Skincare and Cosmetic Options', icon: Palette, href: '#skincare', color: 'text-[#F2884B]', bg: 'bg-[#FFEDE3]' },
    { title: 'Real Stories', icon: Play, href: '#stories', color: 'text-[#0B1F6B]', bg: 'bg-[#EAF2FF]' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'My Life & Daily Living' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-[#7C5CE0] bg-[#EFEAFF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  My Life & Daily Living
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] tracking-tight">
                  Everyday life beyond the skin
                </h1>
                <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-xl">
                  Practical information for real-life situations. Living with vitiligo is about much more than skin — from relationships and work to emotional wellbeing and everyday tips.
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-md mx-auto shadow-md border-4 border-white">
                  <Image
                    src="/images/card-mylife.jpg"
                    alt="Young man with vitiligo smiling warmly in a natural outdoor setting."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Explore this section */}
          <section className="mb-14">
            <h2 className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider mb-4">
              Explore in this section
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {exploreSections.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="p-4 rounded-2xl bg-white border border-[#DDE5F5] hover:border-[#7C5CE0] hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0B1F6B] group-hover:text-[#7C5CE0] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#7C5CE0] shrink-0" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Section 1: Emotional Wellbeing */}
          <section id="wellbeing" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-4">
            <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
              Mental Health & Identity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
              Emotional Wellbeing
            </h2>
            <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4 max-w-4xl">
              <p>
                Vitiligo can affect how you feel about yourself. Many people experience anxiety, frustration, embarrassment or sadness, particularly when vitiligo is visible on the face, hands or other exposed areas.
              </p>
              <p>
                These feelings are valid. Vitiligo changes how you look, and appearance is deeply connected to identity and confidence. Research shows that people with vitiligo are more likely to experience depression and anxiety than the general population.
              </p>

              <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-3 pt-4">
                <h3 className="font-bold text-sm text-[#0B1F6B]">What can help:</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5B6785] list-disc list-inside">
                  <li><strong>Talk about how you feel.</strong> Sharing with someone you trust — a friend, family member or counsellor — can make a real difference.</li>
                  <li><strong>Connect with others who understand.</strong> Online communities and support groups for people with vitiligo can help you feel less alone.</li>
                  <li><strong>Consider professional support.</strong> A psychologist or counsellor with experience in skin conditions can offer practical strategies for building confidence and managing difficult emotions.</li>
                  <li><strong>Focus on what you can control.</strong> Sun protection, skincare routines and treatment options are all areas where you can take action.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Relationships and Family */}
          <section id="relationships" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-4">
            <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
              Interpersonal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
              Relationships and Family
            </h2>
            <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4 max-w-4xl">
              <p>
                Vitiligo can affect relationships in ways that are not always obvious. Partners, family members and friends may not understand what vitiligo is, and their reactions can range from curiosity to awkwardness to unintentional insensitivity.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC]">
                  <h3 className="font-bold text-sm text-[#0B1F6B] mb-1">Talking to your partner:</h3>
                  <p className="text-xs sm:text-sm text-[#5B6785]">
                    Be open about how vitiligo makes you feel. Your partner may not realise the emotional impact unless you tell them. Sharing information about the condition can help them understand and support you better.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA]">
                  <h3 className="font-bold text-sm text-[#0B1F6B] mb-1">Explaining to children:</h3>
                  <p className="text-xs sm:text-sm text-[#5B6785]">
                    If your child has vitiligo, explain it in simple terms: &ldquo;Your skin is losing some of its colour in certain areas. It is not dangerous and it is not your fault.&rdquo; Children take their cues from the adults around them — a calm, matter-of-fact approach helps.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7]">
                  <h3 className="font-bold text-sm text-[#0B1F6B] mb-1">Supporting someone with vitiligo:</h3>
                  <p className="text-xs sm:text-sm text-[#5B6785]">
                    If someone in your life has vitiligo, the most helpful thing you can do is listen without judgement. Avoid offering unsolicited advice about treatments or cures. Ask how they are feeling and follow their lead.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Work and Social Life */}
          <section id="work" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-4">
            <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
              Social Life
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
              Work and Social Life
            </h2>
            <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4 max-w-4xl">
              <p>
                Vitiligo is not a barrier to working, socialising or pursuing your goals. However, some people experience self-consciousness or face questions from colleagues and acquaintances.
              </p>

              <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-3">
                <h3 className="font-bold text-sm text-[#0B1F6B]">Practical tips:</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5B6785] list-disc list-inside">
                  <li><strong>You are not obligated to explain your skin to anyone.</strong> If you choose to, a simple explanation is enough: &ldquo;I have vitiligo — it’s a skin condition where some areas lose their colour.&rdquo;</li>
                  <li><strong>Equality and anti-discrimination:</strong> If vitiligo is affecting your confidence at work, speak to your HR department or occupational health service. In many countries, visible skin conditions are covered by equality and anti-discrimination laws.</li>
                  <li><strong>Prepare for social situations:</strong> Decide in advance how you want to respond to questions or stares, so you feel more in control.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Sun Protection */}
          <section id="sun" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-4">
            <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
              Daily Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
              Sun Protection
            </h2>
            <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4 max-w-4xl">
              <p>
                Areas of skin affected by vitiligo have less melanin and burn more easily. Sun protection is important both for comfort and to reduce the contrast between affected and unaffected skin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7]">
                  <h3 className="font-bold text-sm text-[#0B1F6B] mb-1">Broad-Spectrum Sunscreen</h3>
                  <p className="text-xs text-[#5B6785]">
                    Use a broad-spectrum sunscreen with SPF 30 or higher on all exposed skin, including areas with vitiligo.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7]">
                  <h3 className="font-bold text-sm text-[#0B1F6B] mb-1">Reapply Regularly</h3>
                  <p className="text-xs text-[#5B6785]">
                    Reapply every two hours, and more often if swimming or sweating.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7]">
                  <h3 className="font-bold text-sm text-[#0B1F6B] mb-1">Protective Clothing</h3>
                  <p className="text-xs text-[#5B6785]">
                    Wear protective clothing and a wide-brimmed hat when spending extended time outdoors.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7]">
                  <h3 className="font-bold text-sm text-[#0B1F6B] mb-1">Seek Shade</h3>
                  <p className="text-xs text-[#5B6785]">
                    Seek shade during the strongest sun hours (typically 10 a.m. to 4 p.m.).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Skincare and Cosmetic Options */}
          <section id="skincare" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-4">
            <span className="text-xs font-bold text-[#F2884B] uppercase tracking-wider">
              Personal Choice
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
              Skincare and Cosmetic Options
            </h2>
            <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4 max-w-4xl">
              <p>
                Some people with vitiligo choose to use cosmetic camouflage to cover lighter patches for certain occasions. This is a personal choice and neither necessary nor expected.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#5B6785] list-disc list-inside">
                <li><strong>Camouflage creams and cover-up products</strong> are available in a wide range of skin tones. Many are waterproof and long-lasting.</li>
                <li><strong>Self-tanning products</strong> can help reduce the contrast between affected and unaffected areas, though results vary.</li>
                <li><strong>Micropigmentation (cosmetic tattooing)</strong> is an option for small, stable patches, particularly on the lips or around the eyes. Discuss this with your dermatologist first.</li>
              </ul>

              <div className="p-4 rounded-2xl bg-[#FFF8F4] border border-[#FEDDC7] text-xs sm:text-sm text-[#0B1F6B] font-semibold">
                Whatever you choose, the most important thing is that your approach makes you feel comfortable and confident.
              </div>
            </div>
          </section>

          {/* Section 6: Real people. Real stories. (#stories anchor) */}
          <section id="stories" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                Community Voices
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Real people. Real stories.
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
                Real stories from people living with vitiligo. Each journey is different, and each voice adds to our shared understanding of this condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="rounded-2xl border border-dashed border-[#DDE5F5] bg-[#F8FAFF] p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[220px]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B1F6B]">Story #{num}</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Stories coming soon. If you would like to share your experience, contact us.
                    </p>
                    <PlaceholderTag label="Video Pending" />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about#partner"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#7C5CE0] text-white hover:bg-[#6848ce] transition-colors shadow-xs"
              >
                <span>Share your experience →</span>
              </Link>
            </div>
          </section>

          {/* G4 Review Stamp */}
          <ContentReviewStamp />

          {/* G5 Sources */}
          <SourcesBlock sources={commonSources.p03} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
