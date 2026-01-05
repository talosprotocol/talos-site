export function Architecture() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
       <h2 className="text-3xl font-bold text-slate-900 mb-12">Contract-Driven Kernel</h2>
       <div className="p-12 bg-slate-50 border border-slate-100 rounded-3xl flex justify-center">
            {/* Simple Architecture SVG */}
            <svg viewBox="0 0 800 400" className="w-full max-w-[800px]">
                <rect x="50" y="50" width="700" height="300" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <text x="400" y="30" textAnchor="middle" className="text-sm fill-slate-500 font-bold">Talos V4 Architecture</text>
                
                {/* Kernel */}
                <rect x="250" y="150" width="300" height="100" rx="8" fill="#0f172a" />
                <text x="400" y="205" textAnchor="middle" fill="white" className="font-bold">Rust Kernel (talos-core)</text>
                
                {/* Inputs */}
                <rect x="100" y="100" width="80" height="40" rx="4" fill="#3b82f6" />
                <text x="140" y="125" textAnchor="middle" fill="white" fontSize="12">Contracts</text>
                
                <line x1="180" y1="120" x2="250" y2="170" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Outputs */}
                <rect x="600" y="180" width="100" height="40" rx="4" fill="#64748b" />
                <text x="650" y="205" textAnchor="middle" fill="white" fontSize="12">Gateway</text>
                
                <line x1="550" y1="200" x2="600" y2="200" stroke="#94a3b8" strokeWidth="2" />
            </svg>
       </div>
    </section>
  );
}
