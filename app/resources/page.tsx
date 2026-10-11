'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MedicalBadge } from '@/components/MedicalBadge';
import { WorldMap } from '@/components/WorldMap';
import { FindDoctorModal } from '@/components/FindDoctorModal';
import { FolderHeart, Stethoscope, Users, Download, Calendar, ExternalLink, ShieldCheck, HeartHandshake, Search } from 'lucide-react';
import resourcesData from '@/data/resources.json';

export default function ResourcesPage() {
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDermatologists = resourcesData.dermatologists.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Resources & Support' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero Banner */}
          <section className="py-10 sm:py-14 max-w-3xl">
            <span className="text-xs font-bold text-[#0B1F6B] bg-[#EAF2FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
              Section Overview &bull; Blue/Lavender Palette
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] mt-3">
              Find the Right Support
            </h1>
            <p className="text-base sm:text-lg text-[#5B6785] mt-3 leading-relaxed">
              Find certified dermatologists, join active patient communities, download practical school & clinical guides, and explore global awareness events.
            </p>
          </section>

          {/* Interactive World Map of Resources */}
          <section className="mb-14" id="map">
            <WorldMap />
          </section>

          {/* Find a Doctor Section & Searchable Directory */}
          <section className="py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg mb-14" id="find-doctor">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
              <div>
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Care Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
                  Find a Specialized Dermatologist
                </h2>
                <p className="text-xs sm:text-sm text-[#5B6785] mt-0.5">
                  Verified pigment disorder clinicians, academic hospital centers, and telehealth providers.
                </p>
              </div>

              <button
                onClick={() => setIsDoctorModalOpen(true)}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] shadow-md transition-colors whitespace-nowrap self-start sm:self-center"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Open Advanced Search</span>
              </button>
            </div>

            {/* Quick Filter Search Input */}
            <div className="my-6 relative max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Quick search city or doctor name (e.g., Boston, Mumbai, Paris)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-gray-200 focus:outline-none focus:border-[#1D5FE0]"
              />
            </div>

            {/* Directory Cards Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDermatologists.map((doc) => (
                <div
                  key={doc.id}
                  className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#E2EAF8] hover:border-[#1D5FE0] transition-colors space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-sm text-[#0B1F6B]">{doc.name}</h3>
                    <p className="text-xs text-gray-500 font-medium">{doc.hospital}</p>
                    <p className="text-xs text-[#1D5FE0] font-semibold mt-1">
                      {doc.city}, {doc.country} &bull; {doc.region}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                    <span className="text-green-700 bg-green-50 px-2 py-0.5 rounded text-[10px] font-semibold">
                      Accepting Patients
                    </span>
                    <a
                      href={`tel:${doc.phone}`}
                      className="font-semibold text-[#0B1F6B] hover:underline text-xs"
                    >
                      Call Clinic
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support Groups Grid */}
          <section className="py-12 mb-14" id="support-groups">
            <div className="text-center sm:text-left mb-8">
              <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                Community Spaces
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Patient & Caregiver Support Groups
              </h2>
              <p className="text-sm text-[#5B6785]">
                Connect with local chapters and virtual peer communities for emotional encouragement and mutual advice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourcesData.supportGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white rounded-3xl p-6 border border-[#DDE5F5] hover:border-[#7C5CE0] transition-all shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EFEAFF] text-[#7C5CE0]">
                        {group.scope}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{group.members} Members</span>
                    </div>
                    <h3 className="text-lg font-bold font-serif text-[#0B1F6B]">{group.name}</h3>
                    <p className="text-xs text-[#5B6785] leading-relaxed">{group.meetings}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Virtual & In-Person</span>
                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-[#7C5CE0] hover:underline"
                    >
                      <span>Visit Community</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Downloadable Practical Toolkits */}
          <section className="py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-lg mb-14" id="guides">
            <div className="text-center sm:text-left mb-8">
              <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
                Downloadable Toolkits
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Practical Guides & Checklists
              </h2>
              <p className="text-sm text-[#5B6785]">
                Doctor discussion worksheets, teacher advocacy packets, and sun safety guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourcesData.downloadableGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="p-5 rounded-2xl bg-[#F8FAFF] border border-[#DDE5F5] hover:border-[#1FA37A] transition-colors flex items-start justify-between space-x-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-[#1FA37A] bg-[#E3F6EF] px-2 py-0.5 rounded-full">
                      {guide.badge}
                    </span>
                    <h3 className="font-bold text-sm text-[#0B1F6B] pt-1">{guide.title}</h3>
                    <p className="text-xs text-[#5B6785] leading-relaxed">{guide.description}</p>
                    <span className="text-[11px] text-gray-400 block pt-1">{guide.fileType}</span>
                  </div>

                  <button
                    onClick={() => alert(`Downloading: ${guide.title}`)}
                    className="p-2.5 rounded-full bg-white text-[#1FA37A] border border-[#BCEBD7] hover:bg-[#E3F6EF] transition-colors shrink-0 shadow-xs"
                    title="Download guide"
                    aria-label={`Download ${guide.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Events & Awareness (World Vitiligo Day) */}
          <section className="py-12 mb-14" id="events">
            <div className="text-center sm:text-left mb-8">
              <span className="text-xs font-bold text-[#F2884B] uppercase tracking-wider">
                Global Solidarity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                Events & Awareness Campaigns
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourcesData.events.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-white rounded-3xl p-6 border border-[#DDE5F5] shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFEDE3] text-[#F2884B]">
                      {ev.tag}
                    </span>
                    <span className="text-xs font-bold text-[#0B1F6B] flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-[#F2884B]" />
                      {ev.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-[#0B1F6B]">{ev.title}</h3>
                  <p className="text-xs text-[#5B6785] leading-relaxed">{ev.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Medically Reviewed Badge */}
          <MedicalBadge
            reviewerName="Dr. Rashmi Sharma, MD & Patient Advisory Committee"
            reviewerTitle="Resource Verification Board"
            date="October 2026"
          />
        </div>
      </main>

      <Footer />

      <FindDoctorModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
      />
    </div>
  );
}
