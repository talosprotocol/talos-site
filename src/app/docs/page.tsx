import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "New to Talos? Start with these guides to get up and running quickly.",
      links: [
        { label: "Quickstart Guide", href: "https://github.com/talosprotocol/talos/blob/main/docs/getting-started/quickstart.md" },
        { label: "Mental Model", href: "https://github.com/talosprotocol/talos/blob/main/docs/getting-started/mental-model.md" },
        { label: "One-Command Demo", href: "https://github.com/talosprotocol/talos/blob/main/docs/getting-started/one-command-demo.md" },
      ]
    },
    {
      title: "Architecture",
      description: "Deep dive into the system design, protocol guarantees, and security proofs.",
      links: [
        { label: "Architecture Overview", href: "https://github.com/talosprotocol/talos/blob/main/docs/architecture/overview.md" },
        { label: "Protocol Guarantees", href: "https://github.com/talosprotocol/talos/blob/main/docs/architecture/protocol-guarantees.md" },
        { label: "Threat Model", href: "https://github.com/talosprotocol/talos/blob/main/docs/architecture/threat-model.md" },
      ]
    },
    {
      title: "Features",
      description: "Explore core capabilities like Identity, Authorization, and Auditing.",
      links: [
        { label: "Agent Identity", href: "https://github.com/talosprotocol/talos/blob/main/docs/features/identity/agent-identity.md" },
        { label: "Capability Authz", href: "https://github.com/talosprotocol/talos/blob/main/docs/features/authorization/capability-authorization.md" },
        { label: "Audit Explorer", href: "https://github.com/talosprotocol/talos/blob/main/docs/features/observability/audit-explorer.md" },
      ]
    },
    {
      title: "SDK & API",
      description: "Build on Talos with our multi-language SDKs and comprehensive API reference.",
      links: [
        { label: "Python SDK", href: "https://github.com/talosprotocol/talos/blob/main/docs/sdk/python-sdk.md" },
        { label: "TypeScript SDK", href: "https://github.com/talosprotocol/talos/blob/main/docs/sdk/typescript-sdk.md" },
        { label: "API Reference", href: "https://github.com/talosprotocol/talos/blob/main/docs/api/api-reference.md" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Talos Documentation</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             Everything you need to build, deploy, and secure the agentic future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section) => (
            <div key={section.title} className="p-8 border rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <p className="text-slate-600 mb-6 flex-grow">{section.description}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                    >
                      {link.label} ↗
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-10 border border-blue-100 rounded-2xl bg-blue-50/50 flex flex-col md:flex-row justify-between items-center gap-8">
           <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Full Documentation</h2>
              <p className="text-slate-600 max-w-md">
                Our complete documentation is maintained as a living knowledge base in our primary repository.
              </p>
           </div>
           
           <Link 
             href="https://github.com/talosprotocol/talos/tree/main/docs" 
             target="_blank" 
             className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
           >
             Browse all docs on GitHub ↗
           </Link>
        </div>
      </div>

      <footer className="py-12 px-6 border-t border-slate-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © 2026 Talos Protocol. Open Source (Apache-2.0).
          </div>
          <div className="flex gap-6">
             <Link href="/docs" className="text-sm text-slate-900 font-medium">
              Docs
            </Link>
             <Link href="/protocol" className="text-sm text-slate-500 hover:text-slate-900">
              Whitepaper
            </Link>
             <Link href="https://github.com/talosprotocol/talos" className="text-sm text-slate-500 hover:text-slate-900">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
