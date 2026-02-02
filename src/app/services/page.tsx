import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  const tiers = [
    {
      id: "advisory",
      ordinal: "Tier 1 of 3",
      title: "Advisory",
      description: "Threat model and architecture review for secure agent deployments.",
      deliverables: [
        "Architecture security audit",
        "Custom threat model report",
        "Implementation roadmap",
        "Policy & compliance mapping"
      ],
      engagement: "2-4 Weeks",
      cta: "Book Advisory Call",
      featured: false
    },
    {
      id: "implementation",
      ordinal: "Tier 2 of 3",
      title: "Implementation",
      description: "You ship a hardened Talos stack in your environment.",
      additive_summary: "Includes Advisory + deployment and hardening",
      deliverables: [
        "Production Gateway setup",
        "Custom MCP Connector build",
        "SDK integration support",
        "Sovereign host hardening"
      ],
      engagement: "4-12 Weeks",
      cta: "Talk to Engineering",
      featured: true
    },
    {
      id: "assurance",
      ordinal: "Tier 3 of 3",
      title: "Assurance",
      description: "Mission-critical operations with accountable security ownership.",
      additive_summary: "Includes Implementation + SLA, incident response, and dedicated lead",
      deliverables: [
        "Priority SLAs and escalation paths",
        "Dedicated technical lead",
        "Sovereign roadmap alignment",
        "Ongoing governance & reviews"
      ],
      engagement: "Annual Partnership",
      cta: "Inquire about Assurance",
      featured: false
    }
  ];

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
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        {/* Additive Banner */}
        <div className="max-w-3xl mx-auto p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-sm font-semibold text-blue-900">
                Tiers are additive. <span className="font-normal text-blue-800">Implementation includes Advisory. Assurance includes Implementation.</span>
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <ServiceCard 
              key={tier.id}
              title={tier.title}
              description={tier.description}
              deliverables={tier.deliverables}
              engagement={tier.engagement}
              cta={tier.cta}
              featured={tier.featured}
              ordinal={tier.ordinal}
              additive_summary={tier.additive_summary}
            />
          ))}
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

      <Footer />
    </main>
  );
}
