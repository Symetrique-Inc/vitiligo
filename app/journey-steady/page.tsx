import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeySteadyData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'Living with Stable Vitiligo: Management & Care',
  description:
    'A quiet period creates room to consider restoring colour, maintaining stability, or choosing not to pursue pigment treatment.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/journey-steady',
  },
  openGraph: {
    title: 'Living with Stable Vitiligo: Management & Care | OneVitiligo',
    description:
      'A quiet period creates room to consider restoring colour, maintaining stability, or choosing not to pursue pigment treatment.',
    url: 'https://www.onevitiligo.com/journey-steady',
  },
};

export default function JourneySteadyPage() {
  return <JourneyPageTemplate data={journeySteadyData} />;
}
