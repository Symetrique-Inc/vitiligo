import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LandingHero } from '@/components/landing/LandingHero';
import { LandingFactBand } from '@/components/landing/LandingFactBand';
import { LandingJourneyCards } from '@/components/landing/LandingJourneyCards';
import { LandingSupportPanel } from '@/components/landing/LandingSupportPanel';
import { LandingAbout } from '@/components/landing/LandingAbout';

export const metadata: Metadata = {
  title: 'OneVitiligo | Understand. Support. Brighter Tomorrows.',
  description:
    'Clear, trusted information about vitiligo, real experiences and practical support. A patient-centred platform by OneVitiligo.',
  openGraph: {
    title: 'OneVitiligo | Understand. Support. Brighter Tomorrows.',
    description:
      'Clear, trusted information about vitiligo, real experiences and practical support. A patient-centred platform by OneVitiligo.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      {/* Existing Original Header (Untouched with all nav tabs, search, lang switcher, mobile menu) */}
      <Header />

      <main id="main-content" className="flex-1 home-page">
        {/* Section 1: Hero with Arch Framed Image */}
        <LandingHero />

        {/* Section 2: Full-width Lancet Fact Band */}
        <LandingFactBand />

        {/* Section 3: Your Starting Point (6-column grid with 5 Journey Cards) */}
        <LandingJourneyCards />

        {/* Section 4: Support Panel */}
        <LandingSupportPanel />

        {/* Section 5: About Section */}
        <LandingAbout />
      </main>

      {/* Existing Original Footer (Untouched with all 3 columns, disclaimer, copyright, back-to-top) */}
      <Footer />
    </div>
  );
}
