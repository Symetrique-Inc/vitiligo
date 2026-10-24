import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HomeMythsSection } from '@/components/HomeMythsSection';
import { HomeBeginSection } from '@/components/HomeBeginSection';
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

      <main id="main-content" className="flex-1 space-y-3 sm:space-y-4">
        {/* Hero Section */}
        <Hero />

        {/* Section 2 — Think You Know Vitiligo? Let's Separate Myths from Facts */}
        <HomeMythsSection />

        {/* Section 3 — Where would you like to begin? */}
        <HomeBeginSection />

        {/* Section 4 — About Symetrique (Mission, Feature Cards, Data Promise, CTA Band) */}
        <AboutSymetrique />
      </main>

      {/* G2 & G3 — Footer & Medical Disclaimer */}
      <Footer />
    </div>
  );
}
