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
    Alpha: "border-amber-300 text-amber-600 bg-amber-50",
    Beta: "border-blue-300 text-blue-600 bg-blue-50",
    Stable: "border-emerald-300 text-emerald-600 bg-emerald-50",
  };

  return (
    <div className="flex flex-col h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md group">
      <div className="flex justify-between items-start mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {category}
        </span>
        <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase border ${maturityColors[maturity]}`}>
          {maturity}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-600 mb-6 h-10 overflow-hidden line-clamp-2">
        {tagline}
      </p>

      <div className="space-y-4 mb-8 flex-grow">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Audience</p>
          <p className="text-sm text-gray-800 font-medium">{audience}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Solution</p>
          <p className="text-sm text-gray-700 leading-relaxed border-l-2 border-blue-200 pl-3">
            &quot;{outcome}&quot;
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Link 
          href={docs_url} 
          target="_blank"
          className="flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          {cta_primary}
        </Link>
        <Link 
          href={github_url || "#"} 
          target="_blank"
          className="flex items-center justify-center px-4 py-2.5 bg-gray-100 border border-gray-200 text-gray-800 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          {cta_secondary}
        </Link>
      </div>
    </div>
  );
}
