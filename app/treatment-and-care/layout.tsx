import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitiligo Treatment Options Explained',
  description:
    'Creams, ruxolitinib (Opzelura), phototherapy, oral JAK inhibitors and surgery: what each option does, what it demands and what it cannot promise.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/treatment-and-care',
  },
  openGraph: {
    title: 'Vitiligo Treatment Options Explained | OneVitiligo',
    description:
      'Creams, ruxolitinib (Opzelura), phototherapy, oral JAK inhibitors and surgery: what each option does, what it demands and what it cannot promise.',
    url: 'https://www.onevitiligo.com/treatment-and-care',
  },
};

export default function TreatmentAndCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

