import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import { Shield, ArrowRight, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vitiligo Hub by Symetrique',
  description: 'Privacy Policy for Vitiligo Hub, an educational and patient-centred initiative by Symetrique.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10 max-w-4xl">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-xs font-bold text-[#1D5FE0] bg-[#EAF2FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Legal & Governance
                </span>
                <PlaceholderTag label="Under Legal Review" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B]">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-[#5B6785] leading-relaxed">
                Symetrique is committed to protecting your privacy and managing personal information in strict compliance with applicable data protection laws, including India&apos;s Digital Personal Data Protection Act, 2023.
              </p>

              <div className="p-6 rounded-2xl bg-[#FFF6EE] border border-[#FEDDC7] text-xs text-[#B34F18] flex items-start space-x-3 my-6">
                <Lock className="w-5 h-5 text-[#F2884B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-[#0B1F6B] mb-1">
                    [Content to be provided by Symetrique legal]
                  </p>
                  <p className="leading-relaxed">
                    Formal legal wording, data processor specifications, retention terms, and rights disclosure are currently being finalised by Symetrique legal counsel.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors"
                >
                  <span>Return to Home</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
