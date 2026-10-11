'use client';

import React, { useState } from 'react';
import { Globe2, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';

interface CulturalEntry {
  region: string;
  foodBelief: string;
  leprosyBelief: string;
  faultBelief: string;
  socialImpact: string;
  scientificReality: string;
  citations: string;
}

const culturalData: Record<string, CulturalEntry> = {
  'South Asia': {
    region: 'South Asia (India, Pakistan, Bangladesh, Nepal)',
    foodBelief: 'Common beliefs that drinking milk after eating fish, or consuming sour foods (citrus, tamarind, curd) triggers pigment loss.',
    leprosyBelief: 'Historical confusion in vernacular languages (e.g. associating "Kushta" or "Shweta Kushta" with leprosy) creating deep matrimonial and social stigma.',
    faultBelief: 'Sometimes wrongly attributed to past karma, dietary sins, or moral wrongdoing by the individual or ancestors.',
    socialImpact: 'Severe hurdles in matrimonial prospects, family stress, and social isolation, especially for young unmarried women.',
    scientificReality: 'Vitiligo is an autoimmune condition caused by genetic susceptibility and immune destruction of melanocytes. Dietary restrictions are medically unnecessary and risk nutritional deficiency.',
    citations: 'IADVL Taskforce on Pigmentary Disorders; Indian J Dermatol Venereol Leprol 2012;78:12-24.',
  },
  'Africa': {
    region: 'Sub-Saharan & West Africa (Nigeria, Ghana, Kenya, South Africa)',
    foodBelief: 'Less focused on food combinations, but sometimes attributed to poisoned water or herbal concoctions.',
    leprosyBelief: 'Frequently conflated with albinism or severe dermatological infections, sparking unfounded fears of contagion.',
    faultBelief: 'Often perceived as spiritual punishment, ancestral curse, or witchcraft directed at the family lineage.',
    socialImpact: 'Individuals may face community ostracism, employment discrimination, or pressure to seek unproven spiritual exorcisms.',
    scientificReality: 'Vitiligo is purely biological and non-communicable. No spiritual curse or pathogen exists. Equal incidence occurs across all human melanin concentrations.',
    citations: 'PMC4530147 - Psychosocial Impact of Vitiligo in African Populations; Pan Afr Med J.',
  },
  'Middle East': {
    region: 'Middle East & North Africa (Egypt, Saudi Arabia, UAE, Levant)',
    foodBelief: 'Traditional Unani or humoral concepts of hot/cold food imbalances affecting blood purity.',
    leprosyBelief: 'Conflation with infectious diseases mentioned in ancient texts ("Al-Baras"), leading to unwarranted dread of closeness.',
    faultBelief: 'Attributed to "evil eye" (Hasad) or acute emotional shock (e.g. sudden trauma or terror causing white patches).',
    socialImpact: 'Reluctance to shake hands or share meals, social anxiety in public gatherings, and concealers applied compulsively.',
    scientificReality: 'Skin contact cannot transmit vitiligo. Physical affection, sharing food, and marriage pose zero infection risk.',
    citations: 'AAD International Registry; J Eur Acad Dermatol Venereol 2021;35:1020-1029.',
  },
};

const questions = [
  'Is it contagious?',
  'Is it leprosy?',
  'Is it caused by food?',
  'Is it my fault?',
  'Is it only cosmetic?',
  'Can anyone get it?',
];

export const CulturalBeliefs: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('South Asia');
  const [activeQuestion, setActiveQuestion] = useState<string>('Is it contagious?');

  const regionInfo = culturalData[selectedRegion];

  return (
    <section className="py-14 bg-gradient-to-b from-[#F8FAFF] to-white border-b border-[#DDE5F5]" aria-labelledby="cultural-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EFEAFF] text-[#7C5CE0] text-xs font-semibold uppercase tracking-wider mb-2">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Perspectives</span>
          </div>
          <h2 id="cultural-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B]">
            Beliefs Across Cultures
          </h2>
          <p className="text-sm sm:text-base text-[#5B6785] mt-2">
            Misconceptions about vitiligo take different forms across regions. Science unites us with universal truth.
          </p>
        </div>

        {/* 6 Question Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {questions.map((q, i) => (
            <button
              key={i}
              onClick={() => setActiveQuestion(q)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeQuestion === q
                  ? 'bg-[#1D5FE0] text-white shadow-sm font-semibold'
                  : 'bg-white border border-[#DDE5F5] text-gray-700 hover:bg-gray-100'
              }`}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Region Switcher Tabs */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          {Object.keys(culturalData).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                selectedRegion === region
                  ? 'bg-[#0B1F6B] text-white border-[#0B1F6B] shadow-md'
                  : 'bg-white border-[#DDE5F5] text-[#5B6785] hover:bg-[#F4F8FF]'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Region Card Analysis */}
        <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
            <div>
              <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                Regional Context
              </span>
              <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                {regionInfo.region}
              </h3>
            </div>
            <span className="text-xs text-gray-500 italic">
              Addressing: &ldquo;{activeQuestion}&rdquo;
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-[#FFF6F0] border border-[#FEDDC7]">
                <h4 className="font-bold text-[#F2884B] mb-1">
                  Food & Lifestyle Myths:
                </h4>
                <p className="text-gray-700">{regionInfo.foodBelief}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDE8EE] border border-[#FAD0DC]">
                <h4 className="font-bold text-[#E8456B] mb-1">
                  Historical Misidentification (Leprosy):
                </h4>
                <p className="text-gray-700">{regionInfo.leprosyBelief}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5]">
                <h4 className="font-bold text-[#0B1F6B] mb-1">
                  Moral & Supernatural Attribution:
                </h4>
                <p className="text-gray-700">{regionInfo.faultBelief}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm flex flex-col justify-between">
              <div className="p-4 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC]">
                <h4 className="font-bold text-[#7C5CE0] mb-1">
                  Psychosocial & Family Impact:
                </h4>
                <p className="text-gray-700">{regionInfo.socialImpact}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7]">
                <h4 className="font-bold text-[#1FA37A] mb-1 flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>The Medical Reality:</span>
                </h4>
                <p className="text-gray-800 leading-relaxed font-medium">
                  {regionInfo.scientificReality}
                </p>
                <div className="mt-3 pt-2 border-t border-[#BCEBD7] text-[11px] text-[#1FA37A] flex items-center justify-between">
                  <span>Peer-reviewed source:</span>
                  <span className="font-mono">{regionInfo.citations}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Cultural Closing Line */}
          <div className="pt-6 border-t border-gray-100 text-center">
            <p className="font-serif font-bold text-lg sm:text-xl text-[#0B1F6B]">
              &ldquo;Different beliefs. Same need: accurate information without judgment.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
