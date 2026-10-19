'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, RotateCcw, CheckCircle, Sparkles } from 'lucide-react';

export const StarterQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    audience: '',
    goal: '',
    duration: '',
  });

  const questions = [
    {
      title: "Who are you visiting Vitiligo Hub for today?",
      options: [
        { label: "Myself — I have or suspect I have vitiligo", value: "self" },
        { label: "My child, partner, or family member", value: "family" },
        { label: "I am a healthcare professional or student", value: "hcp" },
        { label: "General curiosity and community support", value: "general" },
      ],
      field: "audience" as const,
    },
    {
      title: "What is your primary focus right now?",
      options: [
        { label: "Understanding the cause & debunking myths", value: "basics" },
        { label: "Medical treatment options & evidence-based therapies", value: "treatment" },
        { label: "Emotional wellbeing, relationships & confidence", value: "life" },
        { label: "Support groups, practical guides & resources", value: "resources" },
      ],
      field: "goal" as const,
    },
    {
      title: "How long has this journey been?",
      options: [
        { label: "Newly noticed patches (past few weeks or months)", value: "new" },
        { label: "Living with vitiligo for 1 to 5+ years", value: "experienced" },
        { label: "Considering starting or switching treatment", value: "treatment_switch" },
        { label: "Just seeking accurate facts without medical pressure", value: "facts" },
      ],
      field: "duration" as const,
    },
  ];

  const handleSelect = (field: 'audience' | 'goal' | 'duration', value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setAnswers({ audience: '', goal: '', duration: '' });
    setCurrentStep(0);
  };

  // Determine recommended journey
  const getRecommendation = () => {
    if (answers.goal === 'treatment' || answers.duration === 'treatment_switch') {
      return {
        title: "Recommended Path: Treatment & Care Journey",
        desc: "Learn how dermatologists evaluate vitiligo, what modern therapies (JAK inhibitors, phototherapy) do, and why diagnosis matters.",
        link: "/treatment",
        linkText: "Explore Treatment Options →",
        badge: "Treatment & Care",
        color: "#1FA37A",
      };
    }
    if (answers.goal === 'resources') {
      return {
        title: "Recommended Path: Support Groups & Community Resources",
        desc: "Connect with peer support circles, caregiver communities, and practical worksheets for daily living.",
        link: "/resources",
        linkText: "Explore Support Resources →",
        badge: "Resources",
        color: "#0B1F6B",
      };
    }
    if (answers.goal === 'life' || answers.audience === 'family') {
      return {
        title: "Recommended Path: Living with Vitiligo & Peer Journeys",
        desc: "Explore 'Walk in My Skin', connect with peer stories, and read tips on school, work, and family conversations.",
        link: "/my-life",
        linkText: "Read Daily Living Guidance →",
        badge: "My Life",
        color: "#7C5CE0",
      };
    }
    return {
      title: "Recommended Path: Understanding Vitiligo & Myths vs Facts",
      desc: "Start with how melanocytes work, why it is an autoimmune condition, and separate the 9 most common myths from verified facts.",
      link: "/understand/stigma",
      linkText: "Explore Myths & Biology →",
      badge: "The Basics",
      color: "#1D5FE0",
    };
  };

  return (
    <section className="py-12 bg-gradient-to-b from-transparent to-[#F0F5FF]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] shadow-lg">
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F6B]">
                  Not sure where to start?
                </h3>
                <p className="text-xs text-[#5B6785]">
                  Answer 3 quick questions to receive a tailored reading roadmap.
                </p>
              </div>
            </div>

            {currentStep > 0 && currentStep <= 3 && (
              <button
                onClick={handleReset}
                className="text-xs text-gray-500 hover:text-[#0B1F6B] flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start Over</span>
              </button>
            )}
          </div>

          {currentStep < 3 ? (
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-[#1D5FE0] uppercase tracking-wider">
                <span>Question {currentStep + 1} of 3</span>
                <span>{Math.round(((currentStep) / 3) * 100)}% Completed</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1D5FE0] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                />
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#1E2A4A] pt-2">
                {questions[currentStep].title}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {questions[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(questions[currentStep].field, opt.value)}
                    className="p-4 text-left rounded-2xl border border-[#DDE5F5] bg-[#F8FAFF] hover:bg-[#EAF2FF] hover:border-[#1D5FE0] transition-all duration-200 text-xs sm:text-sm font-medium text-[#1E2A4A] flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1D5FE0] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Personalized Recommendation */
            <div className="pt-6 text-center sm:text-left space-y-4 animate-fadeIn">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#1FA37A] bg-[#E3F6EF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Personalized Guide</span>
              </div>

              {(() => {
                const rec = getRecommendation();
                return (
                  <div className="p-6 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] space-y-3">
                    <h4 className="text-xl font-bold font-serif text-[#0B1F6B]">
                      {rec.title}
                    </h4>
                    <p className="text-sm text-[#5B6785] leading-relaxed">
                      {rec.desc}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href={rec.link}
                        className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all"
                        style={{ backgroundColor: rec.color }}
                      >
                        <span>{rec.linkText}</span>
                      </Link>
                      <button
                        onClick={handleReset}
                        className="text-xs text-gray-500 hover:text-gray-900 underline px-2 py-1"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
