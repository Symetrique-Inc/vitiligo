'use client';

import React, { useState } from 'react';
import { Sun, Network, Ear, ChevronDown, ChevronUp } from 'lucide-react';

export const UnderstandAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open by default per DOC A

  const items = [
    {
      title: 'The skin can become more sensitive to sunlight',
      icon: Sun,
      content: (
        <div className="space-y-3">
          <p>
            When melanocytes are lost, the affected skin has less pigment to protect it from UV radiation. This means areas with vitiligo can burn more easily in the sun.
          </p>
          <div className="p-3 bg-[#EAF2FF] rounded-xl text-[#0B1F6B] font-medium text-xs sm:text-sm">
            <strong>What this means for you:</strong> Sun protection is an important part of living with vitiligo.
          </div>
        </div>
      ),
    },
    {
      title: 'Vitiligo can occur alongside other autoimmune conditions',
      icon: Network,
      content: (
        <div className="space-y-3">
          <p>
            People with vitiligo are more likely to develop certain other autoimmune diseases, such as:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Thyroid disease</li>
            <li>Alopecia areata (patchy hair loss)</li>
            <li>Rheumatoid arthritis</li>
          </ul>
          <p className="font-medium text-[#0B1F6B]">
            Not everyone with vitiligo will develop another autoimmune disease.
          </p>
          <div className="p-4 bg-[#F8FAFF] rounded-xl border border-[#DDE5F5] space-y-2 text-xs sm:text-sm">
            <p className="font-bold text-[#0B1F6B]">About thyroid disease:</p>
            <p>
              Some people with vitiligo develop thyroid disease. A simple blood test can show whether your thyroid is working normally. Possible signs include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#5B6785]">
              <li>Feeling cold when others feel comfortable</li>
              <li>Tiredness (fatigue)</li>
              <li>Constipation</li>
              <li>Difficulty losing weight</li>
            </ul>
            <p className="text-[#1D5FE0] pt-1">
              If thyroid disease is found, treatment can help manage the symptoms.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Vitiligo can sometimes affect hearing',
      icon: Ear,
      content: (
        <div className="space-y-3">
          <p>
            Melanocytes are also found in the inner ear. If these cells are affected, some people with vitiligo may experience hearing loss.
          </p>
          <p>
            The American Academy of Dermatology estimates that between 12% and 38% of people with vitiligo have some degree of hearing loss — and many do not realise it.
          </p>
          <div className="p-3 bg-[#E3F6EF] rounded-xl text-[#147053] font-medium text-xs sm:text-sm">
            <strong>Why this matters:</strong> Finding hearing loss early helps with management and may help prevent further loss. If you notice any change in your hearing, tell your doctor.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border border-[#DDE5F5] rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full p-5 text-left flex items-center justify-between hover:bg-[#F8FAFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5FE0]"
            >
              <div className="flex items-center space-x-3.5 pr-2">
                <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#0B1F6B]">
                  {item.title}
                </h3>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
              )}
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#1E2A4A] leading-relaxed border-t border-gray-100 bg-[#FCFDFF]">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
