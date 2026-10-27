import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { resourcesContent } from '@/content/siteContent';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import {
  HeartHandshake,
  Users,
  Stethoscope,
  PhoneCall,
  Video,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find the right support — Resources & Support | Vitiligo Hub',
  description:
    'Trusted resources for you and your community: mental health support, peer networks, and what to look for when choosing a dermatologist.',
};

export default function ResourcesPage() {
  const exploreSections = [
    { title: 'Mental Health Support', icon: HeartHandshake, href: '#mental-health', color: 'text-[#E8456B]', bg: 'bg-[#FDE8EE]' },
    { title: 'Community', icon: Users, href: '#community', color: 'text-[#7C5CE0]', bg: 'bg-[#EFEAFF]' },
    { title: 'What to Look For in a Doctor', icon: Stethoscope, href: '#dermatologist-criteria', color: 'text-[#1D5FE0]', bg: 'bg-[#EAF2FF]' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Resources & Support' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
          <section className="relative rounded-3xl border border-[#DDE5F5] bg-white shadow-sm mt-4 mb-10 overflow-hidden flex flex-col min-[750px]:flex-row min-[750px]:items-center min-h-[460px] sm:min-h-[480px] lg:min-h-[500px]">
            {/* Mobile illustration banner (≤750px) */}
            <div className="relative w-full aspect-[2/1] max-h-[280px] min-[750px]:hidden overflow-hidden bg-[#EAF2FF]">
              <Image
                src="/images/resources-hero.png"
                alt="Illustration of diverse hands joined together surrounded by leaves and community support icons"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 750px) 100vw, 50vw"
                className="object-cover object-right"
              />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Desktop & Tablet Background Illustration (anchored right, full height, min-width 750px) */}
            <div className="hidden min-[750px]:block absolute top-0 right-0 bottom-0 w-[52%] lg:w-[58%] xl:w-[60%] h-full z-0 pointer-events-none overflow-hidden bg-[#E2EDFA]">
              <Image
                src="/images/resources-hero.png"
                alt="Illustration of diverse hands joined together surrounded by leaves and community support icons"
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 750px) 60vw, 100vw"
                className="object-cover object-right"
              />
              {/* Soft horizontal fade gradient so live text on left sits on clean white without clipping the illustration */}
              <div
                className="absolute inset-y-0 left-0 w-[42%] lg:w-[48%] bg-gradient-to-r from-white via-white/85 to-transparent z-10"
                aria-hidden="true"
              />
            </div>

            {/* Hero Content Container with Live Text */}
            <div className="relative z-10 w-full min-[750px]:w-[55%] lg:w-[48%] xl:w-[45%] max-w-[580px] p-6 sm:p-10 lg:p-12 space-y-3 sm:space-y-4">
              <span className="text-[11px] font-semibold text-[#7C5CE0] bg-[#EFEAFF] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                {resourcesContent.header.eyebrow}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold font-serif text-[#0B1F6B] tracking-tight leading-[1.12]">
                Find the right<br />
                support.
              </h1>

              <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-xl font-medium">
                {resourcesContent.header.subheading}
              </p>

              <p className="text-sm text-[#5B6785] pt-1 leading-relaxed max-w-lg">
                {resourcesContent.header.intro}
              </p>
            </div>
          </section>

         
          <section className="mb-14">
            <h2 className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider mb-4">
              Explore in this section
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

         
          <section id="mental-health" className="mb-14">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
                Emotional Wellbeing
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                {resourcesContent.mentalHealth.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B6785] mt-1">
                {resourcesContent.mentalHealth.lead}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {resourcesContent.mentalHealth.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#DDE5F5] shadow-xs hover:border-[#E8456B] transition-colors space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FDE8EE] text-[#E8456B] font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#0B1F6B]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1E2A4A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="p-4 rounded-2xl bg-[#FFF6EE] border border-[#FEDDC7] flex items-start space-x-3 text-xs sm:text-sm text-[#B34F18]">
              <Info className="w-5 h-5 text-[#F2884B] shrink-0 mt-0.5" />
              <span>{resourcesContent.mentalHealth.helplineNote}</span>
            </div>
          </section>

         
          <section id="community" className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14 space-y-4">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                Peer Connection
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                {resourcesContent.community.title}
              </h2>
              <p className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed">
                {resourcesContent.community.body}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center space-x-3 text-xs sm:text-sm text-[#5B6785]">
              <PlaceholderTag label="Coming Soon" />
              <span>{resourcesContent.community.status}</span>
            </div>
          </section>

          
          <section id="dermatologist-criteria" className="mb-14">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                Clinical Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                {resourcesContent.dermatologistCriteria.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B6785] mt-1">
                {resourcesContent.dermatologistCriteria.lead}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {resourcesContent.dermatologistCriteria.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#DDE5F5] shadow-xs hover:border-[#1D5FE0] transition-colors space-y-2 flex items-start space-x-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#1D5FE0]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-[#0B1F6B]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1E2A4A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
