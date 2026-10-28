import React from 'react';
import Link from 'next/link';

interface RelatedLinkItem {
  href: string;
  label: string;
}

const allGuideLinks: RelatedLinkItem[] = [
  { href: '/understand-vitiligo', label: 'Understand vitiligo' },
  { href: '/journey-noticed', label: 'I have noticed a white patch' },
  { href: '/journey-changing', label: 'My patches are changing' },
  { href: '/journey-steady', label: 'My patches seem steady' },
  { href: '/journey-long-journey', label: 'I have lived with vitiligo for a while' },
  { href: '/journey-for-my-child', label: 'I am here for my child' },
  { href: '/journey-for-loved-ones', label: 'I am here for my loved ones' },
  { href: '/treatment-and-care', label: 'Treatment and care' },
  { href: '/living-with-vitiligo', label: 'Living with vitiligo' },
  { href: '/latest-developments', label: 'Treatment developments' },
];

interface GuideRelatedLinksProps {
  currentPath?: string;
  links?: RelatedLinkItem[];
}

export const GuideRelatedLinks: React.FC<GuideRelatedLinksProps> = ({
  currentPath,
  links,
}) => {
  const displayLinks =
    links || (currentPath ? allGuideLinks.filter((l) => l.href !== currentPath) : allGuideLinks);

  return (
    <section id="related" className="related guide-related py-9 sm:py-12 border-t border-[#DDE5F5]">
      <h2 className="font-serif font-normal text-2xl sm:text-[28px] text-[#0B1F6B] leading-[1.2] -tracking-[0.8px] mt-0 mb-4 sm:mb-5">
        Follow the question that matters next.
      </h2>
      <div className="links flex flex-wrap gap-2.5">
        {displayLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-[#1E2A4A] hover:text-[#1D5FE0] px-3.5 py-2.5 bg-white border border-[#DDE5F5] rounded-full hover:bg-[#EAF2FF] hover:border-[#CCD8EF] transition-all no-underline inline-block font-medium shadow-2xs"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
};
