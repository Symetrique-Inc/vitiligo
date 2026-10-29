'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PlaceholderTag } from '@/components/PlaceholderTag';
import { Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect contact form submission to Symetrique backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-mesh">
      <Header />

      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <main className="flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10 max-w-3xl">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-xs font-bold text-[#1D5FE0] bg-[#EAF2FF] px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Get in Touch
                </span>
                <PlaceholderTag label="Front-end Form" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B]">
                Contact Us
              </h1>
              <p className="text-sm sm:text-base text-[#5B6785] leading-relaxed">
                Have questions about OneVitiligo, suggestions for new topics, or inquiries for the Symetrique team? We are here to listen.
              </p>

              <div className="p-4 rounded-2xl bg-[#FFF6EE] border border-[#FEDDC7] text-xs text-[#B34F18]">
                <span>[Content and dedicated inquiry inboxes to be provided by Symetrique]</span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#E3F6EF] border border-[#BCEBD7] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#1FA37A] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B1F6B]">Message Received</h3>
                  <p className="text-sm text-[#147053]">
                    Thank you for reaching out. A member of the Symetrique team will review your note and get back to you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D5FE0] bg-[#F8FAFF]"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D5FE0] bg-[#F8FAFF]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D5FE0] bg-[#F8FAFF]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1D5FE0] bg-[#F8FAFF] resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
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
