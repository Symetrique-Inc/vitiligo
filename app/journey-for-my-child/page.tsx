import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyForMyChildData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'Vitiligo in Children: A Guide for Parents',
  description:
    'What parents should know about vitiligo in children: diagnosis, treatment choices, school life, and emotional support.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/journey-for-my-child',
  },
  openGraph: {
    title: 'Vitiligo in Children: A Guide for Parents | OneVitiligo',
    description:
      'What parents should know about vitiligo in children: diagnosis, treatment choices, school life, and emotional support.',
    url: 'https://www.onevitiligo.com/journey-for-my-child',
  },
};

export default function JourneyForMyChildPage() {
  return <JourneyPageTemplate data={journeyForMyChildData} />;
}
