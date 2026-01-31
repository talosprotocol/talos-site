import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/products/ProductCard";
import products from "@/content/products.json";
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  group: string;
  subgroup?: string;
  category: string;
  maturity: "Alpha" | "Beta" | "Stable";
  tagline: string;
  audience: string;
  problem: string;
  outcome: string;
  repos: { label: string; url: string; }[];
  docs_url: string;
  cta_primary: string;
  cta_secondary: string;
}

export default function ProductsPage() {
  const typedProducts = products as unknown as Product[];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight sm:text-6xl">
            Product <span className="text-gradient">Catalog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Talos ecosystem is built around a contract-driven kernel. Explore our SDKs, infrastructure, and tooling.
          </p>
          <div className="flex justify-center gap-3 pt-2">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
               <span className="w-2 h-2 rounded-full bg-emerald-500" /> Stable
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
               <span className="w-2 h-2 rounded-full bg-blue-500" /> Beta
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
               <span className="w-2 h-2 rounded-full bg-amber-500" /> Alpha
             </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-24">
        {["Primary Products", "SDKs"].map((groupName) => {
          const groupProducts = typedProducts.filter(p => p.group === groupName);
          if (groupProducts.length === 0) return null;

          // Split by subgroup
          const subgroups = Array.from(new Set(groupProducts.map(p => p.subgroup || "General")));

          return (
            <div key={groupName} className="space-y-12">
              <div className="border-l-4 border-blue-600 pl-4">
                <h2 className="text-3xl font-bold text-gray-900">{groupName}</h2>
              </div>

              <div className="space-y-16">
                {subgroups.map(subgroupName => {
                  const subProducts = groupProducts.filter(p => (p.subgroup || "General") === subgroupName);
                  const isCore = subgroupName === "Talos Protocol Core";

                  return (
                    <div key={subgroupName} className="space-y-8">
                      {subgroupName !== "General" && (
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-gray-700">{subgroupName}</h3>
                          {isCore && (
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] uppercase font-bold tracking-tight">
                              Open Source
                            </span>
                          )}
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subProducts.map((product) => (
                          <ProductCard 
                            key={product.id} 
                            {...product} 
                            github_url={product.repos[0]?.url}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <div className="mt-16 p-10 bg-gray-50 border border-gray-200 rounded-2xl text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Need a custom implementation?</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Our team helps design partners build secure agent infrastructure from the ground up.
          </p>
          <Link 
            href="/services" 
            className="inline-flex px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Talos Protocol. Apache 2.0 Licensed.
          </div>
          <div className="flex gap-6">
              <Link href="https://github.com/talosprotocol/talos" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
               GitHub
             </Link>
             <Link href="https://github.com/talosprotocol/talos/blob/main/docs/research/whitepaper.md" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
               Whitepaper
             </Link>
             <Link href="https://github.com/talosprotocol/talos/tree/main/docs" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
               Docs
             </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
