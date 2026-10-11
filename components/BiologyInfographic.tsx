'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, Sparkles } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  healthyDesc: string;
  vitiligoDesc: string;
  top: string;
  left: string;
}

const hotspots: Hotspot[] = [
  {
    id: 'surface',
    name: 'Skin Surface (Epidermis)',
    healthyDesc: 'Evenly pigmented with melanin granules that absorb UV radiation and give natural skin tone.',
    vitiligoDesc: 'Intact physical barrier, but devoid of melanin; susceptible to acute sunburn.',
    top: '20%',
    left: '50%',
  },
  {
    id: 'melanin',
    name: 'Melanin Pigment Granules',
    healthyDesc: 'Transferred smoothly from melanocytes to neighbouring keratinocytes to colour the skin.',
    vitiligoDesc: 'Severely depleted or absent; keratinocytes retain their natural pale base tone.',
    top: '45%',
    left: '60%',
  },
  {
    id: 'melanocyte',
    name: 'Melanocyte (Colour Factory)',
    healthyDesc: 'Active dendritic cell synthesizing eumelanin and pheomelanin safely at the basal layer.',
    vitiligoDesc: 'Targeted by autoreactive CD8+ T-cells mistakenly recognizing them as foreign pathogens.',
    top: '68%',
    left: '42%',
  },
  {
    id: 'basal',
    name: 'Basal Layer & Hair Follicle',
    healthyDesc: 'Houses melanocyte stem cells that continuously renew hair and skin pigment.',
    vitiligoDesc: 'Follicular stem cells may stay dormant; targeted therapies wake them up to repigment.',
    top: '85%',
    left: '30%',
  },
];

