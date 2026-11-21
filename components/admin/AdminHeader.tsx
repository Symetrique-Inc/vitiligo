'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Globe,
  UploadCloud,
  CheckCircle2,
  LogOut,
  Bell,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { PublishModal } from './PublishModal';

interface Props {
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export const AdminHeader: React.FC<Props> = ({
  title,
  subtitle,
  onRefresh,
  isRefreshing = false,
}) => {
  const router = useRouter();
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch {
      router.push('/admin/login');
    }
  };

  return (
    <>
      <header className="bg-white border-b border-[#DDE5F5] px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold font-serif text-[#0B1F6B] tracking-tight flex items-center gap-2">
            <span>{title}</span>
          </h1>
          {subtitle && <p className="text-xs text-[#5B6785] mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex items-center space-x-3">
          {onRefresh && (
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="p-2 text-gray-500 hover:text-[#0B1F6B] hover:bg-gray-100 rounded-lg transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#1D5FE0]' : ''}`} />
            </button>
          )}

          {/* Quick Publish Button */}
          <button
            onClick={() => setIsPublishModalOpen(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all hover:-translate-y-0.5"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Publish Changes</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-medium text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl border border-gray-200 transition-colors"
            title="Sign out of Super Admin"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {isPublishModalOpen && (
        <PublishModal
          isOpen={isPublishModalOpen}
          onClose={() => setIsPublishModalOpen(false)}
          onPublished={() => {
            setIsPublishModalOpen(false);
            if (onRefresh) onRefresh();
          }}
        />
      )}
    </>
  );
};

