import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyNoticedData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'Noticed a White Patch on Your Skin?',
  description:
    'Not every light patch is vitiligo. What to note, when to see a dermatologist and what questions to ask first.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/journey-noticed',
  },
  openGraph: {
    title: 'Noticed a White Patch on Your Skin? | OneVitiligo',
    description:
      'Not every light patch is vitiligo. What to note, when to see a dermatologist and what questions to ask first.',
    url: 'https://www.onevitiligo.com/journey-noticed',
  },
};

export default function JourneyNoticedPage() {
  return <JourneyPageTemplate data={journeyNoticedData} />;
}