export const BiologyInfographic: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(hotspots[2]);

  return (
    <section className="py-14 bg-white/60 border-y border-[#DDE5F5]" aria-labelledby="biology-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#1D5FE0] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cellular Mechanism Explained</span>
          </div>
          <h2 id="biology-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B]">
            What Happens in Vitiligo?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6785] mt-2">
            Vitiligo develops when the body&apos;s immune system mistakenly attacks melanocytes, leading to a loss of pigment in certain areas of the skin.
          </p>
        </div>

        {/* Side-by-side Comparative Panels (matching Page 6 of mockup PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Panel 1: Healthy Skin */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#1FA37A]/30 shadow-lg relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-2xl bg-[#E3F6EF] text-[#1FA37A] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6 text-[#1FA37A]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
                  Normal Process
                </span>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Healthy Skin
                </h3>
              </div>
            </div>

            {/* Step Sequence */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#1D5FE0] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F6B]">Melanocytes produce pigment</h4>
                  <p className="text-xs text-[#5B6785]">
                    Specialized cells in the basal skin layer make microscopic pigment granules called melanin.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#1D5FE0] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F6B]">Melanin distributes color</h4>
                  <p className="text-xs text-[#5B6785]">
                    Melanin is transferred to surrounding skin cells, determining natural skin, hair, and eye tone.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#1D5FE0] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F6B]">Natural UV protection</h4>
                  <p className="text-xs text-[#5B6785]">
                    Pigment forms a protective cap over cell DNA, shielding deeper layers from sun damage.
                  </p>
                </div>
              </div>
            </div>

            {/* Healthy Result Row */}
            <div className="mt-8 pt-4 border-t border-gray-100 bg-[#F4FAF6] rounded-2xl p-4">
              <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider block mb-2">
                Result
              </span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-white rounded-xl shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#B87D4B] mx-auto mb-1 border-2 border-white" />
                  <span className="text-[11px] font-semibold text-gray-700">Skin colour</span>
                </div>
                <div className="p-2 bg-white rounded-xl shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#2E1A0C] mx-auto mb-1 border-2 border-white" />
                  <span className="text-[11px] font-semibold text-gray-700">Hair colour</span>
                </div>
                <div className="p-2 bg-white rounded-xl shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#3D2314] mx-auto mb-1 border-2 border-white" />
                  <span className="text-[11px] font-semibold text-gray-700">Eye colour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: What Happens in Vitiligo */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8456B]/30 shadow-lg relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-2xl bg-[#FDE8EE] text-[#E8456B] flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6 text-[#E8456B]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
                  Autoimmune Reaction
                </span>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  What Happens in Vitiligo
                </h3>
              </div>
            </div>

            {/* Step Sequence */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#E8456B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F6B]">Immune system mistake</h4>
                  <p className="text-xs text-[#5B6785]">
                    The body&apos;s immune system mistakenly identifies melanocytes as foreign antigens.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#E8456B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F6B]">Melanocytes are attacked</h4>
                  <p className="text-xs text-[#5B6785]">
                    Immune T-cells damage melanocytes, causing them to cease pigment synthesis or detach.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-[#E8456B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F6B]">Loss of pigment (Depigmentation)</h4>
                  <p className="text-xs text-[#5B6785]">
                    With fewer melanocytes, no new melanin reaches the surface, appearing as lighter or white patches.
                  </p>
                </div>
              </div>
            </div>

            {/* Vitiligo Result Row */}
            <div className="mt-8 pt-4 border-t border-gray-100 bg-[#FFF5F7] rounded-2xl p-4">
              <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider block mb-2">
                Result
              </span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-white rounded-xl shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#FFFBF7] mx-auto mb-1 border-2 border-rose-200" />
                  <span className="text-[11px] font-semibold text-gray-700">Lighter skin patches</span>
                </div>
                <div className="p-2 bg-white rounded-xl shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#FFFFFF] mx-auto mb-1 border-2 border-gray-300" />
                  <span className="text-[11px] font-semibold text-gray-700">White hair (poliosis)</span>
                </div>
                <div className="p-2 bg-white rounded-xl shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#C8B6A6] mx-auto mb-1 border-2 border-rose-200" />
                  <span className="text-[11px] font-semibold text-gray-700">Lighter eyelashes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Skin Cross-Section Hotspots */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-100 gap-2">
            <div>
              <h3 className="text-lg font-bold text-[#0B1F6B]">
                Interactive Skin Layer Cross-Section
              </h3>
              <p className="text-xs text-[#5B6785]">
                Tap the numbered anatomical hotspots below to compare healthy vs affected skin.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#1D5FE0] bg-[#EAF2FF] px-3 py-1 rounded-full self-start sm:self-center">
              Active: {selectedHotspot.name}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual SVG Skin Diagram with clickable nodes */}
            <div className="md:col-span-7 relative bg-gradient-to-b from-[#FCEBE1] via-[#F3D5C5] to-[#E3BEAA] rounded-2xl h-72 border border-[#E7C8B6] overflow-hidden flex items-center justify-center shadow-inner">
              {/* Layers overlay */}
              <div className="absolute top-0 inset-x-0 h-10 bg-amber-500/10 border-b border-amber-600/20 flex items-center px-4">
                <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">Skin Surface</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-14 bg-red-900/10 border-t border-red-900/20 flex items-center px-4">
                <span className="text-[10px] font-bold text-red-900 uppercase tracking-wider">Basal Layer & Follicles</span>
              </div>

              {/* Hotspot buttons */}
              {hotspots.map((spot, i) => (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ top: spot.top, left: spot.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-transform hover:scale-125 focus:outline-none ${
                    selectedHotspot.id === spot.id
                      ? 'bg-[#0B1F6B] text-white ring-4 ring-[#1D5FE0]/40 scale-110'
                      : 'bg-white text-[#1D5FE0] border-2 border-[#1D5FE0]'
                  }`}
                  aria-label={spot.name}
                >
                  {i + 1}
                </button>
              ))}

              <div className="absolute bottom-2 right-2 text-[10px] text-gray-500 bg-white/70 px-2 py-0.5 rounded">
                Skin Diagram v2.4
              </div>
            </div>

            {/* Hotspot Comparison Card */}
            <div className="md:col-span-5 bg-[#F8FAFF] rounded-2xl p-5 border border-[#DDE5F5] space-y-4">
              <div className="flex items-center space-x-2">
                <Info className="w-4 h-4 text-[#1D5FE0]" />
                <h4 className="font-bold text-sm text-[#0B1F6B]">
                  {selectedHotspot.name}
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-green-200">
                  <span className="font-bold text-green-700 block mb-0.5">In Healthy Skin:</span>
                  <p className="text-[#1E2A4A]">{selectedHotspot.healthyDesc}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-rose-200">
                  <span className="font-bold text-[#E8456B] block mb-0.5">In Vitiligo:</span>
                  <p className="text-[#1E2A4A]">{selectedHotspot.vitiligoDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
