interface ServiceCardProps {
  title: string;
  description: string;
  deliverables: string[];
  engagement: string;
  cta: string;
  featured?: boolean;
}

export function ServiceCard({
  title,
  description,
  deliverables,
  engagement,
  cta,
  featured = false,
}: Readonly<ServiceCardProps>) {
  return (
    <div className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${
      featured 
        ? "bg-surface border-primary/30 shadow-lg ring-1 ring-primary/10" 
        : "bg-surface border-border"
    }`}>
      {featured && (
        <span className="self-start px-3 py-1 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

      <div className="flex-grow space-y-4 mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Deliverables</p>
        <ul className="space-y-3">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-border">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Typical Engagement</p>
        <p className="font-semibold text-foreground mb-6">{engagement}</p>
        
        <a 
          href={`mailto:contact@talosprotocol.com?subject=Inquiry:%20${encodeURIComponent(title)}`}
          className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
            featured 
              ? "bg-primary text-white hover:bg-blue-700" 
              : "bg-surface-muted text-foreground hover:bg-primary/10"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
