import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living with Vitiligo: Daily Life & Wellbeing',
  description:
    'Practical help with sun care, camouflage, confidence, relationships and work when you live with vitiligo.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/living-with-vitiligo',
  },
  openGraph: {
    title: 'Living with Vitiligo: Daily Life & Wellbeing | OneVitiligo',
    description:
      'Practical help with sun care, camouflage, confidence, relationships and work when you live with vitiligo.',
    url: 'https://www.onevitiligo.com/living-with-vitiligo',
  },
};

export default function LivingWithVitiligoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

