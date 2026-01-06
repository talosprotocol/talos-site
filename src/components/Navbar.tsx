'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
  ];

  const rightLinks = [
    { href: '/developers', label: 'Developers' },
    { href: '/security', label: 'Security' },
    { href: 'https://github.com/talosprotocol/talos/blob/main/docs/WHITEPAPER.md', label: 'Whitepaper' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-gray-100">
              <Image 
                src="/assets/logo-dark.png" 
                alt="Talos Protocol" 
                width={24} 
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-gray-900 text-base sm:text-lg tracking-tight uppercase hidden sm:block">Talos Protocol</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? 'text-blue-600' : 'text-gray-800 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center gap-6">
            {rightLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? 'text-blue-600' : 'text-gray-800 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="https://github.com/talosprotocol/talos" 
              target="_blank" 
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all"
            >
              GitHub
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {[...navLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-base font-medium ${
                  pathname === link.href ? 'text-blue-600' : 'text-gray-800'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <Link 
                href="https://github.com/talosprotocol/talos" 
                target="_blank" 
                className="block w-full text-center py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
