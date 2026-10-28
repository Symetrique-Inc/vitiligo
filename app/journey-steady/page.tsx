import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeySteadyData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'My patches seem steady | OneVitiligo',
  description:
    'A quiet period can create room to consider restoring colour, maintaining it, exploring a procedure or choosing not to pursue pigment treatment.',
  openGraph: {
    title: 'My patches seem steady | OneVitiligo',
    description:
      'A quiet period can create room to consider restoring colour, maintaining it, exploring a procedure or choosing not to pursue pigment treatment.',
  },
};

export default function JourneySteadyPage() {
  return <JourneyPageTemplate data={journeySteadyData} />;
}
