'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BeginCard {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  actionText: string;
  href: string;
}

const beginCards: BeginCard[] = [
  {
    id: 'understand',
    image: '/images/card-understand.jpg',
    imageAlt: 'Person with vitiligo smiling outdoors',
    title: 'Understand Vitiligo',
    description: 'What causes white patches, symptoms, diagnosis, and answers to common questions.',
    actionText: 'Explore the Basics →',
    href: '/understand-vitiligo',
  },
  {
    id: 'living',
    image: '/images/card-mylife.jpg',
    imageAlt: 'Young man smiling with confidence',
    title: 'Life Beyond Vitiligo',
    description: 'Discover guidance on confidence, relationships, emotional wellbeing, and daily living.',
    actionText: 'Explore Daily Living →',
    href: '/living-with-vitiligo',
  },
  {
    id: 'treatment',
    image: '/images/card-expert.jpg',
    imageAlt: 'Dermatologist in clinic consultation',
    title: 'Explore Treatment & Care',
    description: 'Learn about treatment options, what to expect and questions to discuss with a dermatologist.',
    actionText: 'Explore Treatment →',
    href: '/treatment-and-care',
  },
];

export const HomeBeginSection: React.FC = () => {
  return (
    <section className="py-3 sm:py-4 relative" aria-labelledby="begin-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="begin-heading"
          className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] tracking-tight mb-3 sm:mb-4"
        >
          Where would you like to begin?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {beginCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="bg-white rounded-2xl border border-[#DDE5F5] hover:border-[#1D5FE0] p-4 sm:p-5 flex items-center gap-4 shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Left Thumbnail Image */}
              <div className="relative w-24 h-20 sm:w-28 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-[#E5ECF6] shadow-xs">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="112px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-[#5B6785] line-clamp-2 mt-1 mb-2 leading-relaxed">
                  {card.description}
                </p>
                <span className="text-xs font-semibold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-200">
                  {card.actionText}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
