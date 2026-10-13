'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, BookOpen } from 'lucide-react';
import { SourceItem } from '@/content/types';
import { PlaceholderTag } from '@/components/PlaceholderTag';

interface SourcesBlockProps {
  sources: SourceItem[];
  defaultOpen?: boolean;
}

export const SourcesBlock: React.FC<SourcesBlockProps> = ({
  sources,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!sources || sources.length === 0) return null;

  return (
    <section
      id="sources"
      aria-label="Scientific and Medical Sources"
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-8"
    >
      <div className="bg-white border border-[#DDE5F5] rounded-2xl overflow-hidden shadow-xs">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#F8FAFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5FE0]"
        >
          <div className="flex items-center space-x-2.5">
            <BookOpen className="w-4 h-4 text-[#1D5FE0]" />
            <h3 className="font-bold text-sm text-[#0B1F6B]">
              Sources ({sources.length})
            </h3>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#5B6785]">
            <span>{isOpen ? 'Collapse' : 'Expand references'}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {isOpen && (
          <div className="px-5 pb-5 pt-2 border-t border-gray-100 bg-[#FCFDFF]">
            <ol className="space-y-3 text-xs text-[#1E2A4A] list-decimal list-inside">
              {sources.map((src) => (
                <li key={src.id} id={src.id} className="leading-relaxed pl-1">
                  <span className="font-semibold text-[#0B1F6B]">{src.name}</span>
                  {src.citation && (
                    <span className="text-[#5B6785] block sm:inline sm:ml-1.5">
                      — {src.citation}
                    </span>
                  )}
                  {src.isPlaceholder && (
                    <PlaceholderTag label="Source Link Pending" />
                  )}
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#1D5FE0] hover:underline ml-2"
                    >
                      <span>View source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};
