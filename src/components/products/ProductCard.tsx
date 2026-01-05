import Link from 'next/link';

interface ProductCardProps {
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
  github_url?: string;
}

export function ProductCard({
  name,
  category,
  maturity,
  tagline,
  audience,
  outcome,
  cta_primary,
  cta_secondary,
  docs_url,
  github_url,
}: ProductCardProps) {
  const maturityColors = {
    Alpha: "border-amber-500/30 text-amber-400 bg-amber-500/5",
    Beta: "border-blue-500/30 text-blue-400 bg-blue-500/5",
    Stable: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
  };

  return (
    <div className="flex flex-col h-full p-8 bg-surface/50 border border-border/50 rounded-3xl glass-panel transition-all duration-500 hover:border-primary/50 group">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-80">
          {category}
        </span>
        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${maturityColors[maturity]}`}>
          {maturity}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-sm font-medium text-muted-foreground mb-6 h-10 overflow-hidden line-clamp-2">
        {tagline}
      </p>

      <div className="space-y-4 mb-8 flex-grow">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Audience</p>
          <p className="text-sm text-foreground/80 font-medium">{audience}</p>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Solution</p>
          <p className="text-sm text-foreground/80 leading-relaxed italic border-l-2 border-primary/20 pl-3">
            &quot;{outcome}&quot;
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Link 
          href={docs_url} 
          target="_blank"
          className="flex items-center justify-center px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
        >
          {cta_primary}
        </Link>
        <Link 
          href={github_url || "#"} 
          target="_blank"
          className="flex items-center justify-center px-4 py-2.5 bg-surface-muted border border-border/50 text-foreground text-xs font-bold rounded-xl hover:bg-surface transition-all"
        >
          {cta_secondary}
        </Link>
      </div>
    </div>
  );
}
