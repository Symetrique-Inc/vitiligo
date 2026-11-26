'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  KeyRound,
  Plus,
  Search,
  Edit2,
  Archive,
  Save,
  X,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Loader2,
} from 'lucide-react';
import { AdminHeader } from '@/components/admin/AdminHeader';

interface KeyItem {
  id: string;
  key: string;
  page: string;
  section: string;
  component: string | null;
  description: string | null;
  sourceText: string;
  sourceVersion: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function TranslationKeyManagementPage() {
  const [keys, setKeys] = useState<KeyItem[]>([]);
  const [search, setSearch] = useState('');
  const [selectedPage, setSelectedPage] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<KeyItem | null>(null);

  // Form State
  const [formKey, setFormKey] = useState('');
  const [formPage, setFormPage] = useState('home');
  const [formSection, setFormSection] = useState('hero');
  const [formComponent, setFormComponent] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formSourceText, setFormSourceText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const fetchKeys = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({ pageSize: '100' });
      if (selectedPage !== 'all') params.set('page', selectedPage);
      if (search.trim()) params.set('search', search.trim());

      const res = await fetch(`/api/admin/translations/editor?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setKeys(data.items || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [selectedPage, search]);

  useEffect(() => {
    fetchKeys();
  }, [fetchKeys]);

  const handleOpenAdd = () => {
    setEditingKey(null);
    setFormKey(`custom.${selectedPage === 'all' ? 'home' : selectedPage}.${Date.now().toString().slice(-4)}`);
    setFormPage(selectedPage === 'all' ? 'home' : selectedPage);
    setFormSection('general');
    setFormComponent('');
    setFormDescription('');
    setFormSourceText('');
    setIsAddModalOpen(true);
  };

  const handleOpenEdit = (key: KeyItem) => {
    setEditingKey(key);
    setFormKey(key.key);
    setFormPage(key.page);
    setFormSection(key.section);
    setFormComponent(key.component || '');
    setFormDescription(key.description || '');
    setFormSourceText(key.sourceText);
    setIsAddModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingKey) {
        // Edit Key Source Text
        const res = await fetch('/api/admin/translations/keys', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingKey.id,
            sourceText: formSourceText,
            page: formPage,
            section: formSection,
            component: formComponent,
            description: formDescription,
          }),
        });

        if (res.ok) {
          showToast('Translation key updated successfully!');
          setIsAddModalOpen(false);
          fetchKeys();
        } else {
          const data = await res.json();
          alert(data.error || 'Failed to update key');
        }
      } else {
        // Create New Key
        const res = await fetch('/api/admin/translations/keys', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            key: formKey,
            page: formPage,
            section: formSection,
            component: formComponent,
            description: formDescription,
            sourceText: formSourceText,
          }),
        });

        if (res.ok) {
          showToast(`Key ${formKey} created successfully!`);
          setIsAddModalOpen(false);
          fetchKeys();
        } else {
          const data = await res.json();
          alert(data.error || 'Failed to create key');
        }
      }
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleArchive = async (id: string, keyName: string) => {
    if (!confirm(`Are you sure you want to archive translation key "${keyName}"?`)) return;

    try {
      const res = await fetch(`/api/admin/translations/keys?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        showToast(`Key ${keyName} archived.`);
        fetchKeys();
      }
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <>
      <AdminHeader
        title="Translation Key Management"
        subtitle="Register new translatable content, manage keys, and detect English source updates."
        onRefresh={fetchKeys}
        isRefreshing={isLoading}
      />

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B1F6B] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-2 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      <main className="p-6 sm:p-8 space-y-6 max-w-[1400px] w-full mx-auto">
        {/* Actions & Filters */}
        <div className="bg-white rounded-2xl border border-[#DDE5F5] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-64 sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search keys, source text..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0]"
              />
            </div>

