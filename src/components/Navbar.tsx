'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-panel border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group">
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
            <span className="font-bold text-gray-900 text-lg tracking-tight uppercase">Talos Protocol</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/products" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/products' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Products
            </Link>
            <Link 
              href="/services" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/services' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/solutions" 
              className={`text-sm font-medium transition-colors ${
                pathname === '/solutions' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Solutions
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Link 
            href="/developers" 
            className={`text-sm font-medium transition-colors ${
              pathname === '/developers' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Developers
          </Link>
          <Link 
            href="/security" 
            className={`text-sm font-medium transition-colors ${
              pathname === '/security' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Security
          </Link>
          <Link 
            href="https://github.com/talosprotocol/talos" 
            target="_blank" 
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}
