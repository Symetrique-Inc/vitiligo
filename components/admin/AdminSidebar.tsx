'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Languages,
  KeyRound,
  Eye,
  FileSpreadsheet,
  History,
  ExternalLink,
  ShieldCheck,
  Globe,
} from 'lucide-react';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Overview Dashboard',
      href: '/admin/translations',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      label: 'Side-by-Side Editor',
      href: '/admin/translations/editor',
      icon: Languages,
      badge: 'Editor',
    },
    {
      label: 'Translation Keys',
      href: '/admin/translations/keys',
      icon: KeyRound,
    },
    {
      label: 'Live Preview',
      href: '/admin/translations/preview',
      icon: Eye,
    },
    {
      label: 'Import & Export',
      href: '/admin/translations/import-export',
      icon: FileSpreadsheet,
    },
    {
      label: 'History & Audit Logs',
      href: '/admin/translations/history',
      icon: History,
    },
  ];

  return (
    <aside className="w-64 bg-[#07154B] text-white flex flex-col shrink-0 min-h-screen border-r border-[#0B1F6B]">
      {/* Brand Header */}
      <div className="p-5 border-b border-[#0B1F6B]/80 flex items-center justify-between">
        <Link href="/admin/translations" className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1D5FE0] flex items-center justify-center font-bold text-white shadow-sm">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>OneVitiligo</span>
              <span className="text-[10px] bg-[#1D5FE0] text-white px-1.5 py-0.2 rounded font-semibold uppercase">
                Admin
              </span>
            </div>
            <div className="text-[11px] text-gray-400">Translation Management</div>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1">
        <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Management
        </div>

        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(item.href + '/');

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#1D5FE0] text-white font-semibold shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="pt-6 px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Live Website
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
        >
          <div className="flex items-center space-x-3">
            <ExternalLink className="w-4 h-4 text-gray-400" />
            <span>Open Website</span>
          </div>
          <span className="text-[10px] text-gray-400">↗</span>
        </Link>
      </nav>

      {/* Super Admin Status Footer */}
      <div className="p-4 border-t border-[#0B1F6B]/80 bg-[#06103A]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-xs">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white truncate">Super Admin</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Control</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

