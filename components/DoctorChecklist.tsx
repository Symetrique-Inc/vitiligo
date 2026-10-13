'use client';

import React, { useState } from 'react';
import { CheckSquare, Square, Printer, RotateCcw, Stethoscope } from 'lucide-react';
import { treatmentContent } from '@/content/siteContent';

export const DoctorChecklist: React.FC = () => {
  const questions = treatmentContent.doctorChecklist;
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const toggleCheck = (index: number) => {
    const updated = [...checkedState];
    updated[index] = !updated[index];
    setCheckedState(updated);
  };

  const selectAll = () => {
    setCheckedState(new Array(questions.length).fill(true));
  };

  const clearAll = () => {
    setCheckedState(new Array(questions.length).fill(false));
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const countSelected = checkedState.filter(Boolean).length;

  return (
    <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm print:border-none print:shadow-none print:p-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4 print:border-b-2 print:border-navy">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[#1FA37A]">
            <Stethoscope className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Interactive Consultation Tool
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
            What to Discuss with Your Doctor
          </h2>
          <p className="text-sm text-[#5B6785]">
            When talking to your dermatologist about treatment, consider asking these questions. Check the ones you want to bring to your next appointment.
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-center print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Checklist</span>
          </button>
        </div>
      </div>

      {/* Progress & Quick controls */}
      <div className="py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5B6785] print:hidden">
        <div className="font-medium">
          <span className="font-bold text-[#0B1F6B]">{countSelected}</span> of {questions.length} questions selected
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={selectAll}
            className="text-[#1D5FE0] hover:underline font-semibold"
          >
            Select all
          </button>
          <span>&bull;</span>
          <button
            onClick={clearAll}
            className="inline-flex items-center space-x-1 text-gray-500 hover:text-gray-700"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-3 pt-2">
        {questions.map((question, idx) => {
          const isChecked = checkedState[idx];
          return (
            <div
              key={idx}
              onClick={() => toggleCheck(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3.5 select-none ${
                isChecked
                  ? 'bg-[#E3F6EF] border-[#1FA37A] shadow-xs'
                  : 'bg-[#F8FAFF] border-[#DDE5F5] hover:bg-[#F0F4FC]'
              } print:bg-white print:border-gray-300 print:py-2`}
            >
              <button
                type="button"
                aria-label={`Toggle question ${idx + 1}`}
                className="mt-0.5 text-[#1FA37A] focus:outline-none shrink-0"
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-[#1FA37A]" />
                ) : (
                  <Square className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <span
                className={`text-sm sm:text-base leading-relaxed ${
                  isChecked
                    ? 'font-semibold text-[#0B1F6B]'
                    : 'text-[#1E2A4A]'
                }`}
              >
                {question}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#5B6785] gap-3 print:mt-4 print:pt-2">
        <p>
          Tip: You can print this checklist or screenshot it on your mobile device before your doctor appointment.
        </p>
      </div>
    </div>
  );
};
