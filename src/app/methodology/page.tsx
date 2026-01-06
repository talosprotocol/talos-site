import { Navbar } from "@/components/Navbar";
import claims from "@/content/claims.json";
import Link from "next/link";

export default function Methodology() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Performance Methodology</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Transparency is our core value. All performance claims on this site are verifiable, reproducible, and sourced from open benchmarks.
          </p>
        </div>

        <div className="prose prose-slate max-w-none mb-16">
          <h3>Test Environment</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong>Hardware:</strong> Apple M4 Max (16-core CPU), 64GB Unified Memory</li>
            <li><strong>Network:</strong> Localhost loopback (127.0.0.1) for baseline latency</li>
            <li><strong>OS:</strong> macOS Sequoia 15.2</li>
            <li><strong>Implementation:</strong> <code>talos-core-rs</code> (v0.2.0) compiled with <code>--release</code></li>
          </ul>
          
          <p className="mt-6">
            <Link href="https://github.com/talosprotocol/talos/wiki/Benchmarks" className="text-blue-600 hover:underline font-medium">
              View full benchmark suite on GitHub &rarr;
            </Link>
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Verified Claims</h2>
        <div className="grid gap-4">
          {claims.map((claim) => (
            <div key={claim.id} className="p-6 bg-slate-50 border border-slate-200 rounded-lg group hover:border-blue-200 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h3 className="font-semibold text-lg">{claim.claim}</h3>
                <div className="flex items-center gap-2">
                   <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm">
                      {claim.display_value}
                   </span>
                   <span className="text-xs text-slate-400 uppercase tracking-wider font-medium px-2 py-1 border rounded">
                      {claim.risk_level} Risk
                   </span>
                </div>
              </div>
              
              <div className="text-sm text-slate-500 font-mono mb-3">
                key: {claim.metric_key}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600 border-t border-slate-200 pt-3">
                <div>
                    <span className="font-medium text-slate-900">Source: </span>
                    {claim.notes}
                </div>
                {claim.source_url && (
                    <Link href={claim.source_url} target="_blank" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        Verify Source ↗
                    </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-12 px-6 border-t border-slate-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © 2026 Talos Protocol. Open Source (MIT).
          </div>
          <div className="flex gap-6">
             <Link href="/roadmap" className="text-sm text-slate-500 hover:text-slate-900">
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
