'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  Save,
  CheckCircle2,
  Copy,
  RotateCcw,
  UploadCloud,
  ChevronLeft,
  ChevronRight,
  Eye,
  Check,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { TranslationStatusBadge } from '@/components/admin/TranslationStatusBadge';
import { PublishModal } from '@/components/admin/PublishModal';

interface TranslationItem {
  id: string;
  translationKeyId: string;
  languageCode: string;
  translatedText: string;
  status: string;
  isPublished: boolean;
  publishedText: string | null;
  version: number;
  updatedBy: string;
  updatedAt: string;
}

interface TranslationKeyItem {
  id: string;
  key: string;
  page: string;
  section: string;
  component: string | null;
  description: string | null;
  sourceText: string;
  sourceVersion: number;
  translations: TranslationItem[];
}

const LANGUAGES = [
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', fontClass: 'font-sans' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', fontClass: 'font-sans' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', fontClass: 'font-sans' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', fontClass: 'font-sans' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', fontClass: 'font-sans' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', fontClass: 'font-sans' },
];

export default function SideBySideEditorPage() {
  const [keys, setKeys] = useState<TranslationKeyItem[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [selectedPage, setSelectedPage] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [focusLanguage, setFocusLanguage] = useState<string>('all'); // 'all' or specific lang code

  // Local Edits State: { [translationId]: { text: string; status: string; isDirty: boolean } }
  const [edits, setEdits] = useState<Record<string, { text: string; status: string; isDirty: boolean }>>({});
  const [savingIds, setSavingIds] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const fetchKeys = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        pageIndex: pageIndex.toString(),
        pageSize: pageSize.toString(),
      });
      if (selectedPage !== 'all') params.set('page', selectedPage);
      if (selectedStatus !== 'all') params.set('status', selectedStatus);
      if (search.trim()) params.set('search', search.trim());
      if (focusLanguage !== 'all') params.set('language', focusLanguage);

      const res = await fetch(`/api/admin/translations/editor?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setKeys(data.items || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);

        // Prepopulate edits state from fetched keys
        const initialEdits: Record<string, { text: string; status: string; isDirty: boolean }> = {};
        for (const k of data.items || []) {
          for (const t of k.translations) {
            initialEdits[t.id] = {
              text: t.translatedText,
              status: t.status,
              isDirty: false,
            };
          }
        }
        setEdits(initialEdits);
      }
    } catch (e) {
      console.error('Failed to load translations for editor:', e);
    } finally {
      setIsLoading(false);
    }
  }, [pageIndex, pageSize, selectedPage, selectedStatus, search, focusLanguage]);

  useEffect(() => {
    fetchKeys();
  }, [fetchKeys]);

  // Handle local text edit
  const handleTextChange = (transId: string, newText: string, originalText: string) => {
    setEdits((prev) => ({
      ...prev,
      [transId]: {
        text: newText,
        status: prev[transId]?.status || 'DRAFT',
        isDirty: newText !== originalText,
      },
    }));
  };

  // Handle status toggle
  const handleStatusChange = (transId: string, newStatus: string) => {
    setEdits((prev) => ({
      ...prev,
      [transId]: {
        text: prev[transId]?.text || '',
        status: newStatus,
        isDirty: true,
      },
    }));
  };

  // Save single translation
  const handleSaveIndividual = async (transId: string) => {
    const edit = edits[transId];
    if (!edit) return;

    setSavingIds((prev) => ({ ...prev, [transId]: true }));
    try {
      const res = await fetch('/api/admin/translations/editor', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          translationId: transId,
          translatedText: edit.text,
          status: edit.status,
        }),
      });

      if (res.ok) {
        setEdits((prev) => ({
          ...prev,
          [transId]: { ...prev[transId], isDirty: false },
        }));
        showToast('Translation saved as draft successfully!');
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to save');
      }
    } catch (e: any) {
      alert(e.message);
    } finally {
      setSavingIds((prev) => ({ ...prev, [transId]: false }));
    }
  };

  // Save all languages for a given translation key
  const handleSaveKeyRow = async (keyItem: TranslationKeyItem) => {
    const updates = keyItem.translations.map((t) => ({
      languageCode: t.languageCode,
      translatedText: edits[t.id]?.text ?? t.translatedText,
      status: edits[t.id]?.status ?? t.status,
    }));

    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/translations/editor', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyId: keyItem.id,
          translations: updates,
        }),
      });

      if (res.ok) {
        showToast(`Saved all 7 languages for key ${keyItem.key}!`);
        await fetchKeys();
      }
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Revert single translation to last published text
  const handleRevert = async (transId: string) => {
    if (!confirm('Revert this translation back to the currently published live version?')) return;

    try {
      const res = await fetch('/api/admin/translations/revert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ translationId: transId }),
      });

      if (res.ok) {
        showToast('Reverted to published version!');
        await fetchKeys();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to revert');
      }
    } catch (e: any) {
      alert(e.message);
    }
  };

  // Copy English source text into a translation textarea
  const handleCopySource = (sourceText: string, transId: string) => {
    handleTextChange(transId, sourceText, '');
    setCopiedId(transId);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // Count dirty unsaved items
  const dirtyCount = useMemo(() => {
    return Object.values(edits).filter((e) => e.isDirty).length;
  }, [edits]);

  const displayedLanguages = useMemo(() => {
    if (focusLanguage === 'all') return LANGUAGES;
    return LANGUAGES.filter((l) => l.code === focusLanguage);
  }, [focusLanguage]);

  return (
    <>
      <AdminHeader
        title="Side-by-Side Translation Editor"
        subtitle="Compare English source text directly against all six Indian languages side by side."
        onRefresh={fetchKeys}
        isRefreshing={isLoading}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B1F6B] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-2 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="p-4 sm:p-6 space-y-4 max-w-[1700px] w-full mx-auto">
        {/* Sticky Filters & Action Bar */}
        <div className="bg-white rounded-2xl border border-[#DDE5F5] p-4 shadow-xs space-y-3 sticky top-20 z-30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPageIndex(0);
                }}
                placeholder="Search by English text, translation, or key..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0] focus:ring-1 focus:ring-[#1D5FE0]"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* Page Filter */}
              <div className="flex items-center space-x-1.5">
                <span className="text-[11px] font-semibold text-gray-500 uppercase">Page:</span>
                <select
                  value={selectedPage}
                  onChange={(e) => {
                    setSelectedPage(e.target.value);
                    setPageIndex(0);
                  }}
                  className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50 text-[#0B1F6B] font-medium focus:outline-none focus:border-[#1D5FE0]"
                >
                  <option value="all">All Pages</option>
                  <option value="home">Home Page</option>
                  <option value="about">About</option>
                  <option value="understand-vitiligo">Understand Vitiligo</option>
                  <option value="living-with-vitiligo">Living with Vitiligo</option>
                  <option value="treatment-and-care">Treatment & Care</option>
                  <option value="patient-journeys">Patient Journeys</option>
                  <option value="resources">Resources & Support</option>
                  <option value="navigation">Navigation Header</option>
                  <option value="footer">Footer & Disclaimer</option>
                  <option value="common">Common & UI</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-1.5">
                <span className="text-[11px] font-semibold text-gray-500 uppercase">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                    setPageIndex(0);
                  }}
                  className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50 text-[#0B1F6B] font-medium focus:outline-none focus:border-[#1D5FE0]"
                >
                  <option value="all">All Statuses</option>
                  <option value="IN_REVIEW">In Review (AI Migrated)</option>
                  <option value="DRAFT">Draft</option>
                  <option value="APPROVED">Approved</option>
                  <option value="PUBLISHED">Published Live</option>
                  <option value="MISSING">Missing</option>
                </select>
              </div>

              {/* Language Column Filter */}
              <div className="flex items-center space-x-1.5">
                <span className="text-[11px] font-semibold text-gray-500 uppercase">Focus:</span>
                <select
                  value={focusLanguage}
                  onChange={(e) => setFocusLanguage(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50 text-[#0B1F6B] font-medium focus:outline-none focus:border-[#1D5FE0]"
                >
                  <option value="all">All 7 Languages</option>
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.name} ({l.nativeName})
                    </option>
                  ))}
                </select>
              </div>

              {/* Publish Action Button */}
              <button
                onClick={() => setIsPublishModalOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-2xs transition-colors"
              >
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Publish</span>
              </button>
            </div>
          </div>

          {/* Quick Info & Dirty State Counter */}
          <div className="flex items-center justify-between text-[11px] text-[#5B6785] pt-1 border-t border-gray-100">
            <div>
              Showing <span className="font-bold text-[#0B1F6B]">{keys.length}</span> of{' '}
              <span className="font-bold text-[#0B1F6B]">{total.toLocaleString()}</span> keys matching filters
            </div>
            {dirtyCount > 0 && (
              <div className="flex items-center space-x-1.5 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>{dirtyCount} unsaved modified translations</span>
              </div>
            )}
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="bg-white rounded-2xl border border-[#DDE5F5] shadow-xs overflow-hidden">
          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-3 text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin text-[#1D5FE0]" />
              <p className="text-xs font-medium">Loading translations...</p>
            </div>
          ) : keys.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-[#0B1F6B]">No matching translation keys found</h3>
              <p className="text-xs text-[#5B6785]">Try adjusting your search keywords or filter criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[1200px]">
                {/* Table Header */}
                <div className="grid grid-cols-[220px_minmax(280px,1.2fr)_repeat(auto-fit,minmax(220px,1fr))] bg-[#F8FAFF] border-b border-[#DDE5F5] text-[11px] font-bold text-[#0B1F6B] uppercase tracking-wider sticky top-0 z-20">
                  <div className="p-3.5 border-r border-[#DDE5F5]">Location & Key</div>
                  <div className="p-3.5 border-r border-[#DDE5F5] bg-sky-50/60 flex items-center justify-between">
                    <span>English (Source Reference)</span>
                    <span className="text-[9px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded uppercase font-bold">
                      Primary
                    </span>
                  </div>

                  {displayedLanguages.map((lang) => (
                    <div key={lang.code} className="p-3.5 border-r border-[#DDE5F5] last:border-r-0">
                      <div className="flex items-center justify-between">
                        <span>{lang.name}</span>
                        <span className="text-[10px] text-gray-500 font-normal">({lang.nativeName})</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {keys.map((keyItem) => {
                    const transMap = new Map(keyItem.translations.map((t) => [t.languageCode, t]));

                    return (
                      <div
                        key={keyItem.id}
                        className="grid grid-cols-[220px_minmax(280px,1.2fr)_repeat(auto-fit,minmax(220px,1fr))] hover:bg-gray-50/40 transition-colors group"
                      >
                        {/* Column 1: Key Metadata */}
                        <div className="p-3.5 border-r border-gray-100 flex flex-col justify-between space-y-2 bg-[#FCFDFF]">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[11px] font-bold text-[#0B1F6B] bg-gray-100 px-1.5 py-0.5 rounded">
                                {keyItem.key}
                              </span>
                              <span className="text-[10px] text-gray-400 capitalize">{keyItem.page}</span>
                            </div>
                            <div className="text-[10px] text-gray-500 mt-1 capitalize font-medium">
                              Section: {keyItem.section}
                            </div>
                            {keyItem.component && (
                              <div className="text-[9px] text-[#1D5FE0] mt-0.5 font-medium">
                                &lt;{keyItem.component} /&gt;
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => handleSaveKeyRow(keyItem)}
                            className="w-full text-center py-1.5 px-2 bg-[#EAF2FF] hover:bg-[#1D5FE0] hover:text-white text-[#1D5FE0] text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center space-x-1"
                            title="Save all changes in this row"
                          >
                            <Save className="w-3 h-3" />
                            <span>Save Row</span>
                          </button>
                        </div>

                        {/* Column 2: English Source */}
                        <div className="p-3.5 border-r border-gray-100 bg-sky-50/20 flex flex-col justify-between space-y-2">
                          <div className="text-xs text-[#0B1F6B] font-medium leading-relaxed whitespace-pre-wrap select-text">
                            {keyItem.sourceText}
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-gray-100">
                            <span>{keyItem.sourceText.length} characters</span>
                            <button
                              onClick={() => navigator.clipboard.writeText(keyItem.sourceText)}
                              className="text-gray-400 hover:text-[#1D5FE0] inline-flex items-center space-x-1 font-medium transition-colors"
                              title="Copy English text to clipboard"
                            >
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </button>
                          </div>
                        </div>

                        {/* Columns 3+: Editable Indian Languages */}
                        {displayedLanguages.map((lang) => {
                          const trans = transMap.get(lang.code);
                          if (!trans) return <div key={lang.code} className="p-3 border-r border-gray-100" />;

                          const currentEdit = edits[trans.id] || {
                            text: trans.translatedText,
                            status: trans.status,
                            isDirty: false,
                          };

                          const isDirty = currentEdit.isDirty;
                          const isSaving = savingIds[trans.id];
                          const hasPublishedDiff = trans.publishedText && trans.publishedText !== currentEdit.text;

                          return (
                            <div
                              key={lang.code}
                              className={`p-3.5 border-r border-gray-100 last:border-r-0 flex flex-col justify-between space-y-2.5 transition-colors ${
                                isDirty ? 'bg-amber-50/40' : ''
                              }`}
                            >
                              {/* Top status & quick actions */}
                              <div className="flex items-center justify-between gap-1">
                                <select
                                  value={currentEdit.status}
                                  onChange={(e) => handleStatusChange(trans.id, e.target.value)}
                                  className="text-[10px] font-semibold py-0.5 px-1.5 rounded border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-[#1D5FE0]"
                                >
                                  <option value="DRAFT">Draft</option>
                                  <option value="IN_REVIEW">In Review</option>
                                  <option value="APPROVED">Approved</option>
                                  <option value="PUBLISHED">Published</option>
                                </select>

                                <div className="flex items-center space-x-1">
                                  <button
                                    onClick={() => handleCopySource(keyItem.sourceText, trans.id)}
                                    className="p-1 text-gray-400 hover:text-[#1D5FE0] hover:bg-gray-100 rounded transition-colors"
                                    title="Copy English into this field"
                                  >
                                    <Copy className="w-3 h-3" />
                                  </button>

                                  {hasPublishedDiff && (
                                    <button
                                      onClick={() => handleRevert(trans.id)}
                                      className="p-1 text-amber-600 hover:text-amber-800 hover:bg-amber-100 rounded transition-colors"
                                      title="Revert to published version"
                                    >
                                      <RotateCcw className="w-3 h-3" />
                                    </button>
                                  )}
                                </div>
                              </div>

                              {/* Editable Textarea */}
                              <textarea
                                value={currentEdit.text}
                                onChange={(e) => handleTextChange(trans.id, e.target.value, trans.translatedText)}
                                rows={Math.max(2, Math.min(6, Math.ceil(currentEdit.text.length / 35)))}
                                className={`w-full p-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#1D5FE0] leading-relaxed resize-y ${
                                  lang.fontClass
                                } ${
                                  isDirty
                                    ? 'border-amber-400 bg-amber-50/30 text-amber-950 font-medium'
                                    : 'border-gray-200 bg-white text-[#1E2A4A]'
                                }`}
                                placeholder={`Enter ${lang.name} translation...`}
                              />

                              {/* Bottom Footer: Character count & Save Button */}
                              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                                <span>{currentEdit.text.length} chars</span>
                                {isDirty && (
                                  <button
                                    onClick={() => handleSaveIndividual(trans.id)}
                                    disabled={isSaving}
                                    className="px-2 py-0.5 bg-[#1D5FE0] hover:bg-[#0B1F6B] text-white font-bold rounded text-[10px] shadow-2xs transition-colors flex items-center space-x-1"
                                  >
                                    {isSaving ? (
                                      <Loader2 className="w-2.5 h-2.5 animate-spin" />
                                    ) : (
                                      <Save className="w-2.5 h-2.5" />
                                    )}
                                    <span>Save</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="p-4 bg-[#F8FAFF] border-t border-[#DDE5F5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="text-gray-500">
              Page <span className="font-bold text-[#0B1F6B]">{pageIndex + 1}</span> of{' '}
              <span className="font-bold text-[#0B1F6B]">{totalPages}</span> · ({total.toLocaleString()} total keys)
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5 text-gray-500">
                <span>Per page:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(parseInt(e.target.value, 10));
                    setPageIndex(0);
                  }}
                  className="px-2 py-1 rounded border border-gray-200 bg-white text-xs font-semibold focus:outline-none"
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                  disabled={pageIndex === 0}
                  className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPageIndex((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={pageIndex >= totalPages - 1}
                  className="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Publish Modal */}
      {isPublishModalOpen && (
        <PublishModal
          isOpen={isPublishModalOpen}
          defaultScope={selectedPage !== 'all' ? 'PAGE' : 'ALL'}
          defaultPage={selectedPage !== 'all' ? selectedPage : undefined}
          defaultLanguage={focusLanguage !== 'all' ? focusLanguage : undefined}
          onClose={() => setIsPublishModalOpen(false)}
          onPublished={() => {
            setIsPublishModalOpen(false);
            fetchKeys();
          }}
        />
      )}
    </>
  );
}

