import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact OneVitiligo & Community Support',
  description:
    'Get in touch with the OneVitiligo team. Reach out for clinical inquiries, editorial feedback, community partnerships, or technical support.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/contact',
  },
  openGraph: {
    title: 'Contact OneVitiligo & Community Support | OneVitiligo',
    description:
      'Get in touch with the OneVitiligo team. Reach out for clinical inquiries, editorial feedback, community partnerships, or technical support.',
    url: 'https://www.onevitiligo.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

