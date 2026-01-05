import { EcosystemDiagram } from "./diagrams/EcosystemDiagram";
import { RuntimeFlowDiagram } from "./diagrams/RuntimeFlowDiagram";

export function Architecture() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Ecosystem View */}
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Contract-driven kernel</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Talos is built around a contract kernel: versioned schemas, APIs, test vectors, and canonical helpers. 
            Every SDK and service integrates through these published contracts, so components remain replaceable and independently shippable.
          </p>
          <p className="text-sm text-primary font-bold uppercase tracking-widest mt-4 opacity-70">
            Contracts are the integration boundary. No cross-repo source imports.
          </p>
        </div>
        
        <EcosystemDiagram />
      </div>

      {/* Runtime View */}
      <div className="space-y-8">
        <div className="max-w-3xl ml-auto text-right">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Runtime: Secure Tool Invocation</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Talos ensures that every agent interaction is authorized, encrypted, and audited by default. 
            The system maintains a tamper-proof record of every tool invocation across organizational boundaries.
          </p>
        </div>
        
        <RuntimeFlowDiagram />
      </div>
    </section>
  );
}
