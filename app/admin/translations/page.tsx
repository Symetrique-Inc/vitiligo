'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Globe,
  KeyRound,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  UploadCloud,
  FileSpreadsheet,
  Eye,
  Languages,
  Check,
  RefreshCw,
} from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { TranslationStatusBadge } from '@/components/admin/TranslationStatusBadge';
import { PublishModal } from '@/components/admin/PublishModal';
import type { TranslationStatBreakdown } from '@/lib/translationService';

export default function TranslationDashboardPage() {
  const [stats, setStats] = useState<TranslationStatBreakdown | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedPublishLang, setSelectedPublishLang] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const res = await fetch('/api/admin/translations/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (e) {
      console.error('Failed to load stats:', e);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <>
      <AdminHeader
        title="Translation Management"
        subtitle="Centralized Super Admin review, comparison, editing and publishing dashboard."
        onRefresh={fetchStats}
        isRefreshing={isRefreshing}
      />

      <main className="p-6 sm:p-8 space-y-8 max-w-[1400px] w-full mx-auto">
        {/* Top Summary Banner */}
        <div className="bg-gradient-to-r from-[#0B1F6B] via-[#0E2A8C] to-[#1D5FE0] rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] tracking-[2px] uppercase font-bold bg-white/15 px-3 py-1 rounded-full inline-block mb-3 text-sky-200">
              OneVitiligo Internationalization Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              Multilingual Translation Management
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 mt-2 leading-relaxed">
              Super Admin control center to review, compare, edit and publish human-verified translations across
              7 languages: English, Hindi, Marathi, Bengali, Tamil, Telugu, and Kannada.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Link
                href="/admin/translations/editor"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white text-[#0B1F6B] hover:bg-sky-50 text-xs font-bold rounded-xl transition-all shadow-xs"
              >
                <Languages className="w-4 h-4 text-[#1D5FE0]" />
                <span>Open Side-by-Side Editor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/admin/translations/preview"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Live Website Preview</span>
              </Link>
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block pointer-events-none">
            <Globe className="w-64 h-64 text-white" />
          </div>
        </div>

        {/* 6 Key Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Stat 1 */}
          <div className="bg-white rounded-2xl p-4 border border-[#DDE5F5] shadow-xs hover:border-[#1D5FE0]/40 transition-all">
            <div className="flex items-center justify-between text-[#5B6785] mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Total Keys</span>
              <KeyRound className="w-4 h-4 text-[#1D5FE0]" />
            </div>
            <div className="text-2xl font-bold font-serif text-[#0B1F6B]">
              {isLoading ? '...' : stats?.totalKeys?.toLocaleString()}
            </div>
            <div className="text-[10px] text-[#5B6785] mt-1">Unique UI strings</div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-2xl p-4 border border-[#DDE5F5] shadow-xs hover:border-[#1D5FE0]/40 transition-all">
            <div className="flex items-center justify-between text-[#5B6785] mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Pages Covered</span>
              <FileText className="w-4 h-4 text-[#7C5CE0]" />
            </div>
            <div className="text-2xl font-bold font-serif text-[#0B1F6B]">
              {isLoading ? '...' : stats?.totalPages}
            </div>
            <div className="text-[10px] text-[#5B6785] mt-1">Site sections & pages</div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-2xl p-4 border border-[#DDE5F5] shadow-xs hover:border-[#1D5FE0]/40 transition-all">
            <div className="flex items-center justify-between text-[#5B6785] mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Languages</span>
              <Globe className="w-4 h-4 text-[#1FA37A]" />
            </div>
            <div className="text-2xl font-bold font-serif text-[#0B1F6B]">
              {isLoading ? '...' : stats?.totalLanguages}
            </div>
            <div className="text-[10px] text-[#5B6785] mt-1">EN + 6 Indian scripts</div>
          </div>

          {/* Stat 4 */}
          <div className="bg-white rounded-2xl p-4 border border-[#DDE5F5] shadow-xs hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between text-[#5B6785] mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Published Live</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold font-serif text-emerald-700">
              {isLoading ? '...' : stats?.publishedCount?.toLocaleString()}
            </div>
            <div className="text-[10px] text-emerald-600 font-medium mt-1">Live on website</div>
          </div>

          {/* Stat 5 */}
          <div className="bg-white rounded-2xl p-4 border border-[#DDE5F5] shadow-xs hover:border-sky-500/40 transition-all">
            <div className="flex items-center justify-between text-[#5B6785] mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Pending Review</span>
              <Clock className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-2xl font-bold font-serif text-sky-700">
              {isLoading ? '...' : stats?.pendingCount?.toLocaleString()}
            </div>
            <div className="text-[10px] text-sky-600 font-medium mt-1">Ready for audit</div>
          </div>

          {/* Stat 6 */}
          <div className="bg-white rounded-2xl p-4 border border-[#DDE5F5] shadow-xs hover:border-rose-500/40 transition-all">
            <div className="flex items-center justify-between text-[#5B6785] mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Untranslated</span>
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-2xl font-bold font-serif text-rose-600">
              {isLoading ? '...' : stats?.missingCount}
            </div>
            <div className="text-[10px] text-rose-600 font-medium mt-1">Missing text</div>
          </div>
        </div>

        {/* Language Completion Breakdown Table */}
        <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold font-serif text-[#0B1F6B]">
                Language Completion & Review Status
              </h3>
              <p className="text-xs text-[#5B6785] mt-1">
                Real-time metrics calculated dynamically from database records across all 7 supported languages.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Link
                href="/admin/translations/editor"
                className="text-xs font-semibold text-[#1D5FE0] hover:text-[#0B1F6B] px-3.5 py-1.5 rounded-xl border border-[#CCD8EF] hover:bg-[#EAF2FF] transition-all"
              >
                Compare in Editor →
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-[#5B6785] bg-gray-50/60 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-bold rounded-l-xl">Language</th>
                  <th className="py-3 px-4 font-bold">Native Script</th>
                  <th className="py-3 px-4 font-bold">Completion</th>
                  <th className="py-3 px-4 font-bold">Published (Live)</th>
                  <th className="py-3 px-4 font-bold">In Review</th>
                  <th className="py-3 px-4 font-bold">Drafts</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  <th className="py-3 px-4 font-bold text-right rounded-r-xl">Quick Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stats?.languageStats?.map((lang) => {
                  return (
                    <tr key={lang.code} className="hover:bg-[#F8FAFF] transition-colors">
                      <td className="py-4 px-4 font-semibold text-[#0B1F6B] flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-md bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center font-bold text-[10px] uppercase">
                          {lang.code}
                        </span>
                        <span>{lang.name}</span>
                      </td>

                      <td className="py-4 px-4 font-medium text-gray-700 text-sm">
                        {lang.nativeName}
                      </td>

                      <td className="py-4 px-4">
                        <div className="w-36">
                          <div className="flex items-center justify-between text-[11px] mb-1 font-semibold text-gray-700">
                            <span>{lang.completionPercentage}%</span>
                            <span className="text-[10px] text-gray-400">
                              {lang.published} / {lang.total}
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                lang.completionPercentage === 100
                                  ? 'bg-emerald-500'
                                  : lang.completionPercentage >= 70
                                  ? 'bg-[#1D5FE0]'
                                  : 'bg-amber-500'
                              }`}
                              style={{ width: `${lang.completionPercentage}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 text-emerald-700 font-semibold">
                        {lang.published.toLocaleString()}
                      </td>

                      <td className="py-4 px-4 text-sky-700 font-semibold">
                        {lang.inReview.toLocaleString()}
                      </td>

                      <td className="py-4 px-4 text-amber-700 font-semibold">
                        {lang.draft.toLocaleString()}
                      </td>

                      <td className="py-4 px-4">
                        <TranslationStatusBadge
                          status={lang.status === 'Complete' ? 'PUBLISHED' : 'IN_REVIEW'}
                        />
                      </td>

                      <td className="py-4 px-4 text-right">
                        <div className="inline-flex items-center space-x-2">
                          <Link
                            href={`/admin/translations/editor?language=${lang.code}`}
                            className="px-2.5 py-1 text-[11px] font-semibold text-[#1D5FE0] hover:bg-[#EAF2FF] rounded-lg transition-colors border border-transparent hover:border-[#CCD8EF]"
                          >
                            Edit
                          </Link>
                          {lang.code !== 'en' && (
                            <button
                              onClick={() => setSelectedPublishLang(lang.code)}
                              className="px-2.5 py-1 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-200"
                            >
                              Publish
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Section: Recent Activity & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-[#DDE5F5] p-6 shadow-xs">
            <h3 className="text-sm font-bold font-serif text-[#0B1F6B] mb-4 flex items-center justify-between">
              <span>Recently Updated Translations</span>
              <Link
                href="/admin/translations/history"
                className="text-[11px] font-semibold text-[#1D5FE0] hover:underline"
              >
                View Full Audit History →
              </Link>
            </h3>

            <div className="space-y-3">
              {stats?.recentActivity?.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-lg bg-[#EAF2FF] text-[#1D5FE0] font-bold text-[10px] flex items-center justify-center uppercase">
                      {item.languageCode}
                    </span>
                    <div>
                      <div className="font-mono text-[11px] font-bold text-[#0B1F6B]">
                        {item.key}
                      </div>
                      <div className="text-[10px] text-[#5B6785]">
                        Page: {item.page} · By {item.updatedBy}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <TranslationStatusBadge status={item.status} size="sm" />
                    <span className="text-[10px] text-gray-400">
                      {new Date(item.updatedAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Management Tools */}
          <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold font-serif text-[#0B1F6B] mb-2">
              Management Tools
            </h3>

            <Link
              href="/admin/translations/keys"
              className="p-4 rounded-2xl border border-gray-200 hover:border-[#1D5FE0] hover:bg-[#F8FAFF] transition-all flex items-start space-x-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center shrink-0">
                <KeyRound className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1D5FE0] transition-colors">
                  Add New Translation Key
                </h4>
                <p className="text-[11px] text-[#5B6785] mt-0.5">
                  Register new UI copy or component strings to be translated across all 7 languages.
                </p>
              </div>
            </Link>

            <Link
              href="/admin/translations/import-export"
              className="p-4 rounded-2xl border border-gray-200 hover:border-[#7C5CE0] hover:bg-[#F8FAFF] transition-all flex items-start space-x-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#7C5CE0] transition-colors">
                  Import & Export (CSV / JSON)
                </h4>
                <p className="text-[11px] text-[#5B6785] mt-0.5">
                  Bulk download for medical translator review or bulk upload completed spreadsheets.
                </p>
              </div>
            </Link>

            <Link
              href="/admin/translations/preview"
              className="p-4 rounded-2xl border border-gray-200 hover:border-[#1FA37A] hover:bg-[#F8FAFF] transition-all flex items-start space-x-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#E3F6EF] text-[#1FA37A] flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0B1F6B] group-hover:text-[#1FA37A] transition-colors">
                  Preview in Live Layout
                </h4>
                <p className="text-[11px] text-[#5B6785] mt-0.5">
                  Inspect draft translations rendered directly in actual responsive website components.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Language Publish Modal */}
      {selectedPublishLang && (
        <PublishModal
          isOpen={Boolean(selectedPublishLang)}
          defaultScope="LANGUAGE"
          defaultLanguage={selectedPublishLang}
          onClose={() => setSelectedPublishLang(null)}
          onPublished={() => {
            setSelectedPublishLang(null);
            fetchStats();
          }}
        />
      )}
    </>
  );
}

