import Link from 'next/link';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 max-w-5xl mx-auto pt-24 text-center">
      
      {/* Sleek, Metallic Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-80" />

      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-300 shadow-sm text-sm font-semibold text-slate-700 tracking-wide uppercase">
          <Shield className="w-4 h-4 text-slate-500" />
          Cryptographic Security for AI
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          The trust layer for<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-900 drop-shadow-sm">
            autonomous agents.
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Cryptographic identity. Scoped authorization. End-to-end encryption. Immutable audit. Everything agents need to operate with zero trust.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link 
            href="/docs"
            className="px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full shadow-md hover:bg-slate-800 hover:shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
          <a 
            href="mailto:reach@talosprotocol.com?subject=Talos%20Protocol%20Inquiry"
            className="px-8 py-4 text-lg font-bold text-slate-700 bg-white border border-slate-300 shadow-sm rounded-full hover:bg-slate-50 hover:shadow-md transition-all duration-300 ease-out transform hover:-translate-y-0.5"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
