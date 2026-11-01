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
    <div className="example p-5 sm:p-6 bg-gradient-to-r from-[#F0F5FF] to-[#F8FAFF] border-l-4 border-l-[#1D5FE0] border border-[#D5E2FA] rounded-xl my-6 text-sm sm:text-base leading-relaxed text-[#1E2A4A] shadow-2xs">
      <strong className="block font-bold text-base text-[#0B1F6B] mb-2">{title}</strong>
      <div className="m-0 text-[#1E2A4A] leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  );
};
