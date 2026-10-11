'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, User, Users, Stethoscope, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export const AudienceCards: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      id: 'understand',
      title: t.audiences.card1.title,
      description: t.audiences.card1.desc,
      href: '/understand',
      icon: BookOpen,
      color: 'blue',
      bgColor: 'bg-[#EAF2FF]',
      iconBg: 'bg-[#1D5FE0]',
      hoverBorder: 'hover:border-[#1D5FE0]',
      chevronColor: 'text-[#1D5FE0]',
    },
    {
      id: 'living',
      title: t.audiences.card2.title,
      description: t.audiences.card2.desc,
      href: '/my-life',
      icon: User,
      color: 'violet',
      bgColor: 'bg-[#EFEAFF]',
      iconBg: 'bg-[#7C5CE0]',
      hoverBorder: 'hover:border-[#7C5CE0]',
      chevronColor: 'text-[#7C5CE0]',
    },
    {
      id: 'supporting',
      title: t.audiences.card3.title,
      description: t.audiences.card3.desc,
      href: '/resources',
      icon: Users,
      color: 'teal',
      bgColor: 'bg-[#E3F6EF]',
      iconBg: 'bg-[#1FA37A]',
      hoverBorder: 'hover:border-[#1FA37A]',
      chevronColor: 'text-[#1FA37A]',
    },
    {
      id: 'professional',
      title: t.audiences.card4.title,
      description: t.audiences.card4.desc,
      href: '/expert-insights#professionals',
      icon: Stethoscope,
      color: 'coral',
      bgColor: 'bg-[#FFEDE3]',
      iconBg: 'bg-[#F2884B]',
      hoverBorder: 'hover:border-[#F2884B]',
      chevronColor: 'text-[#F2884B]',
    },
  ];

  return (
    <section className="py-12 relative" aria-labelledby="audience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            id="audience-heading"
            className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]"
          >
            {t.audiences.title}
          </h2>
          <div className="w-16 h-1 bg-[#1D5FE0] rounded-full mx-auto mt-2.5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className={`group flex flex-col justify-between p-6 rounded-2xl ${card.bgColor} border border-[#DDE5F5] ${card.hoverBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5FE0]`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${card.iconBg} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors leading-snug mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold">
                  <span className={card.chevronColor}>
                    Get Started
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs ${card.chevronColor} group-hover:translate-x-1 transition-transform`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
