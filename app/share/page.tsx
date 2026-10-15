import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContentReviewStamp } from '@/components/ContentReviewStamp';
import { SourcesBlock } from '@/components/SourcesBlock';
import { commonSources } from '@/content/siteContent';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import { ShieldCheck, Heart, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Share Your Experience — Symetrique Vitiligo Hub',
  description:
    'Join Symetrique patient-reported outcome programmes. Share your journey with complete consent and privacy protection to help improve vitiligo care and research.',
};

export default function SharePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Share your experience' }]} />

      {/* <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2">
                <span className="text-xs font-bold text-[#1D5FE0] bg-[#EAF2FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Patient Voice
                </span>
                <PlaceholderTag label="Programme Launching Soon" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] tracking-tight">
                Share your experience
              </h1>
              <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed">
                Together, we can change what living with vitiligo looks like.
              </p>
            </div>
          </section>

         
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14 space-y-6 max-w-4xl">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#0B1F6B]">
                <ShieldCheck className="w-5 h-5 text-[#1FA37A]" />
                <h2 className="text-xl sm:text-2xl font-bold font-serif">
                  Your experience, your choice
                </h2>
              </div>
              <p className="text-sm text-[#5B6785]">
                We believe the people who live with vitiligo understand it in ways no textbook can. When you share your experience with Symetrique, it is protected by four strict commitments:
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#1FA37A] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0B1F6B]">
                  You decide whether to share your experience. Taking part is always optional.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#1FA37A] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0B1F6B]">
                  We only share information with partners in a form that does not identify you.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#1FA37A] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0B1F6B]">
                  We never sell your personal data.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#1FA37A] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0B1F6B]">
                  You can withdraw your consent at any time.
                </span>
              </div>
            </div>

            
            <div className="p-4 rounded-2xl bg-[#FFF6EE] border border-[#FEDDC7] text-xs text-[#B34F18] flex items-start space-x-2.5">
              <Lock className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
              <span>
                Consent wording and data-sharing terms are currently undergoing review with Symetrique legal in compliance with India&apos;s Digital Personal Data Protection Act, 2023 and global health data governance standards before the patient reporting portal opens.
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/understand-vitiligo"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors"
              >
                <span>Explore Understand Vitiligo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold bg-white text-[#0B1F6B] border border-[#DDE5F5] hover:bg-gray-50 transition-colors"
              >
                <span>About Symetrique</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          
          <ContentReviewStamp />

          
          <SourcesBlock sources={commonSources.p03} />
        </div>
      </main> */}

      <Footer />
    </div>
  );
}
