import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Review the terms of use, medical disclaimer, and acceptable usage guidelines for OneVitiligo educational resources.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/terms',
  },
  openGraph: {
    title: 'Terms of Use | OneVitiligo',
    description:
      'Review the terms of use, medical disclaimer, and acceptable usage guidelines for OneVitiligo educational resources.',
    url: 'https://www.onevitiligo.com/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

