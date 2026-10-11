'use client';

import React, { useState } from 'react';
import { Globe, MapPin, Info, ArrowUpRight } from 'lucide-react';

interface RegionData {
  name: string;
  prevalenceRange: string;
  estimatedPeople: string;
  studies: string;
  notes: string;
}

const regionsData: Record<string, RegionData> = {
  'South Asia (India, Pakistan, Bangladesh)': {
    name: 'South Asia',
    prevalenceRange: '1.2% – 8.8%',
    estimatedPeople: '24M – 30M',
    studies: 'IADVL Registry, AIIMS New Delhi multicenter study',
    notes: 'Higher reported rates in dermatology OPDs due to high visible contrast in Fitzpatrick skin types IV–VI.',
  },
  'North America (USA, Canada)': {
    name: 'North America',
    prevalenceRange: '0.5% – 1.4%',
    estimatedPeople: '2.5M – 4.0M',
    studies: 'VALIANT Study, NHANES population sampling',
    notes: 'Significant growth in diagnosis following FDA approvals of topical JAK inhibitor therapies.',
  },
  'Europe (EU, UK, Nordic)': {
    name: 'Europe',
    prevalenceRange: '0.4% – 1.3%',
    estimatedPeople: '3.8M – 6.5M',
    studies: 'EADV Consensus, French Vitiligo Registry',
    notes: 'Active research consortiums focusing on melanocyte regeneration and targeted narrow-band UVB.',
  },
  'Sub-Saharan Africa': {
    name: 'Sub-Saharan Africa',
    prevalenceRange: '0.5% – 2.0%',
    estimatedPeople: '12M – 16M',
    studies: 'African Society of Dermatology and Venereology (ASDV)',
    notes: 'High need for photoprotection and community anti-stigma outreach against superstitious conflation.',
  },
  'Latin America': {
    name: 'Latin America',
    prevalenceRange: '0.6% – 1.8%',
    estimatedPeople: '5.5M – 8.0M',
    studies: 'Colegio Ibero-Latinoamericano de Dermatología (CILAD)',
    notes: 'Robust clinical use of combined phototherapy and surgical autologous cellular transplantation.',
  },
  'East & Southeast Asia': {
    name: 'East & Southeast Asia',
    prevalenceRange: '0.5% – 1.5%',
    estimatedPeople: '10M – 14M',
    studies: 'China Dermatologist Association, Japanese Dermatological Association',
    notes: 'Strong patient associations advancing camouflage education and progressive insurance parity.',
  },
};

