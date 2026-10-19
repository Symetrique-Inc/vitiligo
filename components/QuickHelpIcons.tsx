'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Building2, Users2, FlaskConical, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export const QuickHelpIcons: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t.quickHelp.derm,
      icon: Sparkles,
      href: '/treatment-and-care',
      color: '#1D5FE0',
      bgColor: 'bg-[#EAF2FF]',
      borderColor: 'border-[#1D5FE0]/20',
    },
    {
      title: t.quickHelp.centres,
      icon: Building2,
      href: '/resources#map',
      color: '#1FA37A',
      bgColor: 'bg-[#E3F6EF]',
      borderColor: 'border-[#1FA37A]/20',
    },
    {
      title: t.quickHelp.groups,
      icon: Users2,
      href: '/resources#support-groups',
      color: '#7C5CE0',
      bgColor: 'bg-[#EFEAFF]',
      borderColor: 'border-[#7C5CE0]/20',
    },
    {
      title: t.quickHelp.trials,
      icon: FlaskConical,
      href: '/expert-insights#innovation',
      color: '#F2884B',
      bgColor: 'bg-[#FFEDE3]',
      borderColor: 'border-[#F2884B]/20',
    },
    {
      title: t.quickHelp.mental,
      icon: HeartHandshake,
      href: '/my-life#wellbeing',
      color: '#E8456B',
      bgColor: 'bg-[#FDE8EE]',
      borderColor: 'border-[#E8456B]/20',
    },
  ];

  return (
    <section className="py-12 bg-white/40 border-b border-[#DDE5F5]" aria-labelledby="quick-help-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="quick-help-heading" className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F6B]">
            {t.quickHelp.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6785] mt-1">
            {t.quickHelp.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex flex-col items-center text-center p-5 rounded-2xl ${item.bgColor} border ${item.borderColor} hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-3 shadow-sm group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors leading-snug">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
