import Link from 'next/link';

export function Benchmarks() {
  const stats = [
    { 
      label: "Handshake", 
      value: "< 2ms", 
      description: "Key exchange completes in under 2 milliseconds",
    },
    { 
      label: "Throughput", 
      value: "10k+", 
      unit: "ops/sec",
      description: "Ed25519 sign/verify on single core",
    },
    { 
      label: "Audit Overhead", 
      value: "2KB", 
      unit: "per 1M ops",
      description: "Merkle anchors, not raw logs",
    }
  ];

  return (
    <section className="py-32 px-6 bg-surface-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            Performance at scale.
          </h2>
          <p className="text-xl text-muted-foreground">
            Cryptographic security without the latency tax.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8 bg-surface rounded-3xl border border-border text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">{stat.label}</p>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-5xl font-semibold text-foreground">{stat.value}</span>
                {stat.unit && <span className="text-lg font-medium text-primary">{stat.unit}</span>}
              </div>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/developers" 
            className="text-primary font-medium hover:underline"
          >
            View full methodology →
          </Link>
        </div>
      </div>
    </section>
  );
}
