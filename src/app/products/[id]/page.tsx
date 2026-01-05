import { Navbar } from "@/components/Navbar";
import products from "@/content/products.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ExternalLink, Shield, Cpu, Zap } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-32 px-6 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold uppercase text-blue-600">
            {product.category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            {product.tagline}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
             <Link 
              href={product.docs_url}
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {product.cta_primary}
            </Link>
             <Link 
              href={product.repos[0]?.url || "#"}
              target="_blank"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              {product.cta_secondary}
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl aspect-square flex items-center justify-center p-12">
           <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                 <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Security Posture</p>
              <h4 className="text-xl font-bold text-gray-900">{product.maturity} Grade</h4>
           </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-gray-200 grid md:grid-cols-3 gap-10">
         {[
           { icon: <Cpu className="w-5 h-5" />, label: "Problem", value: product.problem },
           { icon: <Zap className="w-5 h-5" />, label: "Outcome", value: product.outcome },
           { icon: <ExternalLink className="w-5 h-5" />, label: "Target Audience", value: product.audience }
         ].map((item) => (
           <div key={item.label} className="space-y-3">
              <div className="flex items-center gap-2 text-blue-600">
                 {item.icon}
                 <span className="text-sm font-semibold uppercase tracking-wider">{item.label}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.value}</p>
           </div>
         ))}
      </section>

      {/* Integration Bar */}
      {product.integrates_with && (
        <section className="py-10 px-6 max-w-6xl mx-auto mb-16 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6">
             <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Integrates with</span>
             <div className="flex flex-wrap gap-3 items-center justify-center">
                {product.integrates_with.map((int: string) => (
                   <Link 
                    key={`${product.id}-int-${int}`} 
                    href={`/products/${int}`}
                    className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 transition-all"
                   >
                     {int}
                   </Link>
                ))}
             </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-sm text-gray-500">© 2026 Talos Protocol</div>
           <div className="flex gap-6">
              <Link href="/products" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Catalog</Link>
              <Link href="https://github.com/talosprotocol/talos" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">GitHub</Link>
           </div>
        </div>
      </footer>
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
