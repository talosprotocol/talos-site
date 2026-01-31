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
           {/* v1.1 - Current */}
           <div className="p-8 border rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
               <div className="flex items-center justify-between mb-6">
                   <h2 className="text-2xl font-bold text-slate-900">v2.0 Alpha</h2>
                   <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">LIVE</span>
               </div>
               <ul className="space-y-4 text-slate-600">
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Validation Engine:</strong> Multi-layer block validation</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Double Ratchet:</strong> Per-message forward secrecy</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>Decentralized Identity:</strong> DID/DHT Support</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-green-500 mt-1">✓</span>
                       <span><strong>SDK Parity:</strong> Python & TypeScript</span>
                   </li>
               </ul>
           </div>
            
            {/* v2.0 Beta - Next */}
            <div className="p-8 border border-blue-100 rounded-2xl bg-blue-50/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
               </div>
               
               <div className="flex items-center justify-between mb-6 relative z-10">
                   <h2 className="text-2xl font-bold text-blue-900">v2.0 Beta</h2>
                   <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">Q3 2026</span>
               </div>
               <ul className="space-y-4 text-slate-600 relative z-10">
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>Onion Routing:</strong> Metadata protection</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>Post-Quantum:</strong> Hybrid Kyber-768 encryption</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>Zero-Knowledge:</strong> Privacy-preserving validation</span>
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
