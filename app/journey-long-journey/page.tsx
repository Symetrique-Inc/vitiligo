import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyLongJourneyData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'I have lived with vitiligo for a while | OneVitiligo',
  description:
    'Another list of remedies may not help. What matters is why an earlier plan was limited, what has changed and what would make the next option worth considering.',
  openGraph: {
    title: 'I have lived with vitiligo for a while | OneVitiligo',
    description:
      'Another list of remedies may not help. What matters is why an earlier plan was limited, what has changed and what would make the next option worth considering.',
  },
};

export default function JourneyLongJourneyPage() {
  return <JourneyPageTemplate data={journeyLongJourneyData} />;
}
