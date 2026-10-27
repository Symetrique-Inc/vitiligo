import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyForMyChildData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'I am here for my child | Vitiligo Hub',
  description:
    'You may be balancing treatment questions, school life and your own worry. Separate clinical choices from everyday support, with room for your child’s voice.',
  openGraph: {
    title: 'I am here for my child | Vitiligo Hub',
    description:
      'You may be balancing treatment questions, school life and your own worry. Separate clinical choices from everyday support, with room for your child’s voice.',
  },
};

export default function JourneyForMyChildPage() {
  return <JourneyPageTemplate data={journeyForMyChildData} />;
}
