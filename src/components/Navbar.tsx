'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-6 h-6 text-slate-800 group-hover:text-slate-600 transition-colors" />
            <span className="text-xl font-black tracking-tight text-slate-900">TALOS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Products', path: '/products' },
              { label: 'Services', path: '/services' },
              { label: 'Developers', path: '/developers' },
              { label: 'Docs', path: '/docs' }
            ].map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`text-sm font-semibold transition-colors ${
                  isActive(item.path) 
                    ? 'text-slate-900' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="text-sm font-bold text-slate-600 hover:text-slate-900 px-4 py-2 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/docs" 
              className="px-5 py-2 text-sm font-bold text-white bg-slate-900 rounded-full shadow-sm hover:bg-slate-800 transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
          <div className="px-6 pt-2 pb-6 space-y-4 shadow-inner">
            {[
              { label: 'Products', path: '/products' },
              { label: 'Services', path: '/services' },
              { label: 'Developers', path: '/developers' },
              { label: 'Docs', path: '/docs' }
            ].map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`block text-base font-semibold ${
                  isActive(item.path) ? 'text-slate-900' : 'text-slate-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link 
                href="/contact" 
                className="w-full text-center px-5 py-3 font-bold text-slate-700 bg-slate-100 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/docs" 
                className="w-full text-center px-5 py-3 font-bold text-white bg-slate-900 rounded-xl shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