export const WorldMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'global' | 'region' | 'country'>('global');
  const [selectedRegionKey, setSelectedRegionKey] = useState<string>(
    'South Asia (India, Pakistan, Bangladesh)'
  );

  const regionInfo = regionsData[selectedRegionKey];

  return (
    <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xl space-y-8">
      {/* Header and View Mode Tabs matching Page 4 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
        <div>
          <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
            Epidemiological Dashboard
          </span>
          <h3 className="text-2xl font-bold font-serif text-[#0B1F6B]">
            Vitiligo Around the World
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6785] mt-0.5">
            Different contexts. Shared experiences. Estimated 70M+ people worldwide.
          </p>
        </div>

        {/* View Switcher Tabs (Global View / By Region / By Country) */}
        <div className="bg-[#F8FAFF] p-1 rounded-2xl border border-[#DDE5F5] flex items-center self-start sm:self-center">
          <button
            onClick={() => setActiveTab('global')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'global'
                ? 'bg-[#0B1F6B] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Global View
          </button>
          <button
            onClick={() => setActiveTab('region')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'region'
                ? 'bg-[#0B1F6B] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            By Region
          </button>
          <button
            onClick={() => setActiveTab('country')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'country'
                ? 'bg-[#0B1F6B] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            By Country
          </button>
        </div>
      </div>

      {/* SVG Map Graphic Container */}
      <div className="relative bg-gradient-to-b from-[#F0F5FF] via-[#F8FAFF] to-[#FAF8FF] rounded-3xl p-6 sm:p-8 border border-[#DCE5F8] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Choropleth SVG Map Visual */}
          <div className="lg:col-span-7 relative h-72 sm:h-80 flex items-center justify-center">
            <svg viewBox="0 0 900 480" className="w-full h-full">
              {/* World Map Geographic Simplification */}
              {/* North America */}
              <path
                d="M 120 80 Q 220 70 260 120 Q 230 180 180 220 Q 150 200 120 150 Z"
                fill="#C5D9F8"
                stroke="#9DBDF0"
                strokeWidth="2"
                className="hover:fill-[#1D5FE0] transition-colors cursor-pointer"
                onClick={() => setSelectedRegionKey('North America (USA, Canada)')}
              />
              {/* South America */}
              <path
                d="M 220 240 Q 280 250 290 320 Q 260 410 220 440 Q 190 350 200 280 Z"
                fill="#D2C7F7"
                stroke="#B5A4EE"
                strokeWidth="2"
                className="hover:fill-[#7C5CE0] transition-colors cursor-pointer"
                onClick={() => setSelectedRegionKey('Latin America')}
              />
              {/* Europe */}
              <path
                d="M 420 80 Q 520 70 540 140 Q 480 170 420 150 Z"
                fill="#C5D9F8"
                stroke="#9DBDF0"
                strokeWidth="2"
                className="hover:fill-[#1D5FE0] transition-colors cursor-pointer"
                onClick={() => setSelectedRegionKey('Europe (EU, UK, Nordic)')}
              />
              {/* Africa */}
              <path
                d="M 410 180 Q 520 180 540 260 Q 500 380 440 390 Q 380 280 410 180 Z"
                fill="#F7D4DF"
                stroke="#F1AEC1"
                strokeWidth="2"
                className="hover:fill-[#E8456B] transition-colors cursor-pointer"
                onClick={() => setSelectedRegionKey('Sub-Saharan Africa')}
              />
              {/* Asia & India */}
              <path
                d="M 540 90 Q 750 80 780 210 Q 680 320 570 240 Q 540 160 540 90 Z"
                fill="#FEDFCB"
                stroke="#FDBE96"
                strokeWidth="2"
                className="hover:fill-[#F2884B] transition-colors cursor-pointer"
                onClick={() => setSelectedRegionKey('South Asia (India, Pakistan, Bangladesh)')}
              />
              {/* Australia */}
              <path
                d="M 720 320 Q 820 310 830 380 Q 770 420 710 390 Z"
                fill="#D2EFE4"
                stroke="#A7DEC8"
                strokeWidth="2"
                className="hover:fill-[#1FA37A] transition-colors cursor-pointer"
              />

              {/* Pulsing Hotspot Marker for 70M+ Highlight */}
              <circle cx="610" cy="220" r="14" fill="#0B1F6B" fillOpacity="0.2" className="animate-ping" />
              <circle cx="610" cy="220" r="7" fill="#0B1F6B" />
            </svg>

            {/* Float badge */}
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 text-[11px] font-semibold text-[#0B1F6B]">
              Interactive: Click any continent on map
            </div>
          </div>

          {/* Region Details Panel */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#DDE5F5] space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                Region Focus
              </span>
              <span className="text-xs text-gray-400">Validated Cohorts</span>
            </div>

            <h4 className="text-xl font-bold font-serif text-[#0B1F6B]">
              {regionInfo.name}
            </h4>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-[#F8FAFF] rounded-xl border border-gray-100">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Prevalence Range</span>
                <p className="text-base font-extrabold text-[#1D5FE0]">{regionInfo.prevalenceRange}</p>
              </div>
              <div className="p-3 bg-[#F8FAFF] rounded-xl border border-gray-100">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Estimated Impact</span>
                <p className="text-base font-extrabold text-[#0B1F6B]">{regionInfo.estimatedPeople}</p>
              </div>
            </div>

            <div className="text-xs space-y-2 text-[#5B6785]">
              <p><strong>Clinical Notes:</strong> {regionInfo.notes}</p>
              <p className="text-[11px] text-gray-400"><strong>Data Source:</strong> {regionInfo.studies}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Region Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <span className="text-xs font-bold text-gray-500 mr-2">Quick Select Region:</span>
        {Object.keys(regionsData).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedRegionKey(key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedRegionKey === key
                ? 'bg-[#0B1F6B] text-white font-bold'
                : 'bg-[#F8FAFF] text-gray-600 border border-[#DDE5F5] hover:bg-gray-100'
            }`}
          >
            {regionsData[key].name}
          </button>
        ))}
      </div>
    </div>
  );
};
