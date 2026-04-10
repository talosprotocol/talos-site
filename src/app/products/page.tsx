import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/products/ProductCard";
import { Footer } from "@/components/Footer";
import products from "@/content/products.json";
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  category: string;
  maturity: "Alpha" | "Beta" | "Stable";
  tagline: string;
  audience: string;
  problem: string;
  outcome: string;
  cta_primary: string;
  cta_secondary: string;
  docs_url: string;
  group: "Primary Products" | "SDKs";
  subgroup?: string;
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every component of the Talos Protocol is built for cryptographic integrity and verifiable security.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-24">
        {["Primary Products", "SDKs"].map((groupName) => {
          const groupProducts = typedProducts.filter(p => p.group === groupName);
          const subgroups = Array.from(new Set(groupProducts.map(p => p.subgroup || "General")));

          return (
            <div key={groupName} className="space-y-12">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-gray-900">{groupName}</h2>
                <div className="h-px flex-1 bg-gray-100" />
              </div>

              <div className="space-y-16">
                {subgroups.map(subgroupName => {
                  const subProducts = groupProducts.filter(p => (p.subgroup || "General") === subgroupName);
                  
                  return (
                    <div key={subgroupName} className="space-y-8">
                      {subgroupName !== "General" && (
                        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600">{subgroupName}</h3>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subProducts.map((product) => (
                          <ProductCard 
                            key={product.id} 
                            {...product} 
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
      </section>

      {/* Commercial Help */}
      <section className="py-20 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Need a custom implementation?</h2>
          <p className="text-gray-600">
            Our engineering team offers Advisory and Implementation services for enterprise-grade secure agent deployments.
          </p>
          <Link 
            href="/services" 
            className="inline-flex px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start with Advisory
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
