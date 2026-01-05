import { getClaimsByScope } from "@/lib/claims";
import Link from 'next/link';

export function Benchmarks() {
  const stats = getClaimsByScope('benchmark_strip');

  return (
    <section className="bg-background py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="space-y-1">
             <h2 className="text-3xl font-bold text-foreground tracking-tight">System Performance</h2>
             <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Hardware: Apple M4 Max</p>
          </div>
          <Link href="https://github.com/talosprotocol/talos/wiki/Benchmarks" target="_blank" className="px-6 py-2 rounded-full border border-primary/30 text-sm font-bold text-primary hover:bg-primary/10 transition-all">
            Full Methodology &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="p-8 bg-surface/50 rounded-3xl border border-border/50 glass-panel hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl font-black text-foreground mb-2 flex items-baseline gap-2">
                {stat.display_value}
                <span className="text-base text-muted-foreground font-medium">{stat.unit}</span>
              </div>
              <p className="text-foreground font-bold text-lg mb-3">{stat.claim}</p>
              {stat.notes && (
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black bg-surface-muted inline-block px-3 py-1 rounded-full">
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
