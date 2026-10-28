import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyForLovedOnesData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'I am here for my loved ones | OneVitiligo',
  description:
    'Learn how to offer reassurance, understand their choices and support them without making them feel defined by their condition. Understand what vitiligo means and direct them to treatment & care.',
  openGraph: {
    title: 'I am here for my loved ones | OneVitiligo',
    description:
      'Learn how to offer reassurance, understand their choices and support them without making them feel defined by their condition. Understand what vitiligo means and direct them to treatment & care.',
  },
};

export default function JourneyForLovedOnesPage() {
  return <JourneyPageTemplate data={journeyForLovedOnesData} />;
}
