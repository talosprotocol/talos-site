import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Architecture } from "@/components/Architecture";
import { Benchmarks } from "@/components/Benchmarks";
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
      <Benchmarks />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © 2026 Talos Protocol. Open Source (MIT).
          </div>
          <div className="flex gap-6">
             <Link href="https://github.com/orgs/talosprotocol/projects/2" target="_blank" className="text-sm text-slate-500 hover:text-slate-900">
              Roadmap
            </Link>
             <Link href="https://github.com/talosprotocol/talos" className="text-sm text-slate-500 hover:text-slate-900">
              GitHub
            </Link>
            <Link href="https://github.com/talosprotocol/talos/wiki/Privacy" className="text-sm text-slate-500 hover:text-slate-900">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
