'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

export const LandingJourneyCards: React.FC = () => {
  const { tById } = useLanguage();

  const journeyCards = [
    {
      indexId: 'VTH-00024', index: '01 / FIRST QUESTIONS',
      titleId: 'VTH-00025', title: 'I have noticed\na white patch',
      descId: 'VTH-00027', desc: 'Understand what a white patch could mean and how to prepare for a dermatologist visit.',
      linkId: 'VTH-00028', linkLabel: 'Understand the first steps',
      href: '/journey-noticed',
    },
    {
      indexId: 'VTH-00029', index: '02 / CHANGES IN MY SKIN',
      titleId: 'VTH-00030', title: 'My patches\nare changing',
      descId: 'VTH-00032', desc: 'Explore changes in your skin and questions to discuss with your dermatologist.',
      linkId: 'VTH-00033', linkLabel: 'Understand skin changes',
      href: '/journey-changing',
    },
    {
      indexId: 'VTH-00034', index: '03 / EXPLORING CARE',
      titleId: 'VTH-00035', title: 'My patches\nseem steady',
      descId: 'VTH-00036', desc: 'Explore care options and what you would like to achieve.',
      linkId: 'VTH-00037', linkLabel: 'Explore care options',
      href: '/journey-steady',
    },
    {
      indexId: 'VTH-00038', index: '04 / MY EXPERIENCE SO FAR',
      titleId: 'VTH-00039', title: 'I have lived with vitiligo for a while',
      descId: 'VTH-00040', desc: 'Find information on treatment expectations, everyday challenges, and making care easier to manage.',
      linkId: 'VTH-00041', linkLabel: 'Find a useful next step',
      href: '/journey-long-journey',
    },
    {
      indexId: 'VTH-00042', index: '05 / SUPPORTING MY CHILD',
      titleId: 'VTH-00043', title: 'I am here for my child',
      descId: 'VTH-00044', desc: "Find simple explanations and support for conversations at home, at school, and with your child's dermatologist.",
      linkId: 'VTH-00045', linkLabel: 'Explore support for my child',
      href: '/journey-for-my-child',
    },
    {
      indexId: 'VTH-00721', index: '06 / SUPPORTING MY LOVED ONES',
      titleId: 'VTH-00722', title: 'I am here for my loved ones',
      descId: 'VTH-00723', desc: 'Learn how to offer reassurance, understand their choices and support them without making them feel defined by their condition.',
      linkId: 'VTH-00724', linkLabel: 'Understand what vitiligo means',
      href: '/journey-for-loved-ones',
    },
  ];

  return (
    <section id="start" className="max-w-[1160px] mx-auto px-4 sm:px-10 py-8 sm:py-16">
      <div className="text-[11px] tracking-[2px] uppercase font-semibold text-[#0B1F6B] mb-2 sm:mb-3">
        {tById('VTH-00021', 'Your starting point')}
      </div>
      <h2 className="font-serif font-normal text-[#0B1F6B] text-[32px] sm:text-[38px] leading-[1.12] -tracking-[1.7px] mt-2 mb-3">
        {tById('VTH-00022', 'Start where you are.')}
      </h2>
      <p className="text-[#5B6785] text-sm sm:text-base max-w-[600px] mt-0 mb-7 leading-relaxed">
        {tById('VTH-00023', 'Choose a topic that feels relevant today. You can explore any path and change direction whenever you like.')}
      </p>

      {/* Responsive 3-column grid (3 cards x 2 rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {journeyCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex flex-col justify-between bg-white border border-[#DDE5F5] rounded-2xl p-6 sm:p-7 no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D5FE0] hover:shadow-xl hover:shadow-blue-950/5"
          >
            <div>
              <span className="text-[11px] text-[#5B6785] tracking-[2px] block">
                {tById(card.indexId, card.index)}
              </span>
              <h3 className="font-serif font-normal text-lg sm:text-[22px] text-[#0B1F6B] leading-[1.25] mt-3.5 mb-2.5 whitespace-pre-line group-hover:text-[#1D5FE0] transition-colors">
                {tById(card.titleId, card.title)}
              </h3>
              <p className="text-sm text-[#2C3B5E] mb-5 leading-relaxed">
                {tById(card.descId, card.desc)}
              </p>
            </div>
            <div className="mt-auto text-xs font-semibold text-[#0B1F6B] group-hover:text-[#1D5FE0] flex items-center justify-between gap-4 pt-2">
              <span>{tById(card.linkId, card.linkLabel)}</span>
              <span
                aria-hidden="true"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              >
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
