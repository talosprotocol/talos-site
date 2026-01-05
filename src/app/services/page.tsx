import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/services/ServiceCard";
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
           <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none">
            Scale with <br className="hidden md:block" />
            <span className="text-gradient">Certainty</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Talos offers high-impact commercial services to ensure your agentic infrastructure is secure, performant, and compliant from day one.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Advisory"
            description="High-level architecture review and threat modeling for existing and new agent toolchains."
            deliverables={[
              "Architecture security audit",
              "Custom threat model report",
              "Implementation roadmap",
              "Policy & compliance mapping"
            ]}
            engagement="2-4 Weeks"
            cta="Book Discovery"
          />
          <ServiceCard 
            variant="primary"
            title="Implementation"
            description="Deep engineering support to deploy and harden the Talos stack within your sovereign infrastructure."
            deliverables={[
              "Production Gateway setup",
              "Custom MCP Connector build",
              "SDK integration support",
              "Sovereign host hardening"
            ]}
            engagement="4-12 Weeks"
            cta="Talk to Engineering"
          />
          <ServiceCard 
            title="Enterprise"
            description="Mission-critical support and security response for enterprises deploying agents at scale."
            deliverables={[
              "24/7 Priority SLA support",
              "Dedicated technical lead",
              "Security patch guidance",
              "Custom feature priority"
            ]}
            engagement="Annual Partnership"
            cta="Inquire Tiers"
          />
        </div>
      </section>

      {/* Engagement Flow */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-border/20">
        <h2 className="text-4xl font-black text-foreground mb-16 text-center uppercase tracking-widest opacity-80">How we engage</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
           {[
             { step: "01", title: "Discovery", desc: "Initial technical requirements gathering and scope definition." },
             { step: "02", title: "Review", desc: "Thorough security review of your current agent execution environment." },
             { step: "03", title: "Pilot", desc: "Guided deployment of Talos primitives in a controlled environment." },
             { step: "04", title: "Rollout", desc: "Full production deployment with ongoing security monitoring." }
           ].map((item) => (
             <div key={item.step} className="space-y-4 relative group">
                <span className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-500 leading-none antialiased">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20 bg-surface/30 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            © 2024 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-8">
             <Link href="/" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Back to Home
            </Link>
             <Link href="/products" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Explore Products
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
