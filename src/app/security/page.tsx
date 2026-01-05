import { Navbar } from "@/components/Navbar";
import Link from 'next/link';
import { Shield, Lock, Eye, AlertCircle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-full -z-10 opacity-10 blur-[120px]">
           <div className="w-[800px] h-[400px] bg-primary rounded-full" />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-foreground tracking-tighter uppercase leading-none italic mb-8">
          Security <br />
          <span className="text-gradient not-italic">First.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light">
          Talos is designed on the principle of zero-trust autonomy. We provide the cryptographic proof that your agents are doing what they were authorized to do—and nothing else.
        </p>
      </section>

      {/* Security Pillars */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Shield className="w-8 h-8"/>, title: "Identity", desc: "Every agent and human operator is backed by an Ed25519 DID. No passwords, no API keys, just proofs." },
          { icon: <Lock className="w-8 h-8"/>, title: "Encryption", desc: "End-to-end encrypted tunnels using Double Ratchet handshakes. Perfect forward secrecy for every tool call." },
          { icon: <Eye className="w-8 h-8"/>, title: "Auditability", desc: "Tamper-proof execution logs stored in cryptographic Merkle structures. Verifiable by external auditors." },
          { icon: <AlertCircle className="w-8 h-8"/>, title: "Containment", desc: "Resource-level capability isolation. If an agent is compromised, the blast radius is strictly defined." }
        ].map((item) => (
          <div key={item.title} className="p-10 bg-surface/50 border border-border/50 rounded-[3rem] glass-panel space-y-6">
            <div className="text-primary">{item.icon}</div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Compliance / Deep Dive */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-border/20 space-y-24">
         <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
            <div className="space-y-8">
               <h2 className="text-4xl font-black text-foreground tracking-tight uppercase">Responsible Audit</h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 Traditional logging is insufficient for autonomous agents. Talos implements a &quot;Responsible Audit&quot; protocol where every action is anchored to a cryptographic proof.
               </p>
               <ul className="space-y-4">
                 {[
                   "Merkle-tree anchored execution logs",
                   "Hardware-backed secure enclaves (TEE) support",
                   "Third-party verifiability without data leakage",
                   "Real-time capability revocation"
                 ].map((li) => (
                   <li key={li} className="flex items-center gap-3 text-foreground/80 font-bold italic">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {li}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="p-12 bg-surface/80 border border-primary/30 rounded-[4rem] shadow-premium relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
               <h4 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-8">Security Posture</h4>
               <div className="space-y-8">
                  <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-[98%] animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-8 text-center text-xs font-black uppercase tracking-widest text-muted-foreground">
                    <div>
                      <p className="text-foreground text-xl mb-1">99.9%</p>
                      <p>Proof Integrity</p>
                    </div>
                    <div>
                      <p className="text-foreground text-xl mb-1">&lt; 2ms</p>
                      <p>Auth Latency</p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20 bg-surface/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black text-muted-foreground uppercase tracking-widest">
           <div>© 2024 Talos Protocol Security Group</div>
           <div className="flex gap-8">
              <Link href="mailto:security@talosprotocol.com" className="hover:text-primary transition-colors">Report Vulnerability</Link>
              <Link href="https://github.com/talosprotocol/talos/wiki/Security-Whitepaper" className="hover:text-primary transition-colors">Whitepaper</Link>
           </div>
        </div>
      </footer>
    </main>
  );
}
