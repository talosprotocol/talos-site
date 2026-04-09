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
  repos?: { label: string; url: string }[];
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
  repos,
}: ProductCardProps) {
  const github_url = repos && repos.length > 0 ? repos[0].url : "#";
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
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow active:scale-[0.98]"
        >
          <span>{cta_primary}</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href={github_url || "#"} 
          target="_blank"
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all active:scale-[0.98]"
        >
          <svg className="w-3.5 h-3.5 opacity-70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>{cta_secondary}</span>
        </Link>
      </div>
    </div>
  );
}
