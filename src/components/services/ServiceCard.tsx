interface ServiceCardProps {
  title: string;
  description: string;
  deliverables: string[];
  engagement: string;
  cta: string;
  featured?: boolean;
  ordinal: string;
  additive_summary?: string;
}

export function ServiceCard({
  title,
  description,
  deliverables,
  engagement,
  cta,
  featured = false,
  ordinal,
  additive_summary,
}: Readonly<ServiceCardProps>) {
  return (
    <div className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${
      featured 
        ? "bg-white border-blue-200 shadow-lg ring-1 ring-blue-100" 
        : "bg-white border-gray-200"
    }`}>
      {featured && (
        <span className="self-start px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
          Most Popular
        </span>
      )}
      
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{ordinal}</span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <div className="flex-grow space-y-4 mb-8">
        {additive_summary && (
          <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-sm text-blue-800 font-medium mb-4">
             {additive_summary}
          </div>
        )}

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Key Deliverables</p>
        <ul className="space-y-3">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-blue-600" />
              <span className="text-sm text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Typical Engagement</p>
        <p className="font-semibold text-gray-900 mb-6">{engagement}</p>
        
        <a 
          href={`mailto:reach@talosprotocol.com?subject=Inquiry:%20${encodeURIComponent(title)}`}
          className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
            featured 
              ? "bg-blue-600 text-white hover:bg-blue-700" 
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
