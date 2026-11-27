import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitiligo Resources, Helplines & Support Organisations',
  description:
    'Verified vitiligo patient support groups, dermatology associations, mental health helplines, and practical guidance.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/resources',
  },
  openGraph: {
    title: 'Vitiligo Resources, Helplines & Support Organisations | OneVitiligo',
    description:
      'Verified vitiligo patient support groups, dermatology associations, mental health helplines, and practical guidance.',
    url: 'https://www.onevitiligo.com/resources',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

