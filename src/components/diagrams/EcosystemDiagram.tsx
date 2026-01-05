export function EcosystemDiagram() {
  const items = [
    { id: "talos", label: "talos (core protocol)", x: 400, y: 50 },
    { id: "talos-sdk-ts", label: "talos-sdk-ts", x: 650, y: 100 },
    { id: "talos-sdk-py", label: "talos-sdk-py", x: 750, y: 225 },
    { id: "talos-core-rs", label: "talos-core-rs", x: 650, y: 350 },
    { id: "talos-gateway", label: "talos-gateway", x: 400, y: 400 },
    { id: "talos-audit-service", label: "talos-audit-service", x: 150, y: 350 },
    { id: "talos-mcp-connector", label: "talos-mcp-connector", x: 50, y: 225 },
    { id: "talos-dashboard", label: "talos-dashboard", x: 150, y: 100 },
    { id: "talos-docs", label: "talos-docs / examples", x: 250, y: 50 },
  ];

  return (
    <div className="w-full bg-surface/30 rounded-[3rem] border border-border/50 p-12 glass-panel group shadow-premium">
      <h3 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-12 text-center">
        Talos v4: Contract-driven kernel
      </h3>
      
      <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto">
        <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
          {/* Connection Lines First */}
          {items.map((item) => {
            const dx = item.x - 400;
            const dy = item.y - 225;
            const dist = Math.hypot(dx, dy);
            // Offset from center circle (80px radius)
            const startX = 400 + (dx * 80) / dist;
            const startY = 225 + (dy * 30) / dist;
            // Offset from target box
            const endX = item.x - (dx * 50) / dist;
            const endY = item.y - (dy * 20) / dist;
            
            return (
              <g key={`conn-${item.id}`}>
                <path
                  d={`M ${startX} ${startY} L ${endX} ${endY}`}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary/20 group-hover:text-primary/40 transition-colors duration-700"
                  fill="none"
                  strokeDasharray="4 4"
                />
                <circle cx={endX} cy={endY} r="2" className="fill-primary" />
              </g>
            );
          })}

          {/* Central Anchor: talos-contracts */}
          <g transform="translate(400, 225)">
            <rect 
              x="-100" y="-40" width="200" height="80" rx="20"
              className="fill-primary/10 stroke-primary stroke-2"
            />
            <text 
              y="-10" textAnchor="middle" 
              className="fill-foreground font-black text-sm uppercase tracking-widest antialiased"
            >
              talos-contracts
            </text>
            <text 
              y="15" textAnchor="middle" 
              className="fill-muted-foreground font-medium text-[10px] italic underline decoration-primary/30"
            >
              Schemas • OpenAPI • Test Vectors
            </text>
            <text 
              y="28" textAnchor="middle" 
              className="fill-muted-foreground font-medium text-[10px] italic decoration-primary/30"
            >
              Canonical Helpers
            </text>
          </g>

          {/* Surrounding Consumers */}
          {items.map((item) => (
            <g key={item.id} transform={`translate(${item.x}, ${item.y})`} className="cursor-default">
              <rect 
                x="-60" y="-20" width="120" height="40" rx="10"
                className="fill-surface stroke-border border-border/50 hover:stroke-primary/50 transition-colors duration-500"
              />
              <text 
                textAnchor="middle" alignmentBaseline="middle"
                className="fill-foreground font-bold text-[10px]"
              >
                {item.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      
      <p className="mt-8 text-center text-muted-foreground text-sm max-w-2xl mx-auto italic">
        &quot;Every repo integrates through published, versioned contracts. No deep links. No vendoring.&quot;
      </p>
    </div>
  );
}
