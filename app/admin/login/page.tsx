'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push('/admin/translations');
        router.refresh();
      } else {
        const errorMsg = data.details
          ? `${data.error}: ${data.details}`
          : (data.error || 'Authentication failed. Please check credentials.');
        setError(errorMsg);
      }
    } catch (err: any) {
      setError(err.message || 'Network error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07154B] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1D5FE0]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#7C5CE0]/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#0B1F6B]/30 p-8 sm:p-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EAF2FF] text-[#1D5FE0] mb-4 shadow-xs">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-[#0B1F6B] tracking-tight">
            Super Admin Portal
          </h1>
          <p className="text-xs text-[#5B6785] mt-1.5">
            OneVitiligo Multilingual Translation Management System
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@onevitiligo.org"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0] focus:ring-1 focus:ring-[#1D5FE0] text-[#1E2A4A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B1F6B] uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#1D5FE0] focus:ring-1 focus:ring-[#1D5FE0] text-[#1E2A4A]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 px-4 bg-[#0B1F6B] hover:bg-[#07154B] active:bg-black text-white text-xs font-semibold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying credentials...</span>
              </>
            ) : (
              <>
                <span>Sign In to Super Admin</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

