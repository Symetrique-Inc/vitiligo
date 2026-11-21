'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  FileText,
  FileCode,
  ArrowRight,
  Loader2,
  Check,
} from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function ImportExportPage() {
  // Export State
  const [exportFormat, setExportFormat] = useState<'csv' | 'json'>('csv');
  const [exportLang, setExportLang] = useState('all');
  const [exportPage, setExportPage] = useState('all');

  // Import State
  const [importFormat, setImportFormat] = useState<'csv' | 'json'>('json');
  const [importContent, setImportContent] = useState('');
  const [targetStatus, setTargetStatus] = useState<'DRAFT' | 'APPROVED'>('DRAFT');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [previewSummary, setPreviewSummary] = useState<any | null>(null);
  const [importResult, setImportResult] = useState<any | null>(null);

  const handleExport = () => {
    const params = new URLSearchParams({
      format: exportFormat,
      language: exportLang,
      page: exportPage,
    });
    window.location.href = `/api/admin/translations/export?${params.toString()}`;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isCsv = file.name.endsWith('.csv');
    setImportFormat(isCsv ? 'csv' : 'json');

    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target?.result as string;
      setImportContent(text || '');
      setPreviewSummary(null);
      setImportResult(null);
    };
    reader.readAsText(file);
  };

  const handleValidateImport = async () => {
    if (!importContent.trim()) {
      alert('Please select a file or paste content to import');
      return;
    }

    setIsVerifying(true);
    setPreviewSummary(null);
    setImportResult(null);

    try {
      const res = await fetch('/api/admin/translations/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          format: importFormat,
          content: importContent,
          previewOnly: true,
          targetStatus,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setPreviewSummary(data.summary);
      } else {
        alert(data.error || 'Validation failed');
      }
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleApplyImport = async () => {
    if (!confirm('Are you sure you want to apply these imported translations?')) return;

    setIsApplying(true);
    try {
      const res = await fetch('/api/admin/translations/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          format: importFormat,
          content: importContent,
          previewOnly: false,
          targetStatus,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setImportResult(data);
        setPreviewSummary(null);
      } else {
        alert(data.error || 'Failed to apply import');
      }
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsApplying(false);
    }
  };

  const sampleJson = `[
  {
    "key": "VTH-00008",
    "translations": {
      "hi": "जानकारी। समझ। समर्थन।",
      "mr": "माहिती. समज. आधार.",
      "bn": "তথ্য। বোঝাপড়া। সহায়তা।"
    }
  }
]`;

  return (
    <>
      <AdminHeader
        title="Translation Import & Export"
        subtitle="Bulk download translations for external native review or import validated CSV/JSON files."
      />

      <main className="p-6 sm:p-8 space-y-8 max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section 1: Export */}
          <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF2FF] text-[#1D5FE0] flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-serif text-[#0B1F6B]">Export Translations</h3>
                <p className="text-xs text-[#5B6785]">Download translations in structured CSV or JSON</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  File Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex items-center p-3 rounded-xl border cursor-pointer text-xs font-semibold ${
                      exportFormat === 'csv'
                        ? 'border-[#1D5FE0] bg-[#EAF2FF] text-[#0B1F6B]'
                        : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="exportFormat"
                      checked={exportFormat === 'csv'}
                      onChange={() => setExportFormat('csv')}
                      className="mr-2.5 text-[#1D5FE0]"
                    />
                    <span>CSV (Spreadsheet)</span>
                  </label>
                  <label
                    className={`flex items-center p-3 rounded-xl border cursor-pointer text-xs font-semibold ${
                      exportFormat === 'json'
                        ? 'border-[#1D5FE0] bg-[#EAF2FF] text-[#0B1F6B]'
                        : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="exportFormat"
                      checked={exportFormat === 'json'}
                      onChange={() => setExportFormat('json')}
                      className="mr-2.5 text-[#1D5FE0]"
                    />
                    <span>JSON (Developer)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Target Language
                </label>
                <select
                  value={exportLang}
                  onChange={(e) => setExportLang(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 bg-gray-50/50"
                >
                  <option value="all">All 7 Languages (Side-by-side columns)</option>
                  <option value="hi">Hindi (हिन्दी)</option>
                  <option value="mr">Marathi (मराठी)</option>
                  <option value="bn">Bengali (বাংলা)</option>
                  <option value="ta">Tamil (தமிழ்)</option>
                  <option value="te">Telugu (తెలుగు)</option>
                  <option value="kn">Kannada (ಕನ್ನಡ)</option>
                  <option value="en">English (Reference Only)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Page Scope
                </label>
                <select
                  value={exportPage}
                  onChange={(e) => setExportPage(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 bg-gray-50/50"
                >
                  <option value="all">Entire Website (All Pages & Keys)</option>
                  <option value="home">Home Page</option>
                  <option value="about">About</option>
                  <option value="understand-vitiligo">Understand Vitiligo</option>
                  <option value="living-with-vitiligo">Living with Vitiligo</option>
                  <option value="treatment-and-care">Treatment & Care</option>
                  <option value="patient-journeys">Patient Journeys</option>
                  <option value="resources">Resources & Support</option>
                  <option value="navigation">Navigation</option>
                  <option value="footer">Footer</option>
                </select>
              </div>

              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-[11px] text-sky-800 leading-relaxed">
                CSV files can be opened in Microsoft Excel or Google Sheets. Each language has its own column alongside
                the English source string.
              </div>

              <button
                onClick={handleExport}
                className="w-full py-3 px-4 bg-[#0B1F6B] hover:bg-[#07154B] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export Translations</span>
              </button>
            </div>
          </div>

          {/* Section 2: Import */}
          <div className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#EFEAFF] text-[#7C5CE0] flex items-center justify-center">
                <UploadCloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-serif text-[#0B1F6B]">Import Translations</h3>
                <p className="text-xs text-[#5B6785]">Upload CSV or JSON with validation before applying</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Select File (CSV or JSON)
                </label>
                <input
                  type="file"
                  accept=".csv,.json"
                  onChange={handleFileUpload}
                  className="w-full text-xs p-2 rounded-xl border border-gray-200 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#EAF2FF] file:text-[#1D5FE0] hover:file:bg-[#D6E6FF]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Or Paste Content
                  </label>
                  <button
                    onClick={() => {
                      setImportContent(sampleJson);
                      setImportFormat('json');
                    }}
                    className="text-[10px] text-[#1D5FE0] hover:underline"
                  >
                    Paste Sample JSON
                  </button>
                </div>
                <textarea
                  rows={5}
                  value={importContent}
                  onChange={(e) => setImportContent(e.target.value)}
                  placeholder="Paste CSV rows or JSON array here..."
                  className="w-full p-2.5 text-xs font-mono rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Import As Status
                </label>
                <select
                  value={targetStatus}
                  onChange={(e) => setTargetStatus(e.target.value as any)}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 bg-gray-50/50"
                >
                  <option value="DRAFT">Draft (Safe: requires review before publishing)</option>
                  <option value="APPROVED">Approved (Ready for 1-click publishing)</option>
                </select>
              </div>

              <button
                onClick={handleValidateImport}
                disabled={isVerifying || !importContent.trim()}
                className="w-full py-2.5 px-4 bg-[#7C5CE0] hover:bg-[#6848CD] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Validating Format & Keys...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Validate & Preview Import</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Validation Preview Card */}
        {previewSummary && (
          <div className="bg-white rounded-3xl border border-sky-200 p-6 shadow-sm space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="text-sm font-bold text-[#0B1F6B]">Import Validation Results</h4>
              </div>
              <button
                onClick={handleApplyImport}
                disabled={isApplying}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center space-x-2"
              >
                {isApplying ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                <span>Apply {previewSummary.totalTranslationUpdates} Translations</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="text-xl font-bold text-[#0B1F6B]">{previewSummary.totalFound}</div>
                <div className="text-[10px] text-gray-500 uppercase">Items In File</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="text-xl font-bold text-emerald-700">{previewSummary.validKeys}</div>
                <div className="text-[10px] text-emerald-600 uppercase">Valid Matched Keys</div>
              </div>
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-100">
                <div className="text-xl font-bold text-sky-700">
                  {previewSummary.totalTranslationUpdates}
                </div>
                <div className="text-[10px] text-sky-600 uppercase">Language Values To Update</div>
              </div>
            </div>

            {previewSummary.missingKeys?.length > 0 && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs">
                <strong>Notice:</strong> {previewSummary.missingKeys.length} keys in file do not exist in the
                database and will be skipped.
              </div>
            )}
          </div>
        )}

        {/* Applied Success Card */}
        {importResult && (
          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-fadeIn">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="text-base font-bold">Import Applied Successfully!</h4>
            </div>
            <p className="text-xs text-emerald-700">
              Updated {importResult.appliedCount} translations as <strong>{targetStatus}</strong>. They are now
              ready for side-by-side comparison and publishing in the editor.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

