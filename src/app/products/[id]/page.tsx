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
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
            {product.category}
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
            {product.name.split(' ').map((word, idx) => (
              <span key={`${product.id}-word-${idx}`} className={idx === 1 ? "text-gradient not-italic" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
            {product.tagline}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
             <Link 
              href={product.docs_url}
              target="_blank"
              className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
            >
              {product.cta_primary}
            </Link>
             <Link 
              href={product.repos[0]?.url || "#"}
              target="_blank"
              className="px-8 py-4 bg-surface border border-border text-foreground font-bold rounded-full hover:bg-surface-muted transition-all"
            >
              {product.cta_secondary}
            </Link>
          </div>
        </div>

        <div className="bg-surface/50 border border-border/50 rounded-[4rem] aspect-square flex items-center justify-center p-12 glass-panel shadow-premium relative group overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
           <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Shield className="w-12 h-12 text-primary" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">Security Posture</p>
              <h4 className="text-2xl font-black text-foreground uppercase">{product.maturity} Grade</h4>
           </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-border/20 grid md:grid-cols-3 gap-12">
         {[
           { icon: <Cpu className="w-5 h-5" />, label: "Problem", value: product.problem },
           { icon: <Zap className="w-5 h-5" />, label: "Outcome", value: product.outcome },
           { icon: <ExternalLink className="w-5 h-5" />, label: "Target Audience", value: product.audience }
         ].map((item) => (
           <div key={item.label} className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                 {item.icon}
                 <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
              </div>
              <p className="text-lg text-foreground font-medium leading-relaxed opacity-90">{item.value}</p>
           </div>
         ))}
      </section>

      {/* Integration Bar */}
      {product.integrates_with && (
        <section className="py-12 px-6 max-w-7xl mx-auto mb-24 bg-surface-muted/30 rounded-3xl border border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8">
             <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Integrates with</span>
             <div className="flex flex-wrap gap-4 items-center justify-center">
                {product.integrates_with.map((int: string) => (
                   <Link 
                    key={`${product.id}-int-${int}`} 
                    href={`/products/${int}`}
                    className="px-4 py-1.5 bg-surface border border-border/50 rounded-full text-xs font-bold text-foreground hover:border-primary/50 transition-all hover:-translate-y-0.5"
                   >
                     {int}
                   </Link>
                ))}
             </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20 bg-surface/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black text-muted-foreground uppercase tracking-widest">
           <div>© 2026 Talos Protocol</div>
           <div className="flex gap-8">
              <Link href="/products" className="hover:text-primary transition-colors">Catalog</Link>
              <Link href="https://github.com/talosprotocol/talos" className="hover:text-primary transition-colors">GitHub</Link>
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
