'use client';

export function EcosystemDiagram() {
  return (
    <div className="w-full bg-surface/50 border border-border/50 rounded-3xl p-8 md:p-12 glass-panel shadow-premium animate-in fade-in duration-1000">
      <h3 className="text-xl font-bold text-foreground mb-8 text-center uppercase tracking-widest opacity-80">
        Contract-Driven Ecosystem
      </h3>
      
      <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto">
        <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Background Connections Glow */}
          <circle cx="400" cy="225" r="180" fill="url(#glowGradient)" />

          {/* Center Anchor: talos-contracts */}
          <g className="cursor-default group">
            <rect x="300" y="185" width="200" height="80" rx="12" fill="#3b82f6" className="transition-all duration-300 group-hover:fill-blue-500" />
            <text x="400" y="220" textAnchor="middle" fill="white" className="text-lg font-black tracking-tight">talos-contracts</text>
            <text x="400" y="240" textAnchor="middle" fill="white" className="text-[10px] opacity-80 uppercase font-bold tracking-widest">Single Source of Truth</text>
          </g>

          {/* Consumers (Circular Layout) */}
          {[
            { id: "talos-sdk-ts", label: "TS SDK", x: 400, y: 50 },
            { id: "talos-sdk-py", label: "Python SDK", x: 650, y: 100 },
            { id: "talos-gateway", label: "Gateway", x: 700, y: 225 },
            { id: "talos-dashboard", label: "Dashboard", x: 650, y: 350 },
            { id: "talos-mcp-connector", label: "MCP Bridge", x: 400, y: 400 },
            { id: "talos-audit-service", label: "Audit Service", x: 150, y: 350 },
            { id: "talos-core-rs", label: "Core Rust", x: 100, y: 225 },
            { id: "talos-docs", label: "Docs / Examples", x: 150, y: 100 },
          ].map((item) => {
            // Calculate connection lines from center (400, 225) to item
            const dx = item.x - 400;
            const dy = item.y - 225;
            const dist = Math.hypot(dx, dy);
            const startX = 400 + (dx * 100) / dist;
            const startY = 225 + (dy * 40) / dist;
            const endX = item.x - (dx * 60) / dist;
            const endY = item.y - (dy * 20) / dist;

            return (
              <g key={item.id} className="group">
                {/* Connection Line */}
                <line 
                  x1={startX} y1={startY} x2={endX} y2={endY} 
                  stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4"
                  className="transition-all duration-500 group-hover:stroke-primary group-hover:stroke-[2]"
                />
                
                {/* Node */}
                <rect 
                  x={item.x - 60} y={item.y - 20} width="120" height="40" rx="8" 
                  className="fill-surface stroke-border transition-all duration-300 group-hover:fill-surface-muted group-hover:stroke-primary" 
                />
                <text 
                  x={item.x} y={item.y + 5} textAnchor="middle" 
                  className="fill-muted-foreground group-hover:fill-foreground text-xs font-bold transition-colors"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-8 text-center text-muted-foreground text-sm max-w-2xl mx-auto italic">
        &quot;Every repository integrates through published, versioned contracts. No deep links. No vendoring.&quot;
      </p>
    </div>
  );
}
