import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Share Your Vitiligo Story',
  description:
    'Help others on their vitiligo journey by sharing your lived experiences, diagnosis story, and practical insights.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/share',
  },
  openGraph: {
    title: 'Share Your Vitiligo Story | OneVitiligo',
    description:
      'Help others on their vitiligo journey by sharing your lived experiences, diagnosis story, and practical insights.',
    url: 'https://www.onevitiligo.com/share',
  },
};

export default function ShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

