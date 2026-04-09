import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Architecture } from "@/components/Architecture";
import { Benchmarks } from "@/components/Benchmarks";
import { UCPFeature } from "@/components/UCPFeature";
import { Navbar } from "@/components/Navbar";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <Hero />
      <BentoGrid />
      <Architecture />
      <UCPFeature />
      <Benchmarks />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-medium text-slate-500">
            © 2026 Talos Protocol. Open Source (Apache-2.0).
          </div>
          <div className="flex gap-6">
             <Link href="/roadmap" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              Roadmap
            </Link>
             <Link href="https://github.com/talosprotocol/talos" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              GitHub
            </Link>
             <Link href="/docs" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              Docs
            </Link>
            <Link href="/security/disclosure" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
