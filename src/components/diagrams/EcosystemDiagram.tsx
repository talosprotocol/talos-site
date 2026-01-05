export function EcosystemDiagram() {
  return (
    <div className="w-full">
      <div className="relative w-full max-w-5xl mx-auto">
        <svg viewBox="0 0 800 400" className="w-full h-auto">
          <defs>
            <marker id="arrow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <path d="M 0 0 L 12 4 L 0 8 L 3 4 Z" fill="#0071e3" />
            </marker>
          </defs>

          {/* Central Hub */}
          <rect x="300" y="150" width="200" height="100" rx="16" fill="#5856d6" fillOpacity="0.1" stroke="#5856d6" strokeWidth="2" />
          <text x="400" y="190" textAnchor="middle" className="fill-foreground font-semibold text-[16px]">talos-contracts</text>
          <text x="400" y="215" textAnchor="middle" className="fill-muted-foreground text-[12px]">Schemas · Vectors · Helpers</text>

          {/* Top Row - SDKs */}
          <rect x="40" y="30" width="160" height="70" rx="12" fill="#0071e3" fillOpacity="0.05" stroke="#0071e3" strokeWidth="1.5" />
          <text x="120" y="55" textAnchor="middle" className="fill-foreground font-semibold text-[13px]">Universal SDK</text>
          <text x="120" y="75" textAnchor="middle" className="fill-muted-foreground text-[10px]">TS · Python · Java · Go</text>

          <rect x="320" y="30" width="160" height="70" rx="12" className="fill-surface stroke-border" strokeWidth="1.5" />
          <text x="400" y="55" textAnchor="middle" className="fill-foreground font-medium text-[13px]">Core Rust</text>
          <text x="400" y="75" textAnchor="middle" className="fill-muted-foreground text-[10px]">FFI Kernel · WASM</text>

          <rect x="600" y="30" width="160" height="70" rx="12" className="fill-surface stroke-border" strokeWidth="1.5" />
          <text x="680" y="55" textAnchor="middle" className="fill-foreground font-medium text-[13px]">Documentation</text>
          <text x="680" y="75" textAnchor="middle" className="fill-muted-foreground text-[10px]">API Specs · Guides</text>

          {/* Bottom Row - Services */}
          <rect x="40" y="300" width="160" height="70" rx="12" className="fill-surface stroke-border" strokeWidth="1.5" />
          <text x="120" y="330" textAnchor="middle" className="fill-foreground font-medium text-[13px]">MCP Connector</text>
          <text x="120" y="348" textAnchor="middle" className="fill-muted-foreground text-[10px]">Tool Bridge</text>

          <rect x="320" y="300" width="160" height="70" rx="12" className="fill-surface stroke-border" strokeWidth="1.5" />
          <text x="400" y="330" textAnchor="middle" className="fill-foreground font-medium text-[13px]">Gateway</text>
          <text x="400" y="348" textAnchor="middle" className="fill-muted-foreground text-[10px]">REST API</text>

          <rect x="600" y="300" width="160" height="70" rx="12" fill="#34c759" fillOpacity="0.05" stroke="#34c759" strokeWidth="1.5" />
          <text x="680" y="330" textAnchor="middle" className="fill-foreground font-medium text-[13px]">Audit Service</text>
          <text x="680" y="348" textAnchor="middle" className="fill-muted-foreground text-[10px]">Merkle Commits</text>

          {/* Arrows FROM center TO nodes */}
          <path d="M 310 150 L 160 100" fill="none" stroke="#0071e3" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 400 150 L 400 100" fill="none" stroke="#0071e3" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 490 150 L 640 100" fill="none" stroke="#0071e3" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <path d="M 310 250 L 160 300" fill="none" stroke="#0071e3" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 400 250 L 400 300" fill="none" stroke="#0071e3" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 490 250 L 640 300" fill="none" stroke="#0071e3" strokeWidth="2" markerEnd="url(#arrow)" />
        </svg>
      </div>
      <p className="mt-8 text-center text-muted-foreground text-base max-w-xl mx-auto">
        Contracts flow outward: every SDK and service integrates through published, versioned schemas.
      </p>
    </div>
  );
}
