'use client';

import React, { useState } from 'react';
import { HelpCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { expertInsightsContent } from '@/content/siteContent';

export const AskExpertForm: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('General Question');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const maxLength = 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !consent) return;
    // TODO: Connect anonymous question submission to Symetrique backend API endpoint
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setQuestion('');
    setConsent(false);
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm" id="ask">
      <div className="max-w-3xl">
        <div className="flex items-center space-x-2 text-[#F2884B] mb-2">
          <HelpCircle className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Anonymous Q&A
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
          {expertInsightsContent.askExpert.title}
        </h2>
        <p className="text-sm sm:text-base text-[#5B6785] mt-2 leading-relaxed">
          {expertInsightsContent.askExpert.intro}
        </p>

        {/* Medical disclaimer note */}
        <div className="mt-4 p-4 rounded-2xl bg-[#FFF6EE] border border-[#FEDDC7] text-xs text-[#B34F18] leading-relaxed flex items-start space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
          <span>{expertInsightsContent.askExpert.disclaimer}</span>
        </div>

        {isSubmitted ? (
          <div className="mt-8 p-6 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] text-center space-y-3 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-[#1FA37A] text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0B1F6B]">
              Question Submitted Anonymously
            </h3>
            <p className="text-sm text-[#147053] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Your question has been queued for review by our medical advisory team. Common questions and answers are periodically published to our educational library.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 text-xs font-bold text-[#1D5FE0] hover:underline"
            >
              Ask another question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="category" className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider mb-2">
                Topic Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1E2A4A] focus:outline-none focus:border-[#F2884B] bg-[#F8FAFF]"
              >
                <option value="General Question">General Question</option>
                <option value="Treatment & Care">Treatment & Care</option>
                <option value="Daily Living & Coping">Daily Living & Coping</option>
                <option value="Research & Clinical Trials">Research & Clinical Trials</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="question" className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider">
                  Your Question
                </label>
                <span className="text-[11px] text-gray-400">
                  {maxLength - question.length} characters left
                </span>
              </div>
              <textarea
                id="question"
                rows={4}
                required
                maxLength={maxLength}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here (e.g. How do new topical treatments compare to phototherapy?)..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm text-[#1E2A4A] placeholder-gray-400 focus:outline-none focus:border-[#F2884B] bg-[#F8FAFF] leading-relaxed resize-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="anonymous-consent"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-[#0B1F6B] border-gray-300 focus:ring-[#0B1F6B]"
              />
              <label htmlFor="anonymous-consent" className="text-xs text-[#5B6785] leading-relaxed cursor-pointer">
                I understand that this service is for educational information only, does not replace a clinical consultation, and no personal medical advice can be provided.
              </label>
            </div>

            <button
              type="submit"
              disabled={!consent || !question.trim()}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>{expertInsightsContent.askExpert.cta}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
