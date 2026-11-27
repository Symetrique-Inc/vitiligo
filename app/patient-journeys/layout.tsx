import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Vitiligo Stories & Lived Experiences',
  description:
    'Read real-life vitiligo stories from people around the world. Discover authentic journeys from initial diagnosis, social confidence, relationships, and treatment choices.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/patient-journeys',
  },
  openGraph: {
    title: 'Real Vitiligo Stories & Lived Experiences | OneVitiligo',
    description:
      'Read real-life vitiligo stories from people around the world. Discover authentic journeys from initial diagnosis, social confidence, relationships, and treatment choices.',
    url: 'https://www.onevitiligo.com/patient-journeys',
  },
};

export default function PatientJourneysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

