import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function Roadmap() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Product Roadmap</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             We build predominantly in the open. Talos is evolving to become the standard for agentic security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
           {/* v5.15 - Current */}
           <div className="p-8 border rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
               <div className="flex items-center justify-between mb-6">
                   <h2 className="text-2xl font-bold text-slate-900">v5.15 (Hyperion)</h2>
                   <span className="px-2 py-0.5 border border-emerald-300 text-emerald-600 bg-emerald-50 text-xs font-semibold uppercase rounded">Stable</span>
               </div>
               <ul className="space-y-4 text-slate-600">
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Adaptive Budgets:</strong> Economic security & atomic cost enforcement</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Global Load Balancing:</strong> Standardized Ingress & Topology (Phase 14)</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Secrets Rotation:</strong> Automated Multi-KEK rotation (Phase 13)</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Multi-Region:</strong> Sub-5ms latency across regions (Phase 12)</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Hardening:</strong> Rate limiting & distributed tracing (Phase 11)</span>
                   </li>
               </ul>
           </div>
            
            {/* v6.0 - Next */}
            <div className="p-8 border border-blue-100 rounded-2xl bg-blue-50/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
               </div>
               
               <div className="flex items-center justify-between mb-6 relative z-10">
                   <h2 className="text-2xl font-bold text-blue-900">v6.0</h2>
                   <span className="px-2 py-0.5 border border-blue-300 text-blue-600 bg-blue-50 text-xs font-semibold uppercase rounded">Beta</span>
               </div>
               <ul className="space-y-4 text-slate-600 relative z-10">
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>Zero-Knowledge:</strong> Privacy-preserving capability proofs</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>HSM Integration:</strong> Hardware Security Module support</span>
                   </li>
               </ul>
            </div>
        </div>

        <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
           <h3 className="text-xl font-bold mb-4">Want to contribute?</h3>
           <p className="text-slate-600 mb-6">
               Check out our open issues and project boards on GitHub.
           </p>
           <Link href="https://github.com/talosprotocol/talos/issues" target="_blank" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-colors">
               View GitHub Issues ↗
           </Link>
        </div>
      </div>

      <footer className="py-12 px-6 border-t border-slate-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © 2026 Talos Protocol. Open Source (Apache-2.0).
          </div>
          <div className="flex gap-6">
             <Link href="/roadmap" className="text-sm text-slate-900 font-medium">
              Roadmap
            </Link>
             <Link href="https://github.com/talosprotocol/talos" className="text-sm text-slate-500 hover:text-slate-900">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
