'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';

interface SourceLink {
  href: string;
  label: string;
}

interface GuideSourcesProps {
  links: SourceLink[];
}

export const GuideSources: React.FC<GuideSourcesProps> = ({ links }) => {
  const { t } = useLanguage();

  return (
    <p className="sources guide-sources text-[11px] text-[#5B6785] leading-relaxed mt-5 pt-2">
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          {index > 0 && ' · '}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D5FE0] hover:underline underline-offset-2 font-medium"
          >
            {t(link.label)} <span aria-hidden="true">↗</span>
          </a>
        </React.Fragment>
      ))}
    </p>
  );
};
