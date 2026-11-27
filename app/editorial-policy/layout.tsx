import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy & Medical Sourcing Standards',
  description:
    'Learn how OneVitiligo produces, verifies, and fact-checks healthcare information. Read our medical review standards, conflict of interest policy, and citation guidelines.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/editorial-policy',
  },
  openGraph: {
    title: 'Editorial Policy & Medical Sourcing Standards | OneVitiligo',
    description:
      'Learn how OneVitiligo produces, verifies, and fact-checks healthcare information. Read our medical review standards, conflict of interest policy, and citation guidelines.',
    url: 'https://www.onevitiligo.com/editorial-policy',
  },
};

export default function EditorialPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

