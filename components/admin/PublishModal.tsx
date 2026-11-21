'use client';

import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, X, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPublished?: () => void;
  defaultScope?: 'ALL' | 'PAGE' | 'LANGUAGE';
  defaultPage?: string;
  defaultLanguage?: string;
}

export const PublishModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onPublished,
  defaultScope = 'ALL',
  defaultPage,
  defaultLanguage,
}) => {
  const [scope, setScope] = useState<'ALL' | 'PAGE' | 'LANGUAGE'>(defaultScope);
  const [selectedPage, setSelectedPage] = useState<string>(defaultPage || 'home');
  const [selectedLanguage, setSelectedLanguage] = useState<string>(defaultLanguage || 'hi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; count?: number; message?: string } | null>(null);

  if (!isOpen) return null;

  const handlePublish = async () => {
    setIsSubmitting(true);
    setResult(null);

    try {
      const res = await fetch('/api/admin/translations/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scope,
          page: scope === 'PAGE' ? selectedPage : undefined,
          languageCode: scope === 'LANGUAGE' ? selectedLanguage : undefined,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setResult({
          success: true,
          count: data.publishedCount,
          message: `Successfully published ${data.publishedCount} translations live to website!`,
        });
        if (onPublished) {
          setTimeout(() => {
            onPublished();
          }, 1200);
        }
      } else {
        setResult({ success: false, message: data.error || 'Failed to publish' });
      }
    } catch (e: any) {
      setResult({ success: false, message: e.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pages = [
    { id: 'home', name: 'Home Page' },
    { id: 'about', name: 'About' },
    { id: 'understand-vitiligo', name: 'Understand Vitiligo' },
    { id: 'living-with-vitiligo', name: 'My Life & Daily Living' },
    { id: 'treatment-and-care', name: 'Treatment & Care' },
    { id: 'patient-journeys', name: 'Patient Journeys' },
    { id: 'resources', name: 'Resources & Support' },
    { id: 'navigation', name: 'Navigation Menus' },
    { id: 'footer', name: 'Footer & Disclaimer' },
    { id: 'common', name: 'Common & UI' },
  ];

  const languages = [
    { code: 'hi', name: 'Hindi (हिन्दी)' },
    { code: 'mr', name: 'Marathi (मराठी)' },
    { code: 'bn', name: 'Bengali (বাংলা)' },
    { code: 'ta', name: 'Tamil (தமிழ்)' },
    { code: 'te', name: 'Telugu (తెలుగు)' },
    { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' },
    { code: 'en', name: 'English' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-lg w-full overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-[#F8FAFF]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <UploadCloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0B1F6B]">Publish Translations Live</h3>
              <p className="text-[11px] text-[#5B6785]">Deploy reviewed translations to the active website</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {result?.success ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-900">Publish Successful!</h4>
                <p className="text-xs text-emerald-700 mt-1">{result.message}</p>
                <p className="text-[11px] text-emerald-600 mt-2">
                  The live website translation cache has been invalidated and updated.
                </p>
              </div>
            </div>
          ) : (
            <>
              {result && !result.success && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{result.message}</span>
                </div>
              )}

              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Select Publishing Scope
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  <label
                    className={`flex items-start p-3 rounded-xl border cursor-pointer transition-all ${
                      scope === 'ALL'
                        ? 'border-[#1D5FE0] bg-[#EAF2FF]/50 ring-1 ring-[#1D5FE0]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="scope"
                      value="ALL"
                      checked={scope === 'ALL'}
                      onChange={() => setScope('ALL')}
                      className="mt-0.5 text-[#1D5FE0]"
                    />
                    <div className="ml-3">
                      <div className="text-xs font-bold text-[#0B1F6B]">Publish Entire Website</div>
                      <div className="text-[11px] text-[#5B6785]">
                        Publishes all approved and draft translations across all pages and 7 languages.
                      </div>
                    </div>
                  </label>

                  <label
                    className={`flex items-start p-3 rounded-xl border cursor-pointer transition-all ${
                      scope === 'PAGE'
                        ? 'border-[#1D5FE0] bg-[#EAF2FF]/50 ring-1 ring-[#1D5FE0]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="scope"
                      value="PAGE"
                      checked={scope === 'PAGE'}
                      onChange={() => setScope('PAGE')}
                      className="mt-0.5 text-[#1D5FE0]"
                    />
                    <div className="ml-3 flex-1">
                      <div className="text-xs font-bold text-[#0B1F6B]">Publish Specific Page</div>
                      <div className="text-[11px] text-[#5B6785]">
                        Only update translations for one selected page.
                      </div>
                      {scope === 'PAGE' && (
                        <select
                          value={selectedPage}
                          onChange={(e) => setSelectedPage(e.target.value)}
                          className="mt-2.5 w-full text-xs p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1D5FE0]"
                        >
                          {pages.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </label>

                  <label
                    className={`flex items-start p-3 rounded-xl border cursor-pointer transition-all ${
                      scope === 'LANGUAGE'
                        ? 'border-[#1D5FE0] bg-[#EAF2FF]/50 ring-1 ring-[#1D5FE0]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="scope"
                      value="LANGUAGE"
                      checked={scope === 'LANGUAGE'}
                      onChange={() => setScope('LANGUAGE')}
                      className="mt-0.5 text-[#1D5FE0]"
                    />
                    <div className="ml-3 flex-1">
                      <div className="text-xs font-bold text-[#0B1F6B]">Publish Specific Language</div>
                      <div className="text-[11px] text-[#5B6785]">
                        Only update translations for one selected language across all pages.
                      </div>
                      {scope === 'LANGUAGE' && (
                        <select
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.target.value)}
                          className="mt-2.5 w-full text-xs p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1D5FE0]"
                        >
                          {languages.map((l) => (
                            <option key={l.code} value={l.code}>
                              {l.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] leading-relaxed">
                <strong>Important:</strong> Live website visitors will immediately receive the latest published
                translations upon publishing. Caches will be automatically invalidated.
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-gray-100 bg-gray-50 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200/60 rounded-xl transition-colors"
          >
            {result?.success ? 'Close' : 'Cancel'}
          </button>
          {!result?.success && (
            <button
              onClick={handlePublish}
              disabled={isSubmitting}
              className="inline-flex items-center space-x-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Publishing...</span>
                </>
              ) : (
                <>
                  <UploadCloud className="w-4 h-4" />
                  <span>Confirm & Publish</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

