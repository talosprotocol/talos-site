import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function Protocol() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Talos Protocol Whitepaper</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             The formal specification for secure, auditable agent-to-agent communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
           {/* Summary Section */}
           <div className="p-8 border rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
               <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Architecture</h2>
               <ul className="space-y-4 text-slate-600">
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>E2EE Tunnels:</strong> Double Ratchet perfect forward secrecy for all agent communication.</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>Decentralized ID:</strong> Identity via <code>did:key</code> (Ed25519) with DHT-based resolution.</span>
                   </li>
                   <li className="flex items-start gap-3">
                       <span className="text-blue-500 mt-1">▸</span>
                       <span><strong>Merkle Auditing:</strong> Tamper-proof logs anchored via cryptographic accumulators.</span>
                   </li>
               </ul>
           </div>
            
            {/* Download/View Section */}
            <div className="p-8 border border-blue-100 rounded-2xl bg-blue-50/50 flex flex-col justify-center items-center text-center">
               <h2 className="text-2xl font-bold text-blue-900 mb-4">Read the Spec</h2>
               <p className="text-slate-600 mb-8">
                  The full technical specification is maintained in our open source repository as a living document.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link 
                    href="https://github.com/talosprotocol/talos/blob/main/PROTOCOL.md" 
                    target="_blank" 
                    className="flex-1 inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    View on GitHub ↗
                  </Link>
                  <Link 
                    href="/docs" 
                    className="flex-1 inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-700 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Browse Docs
                  </Link>
               </div>
            </div>
        </div>

        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
           <h3 className="text-xl font-bold mb-4">Key Protocol Primitives</h3>
           <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Identity</h4>
                <p className="text-sm text-slate-600">Self-sovereign DID keys using Curve25519 with non-custodial rotation.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Authz</h4>
                <p className="text-sm text-slate-600">Capability-based tokens with dynamic revocation and glob-based allowlists.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Audit</h4>
                <p className="text-sm text-slate-600">Signed event trails with Merkle proofs for verifiable compliance.</p>
              </div>
           </div>
        </div>
      </div>

      <footer className="py-12 px-6 border-t border-slate-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © 2026 Talos Protocol. Open Source (Apache-2.0).
          </div>
          <div className="flex gap-6">
             <Link href="/protocol" className="text-sm text-slate-900 font-medium">
              Protocol
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
