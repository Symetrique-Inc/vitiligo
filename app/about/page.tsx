'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Image from 'next/image';
import { UserCheck, Shield, Users, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { PlaceholderTag } from '@/components/PlaceholderTag';

export default function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect this front-end partner form to Symetrique backend API endpoint
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'About' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Primary Focus Section: Why Vitiligo with image */}
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mt-4 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                  Focus
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-serif text-[#0B1F6B] leading-tight">
                  Why Vitiligo
                </h1>
                <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-3.5">
                  <p>
                    Vitiligo is often dismissed as a cosmetic issue. In reality, it is an autoimmune condition that can affect mental health, self-esteem and overall wellbeing. Despite affecting millions of people worldwide, it receives far less research attention and public understanding than many other conditions.
                  </p>
                  <p>
                    OneVitiligo is our commitment to changing that. We are building a trusted space where patients, families and healthcare professionals can find clear information, share experiences and connect with a global community that understands.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[16/10] min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] rounded-2xl overflow-hidden border border-[#E5ECF6] shadow-xs bg-[#EBF5FB]">
                <Image
                  src="/images/about-why-vitiligo.png"
                  alt="Illustration of an open book with magnifying glass exploring vitiligo, surrounded by community, mind-health, research, and global connectivity"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </section>

          
          <section className="mb-14" aria-labelledby="values-heading">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                Principles
              </span>
              <h2 id="values-heading" className="text-2xl font-bold font-serif text-[#0B1F6B] mt-1">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1D5FE0] text-white flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">Patient voice first</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  Every decision starts with the patient perspective.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#7C5CE0] text-white flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">Integrity</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  We are transparent about who we are, how we collect data and how it is used.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1FA37A] text-white flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">Collaboration</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  We bring patients, doctors, researchers and industry together around shared goals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFEDE3] border border-[#FEDDC7] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F2884B] text-white flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">Accessibility</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  Our content is written in plain language and designed for everyone, regardless of background or education.
                </p>
              </div>
            </div>
          </section>

        
          <section id="partner" className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12">
            <div className="max-w-3xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  Collaboration
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  Partner with Us
                </h2>
                <p className="text-sm text-[#5B6785] mt-1">
                  We work with pharmaceutical companies, research institutions and health organisations to design patient-centred programmes. If you are interested in partnering with Symetrique, get in touch.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] text-[#147053] space-y-2 animate-fadeIn">
                  <div className="flex items-center space-x-2 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Thank you for reaching out.</span>
                  </div>
                  <p className="text-xs">
                    Our partnership team at Symetrique will review your message and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                        placeholder="Dr. / Ms. / Mr. Name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                        placeholder="name@organisation.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                      Organisation / Institution *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                      placeholder="Hospital, University, Research Group, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                      placeholder="Tell us about your research or partnership enquiry..."
                    />
                  </div>

                  <div className="flex items-start space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="consent-check"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#1D5FE0] focus:ring-[#1D5FE0]"
                    />
                    <label htmlFor="consent-check" className="text-xs text-[#5B6785]">
                      I consent to Symetrique securely processing my contact information solely to respond to this partnership enquiry.
                    </label>
                  </div>

                  <div className="pt-2 flex items-center space-x-3">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Contact us</span>
                    </button>
                    <PlaceholderTag label="Front-end Demo: API connection pending" />
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
