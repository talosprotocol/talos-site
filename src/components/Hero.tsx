import Link from 'next/link';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 max-w-5xl mx-auto pt-24 text-center">
      
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-sm font-medium text-green-700">
          <Shield className="w-4 h-4" />
          Cryptographic Security for AI
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
          The trust layer for<br />
          <span className="text-gradient">autonomous agents.</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Cryptographic identity. Scoped authorization. End-to-end encryption. Immutable audit. Everything agents need to operate with zero trust.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link 
            href="https://github.com/talosprotocol/talos/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <a 
            href="mailto:reach@talosprotocol.com?subject=Talos%20Protocol%20Inquiry"
            className="px-8 py-4 text-lg font-medium text-blue-600 bg-transparent border-2 border-blue-200 rounded-full hover:bg-blue-50 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
