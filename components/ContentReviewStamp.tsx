'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ContentReviewStamp as ContentReviewStampType } from '@/content/types';
import { siteReviewStamp } from '@/content/siteContent';
import { PlaceholderTag } from '@/components/PlaceholderTag';

interface Props {
  stamp?: Partial<ContentReviewStampType>;
}

export const ContentReviewStamp: React.FC<Props> = ({ stamp }) => {
  const currentStamp = { ...siteReviewStamp, ...stamp };

  return (
    <aside
      aria-label="Medical Review Metadata"
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-8"
    >
      <div className="bg-[#F8FAFF] border border-[#DDE5F5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#1E2A4A] gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#1D5FE0]/10 flex items-center justify-center shrink-0 text-[#1D5FE0]">
            <ShieldCheck className="w-4 h-4 text-[#1D5FE0]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 font-medium">
              <span className="font-semibold text-[#0B1F6B]">Medically reviewed by:</span>
              <span>{currentStamp.reviewerName}</span>
              <PlaceholderTag label="Reviewer Pending" />
              <span className="text-gray-400 mx-1">·</span>
              <span className="text-[#5B6785]">Last reviewed:</span>
              <span>{currentStamp.lastReviewed}</span>
              <PlaceholderTag label="Date Pending" />
              <span className="text-gray-400 mx-1">·</span>
              <span className="text-[#5B6785]">Next review:</span>
              <span>{currentStamp.nextReview}</span>
            </div>
            <p className="text-[11px] text-[#5B6785] mt-0.5">
              Vitiligo Hub content is written for general education and evaluated against clinical dermatology guidelines.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
