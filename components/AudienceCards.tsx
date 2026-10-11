'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, User, Users, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export const AudienceCards: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      id: 'understand',
      title: 'I want to understand vitiligo',
      href: '/understand',
      icon: BookOpen,
      bgColor: 'bg-[#EAF2FF]',
      iconColor: 'text-[#1D5FE0]',
      hoverBorder: 'hover:border-[#1D5FE0]',
      lineColor: 'bg-[#1D5FE0]',
    },
    {
      id: 'living',
      title: 'I am living with vitiligo',
      href: '/my-life',
      icon: User,
      bgColor: 'bg-[#EFEAFF]',
      iconColor: 'text-[#7C5CE0]',
      hoverBorder: 'hover:border-[#7C5CE0]',
      lineColor: 'bg-[#7C5CE0]',
    },
    {
      id: 'supporting',
      title: 'I am supporting someone',
      href: '/resources',
      icon: Users,
      bgColor: 'bg-[#E3F6EF]',
      iconColor: 'text-[#1FA37A]',
      hoverBorder: 'hover:border-[#1FA37A]',
      lineColor: 'bg-[#1FA37A]',
    },
    {
      id: 'professional',
      title: 'I am a healthcare professional',
      href: '/expert-insights#professionals',
      icon: Stethoscope,
      bgColor: 'bg-[#FFEDE3]',
      iconColor: 'text-[#F2884B]',
      hoverBorder: 'hover:border-[#F2884B]',
      lineColor: 'bg-[#F2884B]',
    },
  ];

  return (
    <section className="py-6 relative" aria-labelledby="audience-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2
            id="audience-heading"
            className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F6B]"
          >
            How can we help you today?
          </h2>
        </div>

        {/* 4 Audience Cards Row matching reference mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="flex flex-col items-center">
                <Link
                  href={card.href}
                  className={`w-full flex flex-col items-center justify-center p-6 rounded-2xl ${card.bgColor} border border-[#DDE5F5] ${card.hoverBorder} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center min-h-[110px] group`}
                >
                  <div className={`mb-2.5 ${card.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors leading-snug">
                    {card.title}
                  </h3>
                </Link>

                {/* Subtle vertical connector guide line */}
                <div className={`w-0.5 h-6 ${card.lineColor} opacity-40 hidden lg:block`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
