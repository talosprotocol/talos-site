import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/products/ProductCard";
import products from "@/content/products.json";
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-border/30 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 blur-[120px]">
          <div className="w-[800px] h-[400px] bg-primary rounded-full mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
            Product <span className="text-gradient">Catalog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Talos is a multi-repo ecosystem built around a contract-driven kernel, with SDKs and services that integrate into agentic toolchains.
          </p>
          <div className="flex justify-center gap-4 pt-4">
             <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-black text-muted-foreground uppercase tracking-wider">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Stable Core
             </div>
             <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-black text-muted-foreground uppercase tracking-wider">
               <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Active Beta
             </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="mt-24 p-12 glass-panel border border-primary/20 rounded-[3rem] text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Need a custom implementation?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our engineering team helps design partners build secure, high-performance agent toolchains from the ground up.
          </p>
          <Link 
            href="/services" 
            className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20 bg-surface/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            © 2024 Talos Protocol. MIT Licensed.
          </div>
          <div className="flex gap-8">
             <Link href="https://github.com/talosprotocol/talos" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              GitHub
            </Link>
            <Link href="https://github.com/talosprotocol/talos/wiki" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Docs
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
