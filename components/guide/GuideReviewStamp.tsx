import React from 'react';

export const GuideReviewStamp: React.FC = () => {
  return (
    <p className="review text-[11px] text-[#5B6785] leading-relaxed py-6 border-t border-[#DDE5F5] mt-6">
      <strong className="font-semibold text-[#0B1F6B]">
        Editorial update 25 October 2026 · Clinical review pending.
      </strong>{' '}
      Sources are linked beside the explanations. Treatment choices need individual assessment, and approval and access vary by country. This prototype does not prescribe or arrange treatment.
    </p>
  );
};
