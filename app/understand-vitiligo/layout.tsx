import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is Vitiligo? Causes, Types & Diagnosis',
  description:
    'How vitiligo changes the skin, how it is diagnosed, segmental vs non-segmental types, and myths that are not true.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/understand-vitiligo',
  },
  openGraph: {
    title: 'What Is Vitiligo? Causes, Types & Diagnosis | OneVitiligo',
    description:
      'How vitiligo changes the skin, how it is diagnosed, segmental vs non-segmental types, and myths that are not true.',
    url: 'https://www.onevitiligo.com/understand-vitiligo',
  },
};

export default function UnderstandVitiligoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

