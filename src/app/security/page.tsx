import { Navbar } from "@/components/Navbar";
import Link from 'next/link';
import { Shield, Lock, Eye, AlertCircle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
          Security <span className="text-gradient">First</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Talos is designed on the principle of zero-trust autonomy. We provide the cryptographic proof that your agents are doing what they were authorized to do—and nothing else.
        </p>
      </section>

      {/* Security Pillars */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Shield className="w-8 h-8"/>, title: "Identity", desc: "Every agent and human operator is backed by an Ed25519 DID. No passwords, no API keys, just proofs." },
          { icon: <Lock className="w-8 h-8"/>, title: "Encryption", desc: "End-to-end encrypted tunnels using Double Ratchet handshakes. Perfect forward secrecy for every tool call." },
          { icon: <Eye className="w-8 h-8"/>, title: "Auditability", desc: "Tamper-proof execution logs stored in cryptographic Merkle structures. Verifiable by external auditors." },
          { icon: <AlertCircle className="w-8 h-8"/>, title: "Containment", desc: "Resource-level capability isolation. If an agent is compromised, the blast radius is strictly defined." },
          { icon: <Shield className="w-8 h-8"/>, title: "Behavioral Analysis", desc: "Advanced Markov Chain analysis of audit logs to detect anomalous agent behavior in real-time." }
        ].map((item) => (
          <div key={item.title} className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4 hover:border-blue-200 transition-colors">
            <div className="text-blue-600">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Compliance / Deep Dive */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-200">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <h2 className="text-3xl font-bold text-gray-900">Responsible Audit</h2>
               <p className="text-lg text-gray-600 leading-relaxed">
                 Traditional logging is insufficient for autonomous agents. Talos implements a &quot;Responsible Audit&quot; protocol where action patterns are analyzed at scale.
               </p>
                <ul className="space-y-3">
                  {[
                    "Append-only cryptographic audit logs",
                    "Real-time Markov Chain behavioral modeling",
                    "Third-party verifiability without data leakage",
                    "Automated anomaly detection across 100k+ events",
                    "Real-time capability revocation"
                  ].map((li) => (
                    <li key={li} className="flex items-center gap-3 text-gray-800 font-medium">
                       <span className="w-2 h-2 rounded-full bg-blue-600" />
                       {li}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="p-10 bg-gray-50 border border-gray-200 rounded-2xl">
               <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-6">Security Posture</h4>
               <div className="space-y-6">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-600 w-[99%]" />
                  </div>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="text-gray-900 text-2xl font-bold mb-1">99.9%</p>
                      <p className="text-sm text-gray-500">Proof Integrity</p>
                    </div>
                    <div>
                      <p className="text-gray-900 text-2xl font-bold mb-1">&lt; 1ms</p>
                      <p className="text-sm text-gray-500">Auth Latency</p>
                    </div>
                    <div className="col-span-2 pt-4 border-t border-gray-200">
                      <p className="text-gray-900 text-2xl font-bold mb-1">100,000+</p>
                      <p className="text-sm text-gray-500">Verified Audit Events/sec</p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-sm text-gray-500">© 2026 Talos Protocol Security Group</div>
           <div className="flex gap-6">
              <Link href="mailto:security@talosprotocol.com" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Report Vulnerability</Link>
              <Link href="https://github.com/talosprotocol/talos/blob/main/docs/security/security-properties.md" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Whitepaper</Link>
           </div>
        </div>
      </footer>
    </main>
  );
}
