import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitiligo Treatment News 2026: Opzelura, Rinvoq',
  description:
    'Evidence-checked updates on new vitiligo medicines, approvals by country and clinical trials, and what they mean for you.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/latest-developments',
  },
  openGraph: {
    title: 'Vitiligo Treatment News 2026: Opzelura, Rinvoq | OneVitiligo',
    description:
      'Evidence-checked updates on new vitiligo medicines, approvals by country and clinical trials, and what they mean for you.',
    url: 'https://www.onevitiligo.com/latest-developments',
  },
};

export default function LatestDevelopmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

