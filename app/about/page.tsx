'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Image from 'next/image';
import { UserCheck, Shield, Users, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import { useLanguage } from '@/components/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
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
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: t('About') }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Focus Section: Why Vitiligo with image */}
          <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mt-4 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
                  {t('Focus')}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-serif text-[#0B1F6B] leading-tight">
                  {t('Why Vitiligo')}
                </h1>
                <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-3.5">
                  <p>
                    {t(
                      'Vitiligo is often dismissed as a cosmetic issue. In reality, it is an autoimmune condition that can affect mental health, self-esteem and overall wellbeing. Despite affecting millions of people worldwide, it receives far less research attention and public understanding than many other conditions.',
                    )}
                  </p>
                  <p>
                    {t(
                      'OneVitiligo is our commitment to changing that. We are building a trusted space where patients, families and healthcare professionals can find clear information, share experiences and connect with a global community that understands.',
                    )}
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[16/10] min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] rounded-2xl overflow-hidden border border-[#E5ECF6] shadow-xs bg-[#EBF5FB]">
                <Image
                  src="/images/about-why-vitiligo.png"
                  alt={t(
                    'Illustration of an open book with magnifying glass exploring vitiligo, surrounded by community, mind-health, research, and global connectivity',
                  )}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-14" aria-labelledby="values-heading">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                {t('Principles')}
              </span>
              <h2 id="values-heading" className="text-2xl font-bold font-serif text-[#0B1F6B] mt-1">
                {t('Our Values')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1D5FE0] text-white flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">{t('Patient voice first')}</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  {t('Every decision starts with the patient perspective.')}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#EFEAFF] border border-[#DCD3FC] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#7C5CE0] text-white flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">{t('Integrity')}</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  {t('We are transparent about who we are, how we collect data and how it is used.')}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1FA37A] text-white flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">{t('Collaboration')}</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  {t('We bring patients, doctors, researchers and industry together around shared goals.')}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFEDE3] border border-[#FEDDC7] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F2884B] text-white flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0B1F6B]">{t('Accessibility')}</h3>
                <p className="text-xs text-[#5B6785] leading-relaxed">
                  {t(
                    'Our content is written in plain language and designed for everyone, regardless of background or education.',
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Beyond The Prescription Section */}
          <section
            className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14"
            aria-labelledby="prescription-story-heading"
          >
            <div className="max-w-4xl space-y-4">
              <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                {t('Beyond The Prescription')}
              </span>
              <h2
                id="prescription-story-heading"
                className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-serif text-[#0B1F6B] leading-tight"
              >
                {t('Because a prescription is not the whole story.')}
              </h2>
              <div className="text-sm sm:text-base text-[#1E2A4A] leading-relaxed space-y-4 pt-1">
                <p>
                  {t(
                    'OneVitiligo, an initiative by Symetrique, bridges the information gap between the scientific community and people living with vitiligo. A consultation may provide a diagnosis and treatment, but patients can still leave with unanswered questions about their skin, treatment options and emotional well-being. Scientific language can be difficult to understand, online advice can be conflicting, and reliable information may not be available in a language they know well.',
                  )}
                </p>
                <p>
                  {t(
                    'OneVitiligo brings trusted scientific information, practical care guidance and emotional support together in one accessible, multilingual platform. We help patients understand their condition, explore available choices and prepare for more informed conversations with healthcare professionals. Our goal is to make knowledge accessible, reduce uncertainty and empower every person to take an active role in their care—because everyone deserves to feel informed, understood and supported throughout their vitiligo journey.',
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Partner With Us */}
          <section id="partner" className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mb-12">
            <div className="max-w-3xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
                  {t('Collaboration')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
                  {t('Partner with Us')}
                </h2>
                <p className="text-sm text-[#5B6785] mt-1">
                  {t(
                    'We work with pharmaceutical companies, research institutions and health organisations to design patient-centred programmes. If you are interested in partnering with Symetrique, get in touch.',
                  )}
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] text-[#147053] space-y-2 animate-fadeIn">
                  <div className="flex items-center space-x-2 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{t('Thank you for reaching out.')}</span>
                  </div>
                  <p className="text-xs">
                    {t('Our partnership team at Symetrique will review your message and respond promptly.')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                        {t('Full Name *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                        placeholder={t('Dr. / Ms. / Mr. Name')}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                        {t('Work Email *')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                        placeholder={t('name@organisation.com')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                      {t('Organisation / Institution *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                      placeholder={t('Hospital, University, Research Group, etc.')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F6B] mb-1">
                      {t('Message *')}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                      placeholder={t('Tell us about your research or partnership enquiry...')}
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
                      {t(
                        'I consent to Symetrique securely processing my contact information solely to respond to this partnership enquiry.',
                      )}
                    </label>
                  </div>

                  <div className="pt-2 flex items-center space-x-3">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{t('Contact us')}</span>
                    </button>
                    <PlaceholderTag label={t('Front-end Demo: API connection pending')} />
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
