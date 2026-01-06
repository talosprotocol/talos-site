import { Navbar } from "@/components/Navbar";
import { Architecture } from "@/components/Architecture";
import Link from 'next/link';

export default function Developers() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Dev Hero */}
      <section className="relative pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Build for <span className="text-gradient">Autonomy</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
          Talos provides the cryptographic primitives and middleware necessary to build secure, auditable, and interoperable agent systems using Model Context Protocol (MCP).
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="https://github.com/talosprotocol/talos"
            target="_blank"
            className="px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            GitHub Repository
          </Link>
          <Link 
            href="https://github.com/talosprotocol/talos/wiki"
            target="_blank"
            className="px-6 py-3 text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            Documentation Wiki
          </Link>
        </div>
      </section>

      {/* Primitives Grid */}
      <section className="px-6 py-20 max-w-6xl mx-auto border-t border-gray-200">
        <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-10">Core Primitives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Cryptographic Identity", 
              desc: "Agents generate self-sovereign Ed25519 keypairs. All communication is signed and verifiable.",
              code: "did:key:z6Mk..."
            },
            { 
              title: "Capability Auth", 
              desc: "Scoped, time-limited tokens for tool access. Validated locally for millisecond latency.",
              code: "Resource + Action"
            },
            { 
              title: "Double Ratchet", 
              desc: "Forward-secure tunnels for every agent interaction. < 5ms RTT overhead on localhost.",
              code: "X3DH + Double Ratchet"
            }
          ].map((item) => (
            <div key={item.title} className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-blue-300 transition-all">
              <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              <div className="text-xs font-mono text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
                {item.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Code */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
         <div className="bg-gray-50 rounded-3xl border border-gray-200 p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Zero-Trust SDKs</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The Talos SDK abstracts complexity, handling key management, handshake negotiation, and capability signing automatically.
                    </p>
                    <ul className="space-y-4 text-gray-800 font-medium">
                        {[
                          "Type-safe capabilities",
                          "Automatic key rotation",
                          "Zero-config secure defaults",
                          "Built-in MCP compatibility"
                        ].map(li => (
                          <li key={li} className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-600" />
                            {li}
                          </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 font-mono text-sm text-gray-300 shadow-xl overflow-x-auto">
<pre>{`# -------------------------------------------------------
# OPTION 1: TypeScript (Install from Source)
# -------------------------------------------------------
git clone https://github.com/talosprotocol/talos-sdk-ts
cd talos-sdk-ts && npm install && npm run build

import { Wallet, Client } from "@talosprotocol/sdk";

const wallet = await Wallet.create();
const cap = await wallet.signCapability({
  resource: "tools:weather",
  action: "execute",
  expiresAt: Date.now() + 3600000
});

# -------------------------------------------------------
# OPTION 2: Python (Install from Source)
# -------------------------------------------------------
git clone https://github.com/talosprotocol/talos-sdk-py
cd talos-sdk-py && pip install -e .

from talos_sdk import Wallet
import time

wallet = Wallet.create()
# ... (rest of python example)
print(f"Agent DID: {wallet.did}")

cap = wallet.sign_capability({
    "resource": "tools:weather",
    "action": "execute",
    "expires_at": time.time() + 3600
})`}</pre>
                </div>
            </div>

            {/* Schema Docs Section */}
            <div className="mt-16 border-t border-gray-200 pt-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Contract-First Schemas</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <Link href="https://github.com/talosprotocol/talos-contracts/wiki/EvidenceBundle" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="block font-bold text-blue-600 mb-1">EvidenceBundle</span>
                        <span className="text-sm text-gray-500">Audit Log Schema</span>
                    </Link>
                    <Link href="https://github.com/talosprotocol/talos-contracts/wiki/Redaction" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="block font-bold text-blue-600 mb-1">Redaction</span>
                        <span className="text-sm text-gray-500">Privacy Policy</span>
                    </Link>
                     <Link href="https://github.com/talosprotocol/talos-contracts/wiki/Capabilities" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="block font-bold text-blue-600 mb-1">Capabilities</span>
                        <span className="text-sm text-gray-500">Auth Token Spec</span>
                    </Link>
                </div>
            </div>

         </div>
      </section>

      {/* Architecture */}
      <Architecture />

      {/* Footer */}
       <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-6">
             <Link href="https://github.com/talosprotocol/talos" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              GitHub
            </Link>
             <Link href="mailto:contact@talosprotocol.com" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
