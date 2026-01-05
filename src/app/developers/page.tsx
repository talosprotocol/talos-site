import { Navbar } from "@/components/Navbar";
import { Architecture } from "@/components/Architecture";
import Link from 'next/link';

export default function Developers() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Dev Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
          Build with the <span className="text-blue-600">Trust Layer</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
          Talos provides the cryptographic primitives and middleware necessary to build secure, auditable, and interoperable agent systems using Model Context Protocol (MCP).
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="https://github.com/talosprotocol/talos"
            target="_blank"
            className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            View on GitHub
          </Link>
          <Link 
            href="https://github.com/talosprotocol/talos/wiki"
            target="_blank"
            className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Read Documentation
          </Link>
        </div>
      </section>

      {/* Primitives Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Core Primitives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg mb-2">Cryptographic Identity</h3>
            <p className="text-slate-600 text-sm mb-4">Agents generate self-sovereign Ed25519 keypairs. All communication is signed and verifiable.</p>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-800">did:key:z6Mk...</code>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
             <h3 className="font-bold text-lg mb-2">Capability Authorization</h3>
             <p className="text-slate-600 text-sm mb-4">Scoped, time-limited tokens for tool access. fast-path local validation or slow-path blockchain anchoring.</p>
             <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-800">Resource + Action</code>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
             <h3 className="font-bold text-lg mb-2">Encrypted Transport</h3>
             <p className="text-slate-600 text-sm mb-4">Double Ratchet tunnels for forward secrecy. &lt; 5ms RTT overhead on localhost.</p>
             <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-800">Signal Protocol</code>
          </div>
        </div>
      </section>

      {/* Integration Code */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
         <div className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Simple SDK Integration</h2>
                    <p className="text-slate-400 mb-8">
                        The Talos SDK abstracts complexity, handling key management, handshake negotiation, and capability signing automatically.
                    </p>
                    <ul className="space-y-4 text-slate-300 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            Type-safe capabilities
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-blue-500" />
                            Automatic key rotation
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-blue-500" />
                            Zero-config secure defaults
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto">
<pre>{`import { Agent } from "@talos-network/sdk";

// Initialize Agent with automatic identity
const agent = await Agent.create();

// Connect to secure gateway
const session = await agent.connect(
  "ws://gateway:8000"
);

// Send encrypted capability request
await session.sendSecure({
  action: "stripe:charge",
  resource: "user_123",
  params: { amount: 5000 }
});`}</pre>
                </div>
            </div>
         </div>
      </section>

      {/* Architecture Re-use */}
      <Architecture />

      {/* Footer */}
       <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © 2024 Talos Protocol. Open Source (MIT).
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
