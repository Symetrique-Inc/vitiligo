import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About OneVitiligo — An Initiative by Symetrique',
  description:
    'Who we are, who reviews our content, how we are funded and why we built a vitiligo community for every skin.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/about',
  },
  openGraph: {
    title: 'About OneVitiligo — An Initiative by Symetrique',
    description:
      'Who we are, who reviews our content, how we are funded and why we built a vitiligo community for every skin.',
    url: 'https://www.onevitiligo.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

