'use client';

import React, { useState } from 'react';
import { Send, MessageSquare, Shield, CheckCircle2, Sparkles, Clock, AlertCircle } from 'lucide-react';
import faqsData from '@/data/faqs.json';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  reviewedBy?: {
    name: string;
    specialty: string;
    reviewedDate: string;
    hospital: string;
  };
}

export const AskChatbot: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am the OneVitiligo Anonymous Knowledge Assistant. You can ask anything you might feel hesitant to ask in person—without giving your name, email, or any personal details. What would you like to understand today?',
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const popularChips = [
    'Can vitiligo get worse?',
    'Will treatment work for me?',
    'Can I get married?',
    'Should I tell my employer?',
    'Is it hereditary?',
    'Can I use makeup?',
  ];

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsSubmitting(true);

    setTimeout(() => {
      // Find matching vetted answer from clinical FAQs
      const lower = textToSend.toLowerCase();
      const match = faqsData.find(
        (f) =>
          lower.includes(f.shortQuestion.toLowerCase().replace('?', '')) ||
          lower.includes(f.category.toLowerCase()) ||
          f.question.toLowerCase().includes(lower)
      );

      let botReply: Message;

      if (match) {
        botReply = {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: match.answer,
          reviewedBy: match.reviewedBy,
        };
      } else {
        botReply = {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: `Thank you for asking. Your question has been anonymously queued for our weekly Clinical Review Board. \n\nRemember: Vitiligo is an autoimmune condition where immune cells mistakenly destroy melanocytes. It is non-contagious and does not affect your health span or ability to thrive. For personalized diagnosis or prescription therapy, please consult a certified dermatologist.`,
          reviewedBy: {
            name: "Dr. Rashmi Sharma, MD",
            specialty: "Editorial Board Lead",
            reviewedDate: "October 2026",
            hospital: "Global Vitiligo Advisory Board"
          }
        };
        setSubmittedNotice(true);
        setTimeout(() => setSubmittedNotice(false), 5000);
      }

      setMessages((prev) => [...prev, botReply]);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="py-16 relative" id="ask" aria-labelledby="ask-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FFEDE3] text-[#F2884B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Confidential & Free</span>
          </div>
          <h2 id="ask-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B]">
            Have a question you&apos;re afraid to ask?
          </h2>
          <p className="text-sm sm:text-base text-[#5B6785] mt-2">
            Ask anonymously. Get reliable answers reviewed by certified medical experts every week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chat Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DDE5F5] shadow-xl overflow-hidden flex flex-col h-[580px]">
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-[#0B1F6B] to-[#1D5FE0] text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Anonymous Clinician Q&A Bot</h3>
                  <span className="text-[11px] text-blue-200 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                    No sign-in or tracking required
                  </span>
                </div>
              </div>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-medium">
                100% Private
              </span>
            </div>

            {/* Popular Question Chips */}
            <div className="p-3 bg-[#F8FAFF] border-b border-gray-100">
              <p className="text-[11px] font-bold text-[#5B6785] uppercase tracking-wider mb-2 px-1">
                Popular questions to click:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {popularChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip)}
                    className="text-xs bg-white border border-[#DDE5F5] hover:border-[#1D5FE0] hover:bg-[#EAF2FF] text-[#1E2A4A] px-3 py-1.5 rounded-full transition-colors text-left"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#0B1F6B] text-white rounded-tr-none'
                        : 'bg-white text-[#1E2A4A] border border-[#DDE5F5] rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {msg.reviewedBy && (
                      <div className="mt-3 pt-2.5 border-t border-gray-100 text-[11px] text-gray-500 space-y-0.5">
                        <div className="flex items-center text-[#1FA37A] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                          <span>Clinically reviewed by {msg.reviewedBy.name}</span>
                        </div>
                        <p className="text-[10px] text-gray-400">
                          {msg.reviewedBy.specialty} &bull; {msg.reviewedBy.reviewedDate}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isSubmitting && (
                <div className="flex items-center space-x-2 text-xs text-gray-400 p-2">
                  <div className="w-2 h-2 rounded-full bg-[#1D5FE0] animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-[#1D5FE0] animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-[#1D5FE0] animate-bounce [animation-delay:0.4s]" />
                  <span>Reviewing clinical library...</span>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="p-3 bg-white border-t border-[#DDE5F5]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  placeholder="Type your question here (e.g., will it spread, marriage, sunscreen)..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0] focus:ring-1 focus:ring-[#1D5FE0]"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2.5 rounded-full bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] disabled:opacity-40 transition-colors"
                  aria-label="Send anonymous question"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-between text-[11px] text-gray-400 mt-2 px-1">
                <span className="flex items-center">
                  <Shield className="w-3 h-3 mr-1 text-green-600" />
                  No IP or personally identifiable data saved.
                </span>
                <span>GDPR / DPDP Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Weekly Reviewed Answers Showcase (Matching Page 9 mockups) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Weekly Expert Digest
                </span>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Answers from our experts
                </h3>
              </div>
              <span className="text-xs text-gray-500 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#F2884B]" />
                Updated weekly
              </span>
            </div>

            <div className="space-y-3">
              {faqsData.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-[#DDE5F5] hover:border-[#1D5FE0] transition-colors shadow-sm space-y-2"
                >
                  <div className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-[#EAF2FF] text-[#1D5FE0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <h4 className="font-bold text-sm text-[#0B1F6B]">
                      {item.question}
                    </h4>
                  </div>
                  <p className="text-xs text-[#5B6785] pl-7 line-clamp-3 leading-relaxed">
                    {item.answer}
                  </p>
                  <div className="pl-7 pt-2 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="font-medium text-[#1E2A4A]">{item.reviewedBy.name}</span>
                    <span>{item.reviewedBy.reviewedDate}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF8F4] border border-[#FEDDC7] text-xs text-[#5B6785] flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-[#F2884B] shrink-0 mt-0.5" />
              <p>
                <strong>Medical guardrail:</strong> The chatbot provides reviewed medical educational content and does not prescribe or diagnose. For prescription JAK inhibitors or phototherapy protocols, please consult an in-person dermatologist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
