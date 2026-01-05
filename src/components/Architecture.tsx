import { EcosystemDiagram } from "./diagrams/EcosystemDiagram";
import { RuntimeFlowDiagram } from "./diagrams/RuntimeFlowDiagram";

export function Architecture() {
  return (
    <section id="architecture" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Section 1: Contracts */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
             <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight uppercase italic underline decoration-primary/20">
              Contract-driven kernel
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Talos is built around a contract kernel: versioned schemas, APIs, test vectors, and canonical helpers. Every SDK and service integrates through these published contracts, so components remain replaceable and independently shippable.
              </p>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary antialiased">
                Contracts are the integration boundary. No cross-repo source imports.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <EcosystemDiagram />
          </div>
        </div>

        {/* Section 2: Runtime */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2">
            <RuntimeFlowDiagram />
          </div>
          <div className="space-y-8 order-1">
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight uppercase italic underline decoration-emerald-500/20">
              Runtime: Secure Tool Invocation
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              In production, the Talos stack provides high-performance encryption and per-request authorization. Every call is captured via a non-blocking hash-only audit channel, ensuring visibility without compromising execution speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
