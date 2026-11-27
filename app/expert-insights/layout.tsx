import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Dermatologist Insights on Vitiligo',
  description:
    'Clinician perspectives on vitiligo diagnosis, autoimmune biology, realistic treatment goals, and patient care.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/expert-insights',
  },
  openGraph: {
    title: 'Expert Dermatologist Insights on Vitiligo | OneVitiligo',
    description:
      'Clinician perspectives on vitiligo diagnosis, autoimmune biology, realistic treatment goals, and patient care.',
    url: 'https://www.onevitiligo.com/expert-insights',
  },
};

export default function ExpertInsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

