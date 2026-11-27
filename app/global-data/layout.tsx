import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Vitiligo Prevalence, Data & Demographics',
  description:
    'Explore global vitiligo statistics, regional prevalence rates, epidemiological research, and demographic trends backed by dermatological registries worldwide.',
  alternates: {
    canonical: 'https://www.onevitiligo.com/global-data',
  },
  openGraph: {
    title: 'Global Vitiligo Prevalence, Data & Demographics | OneVitiligo',
    description:
      'Explore global vitiligo statistics, regional prevalence rates, epidemiological research, and demographic trends backed by dermatological registries worldwide.',
    url: 'https://www.onevitiligo.com/global-data',
  },
};

export default function GlobalDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

