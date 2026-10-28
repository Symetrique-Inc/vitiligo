import React from 'react';
import Link from 'next/link';

interface JourneyCard {
  index: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

const journeyCards: JourneyCard[] = [
  {
    index: '01 / FIRST QUESTIONS',
    title: 'I have noticed\na white patch',
    description: 'Understand what a white patch could mean and how to prepare for a dermatologist visit.',
    linkLabel: 'Understand the first steps',
    href: '/journey-noticed',
  },
  {
    index: '02 / CHANGES IN MY SKIN',
    title: 'My patches\nare changing',
    description: 'Explore changes in your skin and questions to discuss with your dermatologist.',
    linkLabel: 'Understand skin changes',
    href: '/journey-changing',
  },
  {
    index: '03 / EXPLORING CARE',
    title: 'My patches\nseem steady',
    description: 'Explore care options and what you would like to achieve.',
    linkLabel: 'Explore care options',
    href: '/journey-steady',
  },
  {
    index: '04 / MY EXPERIENCE SO FAR',
    title: 'I have lived with vitiligo for a while',
    description: 'Find information on treatment expectations, everyday challenges, and making care easier to manage.',
    linkLabel: 'Find a useful next step',
    href: '/journey-long-journey',
  },
  {
    index: '05 / SUPPORTING MY CHILD',
    title: 'I am here for my child',
    description: 'Find simple explanations and support for conversations at home, at school, and with your child’s dermatologist.',
    linkLabel: 'Explore support for my child',
    href: '/journey-for-my-child',
  },
  {
    index: '06 / SUPPORTING MY LOVED ONES',
    title: 'I am here for my loved ones',
    description: 'Learn how to offer reassurance, understand their choices and support them without making them feel defined by their condition. Understand what vitiligo means.',
    linkLabel: 'Direct them to treatment & care',
    href: '/journey-for-loved-ones',
  },
];

export const LandingJourneyCards: React.FC = () => {
  return (
    <section id="start" className="max-w-[1160px] mx-auto px-5 sm:px-10 py-10 sm:py-16">
      <div className="text-[11px] tracking-[2px] uppercase font-semibold text-[#0B1F6B] mb-2 sm:mb-3">
        Your starting point
      </div>
      <h2 className="font-serif font-normal text-[#0B1F6B] text-[32px] sm:text-[38px] leading-[1.12] -tracking-[1.7px] mt-2 mb-3">
        Start where you are.
      </h2>
      <p className="text-[#5B6785] text-sm sm:text-base max-w-[600px] mt-0 mb-7 leading-relaxed">
        Choose a topic that feels relevant today. You can explore any path and change direction whenever you like.
      </p>

      {/* Responsive 3-column grid (3 cards x 2 rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {journeyCards.map((card) => {
          return (
            <Link
              key={card.index}
              href={card.href}
              className="group flex flex-col justify-between bg-white border border-[#DDE5F5] rounded-lg p-6 sm:p-6.5 no-underline transition-all duration-200 hover:-translate-y-1 hover:border-[#1D5FE0] hover:shadow-md"
            >
              <div>
                <span className="text-[11px] text-[#5B6785] tracking-[2px] block">
                  {card.index}
                </span>
                <h3 className="font-serif font-normal text-xl sm:text-[24px] text-[#0B1F6B] leading-[1.25] mt-3.5 mb-2.5 whitespace-pre-line group-hover:text-[#1D5FE0] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5B6785] mb-5 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-auto text-xs font-semibold text-[#0B1F6B] group-hover:text-[#1D5FE0] flex items-center justify-between gap-4 pt-2">
                <span>{card.linkLabel}</span>
                <span
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                >
                  ↗
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
