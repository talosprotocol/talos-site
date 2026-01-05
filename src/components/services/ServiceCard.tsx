interface ServiceCardProps {
  title: string;
  description: string;
  deliverables: string[];
  engagement: string;
  cta: string;
  variant?: "primary" | "secondary";
}

export function ServiceCard({
  title,
  description,
  deliverables,
  engagement,
  cta,
  variant = "secondary",
}: ServiceCardProps) {
  return (
    <div className={`flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 h-full ${
      variant === "primary" 
        ? "bg-primary text-white border-primary shadow-2xl shadow-blue-500/20" 
        : "bg-surface/50 text-foreground border-border/50 glass-panel hover:border-primary/30"
    }`}>
      <h3 className="text-3xl font-black mb-4 tracking-tighter">{title}</h3>
      <p className={`text-lg mb-8 leading-relaxed ${
        variant === "primary" ? "text-blue-50 opacity-90" : "text-muted-foreground"
      }`}>
        {description}
      </p>

      <div className="flex-grow space-y-6 mb-10">
        <p className={`text-xs font-black uppercase tracking-widest ${
          variant === "primary" ? "text-white" : "text-primary"
        }`}>
          Key Deliverables
        </p>
        <ul className="space-y-4">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                variant === "primary" ? "bg-white" : "bg-primary"
              }`} />
              <span className={`text-sm font-medium ${
                variant === "primary" ? "text-blue-50" : "text-foreground/80"
              }`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 border-t border-current/10">
        <p className={`text-xs font-black uppercase tracking-widest mb-4 ${
          variant === "primary" ? "text-white/70" : "text-muted-foreground"
        }`}>
          Typical Engagement
        </p>
        <p className="font-bold text-lg mb-8">{engagement}</p>
        
        <a 
          href={`mailto:contact@talosprotocol.com?subject=Inquiry:%20${encodeURIComponent(title)}`}
          className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all ${
            variant === "primary" 
              ? "bg-white text-primary hover:bg-blue-50" 
              : "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