            <select
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="text-xs px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none"
            >
              <option value="all">All Pages</option>
              <option value="home">Home</option>
              <option value="about">About</option>
              <option value="understand-vitiligo">Understand Vitiligo</option>
              <option value="living-with-vitiligo">Living with Vitiligo</option>
              <option value="treatment-and-care">Treatment & Care</option>
              <option value="patient-journeys">Patient Journeys</option>
              <option value="resources">Resources</option>
              <option value="navigation">Navigation</option>
              <option value="footer">Footer</option>
              <option value="common">Common</option>
              <option value="general">General</option>
            </select>
          </div>

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0B1F6B] hover:bg-[#07154B] text-white text-xs font-bold rounded-xl shadow-xs transition-all hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Translation Key</span>
          </button>
        </div>

        {/* Keys Table */}
        <div className="bg-white rounded-3xl border border-[#DDE5F5] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F8FAFF] border-b border-[#DDE5F5] text-[#5B6785] uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-bold">Key Identifier</th>
                  <th className="py-3.5 px-4 font-bold">Page & Section</th>
                  <th className="py-3.5 px-4 font-bold">Component</th>
                  <th className="py-3.5 px-4 font-bold">English Source Text</th>
                  <th className="py-3.5 px-4 font-bold">Version</th>
                  <th className="py-3.5 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-400">
                      <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#1D5FE0]" />
                    </td>
                  </tr>
                ) : keys.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-400">
                      No translation keys found.
                    </td>
                  </tr>
                ) : (
                  keys.map((k) => (
                    <tr key={k.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#0B1F6B] text-[11px]">
                        {k.key}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="capitalize font-semibold text-gray-800">{k.page}</span>
                        <span className="text-gray-400 text-[10px] block capitalize">{k.section}</span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-[#1D5FE0]">
                        {k.component ? `<${k.component} />` : '—'}
                      </td>
                      <td className="py-3.5 px-4 text-gray-800 font-medium max-w-md truncate">
                        {k.sourceText}
                      </td>
                      <td className="py-3.5 px-4 text-gray-500 font-semibold text-[11px]">
                        v{k.sourceVersion}
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-1">
                        <button
                          onClick={() => handleOpenEdit(k)}
                          className="p-1.5 text-gray-500 hover:text-[#1D5FE0] hover:bg-sky-50 rounded-lg transition-colors"
                          title="Edit English Source Text"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleArchive(k.id, k.key)}
                          className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Archive Key"
                        >
                          <Archive className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add / Edit Key Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 max-w-xl w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-[#F8FAFF]">
              <div className="flex items-center space-x-2">
                <KeyRound className="w-5 h-5 text-[#1D5FE0]" />
                <h3 className="text-sm font-bold text-[#0B1F6B]">
                  {editingKey ? 'Edit English Source Text' : 'Add New Translation Key'}
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {editingKey && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Change Detection:</strong> If you modify the English source text, all other language
                    translations for this key will be automatically marked as <strong>IN REVIEW</strong> so native
                    translators can update them.
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Key Identifier
                  </label>
                  <input
                    type="text"
                    required
                    disabled={Boolean(editingKey)}
                    value={formKey}
                    onChange={(e) => setFormKey(e.target.value)}
                    placeholder="e.g. home.hero.cta_button"
                    className="w-full text-xs font-mono p-2 rounded-xl border border-gray-200 disabled:bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Page
                  </label>
                  <input
                    type="text"
                    required
                    value={formPage}
                    onChange={(e) => setFormPage(e.target.value.toLowerCase())}
                    placeholder="e.g. home, about, resources"
                    className="w-full text-xs p-2 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Section
                  </label>
                  <input
                    type="text"
                    required
                    value={formSection}
                    onChange={(e) => setFormSection(e.target.value.toLowerCase())}
                    placeholder="e.g. hero, faq, navigation"
                    className="w-full text-xs p-2 rounded-xl border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Component (Optional)
                  </label>
                  <input
                    type="text"
                    value={formComponent}
                    onChange={(e) => setFormComponent(e.target.value)}
                    placeholder="e.g. LandingHero"
                    className="w-full text-xs p-2 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  English Source Text
                </label>
                <textarea
                  required
                  rows={4}
                  value={formSourceText}
                  onChange={(e) => setFormSourceText(e.target.value)}
                  placeholder="Enter the exact English text to be translated..."
                  className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Context / Translator Guidance (Optional)
                </label>
                <input
                  type="text"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="e.g. Main call to action on the landing page hero"
                  className="w-full text-xs p-2 rounded-xl border border-gray-200"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-[#0B1F6B] hover:bg-[#07154B] text-white text-xs font-bold rounded-xl shadow-xs transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : editingKey ? 'Update Key' : 'Create Key'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

