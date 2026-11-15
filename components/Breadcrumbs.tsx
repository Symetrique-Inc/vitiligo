'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 max-w-7xl mx-auto w-full">
      <ol className="flex items-center space-x-2 text-sm text-[#5B6785]">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-[#0B1F6B] transition-colors focus:rounded-sm"
          >
            <Home className="w-4 h-4 mr-1 text-[#1D5FE0]" />
            <span>{t('Home')}</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              {isLast || !item.href ? (
                <span className="font-medium text-[#0B1F6B]" aria-current="page">
                  {t(item.label)}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#0B1F6B] transition-colors focus:rounded-sm"
                >
                  {t(item.label)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
