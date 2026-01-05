import { EcosystemDiagram } from "./diagrams/EcosystemDiagram";
import { RuntimeFlowDiagram } from "./diagrams/RuntimeFlowDiagram";

export function Architecture() {
  return (
    <section id="architecture" className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Section 1: Contracts */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              Contract-driven architecture.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The entire Talos ecosystem is built around a single source of truth: <strong className="text-gray-900">talos-contracts</strong>. Versioned schemas, test vectors, and canonical helpers ensure every component speaks the same cryptographic language.
            </p>
          </div>
          <EcosystemDiagram />
        </div>

        {/* Section 2: Runtime */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              Secure tool invocation.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In production, Talos provides end-to-end encryption and per-request authorization. A parallel audit channel captures every decision in a tamper-evident structure—without adding latency.
            </p>
          </div>
          <RuntimeFlowDiagram />
        </div>
      </div>
    </section>
  );
}
