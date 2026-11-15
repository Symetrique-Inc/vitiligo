'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { BiologyInfographic } from '@/components/BiologyInfographic';
import { useLanguage } from '@/components/LanguageContext';

export default function BiologyPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs
        items={[
          { label: t('Understand Vitiligo'), href: '/understand-vitiligo' },
          { label: t('How Vitiligo Affects The Skin') },
        ]}
      />

      <main className="flex-1 pb-16">
        <BiologyInfographic />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <MedicalBadge
            reviewerName="Dr. Marcus Vance, MD, FAAD"
            reviewerTitle={t('Dermatopathology & Melanocyte Biology')}
            date="October 2026"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
