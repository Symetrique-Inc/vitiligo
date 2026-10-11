'use client';

import React, { useState } from 'react';
import { Clock, Eye, Heart, Sparkles, Sun, Coffee, Users, Home, Moon } from 'lucide-react';

interface TimelineStop {
  time: string;
  title: string;
  icon: React.ElementType;
  whatIThink: string;
  whatOthersSee: string;
  practicalTip: string;
}

const stops: TimelineStop[] = [
  {
    time: '07:00 AM',
    title: 'Getting Ready & Morning Mirror',
    icon: Coffee,
    whatIThink: 'Will I wear long sleeves today even though it is 30°C outside? Should I spend 20 minutes applying waterproof foundation over my wrist patches, or just apply sunscreen and head out?',
    whatOthersSee: 'A focused, energetic professional picking out clothes for the day.',
    practicalTip: 'Remember: Camouflage is entirely your choice, never an obligation. High SPF 50+ broad-spectrum sunscreen is the only medical essential.',
  },
  {
    time: '09:00 AM',
    title: 'Work / College & Presentations',
    icon: Sun,
    whatIThink: 'As I raise my hand to speak or point at the presentation slide, someone might stare at my knuckles. I brace myself for the curious second look.',
    whatOthersSee: 'A capable colleague delivering key insights on the project roadmap.',
    practicalTip: 'A simple, cheerful response ("It’s vitiligo—an autoimmune loss of skin pigment, totally harmless") dissolves curiosity in seconds.',
  },
  {
    time: '01:00 PM',
    title: 'Social Interaction & Lunch',
    icon: Users,
    whatIThink: 'Someone offers seafood and someone else cautions me not to drink milk with it because of ancient folk myths. I feel tired of explaining biology during lunch.',
    whatOthersSee: 'A warm lunchtime conversation among friends sharing food.',
    practicalTip: 'You do not have to educate everyone on every occasion. A calm "My doctor confirmed my diet has no effect on my skin" is sufficient.',
  },
  {
    time: '05:00 PM',
    title: 'Sports, Commute & Errands',
    icon: Home,
    whatIThink: 'Heading to the pool or gym locker room. The bright overhead lights accentuate the contrast on my legs.',
    whatOthersSee: 'An athlete getting in a great workout and taking care of their physical health.',
    practicalTip: 'UV swim shirts (rash guards) provide outstanding UPF 50+ protection while freeing you from continuous sunscreen reapplication in the water.',
  },
  {
    time: '09:00 PM',
    title: 'Evening Reflection & Night Routine',
    icon: Moon,
    whatIThink: 'Applying my prescribed topical medication. Checking if the tiny follicular freckles on my elbow have expanded this week.',
    whatOthersSee: 'A peaceful end to a full, meaningful day with family and rest.',
    practicalTip: 'Repigmentation is microscopic and takes months. Measuring progress weekly rather than hourly protects your peace of mind.',
  },
];

export const WalkInMySkinTimeline: React.FC = () => {
  const [activeStop, setActiveStop] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'whatIThink' | 'whatOthersSee'>('whatIThink');

  const current = stops[activeStop];
  const Icon = current.icon;

  return (
    <section className="py-16 bg-white/70 border-y border-[#DDE5F5]" id="timeline" aria-labelledby="timeline-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EFEAFF] text-[#7C5CE0] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Empathy Experience</span>
          </div>
          <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold font-serif text-[#0B1F6B]">
            Walk in My Skin: A Day in the Life
          </h2>
          <p className="text-sm sm:text-base text-[#5B6785] mt-2">
            Experience the daily thoughts, choices, and subtle moments of someone living with vitiligo.
          </p>
        </div>

        {/* Timeline Horizontal Selector */}
        <div className="flex items-center justify-start md:justify-center space-x-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {stops.map((stop, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStop(idx)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 border ${
                activeStop === idx
                  ? 'bg-[#7C5CE0] text-white border-[#7C5CE0] shadow-md shadow-[#7C5CE0]/20'
                  : 'bg-white text-[#1E2A4A] border-[#DDE5F5] hover:bg-[#EFEAFF]'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{stop.time}</span>
            </button>
          ))}
        </div>

        {/* Active Timeline Moment Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center font-bold">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                  {current.time}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0B1F6B]">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Toggle: What I think / What others see */}
            <div className="bg-[#F8FAFF] p-1 rounded-full border border-[#DDE5F5] flex items-center self-start sm:self-center">
              <button
                onClick={() => setViewMode('whatIThink')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === 'whatIThink'
                    ? 'bg-[#7C5CE0] text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                What I Think (Internal)
              </button>
              <button
                onClick={() => setViewMode('whatOthersSee')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === 'whatOthersSee'
                    ? 'bg-[#0B1F6B] text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                What Others See (External)
              </button>
            </div>
          </div>

          {/* Perspective View Box */}
          <div className="p-6 rounded-2xl bg-[#FBF9FE] border border-[#E9E0FA] transition-all">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#7C5CE0] uppercase tracking-wider mb-2">
              {viewMode === 'whatIThink' ? <Heart className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>
                {viewMode === 'whatIThink' ? 'Internal Monologue & Anxiety:' : 'External Reality & Perception:'}
              </span>
            </div>
            <p className="text-base sm:text-lg text-[#1E2A4A] leading-relaxed font-medium">
              &ldquo;{viewMode === 'whatIThink' ? current.whatIThink : current.whatOthersSee}&rdquo;
            </p>
          </div>

          {/* Practical Clinician / Support Tip */}
          <div className="p-4 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] flex items-start space-x-3 text-xs sm:text-sm text-[#1FA37A]">
            <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#147053]">Practical Living Tip: </span>
              <span className="text-gray-800">{current.practicalTip}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
