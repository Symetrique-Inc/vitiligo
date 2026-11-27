import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyLongJourneyData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'Living with Long-Term Vitiligo: Long-Term Outlook',
  description:
    'Understanding why earlier plans were limited, what new medical options exist, and what makes a next step worth considering.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/journey-long-journey',
  },
  openGraph: {
    title: 'Living with Long-Term Vitiligo: Long-Term Outlook | OneVitiligo',
    description:
      'Understanding why earlier plans were limited, what new medical options exist, and what makes a next step worth considering.',
    url: 'https://www.onevitiligo.com/journey-long-journey',
  },
};

export default function JourneyLongJourneyPage() {
  return <JourneyPageTemplate data={journeyLongJourneyData} />;
}
