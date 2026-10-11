'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, BookOpen, Heart, Activity, Sparkles, FolderHeart } from 'lucide-react';
import topicsData from '@/data/topics.json';

const iconMap: Record<string, React.ElementType> = {
  understand: BookOpen,
  'my-life': Heart,
  treatment: Activity,
  'expert-insights': Sparkles,
  resources: FolderHeart,
};

export const TopicTiles: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('understand');

  const activeTopic = topicsData.find((t) => t.id === activeTabId) || topicsData[0];
  const IconComponent = iconMap[activeTopic.id] || BookOpen;

  return (
    <section className="py-14 bg-white/70 border-y border-[#DDE5F5]" aria-labelledby="topics-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#1D5FE0] uppercase tracking-wider">
            Explore Key Topics
          </span>
          <h2 id="topics-heading" className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
            Navigate the Global Vitiligo Hub
          </h2>
          <p className="text-sm text-[#5B6785] mt-2">
            Clear, science-backed guidance organized by your questions and stage in the journey.
          </p>
        </div>

        {/* Section Tabs Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {topicsData.map((topic) => {
            const isActive = topic.id === activeTabId;
            const TabIcon = iconMap[topic.id] || BookOpen;

            return (
              <button
                key={topic.id}
                onClick={() => setActiveTabId(topic.id)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#0B1F6B] text-white border-[#0B1F6B] shadow-md shadow-[#0B1F6B]/15'
                    : 'bg-white text-[#1E2A4A] border-[#DDE5F5] hover:bg-[#F4F8FF]'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Section Card Layout (matching Page 2 section landing card mockups) */}
        <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#DDE5F5] gap-4">
            <div className="flex items-start sm:items-center space-x-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
                style={{ backgroundColor: activeTopic.accentHex }}
              >
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: activeTopic.accentHex }}>
                  {activeTopic.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F6B]">
                  {activeTopic.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] mt-0.5">
                  {activeTopic.description}
                </p>
              </div>
            </div>

            <Link
              href={activeTopic.route}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white shrink-0 hover:opacity-90 shadow-sm transition-all"
              style={{ backgroundColor: activeTopic.accentHex }}
            >
              <span>Explore Full Section</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Subtopics Grid with chevron and description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeTopic.subtopics.map((sub) => (
              <Link
                key={sub.id}
                href={sub.route}
                className="group p-4 rounded-2xl bg-[#F8FAFF] hover:bg-[#EAF2FF] border border-[#E2EAF8] transition-all duration-200 flex items-center justify-between"
              >
                <div className="space-y-1 pr-3">
                  <h4 className="text-sm font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors">
                    {sub.title}
                  </h4>
                  <p className="text-xs text-[#5B6785] line-clamp-1">
                    {sub.description}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1D5FE0] shadow-xs group-hover:translate-x-1 transition-transform shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
