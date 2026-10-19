'use client';

import React from 'react';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const DermatologistSteps: React.FC = () => {

  const steps = [
    {
      number: '01',
      title: 'Get the diagnosis right',
      description: 'Not every light or white patch on the skin is vitiligo. Other conditions, including tinea versicolor, pityriasis alba, and post-inflammatory hypopigmentation, can mimic vitiligo. An accurate Wood’s lamp or clinical exam is essential before deciding on care.',
      accent: '#1D5FE0',
      bg: 'bg-[#EAF2FF]',
    },
    {
      number: '02',
      title: 'Develop an individual treatment plan',
      description: 'There are several evidence-based treatment options. A dermatologist tailors a regimen to your specific needs: restoring lost colour, preventing active spreading, or combining topical therapies with targeted phototherapy.',
      accent: '#1FA37A',
      bg: 'bg-[#E3F6EF]',
    },
    {
      number: '03',
      title: 'Address personal concerns and preferences',
      description: 'Not everyone wants to restore their skin colour. Some people prefer to treat actively; others choose camouflage makeup; others choose to leave their natural patches as they are. A compassionate clinician respects your autonomy.',
      accent: '#7C5CE0',
      bg: 'bg-[#EFEAFF]',
    },
    {
      number: '04',
      title: 'Monitor for associated conditions',
      description: 'Dermatologists monitor for signs of potential comorbidities like thyroid disease or alopecia areata, ordering routine baseline blood panels (TSH, antibodies) and referring to endocrinologists or audiology specialists when appropriate.',
      accent: '#F2884B',
      bg: 'bg-[#FFEDE3]',
    },
  ];

  return (
    <>
      <section className="py-16 relative" id="dermatologist" aria-labelledby="derm-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider bg-[#E3F6EF] px-3.5 py-1 rounded-full">
              Clinical Partnership
            </span>
            <h2 id="derm-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B] mt-2">
              Why should I see a dermatologist?
            </h2>
            <p className="text-sm sm:text-base text-[#5B6785] mt-2 leading-relaxed">
              A dermatologist is a medical doctor who specializes in the skin, hair, and nails. For someone with possible vitiligo, an expert clinician provides four essential pillars of care.
            </p>
          </div>

          {/* 4 Numbered Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] hover:border-[#1D5FE0] transition-all shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm text-white shadow-sm"
                      style={{ backgroundColor: step.accent }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B1F6B]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold" style={{ color: step.accent }}>
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  <span>Clinical Standard of Care</span>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Callout Box matching Page 8 */}
          <div className="bg-[#FFF8F4] border-2 border-[#FEDDC7] rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#F2884B] uppercase tracking-wider flex items-center space-x-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Reassurance FAQ</span>
              </span>
              <h4 className="text-lg font-bold text-[#0B1F6B]">
                Does everyone with vitiligo develop other health problems?
              </h4>
              <p className="text-xs sm:text-sm text-[#5B6785]">
                <strong className="text-[#0B1F6B]">No.</strong> Having vitiligo does not mean a person will automatically develop thyroid disease, another autoimmune condition, or hearing loss. The vast majority of people with vitiligo live healthy, active lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
