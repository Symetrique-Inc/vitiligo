'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  History,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
  Filter,
  User,
  UploadCloud,
  FileText,
  Loader2,
} from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { TranslationStatusBadge } from '@/components/admin/TranslationStatusBadge';

interface HistoryItem {
  id: string;
  translationId: string;
  previousText: string | null;
  newText: string;
  previousStatus: string | null;
  newStatus: string;
  changedBy: string;
  changeReason: string | null;
  createdAt: string;
  translation: {
    languageCode: string;
    translationKey: {
      key: string;
      page: string;
      section: string;
      sourceText: string;
    };
  };
}

interface PublishLogItem {
  id: string;
  scope: string;
  page: string | null;
  languageCode: string | null;
  publishedBy: string;
  changesCount: number;
  publishedAt: string;
}

export default function TranslationHistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [publishLogs, setPublishLogs] = useState<PublishLogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [restoringId, setRestoringId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const fetchHistory = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/translations/history?limit=100');
      if (res.ok) {
        const data = await res.json();
        setHistory(data.history || []);
        setPublishLogs(data.publishLogs || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const handleRestore = async (historyId: string, keyName: string) => {
    if (!confirm(`Are you sure you want to restore translation key "${keyName}" to this historical state?`)) {
      return;
    }

    setRestoringId(historyId);
    try {
      const res = await fetch('/api/admin/translations/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ historyId }),
      });

      if (res.ok) {
        showToast(`Restored version for ${keyName}!`);
        await fetchHistory();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to restore');
      }
    } catch (e: any) {
      alert(e.message);
    } finally {
      setRestoringId(null);
    }
  };

  return (
    <>
      <AdminHeader
        title="Translation History & Audit Logs"
        subtitle="Full immutable audit trail of every translation revision, approval, publishing and single-click rollbacks."
        onRefresh={fetchHistory}
        isRefreshing={isLoading}
      />

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B1F6B] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-2 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      <main className="p-6 sm:p-8 space-y-8 max-w-[1400px] w-full mx-auto">
        {/* Recent Publish Releases */}
        <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center space-x-2.5 mb-4">
            <UploadCloud className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold font-serif text-[#0B1F6B]">
              Recent Live Website Publications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {publishLogs.slice(0, 4).map((log) => (
              <div
                key={log.id}
                className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-800 uppercase text-[10px] bg-emerald-100 px-2 py-0.5 rounded">
                    Scope: {log.scope}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {new Date(log.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="text-lg font-bold text-emerald-900 font-serif">
                  {log.changesCount.toLocaleString()} translations
                </div>
                <div className="text-[11px] text-emerald-700">
                  Published by <strong>{log.publishedBy}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Revision History */}
        <div className="bg-white rounded-3xl border border-[#DDE5F5] overflow-hidden shadow-xs">
          <div className="p-6 border-b border-[#DDE5F5] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <History className="w-5 h-5 text-[#1D5FE0]" />
              <h3 className="text-base font-bold font-serif text-[#0B1F6B]">
                Translation Revisions & Event Audit
              </h3>
            </div>
            <span className="text-xs text-[#5B6785]">Showing latest {history.length} events</span>
          </div>

          {isLoading ? (
            <div className="py-20 text-center text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#1D5FE0]" />
              <p className="text-xs mt-2">Loading audit logs...</p>
            </div>
          ) : history.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-xs">
              No audit logs recorded yet.
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {history.map((item) => {
                const keyInfo = item.translation?.translationKey;
                const isRestoring = restoringId === item.id;

                return (
                  <div key={item.id} className="p-5 hover:bg-gray-50/70 transition-colors space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="w-6 h-6 rounded-md bg-[#EAF2FF] text-[#1D5FE0] font-bold text-[10px] flex items-center justify-center uppercase">
                          {item.translation?.languageCode}
                        </span>
                        <span className="font-mono font-bold text-[#0B1F6B] text-[11px]">
                          {keyInfo?.key}
                        </span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-500 capitalize">{keyInfo?.page}</span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-400">{item.changeReason || 'Update'}</span>
                      </div>

                      <div className="flex items-center space-x-3 text-xs">
                        <div className="flex items-center space-x-1.5 text-gray-400 text-[11px]">
                          <User className="w-3.5 h-3.5 text-gray-400" />
                          <span>{item.changedBy}</span>
                          <span>·</span>
                          <span>{new Date(item.createdAt).toLocaleString()}</span>
                        </div>

                        <button
                          onClick={() => handleRestore(item.id, keyInfo?.key || item.translationId)}
                          disabled={isRestoring}
                          className="inline-flex items-center space-x-1 text-[11px] font-semibold text-[#1D5FE0] hover:text-[#0B1F6B] px-2.5 py-1 rounded-lg border border-[#CCD8EF] hover:bg-[#EAF2FF] transition-all disabled:opacity-50"
                          title="Restore translation to this state"
                        >
                          {isRestoring ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <RotateCcw className="w-3 h-3" />
                          )}
                          <span>Restore Version</span>
                        </button>
                      </div>
                    </div>

                    {/* Diff view */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {item.previousText && (
                        <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100 text-rose-900">
                          <div className="text-[10px] font-bold text-rose-600 uppercase mb-1 flex items-center justify-between">
                            <span>Previous Text</span>
                            {item.previousStatus && (
                              <TranslationStatusBadge status={item.previousStatus} size="sm" />
                            )}
                          </div>
                          <p className="leading-relaxed line-through opacity-80 whitespace-pre-wrap">
                            {item.previousText}
                          </p>
                        </div>
                      )}

                      <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-emerald-900">
                        <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1 flex items-center justify-between">
                          <span>Updated Text</span>
                          <TranslationStatusBadge status={item.newStatus} size="sm" />
                        </div>
                        <p className="leading-relaxed whitespace-pre-wrap font-medium">
                          {item.newText}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

