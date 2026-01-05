import { Navbar } from "@/components/Navbar";
import { Architecture } from "@/components/Architecture";
import Link from 'next/link';

export default function Developers() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Dev Hero */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-10 blur-[100px]">
           <div className="w-[600px] h-[600px] bg-primary rounded-full ml-auto" />
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground mb-8 uppercase italic leading-none">
          Build for <br />
          <span className="text-gradient not-italic">Autonomy.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light">
          Talos provides the cryptographic primitives and middleware necessary to build secure, auditable, and interoperable agent systems using Model Context Protocol (MCP).
        </p>
        <div className="flex flex-wrap gap-6">
          <Link 
            href="https://github.com/talosprotocol/talos"
            target="_blank"
            className="px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
          >
            GitHub Repository
          </Link>
          <Link 
            href="https://github.com/talosprotocol/talos/wiki"
            target="_blank"
            className="px-8 py-4 text-base font-bold text-foreground bg-surface border border-border rounded-full hover:bg-surface-muted transition-all"
          >
            Documentation Wiki
          </Link>
        </div>
      </section>

      {/* Primitives Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto border-t border-border/20">
        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-12">Core Primitives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Cryptographic Identity", 
              desc: "Agents generate self-sovereign Ed25519 keypairs. All communication is signed and verifiable.",
              code: "did:key:z6Mk..."
            },
            { 
              title: "Capability Auth", 
              desc: "Scoped, time-limited tokens for tool access. fast-path local validation or slow-path blockchain anchoring.",
              code: "Resource + Action"
            },
            { 
              title: "Double Ratchet", 
              desc: "Forward-secure tunnels for every agent interaction. < 5ms RTT overhead on localhost.",
              code: "Signal Protocol v3"
            }
          ].map((item) => (
            <div key={item.title} className="p-10 bg-surface/50 rounded-[3rem] border border-border/50 glass-panel space-y-4 hover:border-primary/30 transition-all">
              <h3 className="font-bold text-xl text-foreground tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              <div className="pt-4 text-[10px] font-mono text-primary/80 uppercase tracking-widest bg-surface-muted/50 inline-block px-3 py-1 rounded-full">
                {item.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Code */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
         <div className="bg-surface/50 rounded-[4rem] border border-border/50 p-12 md:p-20 glass-panel overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-foreground tracking-tight">Zero-Trust SDKs</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        The Talos SDK abstracts complexity, handling key management, handshake negotiation, and capability signing automatically.
                    </p>
                    <ul className="space-y-5 text-foreground/80 font-medium">
                        {[
                          "Type-safe capabilities",
                          "Automatic key rotation",
                          "Zero-config secure defaults",
                          "Built-in MCP compatibility"
                        ].map(li => (
                          <li key={li} className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {li}
                          </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#010409] p-8 rounded-3xl border border-border/50 font-mono text-sm text-blue-100/80 shadow-2xl">
<pre className="overflow-x-auto">{`import { Agent } from "@talos-network/sdk";

// Automatic DID generation
const agent = await Agent.create();

// Connect to secure gateway
const session = await agent.connect(
  "ws://gateway.talosprotocol.com"
);

// Sign & Send capability request
await session.sendSecure({
  action: "compute:gpu_access",
  resource: "cluster_alpha",
  params: { duration: "1h" }
});`}</pre>
                </div>
            </div>
         </div>
      </section>

      {/* Architecture */}
      <Architecture />

      {/* Static Footer */}
       <footer className="py-20 px-6 border-t border-border/20 bg-surface/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-xs font-black text-muted-foreground uppercase tracking-widest antialiased">
            © 2026 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-12">
             <Link href="https://github.com/talosprotocol/talos" className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              GitHub
            </Link>
             <Link href="mailto:contact@talosprotocol.com" className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
