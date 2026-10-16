import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContentReviewStamp } from '@/components/ContentReviewStamp';
import { SourcesBlock } from '@/components/SourcesBlock';
import { UnderstandAccordion } from '@/components/UnderstandAccordion';
import { KeyNumbersLancet } from '@/components/KeyNumbersLancet';
import { commonSources } from '@/content/siteContent';
import {
  Layers,
  Users,
  Heart,
  Activity,
  Bandage,
  Info,
  ArrowRight,
  Stethoscope,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Understand Vitiligo — What It Is and Why It Happens | Vitiligo Hub',
  description:
    'Vitiligo is an autoimmune condition that causes loss of skin colour. Learn what happens in the skin, how it can affect health beyond appearance, and what is true.',
};

export default function UnderstandVitiligoPage() {
  const exploreTiles = [
    {
      title: 'The Basics',
      description: 'Facts, types, symptoms, causes and more',
      icon: Layers,
      href: '#p02-s03',
      color: 'text-[#1D5FE0]',
      bg: 'bg-[#EAF2FF]',
    },
    {
      title: 'Stigma & Misconceptions',
      description: 'What people think vs. what is true',
      icon: Users,
      href: '/understand-vitiligo/stigma-and-misconceptions',
      color: 'text-[#E8456B]',
      bg: 'bg-[#FDE8EE]',
    },
    {
      title: 'Living with Vitiligo',
      description: 'Family, work, relationships and daily life',
      icon: Heart,
      href: '/living-with-vitiligo',
      color: 'text-[#7C5CE0]',
      bg: 'bg-[#EFEAFF]',
    },
    {
      title: 'Behaviours & Daily Life',
      description: 'How people seek information and treatment',
      icon: Activity,
      href: '/living-with-vitiligo',
      color: 'text-[#1FA37A]',
      bg: 'bg-[#E3F6EF]',
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Understand Vitiligo' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* P02-S01 — Hero (half height) */}
          <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-[#1D5FE0] bg-[#EAF2FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Condition & Biology
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] tracking-tight">
                  Understand Vitiligo
                </h1>
                <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-xl">
                  Clear, reliable and easy-to-understand information for patients, families and the wider public.
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-md mx-auto shadow-md border-4 border-white">
                  <Image
                    src="/images/card-understand.jpg"
                    alt="Close-up of a person with vitiligo patches on the cheek."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* P02-S02 — Explore this section (2 columns × 4 rows on desktop, 1 on mobile, 5 tiles handled gracefully) */}
          <section className="mb-14" aria-labelledby="explore-section-heading">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                Index
              </span>
              <h2 id="explore-section-heading" className="text-2xl font-bold font-serif text-[#0B1F6B] mt-1">
                Explore this section
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exploreTiles.map((tile, idx) => {
                const Icon = tile.icon;
                return (
                  <Link
                    key={idx}
                    href={tile.href}
                    className="p-5 rounded-2xl bg-white border border-[#DDE5F5] hover:border-[#1D5FE0] hover:shadow-md transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-11 h-11 rounded-xl ${tile.bg} ${tile.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors">
                          {tile.title}
                        </h3>
                        <p className="text-xs text-[#5B6785]">{tile.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#1D5FE0] group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </section>

          {/* P02-S03 — What is vitiligo? */}
          <section id="p02-s03" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-14">
            <div className="max-w-4xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Section 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  What is vitiligo?
                </h2>
              </div>

              <p className="text-xl sm:text-2xl font-serif text-[#0B1F6B] font-semibold leading-snug">
                Vitiligo is more than a change in skin colour.
              </p>

              <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4">
                <p>
                  Vitiligo is a medical condition in which areas of the skin lose their natural colour. The affected areas may look lighter than the surrounding skin and can sometimes appear white or pink.
                </p>
                <p>
                  Vitiligo develops when the body&apos;s immune system mistakenly attacks melanocytes — the cells that produce pigment. Melanocytes give colour to the skin, hair and eyes, and they also help protect the skin from ultraviolet (UV) radiation. Vitiligo can appear at any age, though it often begins before the age of 30. It affects people of all skin tones and backgrounds equally. It is not contagious — you cannot catch vitiligo from another person.
                </p>
              </div>

              {/* Key-message callout (accent colour, icon: info) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] flex items-start space-x-3 text-sm text-[#0B1F6B] font-semibold">
                <Info className="w-5 h-5 text-[#1D5FE0] shrink-0 mt-0.5" />
                <p>Vitiligo is an autoimmune disease. It is not simply a cosmetic condition.</p>
              </div>
            </div>
          </section>

          {/* P02-S05 — Why does vitiligo matter beyond the skin? Accordion */}
          <section id="p02-s05" className="py-10 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-14">
            <div className="max-w-4xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Health & Wellbeing
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  Why does vitiligo matter beyond the skin?
                </h2>
                <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
                  Vitiligo is often thought of as a condition that only changes appearance. In fact, it can affect other parts of health and wellbeing.
                </p>
              </div>

              <UnderstandAccordion />

              {/* Reassurance line under accordion (bold) + Link */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <p className="font-bold text-sm text-[#0B1F6B]">
                  Having vitiligo does not mean you will automatically develop thyroid disease, another autoimmune condition or hearing loss.
                </p>
                <Link
                  href="/understand-vitiligo/stigma-and-misconceptions"
                  className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[#1D5FE0] hover:underline"
                >
                  <span>Read more myths and facts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* P02-S06 — Key numbers (Lancet 2024, no 70M+) */}
          <section className="mb-14">
            <KeyNumbersLancet />
          </section>

          {/* What should I do next? (from DOC B) */}
          <section className="py-8 bg-[#F4F8FF] rounded-3xl border border-[#DDE5F5] p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                What should I do next?
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                If you think you may have vitiligo, or if you have been recently diagnosed, a dermatologist can help. They can confirm whether it is vitiligo, discuss what to expect and talk through the options that may be right for you.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/find-a-doctor"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors shadow-xs"
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Find a Doctor</span>
              </Link>
              <Link
                href="/understand-vitiligo/stigma-and-misconceptions"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#DDE5F5] text-[#0B1F6B] hover:bg-gray-50 transition-colors"
              >
                <span>Read about Stigma & Misconceptions</span>
              </Link>
            </div>
          </section>

          {/* P02-S07 — Next steps CTA band (two cards) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-7 rounded-3xl bg-[#FDE8EE] border border-[#FAD0DC] flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B1F6B]">
                  Heard something about vitiligo that worries you?
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] mt-2">
                  Separate myth from fact, and learn why stigma happens.
                </p>
              </div>
              <Link
                href="/understand-vitiligo/stigma-and-misconceptions"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#E8456B] text-white hover:bg-[#c93354] transition-colors self-start shadow-xs"
              >
                <span>Myths & facts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-[#EAF2FF] border border-[#D5E2FA] flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B1F6B]">
                  Still have questions?
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] mt-2">
                  Get answers from dermatologists and other experts.
                </p>
              </div>
              <Link
                href="/expert-insights"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1D5FE0] text-white hover:bg-[#154bb3] transition-colors self-start shadow-xs"
              >
                <span>Explore Expert Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
