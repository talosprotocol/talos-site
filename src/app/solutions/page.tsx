import { Navbar } from "@/components/Navbar";
import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Secure MCP Integration",
      problem: "Agent tools operate in untrusted environments with risk of unauthorized access and capability drift.",
      outcome: "Talos provides a secure bridge between agents and MCP servers, enforcing cryptographic identity and time-scoped authorization on every request.",
      components: ["TypeScript SDK", "Python SDK", "MCP Connector", "Gateway"],
      docs: "https://github.com/talosprotocol/talos/wiki/MCP-Integration"
    },
    {
      title: "Immutable Audit Trail",
      problem: "Autonomous agents execute thousands of actions per minute, making manual audit impossible.",
      outcome: "The Audit Service captures every execution event in a verifiable Merkle structure for compliance and incident response.",
      components: ["Audit Service", "Dashboard", "Contracts"],
      docs: "https://github.com/talosprotocol/talos/wiki/Audit-Explorer"
    },
    {
      title: "Cross-Language Parity",
      problem: "Building secure toolchains across Rust, Python, and Node.js leads to protocol fragmentation.",
      outcome: "Our contract-driven kernel ensures every SDK speaks the same cryptographic language with shared schemas and test vectors.",
      components: ["Contracts", "Core Rust", "All SDKs"],
      docs: "https://github.com/talosprotocol/talos-contracts/wiki"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-foreground tracking-tight sm:text-6xl">
            Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how Talos solves critical challenges in AI agent infrastructure.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-16">
        {solutions.map((sol, i) => (
          <div key={sol.title} className="p-8 bg-surface border border-border rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                Use Case {i + 1}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{sol.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-surface-muted rounded-xl border-l-4 border-muted-foreground/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Challenge</p>
                <p className="text-muted-foreground">{sol.problem}</p>
              </div>
              <div className="p-5 bg-primary/5 rounded-xl border-l-4 border-primary">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Outcome</p>
                <p className="text-foreground">{sol.outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {sol.components.map((comp) => (
                <span key={comp} className="px-3 py-1, text-xs font-medium text-muted-foreground bg-surface-muted rounded-full border border-border">
                  {comp}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Link 
                href={sol.docs}
                target="_blank"
                className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                View Documentation
              </Link>
              <Link 
                href="mailto:contact@talosprotocol.com"
                className="px-5 py-2.5 bg-surface border border-border text-foreground font-semibold rounded-lg hover:bg-surface-muted transition-colors text-sm"
              >
                Request Demo
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border mt-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2026 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-6">
             <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
