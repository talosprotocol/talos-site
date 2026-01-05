import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/services/ServiceCard";
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight sm:text-6xl">
            Scale with <span className="text-gradient">Certainty</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Talos offers high-impact commercial services to ensure your agentic infrastructure is secure, performant, and compliant from day one.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
            featured={true}
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
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">How We Engage</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             { step: "01", title: "Discovery", desc: "Initial technical requirements gathering and scope definition." },
             { step: "02", title: "Review", desc: "Thorough security review of your current agent execution environment." },
             { step: "03", title: "Pilot", desc: "Guided deployment of Talos primitives in a controlled environment." },
             { step: "04", title: "Rollout", desc: "Full production deployment with ongoing security monitoring." }
           ].map((item) => (
             <div key={item.step} className="space-y-3">
                <span className="text-4xl font-bold text-blue-200">{item.step}</span>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-6">
             <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
             <Link href="/products" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Products
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
