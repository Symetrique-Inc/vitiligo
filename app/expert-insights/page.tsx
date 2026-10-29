import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { expertInsightsContent } from '@/content/siteContent';
import { AskExpertForm } from '@/components/AskExpertForm';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import {
  Sparkles,
  Users,
  Microscope,
  HelpCircle,
  Stethoscope,
  Heart,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ask. Learn. Stay informed. — Expert Insights | OneVitiligo',
  description:
    'Expert answers to common questions and latest research updates. Perspectives from dermatologists, researchers, and people living with vitiligo.',
};

export default function ExpertInsightsPage() {
  const exploreSections = [
    { title: 'Two Perspectives', icon: Users, href: '#perspectives', color: 'text-[#F2884B]', bg: 'bg-[#FFEDE3]' },
    { title: 'What’s New in Research', icon: Microscope, href: '#research', color: 'text-[#1D5FE0]', bg: 'bg-[#EAF2FF]' },
    { title: 'Patient Journeys', icon: Heart, href: '#journeys', color: 'text-[#7C5CE0]', bg: 'bg-[#EFEAFF]' },
    { title: 'Ask the Expert', icon: HelpCircle, href: '#ask', color: 'text-[#1FA37A]', bg: 'bg-[#E3F6EF]' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Expert Insights' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-[#F2884B] bg-[#FFEDE3] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {expertInsightsContent.header.eyebrow}
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] tracking-tight">
                  {expertInsightsContent.header.h1}
                </h1>
                <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-xl">
                  {expertInsightsContent.header.subheading}
                </p>
                <p className="text-sm text-[#1E2A4A] pt-1">
                  {expertInsightsContent.header.intro}
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-md mx-auto shadow-md border-4 border-white">
                  <Image
                    src="/images/card-expert.jpg"
                    alt="Doctor in clinical consultation listening thoughtfully to patient."
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
            <h2 className="text-xs font-bold text-[#F2884B] uppercase tracking-wider mb-4">
              Explore in this section
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {exploreSections.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="p-4 rounded-2xl bg-white border border-[#DDE5F5] hover:border-[#F2884B] hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0B1F6B] group-hover:text-[#F2884B] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F2884B] shrink-0" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Section: Two Perspectives */}
          <section id="perspectives" className="mb-14">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#F2884B] uppercase tracking-wider">
                Clinical & Lived Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Two Perspectives: Doctor and Patient
              </h2>
              <p className="text-sm sm:text-base text-[#5B6785] mt-2 max-w-3xl leading-relaxed">
                {expertInsightsContent.twoPerspectives.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Doctor's View (Blue panel) */}
              <div className="p-8 rounded-3xl bg-[#EAF2FF] border border-[#D5E2FA] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#1D5FE0] text-white flex items-center justify-center">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D5FE0]">
                      {expertInsightsContent.twoPerspectives.doctor.role}
                    </span>
                  </div>
                  <blockquote className="text-base sm:text-lg text-[#0B1F6B] font-serif leading-relaxed italic">
                    &ldquo;{expertInsightsContent.twoPerspectives.doctor.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Patient's View (Rose panel) */}
              <div className="p-8 rounded-3xl bg-[#FDE8EE] border border-[#F8C8D4] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#E8456B] text-white flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E8456B]">
                      {expertInsightsContent.twoPerspectives.patient.role}
                    </span>
                  </div>
                  <blockquote className="text-base sm:text-lg text-[#0B1F6B] font-serif leading-relaxed italic">
                    &ldquo;{expertInsightsContent.twoPerspectives.patient.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* Section: What's New in Vitiligo Research (4 cards) */}
          <section id="research" className="mb-14">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                Scientific Advances
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                What’s New in Vitiligo Research
              </h2>
              <p className="text-sm sm:text-base text-[#5B6785] mt-1">
                Research into vitiligo is accelerating. Here are some of the most promising areas of development:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertInsightsContent.research.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DDE5F5] shadow-xs hover:border-[#1D5FE0] transition-colors space-y-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-[#0B1F6B]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1E2A4A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Patient Journeys */}
          <section id="journeys" className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                  Community Voices
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                  Patient Journeys
                </h2>
                <p className="text-sm sm:text-base text-[#5B6785]">
                  {expertInsightsContent.patientJourneys.intro}
                </p>
              </div>

              <Link
                href={expertInsightsContent.patientJourneys.ctaLink}
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#7C5CE0] text-white hover:bg-[#6847D0] transition-colors shadow-xs self-start sm:self-center whitespace-nowrap"
              >
                <span>{expertInsightsContent.patientJourneys.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center space-x-3 text-xs sm:text-sm text-[#5B6785]">
              <PlaceholderTag label="Content Placeholder" />
              <span>{expertInsightsContent.patientJourneys.note}</span>
            </div>
          </section>

          {/* Section: Ask the Expert (Anonymous Q&A Form) */}
          <section className="mb-14">
            <AskExpertForm />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
