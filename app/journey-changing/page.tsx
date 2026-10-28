import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyChangingData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'My patches are changing | OneVitiligo',
  description:
    'New patches can make the future feel uncertain. This journey explains the choices that matter when the main concern is ongoing change.',
  openGraph: {
    title: 'My patches are changing | OneVitiligo',
    description:
      'New patches can make the future feel uncertain. This journey explains the choices that matter when the main concern is ongoing change.',
  },
};

export default function JourneyChangingPage() {
  return <JourneyPageTemplate data={journeyChangingData} />;
}
