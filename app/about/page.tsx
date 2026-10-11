'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { ShieldCheck, Heart, Users, Sparkles, BookOpen, Award, CheckCircle2, Lock } from 'lucide-react';

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Dr. Rashmi Sharma, MD",
      role: "Lead Dermatologist & Co-Chair",
      institution: "Advanced Pigmentary & Phototherapy Clinic, Mumbai",
      bio: "20+ years specializing in autoimmune pigment disorders, cultural stigma reduction, and pediatric vitiligo management."
    },
    {
      name: "Dr. Marcus Vance, MD, FAAD",
      role: "Clinical Science & JAK Therapy Director",
      institution: "International Center for Vitiligo Excellence, Boston",
      bio: "Associate Professor researching targeted JAK-STAT pathway inhibition, melanocyte transplantation, and clinical trial endpoints."
    },
    {
      name: "Dr. Ananya Iyer, MD, DNB",
      role: "Psychodermatology & Quality of Life Lead",
      institution: "Metropolitan Medical Institute",
      bio: "Pioneering the integration of mental health, anxiety counseling, and shared decision-making into standard dermatological care."
    },
    {
      name: "David Okafor & Maya Patel",
      role: "Global Patient Advocates & Community Liaisons",
      institution: "Vitiligo Hub Patient Advisory Council",
      bio: "Ensuring every educational resource, terminology choice, and campaign reflects lived patient dignity and global cultural realities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EAF2FF] text-[#1D5FE0] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Purpose & Mission</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B]">
              See Beyond the Skin
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-2xl mx-auto">
              Vitiligo Hub is an independent, science-backed education and support platform created to ensure everyone with vitiligo has access to compassionate, accurate medical knowledge without judgment.
            </p>
          </section>

          {/* Mission & Core Beliefs Card */}
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-12 shadow-lg mb-12 space-y-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">Our Core Values</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                &ldquo;Treatment is a choice. Camouflage is a choice. Showing your skin is a choice.&rdquo;
              </h2>
              <div className="text-sm text-[#1E2A4A] leading-relaxed space-y-3">
                <p>
                  We believe that living with vitiligo is intensely personal. There is no &lsquo;correct&rsquo; way to live with patches. Whether you choose to pursue advanced medical repigmentation, apply daily corrective makeup, or embrace your natural dual-tone skin with unreserved pride, Vitiligo Hub exists to support your autonomy with evidence and empathy.
                </p>
                <p>
                  Cultural beliefs vary across communities—from ancient food restrictions in South Asia to spiritual folklore in Africa. While beliefs differ, the universal human need remains identical: <strong>accurate information without judgment</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Editorial & Medical Review Process */}
          <section className="py-8 space-y-6 mb-12">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">Clinical Rigour</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Our 4-Stage Medical Review Process
              </h2>
              <p className="text-sm text-[#5B6785]">
                How we maintain Grade 8 readability alongside strict scientific accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#DDE5F5] space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#EAF2FF] text-[#1D5FE0] font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className="font-bold text-sm text-[#0B1F6B]">Evidence Synthesis</h3>
                <p className="text-xs text-[#5B6785]">
                  Content starts from peer-reviewed clinical guidelines (AAD, EADV, IADVL) and high-impact dermatological journals.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#DDE5F5] space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#E3F6EF] text-[#1FA37A] font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="font-bold text-sm text-[#0B1F6B]">Plain-Language Drafting</h3>
                <p className="text-xs text-[#5B6785]">
                  Medical jargon is converted to plain, non-fear-based English and Hindi at a Grade 8 reading level.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#DDE5F5] space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#EFEAFF] text-[#7C5CE0] font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h3 className="font-bold text-sm text-[#0B1F6B]">Clinician Sign-off</h3>
                <p className="text-xs text-[#5B6785]">
                  Board-certified dermatologists verify every medical claim, comorbidity statistic, and mechanism diagram.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#DDE5F5] space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#FFEDE3] text-[#F2884B] font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <h3 className="font-bold text-sm text-[#0B1F6B]">Patient Advisory Input</h3>
                <p className="text-xs text-[#5B6785]">
                  Community reviewers inspect tone, imagery, and respectful representation before publication.
                </p>
              </div>
            </div>
          </section>

          {/* Editorial Board Members */}
          <section className="py-8 mb-12">
            <div className="text-center sm:text-left mb-6">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">Leadership</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Medical & Patient Advisory Board
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-xs space-y-3"
                >
                  <div>
                    <h3 className="text-lg font-bold font-serif text-[#0B1F6B]">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#1D5FE0]">{member.role}</p>
                    <p className="text-xs text-gray-400">{member.institution}</p>
                  </div>
                  <p className="text-xs text-[#5B6785] leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Funding Transparency & Credibility */}
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg space-y-4 mb-12" id="transparency">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-[#1D5FE0]" />
              <h3 className="text-xl font-bold font-serif text-[#0B1F6B]">
                Funding Transparency & Editorial Independence
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-[#5B6785] leading-relaxed space-y-3">
              <p>
                Vitiligo Hub maintains absolute editorial independence. We do not accept pharmaceutical advertising, paid endorsements of specific commercial brands, or sponsored medical answers in our Q&A database.
              </p>
              <p>
                Platform operations are supported through non-profit research grants, university partnerships, and philanthropic foundations committed to universal skin health equity.
              </p>
            </div>
          </section>

          {/* Medically Reviewed Badge */}
          <MedicalBadge
            reviewerName="Editorial Board Secretariat"
            reviewerTitle="Governance Committee"
            date="October 2026"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
