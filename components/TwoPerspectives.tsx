'use client';

import React, { useState } from 'react';
import { Play, Sparkles, User, Stethoscope } from 'lucide-react';
import { VideoModal } from '@/components/VideoModal';

export const TwoPerspectives: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    title: string;
    speaker: string;
    role: string;
    duration: string;
    transcript: string;
  }>({
    isOpen: false,
    title: '',
    speaker: '',
    role: '',
    duration: '',
    transcript: '',
  });

  return (
    <>
      <section className="py-16 relative" aria-labelledby="perspectives-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EAF2FF] text-[#1D5FE0] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Two Perspectives. One Condition.</span>
            </div>
            <h2 id="perspectives-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B]">
              Different Questions. Shared Understanding.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6785] mt-2">
              Bridging the lived experience of patients with the clinical insights of pigment specialists.
            </p>
          </div>

          {/* Split Cards: Patient vs Doctor (Matching Page 9 Mockups) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Patient Card (Rose Tint) */}
            <div className="bg-[#FFF8F9] rounded-3xl p-8 border-2 border-[#E8456B]/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDE8EE] text-[#E8456B] flex items-center justify-center font-bold">
                    <User className="w-6 h-6 text-[#E8456B]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
                      Lived Experience
                    </span>
                    <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                      Patient Perspective
                    </h3>
                  </div>
                </div>

                <div className="my-6">
                  <p className="font-serif text-2xl font-bold text-[#E8456B] leading-snug">
                    &ldquo;I want my skin to look normal again. Will treatment work for me?&rdquo;
                  </p>
                  <p className="text-xs text-[#5B6785] mt-3 leading-relaxed">
                    Patients often feel anxious when noticing new patches, wondering about social acceptance, marriage prospects, and if daily treatments will deliver real repigmentation.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#FAD0DC]">
                <button
                  onClick={() =>
                    setActiveModal({
                      isOpen: true,
                      title: "Patient Perspective: Navigating Hopes and Uncertainty",
                      speaker: "Maya Patel & David Okafor",
                      role: "Patient Voices",
                      duration: "4:12 min",
                      transcript:
                        "When I was first told I had vitiligo, I asked if I could get my skin back in time for my graduation. The hardest part wasn't the ointments—it was the emotional waiting. Over time, I realized that understanding my biology took away the fear. Treatment is something I choose for myself, not to appease others.",
                    })
                  }
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-xs font-bold bg-[#E8456B] text-white hover:bg-[#c93255] shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch patient stories</span>
                </button>
              </div>
            </div>

            {/* Doctor Card (Blue Tint) */}
            <div className="bg-[#F6F9FF] rounded-3xl p-8 border-2 border-[#1D5FE0]/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center font-bold">
                    <Stethoscope className="w-6 h-6 text-[#1D5FE0]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                      Clinical Insight
                    </span>
                    <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                      Doctor Perspective
                    </h3>
                  </div>
                </div>

                <div className="my-6">
                  <p className="font-serif text-2xl font-bold text-[#0B1F6B] leading-snug">
                    &ldquo;Treatment aims to control disease activity and restore pigmentation, but response varies by individual.&rdquo;
                  </p>
                  <p className="text-xs text-[#5B6785] mt-3 leading-relaxed">
                    Dermatologists prioritize halting the active immune attack first, followed by stimulating follicular melanocyte stem cells. Setting realistic milestones avoids disappointment.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D5E2FA]">
                <button
                  onClick={() =>
                    setActiveModal({
                      isOpen: true,
                      title: "Doctor Perspective: How Modern Therapies Halt Disease Activity",
                      speaker: "Dr. Marcus Vance, MD, FAAD",
                      role: "Associate Professor of Dermatology",
                      duration: "5:20 min",
                      transcript:
                        "Vitiligo is an immune-mediated disorder. Our clinical goal is twofold: first, arrest the autoimmune cytotoxic T-cells attacking the melanocytes; second, activate the reservoir of melanocyte stem cells in the hair follicles to migrate and repigment. It takes patience, usually 3 to 6 months to see meaningful repigmentation, but modern options offer real promise.",
                    })
                  }
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch doctor insights</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal((prev) => ({ ...prev, isOpen: false }))}
        title={activeModal.title}
        speaker={activeModal.speaker}
        role={activeModal.role}
        duration={activeModal.duration}
        transcript={activeModal.transcript}
      />
    </>
  );
};
