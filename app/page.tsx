import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AudienceCards } from '@/components/AudienceCards';
import { AboutSymetrique } from '@/components/AboutSymetrique';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vitiligo Hub | See Beyond the Skin — by Symetrique',
  description:
    'Clear, trusted information about vitiligo, real experiences and practical support. A patient-centred platform by Symetrique.',
  openGraph: {
    title: 'Vitiligo Hub | See Beyond the Skin — by Symetrique',
    description:
      'Clear, trusted information about vitiligo, real experiences and practical support. A patient-centred platform by Symetrique.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Skip link for WCAG 2.2 accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0B1F6B] text-white rounded-md text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* G1 — Global Header */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* P01-S01 — Hero */}
        <Hero />

        {/* P01-S02 — How can we help you today? (4 tiles overlapping hero bottom) */}
        <div className="relative z-30 -mt-6 sm:-mt-10 mb-8">
          <AudienceCards />
        </div>

        {/* P01-S03 — About Symetrique (two-column text, 3 feature cards, data promise, CTA band) */}
        <AboutSymetrique />
      </main>

      {/* G2 & G3 — Footer & Medical Disclaimer */}
      <Footer />
    </div>
  );
}
