import type { Metadata } from 'next';
import { JourneyPageTemplate } from '@/components/guide/JourneyPageTemplate';
import { journeyNoticedData } from '@/components/guide/journeyData';

export const metadata: Metadata = {
  title: 'I have noticed a white patch | OneVitiligo',
  description:
    'You may want an answer quickly without knowing which information to trust. First understand the patch; a treatment decision comes after that.',
  openGraph: {
    title: 'I have noticed a white patch | OneVitiligo',
    description:
      'You may want an answer quickly without knowing which information to trust. First understand the patch; a treatment decision comes after that.',
  },
};

export default function JourneyNoticedPage() {
  return <JourneyPageTemplate data={journeyNoticedData} />;
}
