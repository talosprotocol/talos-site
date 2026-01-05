import Link from 'next/link';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 max-w-5xl mx-auto pt-24 text-center">
      
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34c759]/10 border border-[#34c759]/20 text-sm font-medium text-[#34c759]">
          <Shield className="w-4 h-4" />
          Cryptographic Security for AI
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
          The trust layer for<br />
          <span className="text-gradient">autonomous agents.</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
          Cryptographic identity. Scoped authorization. End-to-end encryption. Immutable audit. Everything agents need to operate with zero trust.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link 
            href="https://github.com/talosprotocol/talos/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
          <a 
            href="mailto:contact@talosprotocol.com?subject=Talos%20Protocol%20Inquiry"
            className="px-8 py-4 text-lg font-medium text-primary bg-transparent border-2 border-primary/30 rounded-full hover:bg-primary/5 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
