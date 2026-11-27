import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Advisory Board & Clinical Reviewers',
  description:
    'Meet the dermatologists, clinical researchers, and medical experts who guide and verify educational content at OneVitiligo.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/medical-advisory-board',
  },
  openGraph: {
    title: 'Medical Advisory Board & Clinical Reviewers | OneVitiligo',
    description:
      'Meet the dermatologists, clinical researchers, and medical experts who guide and verify educational content at OneVitiligo.',
    url: 'https://www.onevitiligo.com/medical-advisory-board',
  },
};

export default function MedicalAdvisoryBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

