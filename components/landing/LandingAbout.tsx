import React from 'react';

export const LandingAbout: React.FC = () => {
  return (
    <section id="about" className="max-w-[1160px] mx-auto px-5 sm:px-10 pb-9 sm:pb-12" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 sm:gap-14 items-start">
        <h2 id="about-heading" className="font-serif font-normal text-2xl sm:text-[26px] text-[#0B1F6B] mt-0 mb-2 -tracking-[1px]">
          About Vitiligo Hub
        </h2>
        <p className="text-sm text-[#5B6785] leading-relaxed m-0">
          Vitiligo Hub is an initiative by Symetrique for people living with vitiligo and those who support them. Our aim is to make information easier to understand and help people prepare for conversations about their care.
        </p>
      </div>
    </section>
  );
};
