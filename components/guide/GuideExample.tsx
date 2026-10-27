import React from 'react';

interface GuideExampleProps {
  title?: string;
  children: React.ReactNode;
}

export const GuideExample: React.FC<GuideExampleProps> = ({
  title = 'A practical example',
  children,
}) => {
  return (
    <div className="example p-5 sm:p-6 bg-[#EAF2FF] border border-[#D5E2FA] rounded-md my-5 text-sm sm:text-base leading-relaxed text-[#1E2A4A]">
      <strong className="block font-semibold text-[#0B1F6B] mb-1.5">{title}</strong>
      <div className="m-0 text-[#1E2A4A] leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  );
};
