'use client';

import React, { useState } from 'react';
import { X, Search, MapPin, Phone, Star, Video, CheckCircle2 } from 'lucide-react';
import resourcesData from '@/data/resources.json';

interface FindDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FindDoctorModal: React.FC<FindDoctorModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [telehealthOnly, setTelehealthOnly] = useState(false);

  if (!isOpen) return null;

  const doctors = resourcesData.dermatologists.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesRegion = selectedRegion === 'All' || doc.region === selectedRegion;
    const matchesTelehealth = !telehealthOnly || doc.telehealth;

    return matchesSearch && matchesRegion && matchesTelehealth;
  });

  const regions = ['All', 'South Asia', 'North America', 'Europe', 'Africa', 'Latin America', 'Middle East'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="find-doctor-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm bg-[#0B1F6B]/40 animate-fadeIn"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-[#DDE5F5]">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#0B1F6B] to-[#1D5FE0] text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-200">
              Verified Care Network
            </span>
            <h2 id="find-doctor-title" className="text-2xl font-bold font-serif">
              Find a Vitiligo Specialist
            </h2>
            <p className="text-sm text-blue-100 mt-1">
              Search certified dermatologists and specialized pigment clinics worldwide.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-5 border-b border-[#DDE5F5] bg-[#F8FAFF] space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by doctor name, city, country, or condition (e.g. Mumbai, Phototherapy, JAK)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[#DDE5F5] bg-white text-sm focus:border-[#1D5FE0] focus:ring-2 focus:ring-[#1D5FE0]/20 outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-1 overflow-x-auto pb-1 max-w-full">
              <span className="text-gray-500 font-medium mr-1">Region:</span>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1 rounded-full transition-colors whitespace-nowrap ${
                    selectedRegion === region
                      ? 'bg-[#0B1F6B] text-white font-medium'
                      : 'bg-white border border-[#DDE5F5] text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            <label className="inline-flex items-center space-x-2 cursor-pointer font-medium text-[#1E2A4A]">
              <input
                type="checkbox"
                checked={telehealthOnly}
                onChange={(e) => setTelehealthOnly(e.target.checked)}
                className="rounded text-[#1D5FE0] focus:ring-[#1D5FE0] w-4 h-4"
              />
              <span className="flex items-center space-x-1">
                <Video className="w-3.5 h-3.5 text-[#1FA37A]" />
                <span>Telehealth Available</span>
              </span>
            </label>
          </div>
        </div>

        {/* Doctor List */}
        <div className="p-6 overflow-y-auto space-y-4 divide-y divide-gray-100">
          {doctors.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="font-medium text-base text-[#1E2A4A]">No specialists match your search criteria.</p>
              <p className="text-sm mt-1">Try resetting the region filter or searching for another city.</p>
            </div>
          ) : (
            doctors.map((doc) => (
              <div key={doc.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-base text-[#0B1F6B]">{doc.name}</h3>
                    <div className="flex items-center text-xs text-amber-500 font-medium">
                      <Star className="w-3.5 h-3.5 fill-current mr-0.5" />
                      <span>{doc.rating}</span>
                    </div>
                    {doc.telehealth && (
                      <span className="bg-[#E3F6EF] text-[#1FA37A] text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <Video className="w-3 h-3" />
                        <span>Online</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-600">{doc.hospital}</p>
                  <div className="flex items-center text-xs text-gray-500 space-x-3">
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-[#1D5FE0]" />
                      {doc.city}, {doc.country}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Phone className="w-3.5 h-3.5 mr-1 text-gray-400" />
                      {doc.phone}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {doc.specialties.map((spec, i) => (
                      <span key={i} className="bg-[#EAF2FF] text-[#1D5FE0] text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex sm:flex-col gap-2 items-end">
                  <span className="text-[11px] text-green-700 flex items-center bg-green-50 px-2 py-1 rounded-md">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Accepting New Patients
                  </span>
                  <a
                    href={`tel:${doc.phone}`}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors"
                  >
                    Contact Clinic
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8FAFF] border-t border-[#DDE5F5] text-xs text-gray-500 flex items-center justify-between">
          <span>Are you a certified dermatologist? <a href="/expert-insights" className="text-[#1D5FE0] underline">Join the network</a></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
