import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the OneVitiligo Privacy Policy. Learn how we handle your personal data, ensure privacy compliance, protect user information, and manage cookies.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | OneVitiligo',
    description:
      'Read the OneVitiligo Privacy Policy. Learn how we handle your personal data, ensure privacy compliance, protect user information, and manage cookies.',
    url: 'https://www.onevitiligo.com/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

