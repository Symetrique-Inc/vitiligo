import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export const metadata = {
  title: 'Translation Management | OneVitiligo Super Admin',
  description: 'Manage, review, edit and publish all multilingual website translations.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminTranslationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#F4F8FD] font-sans antialiased text-[#1E2A4A]">
      {/* Super Admin Navigation Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

