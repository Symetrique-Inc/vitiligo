'use client';

import React, { useState } from 'react';
import { ShieldCheck, Share2, Printer, Check, BookOpen } from 'lucide-react';

interface MedicalBadgeProps {
  reviewerName?: string;
  reviewerTitle?: string;
  date?: string;
  sources?: { name: string; url: string }[];
}

export const MedicalBadge: React.FC<MedicalBadgeProps> = ({
  reviewerName = "Dr. Rashmi Sharma, MD & Dr. Marcus Vance, MD, FAAD",
  reviewerTitle = "Global Medical Advisory Board",
  date = "October 2026",
  sources = [
    { name: "American Academy of Dermatology (AAD) Vitiligo Guidelines", url: "https://www.aad.org" },
    { name: "International Federation of Pigment Cell Societies (IFPCS)", url: "https://ifpcs.org" },
    { name: "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)", url: "https://iadvl.org" }
  ],
}) => {
  const [copied, setCopied] = useState(false);
  const [showSources, setShowSources] = useState(false);

  const handleShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="bg-[#F0F5FF] border border-[#D5E2FA] rounded-2xl p-4 my-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-[#1E2A4A]">
      <div className="flex items-start sm:items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-[#1D5FE0]/10 flex items-center justify-center shrink-0 text-[#1D5FE0]">
          <ShieldCheck className="w-5 h-5 text-[#1D5FE0]" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#0B1F6B]">Medically Reviewed</span>
            <span className="text-xs bg-[#E3F6EF] text-[#1FA37A] font-medium px-2 py-0.5 rounded-full">
              Updated {date}
            </span>
          </div>
          <p className="text-xs text-[#5B6785] mt-0.5">
            By <span className="font-medium text-[#1E2A4A]">{reviewerName}</span> ({reviewerTitle})
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={() => setShowSources(!showSources)}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#1D5FE0] border border-[#DDE5F5] hover:bg-[#EAF2FF] transition-colors"
          aria-expanded={showSources}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>{showSources ? "Hide Sources" : "Clinical Sources"}</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#5B6785] border border-[#DDE5F5] hover:text-[#0B1F6B] hover:bg-gray-50 transition-colors"
          title="Share this page"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Share"}</span>
        </button>

        <button
          onClick={handlePrint}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#5B6785] border border-[#DDE5F5] hover:text-[#0B1F6B] hover:bg-gray-50 transition-colors"
          title="Print page for your doctor"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print</span>
        </button>
      </div>

      {showSources && (
        <div className="w-full pt-3 mt-1 border-t border-[#D5E2FA] text-xs text-[#5B6785]">
          <p className="font-medium text-[#0B1F6B] mb-1">Peer-Reviewed References & Guidelines:</p>
          <ul className="list-disc list-inside space-y-0.5">
            {sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D5FE0] hover:underline"
                >
                  {src.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
