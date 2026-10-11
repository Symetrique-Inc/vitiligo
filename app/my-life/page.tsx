'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { WalkInMySkinTimeline } from '@/components/WalkInMySkinTimeline';
import { Heart, Users, Briefcase, Smile, Sparkles, Sun, Palette, Shield } from 'lucide-react';

export default function MyLifePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'My Life & Daily Living' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 max-w-3xl">
            <span className="text-xs font-bold text-[#7C5CE0] bg-[#EFEAFF] px-3.5 py-1 rounded-full uppercase tracking-wider">
              Section Overview &bull; Violet Palette
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] mt-3">
              Everyday Life Beyond the Skin
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] mt-3 leading-relaxed">
              Social, emotional, and practical aspects of living with vitiligo. Practical information for real-life situations.
            </p>
          </section>

          {/* Interactive Day Timeline Component */}
          <WalkInMySkinTimeline />

          {/* Core Daily Living Pillar Cards */}
          <section className="py-14 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pillar 1: Family & Relationships */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] hover:border-[#7C5CE0] transition-all shadow-sm space-y-4" id="family">
                <div className="w-12 h-12 rounded-2xl bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Family & Relationships
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  Navigating intimate conversations, dating, and introducing partners to vitiligo. When loved ones understand that vitiligo is an autoimmune condition—not an infection—confidence replaces awkwardness.
                </p>
                <div className="p-3 bg-[#F8FAFF] rounded-xl text-xs text-[#0B1F6B] font-medium">
                  <strong>Key tip:</strong> Bring your partner to a friendly dermatologist appointment to ask any questions in a neutral, reassuring environment.
                </div>
              </div>

              {/* Pillar 2: School & Work */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] hover:border-[#1D5FE0] transition-all shadow-sm space-y-4" id="work">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center font-bold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  School & Workplace
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  Managing client presentations, handshakes, and career milestones. You are never obligated to disclose medical details, but brief casual explanations eliminate rumors and foster inclusive spaces.
                </p>
                <div className="p-3 bg-[#F8FAFF] rounded-xl text-xs text-[#0B1F6B] font-medium">
                  <strong>For parents:</strong> Download our 2-page teacher advocacy packet explaining classroom sun safety and anti-teasing guidelines.
                </div>
              </div>

              {/* Pillar 3: Emotional Wellbeing */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] hover:border-[#E8456B] transition-all shadow-sm space-y-4" id="wellbeing">
                <div className="w-12 h-12 rounded-2xl bg-[#FDE8EE] text-[#E8456B] flex items-center justify-center font-bold">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Emotional Wellbeing
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  Cultivating body neutrality, managing anxiety spikes when new patches develop, and accessing certified psychodermatologists or peer support circles.
                </p>
                <div className="p-3 bg-[#F8FAFF] rounded-xl text-xs text-[#0B1F6B] font-medium">
                  <strong>Support circles:</strong> Join weekly virtual meetups with 45,000+ peers through Vitiligo Support International.
                </div>
              </div>

              {/* Pillar 4: Appearance & Camouflage */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] hover:border-[#F2884B] transition-all shadow-sm space-y-4" id="appearance">
                <div className="w-12 h-12 rounded-2xl bg-[#FFEDE3] text-[#F2884B] flex items-center justify-center font-bold">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Appearance & Camouflage
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  DHA-based sunless self-tanners, specialized waterproof corrective cosmetics (e.g. Dermablend), micropigmentation, or choosing not to cover at all.
                </p>
                <div className="p-3 bg-[#FFF6F0] rounded-xl text-xs text-[#F2884B] font-bold">
                  &ldquo;Treatment is a choice. Camouflage is a choice. Showing your skin is a choice.&rdquo;
                </div>
              </div>

              {/* Pillar 5: Travel, Exercise & Sun Protection */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] hover:border-[#1FA37A] transition-all shadow-sm space-y-4" id="travel">
                <div className="w-12 h-12 rounded-2xl bg-[#E3F6EF] text-[#1FA37A] flex items-center justify-center font-bold">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Travel, Exercise & Sun
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  Enjoying hiking, swimming, and vacations without fear. Broad-spectrum water-resistant sunscreen (SPF 50+) shields pigmentless patches from acute sunburn while keeping you active.
                </p>
                <div className="p-3 bg-[#F8FAFF] rounded-xl text-xs text-[#0B1F6B] font-medium">
                  <strong>Sun tip:</strong> Reapply sunscreen every 2 hours when swimming and wear wide-brim hats for outdoor sports.
                </div>
              </div>

              {/* Pillar 6: Your Care Team */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE5F5] hover:border-[#0B1F6B] transition-all shadow-sm space-y-4" id="care-team">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF2FF] text-[#0B1F6B] flex items-center justify-center font-bold">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                  Your Care Team
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6785] leading-relaxed">
                  Building a collaborative relationship between your dermatologist, family physician, ophthalmologist, endocrinologist, and mental health counselor for comprehensive care.
                </p>
                <div className="p-3 bg-[#F8FAFF] rounded-xl text-xs text-[#0B1F6B] font-medium">
                  <strong>Team check:</strong> An annual review ensures healthy thyroid markers and holistic support.
                </div>
              </div>
            </div>
          </section>

          {/* Medically Reviewed Badge */}
          <MedicalBadge
            reviewerName="Dr. Ananya Iyer, MD, DNB (Lead, Psychodermatology)"
            reviewerTitle="Quality of Life & Daily Living Taskforce"
            date="October 2026"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
