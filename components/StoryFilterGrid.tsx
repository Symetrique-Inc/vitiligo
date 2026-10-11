'use client';

import React, { useState } from 'react';
import { Play, Sparkles, Filter, Heart, MapPin, Tag } from 'lucide-react';
import storiesData from '@/data/stories.json';
import { VideoModal } from '@/components/VideoModal';

export const StoryFilterGrid: React.FC = () => {
  const [selectedCohort, setSelectedCohort] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<(typeof storiesData)[0] | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const cohorts = [
    'All',
    'Newly diagnosed',
    'Living with vitiligo',
    'Parents',
    'Treatment journey',
    'Confidence',
  ];

  const filteredStories =
    selectedCohort === 'All'
      ? storiesData
      : storiesData.filter(
          (s) => s.cohort === selectedCohort || s.tag === selectedCohort
        );

  const openVideo = (story: (typeof storiesData)[0]) => {
    setActiveStory(story);
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <section className="py-16 relative" id="stories" aria-labelledby="stories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EFEAFF] text-[#7C5CE0] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>You Are Not Alone</span>
            </div>
            <h2 id="stories-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B]">
              Stories Like Mine
            </h2>
            <p className="text-sm sm:text-base text-[#5B6785] mt-2">
              Explore authentic voices, diverse backgrounds, and shared moments of courage from around the globe.
            </p>
          </div>

          {/* Cohort Filter Pills */}
          <div className="flex items-center justify-start md:justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            <div className="flex items-center space-x-1.5 text-xs text-gray-400 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {cohorts.map((cohort) => (
              <button
                key={cohort}
                onClick={() => setSelectedCohort(cohort)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 border ${
                  selectedCohort === cohort
                    ? 'bg-[#0B1F6B] text-white border-[#0B1F6B] shadow-md'
                    : 'bg-white text-[#5B6785] border-[#DDE5F5] hover:bg-[#F4F8FF]'
                }`}
              >
                {cohort}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl border border-[#DDE5F5] hover:border-[#7C5CE0] transition-all shadow-md hover:shadow-xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EFEAFF] text-[#7C5CE0]">
                      {story.cohort}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-[#1D5FE0]" />
                      {story.country}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-[#0B1F6B] group-hover:text-[#7C5CE0] transition-colors mb-2">
                    {story.name}, {story.age}
                  </h3>

                  <p className="text-xs font-medium text-[#1D5FE0] mb-3">
                    {story.headline}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#E2EAF8] mb-4">
                    <p className="font-serif italic text-sm text-[#1E2A4A] leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs text-[#5B6785] leading-relaxed mb-4">
                    {story.storyExcerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {story.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openVideo(story)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EFEAFF] text-[#7C5CE0] hover:bg-[#7C5CE0] hover:text-white transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Story ({story.videoDuration})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeStory && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          title={`Story of Hope: ${activeStory.name} (${activeStory.country})`}
          speaker={`${activeStory.name}, Age ${activeStory.age}`}
          role={`Vitiligo Advocate (${activeStory.cohort})`}
          duration={activeStory.videoDuration}
          transcript={activeStory.fullStory}
        />
      )}
    </>
  );
};
