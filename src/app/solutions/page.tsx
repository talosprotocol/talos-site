import { Navbar } from "@/components/Navbar";
import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Secure MCP Invocations",
      problem: "Agent tools often operate in untrusted environments with high risk of capability drift and unauthorized access.",
      outcome: "Talos provides a secure bridge between agents and Model Context Protocol (MCP) servers, enforcing cryptographic identity and time-scoped authorization on every request.",
      components: ["TS SDK", "Python SDK", "MCP Bridge", "Gateway"],
      cta: "View Architecture",
      docs: "https://github.com/talosprotocol/talos/wiki/MCP-Integration"
    },
    {
      title: "Immutable Agent Auditability",
      problem: "Autonomous agents can execute thousands of actions per minute, making manual audit and compliance verification impossible.",
      outcome: "The Talos Audit Service captures every execution event in a verifiable Merkle structure, providing a tamper-proof record for regulators and incident response.",
      components: ["Audit Service", "Dashboard", "Contract Kernel"],
      cta: "See Audit Specs",
      docs: "https://github.com/talosprotocol/talos/wiki/Audit-Explorer"
    },
    {
      title: "Cross-Language Interoperability",
      problem: "Building secure agent toolchains across mixed environments (Rust, Python, Node.js) leads to protocol fragmentation.",
      outcome: "Our contract-driven kernel ensures that every Talos SDK and service speaks the same cryptographic language, using shared schemas and test vectors for perfect parity.",
      components: ["Contracts", "Core Rust", "All SDKs"],
      cta: "Explore Contracts",
      docs: "https://github.com/talosprotocol/talos-contracts/wiki"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden border-b border-border/20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30 blur-[150px]">
            <div className="w-[1000px] h-[600px] bg-gradient-to-tr from-primary to-secondary rounded-full mx-auto animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
           <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">
             Solved <br />
             <span className="text-gradient not-italic">by Talos.</span>
           </h1>
           <p className="text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
             We connect the dots between cryptographic research and production-grade AI infrastructure.
           </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-32">
        {solutions.map((sol, i) => (
          <div key={sol.title} className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/2 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-widest">
                  Use Case {i + 1}
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase italic">{sol.title}</h2>
                <div className="space-y-6">
                   <div className="p-6 bg-surface-muted/50 rounded-2xl border-l-4 border-muted">
                      <p className="text-sm text-muted-foreground uppercase font-black tracking-widest mb-2">The Challenge</p>
                      <p className="text-lg leading-relaxed italic opacity-80 font-medium">&quot;{sol.problem}&quot;</p>
                   </div>
                   <div className="p-6 bg-primary/5 rounded-2xl border-l-4 border-primary">
                      <p className="text-sm text-primary uppercase font-black tracking-widest mb-2">The Outcome</p>
                      <p className="text-lg leading-relaxed font-bold">{sol.outcome}</p>
                   </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link 
                    href={sol.docs}
                    target="_blank"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
                  >
                    {sol.cta}
                  </Link>
                  <Link 
                    href="mailto:contact@talosprotocol.com"
                    className="px-8 py-4 bg-transparent border border-border text-foreground font-bold rounded-full hover:bg-surface transition-all"
                  >
                    Request Walkthrough
                  </Link>
                </div>
             </div>

             <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square bg-surface/50 rounded-[4rem] border border-border/50 glass-panel p-12 flex flex-col justify-center items-center relative group overflow-hidden shadow-premium">
                {/* Visual Placeholder for Solution Graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <p className="text-xs font-black uppercase tracking-[0.5em] text-muted-foreground mb-8">Integrated Stack</p>
                <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                   {sol.components.map((comp) => (
                      <div key={comp} className="p-4 bg-surface-muted rounded-2xl border border-border/50 text-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
                         <p className="text-xs font-bold text-foreground antialiased">{comp}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20 bg-surface/30 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            © 2024 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-8">
             <Link href="/products" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Catalog
            </Link>
            <Link href="/services" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Services
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
