import Link from 'next/link';

import claims from '../content/claims.json';

export function Benchmarks() {
  // Filter for claims that belong on the benchmark strip
  const stats = claims.filter(c => c.scope.includes('benchmark_strip'));

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Performance at scale.
          </h2>
          <p className="text-xl text-gray-600">
            Cryptographic security without the latency tax. Verified on Apple Silicon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.id} className="p-8 bg-white rounded-3xl border border-gray-200 text-center shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-4">
                {stat.metric_key.split('.')[1].replace('_', ' ')}
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-5xl font-semibold text-gray-900">{stat.display_value}</span>
                {stat.unit && <span className="text-lg font-medium text-blue-600">{stat.unit}</span>}
              </div>
              <p className="text-gray-600">{stat.claim}</p>
              <div className="mt-4 text-xs text-gray-400">
                Source: {stat.notes}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/methodology" 
            className="text-blue-600 font-medium hover:underline"
          >
            View full methodology →
          </Link>
        </div>
      </div>
    </section>
  );
}
