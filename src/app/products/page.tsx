import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/products/ProductCard";
import products from "@/content/products.json";
import Link from 'next/link';

export default function ProductsPage() {
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
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            // @ts-expect-error - ProductCard props spread from JSON metadata
            <ProductCard 
              key={product.id} 
              {...product} 
              github_url={product.repos[0]?.url}
            />
          ))}
        </div>

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
            © 2026 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-6">
             <Link href="https://github.com/talosprotocol/talos" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              GitHub
            </Link>
            <Link href="https://github.com/talosprotocol/talos/wiki" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Docs
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
