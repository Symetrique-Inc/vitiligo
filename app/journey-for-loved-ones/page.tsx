import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyForLovedOnesData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'Supporting Someone with Vitiligo: Family & Partner Guide',
  description:
    'How family members, partners and friends can offer empathetic, non-intrusive support to someone living with vitiligo.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/journey-for-loved-ones',
  },
  openGraph: {
    title: 'Supporting Someone with Vitiligo: Family & Partner Guide | OneVitiligo',
    description:
      'How family members, partners and friends can offer empathetic, non-intrusive support to someone living with vitiligo.',
    url: 'https://www.onevitiligo.com/journey-for-loved-ones',
  },
};

export default function JourneyForLovedOnesPage() {
  return <JourneyPageTemplate data={journeyForLovedOnesData} />;
}
