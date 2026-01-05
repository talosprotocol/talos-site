'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-blue-600 transition-colors">
              T
            </div>
            <span className="font-bold text-slate-900 text-lg tracking-tight">Talos Protocol</span>
          </Link>

          {/* Tabs */}
          <div className="hidden md:flex bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            <Link 
              href="/" 
              className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                pathname === '/' 
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              Investors
            </Link>
            <Link 
              href="/developers" 
              className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                pathname === '/developers' 
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              Developers
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
            <Link href="https://github.com/talosprotocol/talos" target="_blank" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            GitHub
          </Link>
          <Link href="https://github.com/talosprotocol/talos/wiki" target="_blank" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Docs
          </Link>
        </div>
      </div>
    </nav>
  );
}
