import { getClaimsByScope } from "@/lib/claims";
import Link from 'next/link';

export function Benchmarks() {
  const stats = getClaimsByScope('benchmark_strip');

  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="text-white">
             <h2 className="text-2xl font-bold">Performance Benchmarks</h2>
             <p className="text-slate-400 text-sm">Hardware Context: Apple M4 Max</p>
          </div>
          <Link href="https://github.com/talosprotocol/talos/wiki/Benchmarks" target="_blank" className="text-sm font-medium text-blue-400 hover:text-blue-300">
            View Methodology &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
              <div className="text-3xl font-bold text-white mb-1">
                {stat.display_value}
                <span className="text-lg text-slate-400 font-normal ml-2">{stat.unit}</span>
              </div>
              <p className="text-slate-300 font-medium mb-2">{stat.claim}</p>
              {stat.notes && (
                <p className="text-xs text-slate-500 bg-slate-900/50 inline-block px-2 py-1 rounded">
                  {stat.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
