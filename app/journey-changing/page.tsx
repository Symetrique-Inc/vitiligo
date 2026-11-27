import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyChangingData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'Vitiligo Patches Changing: What It Means',
  description:
    'New patches can make the future feel uncertain. This journey explains the choices that matter when your main concern is ongoing skin change.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/journey-changing',
  },
  openGraph: {
    title: 'Vitiligo Patches Changing: What It Means | OneVitiligo',
    description:
      'New patches can make the future feel uncertain. This journey explains the choices that matter when your main concern is ongoing skin change.',
    url: 'https://www.onevitiligo.com/journey-changing',
  },
};

export default function JourneyChangingPage() {
  return <JourneyPageTemplate data={journeyChangingData} />;
}
