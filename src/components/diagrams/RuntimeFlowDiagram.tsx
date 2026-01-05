'use client';

export function RuntimeFlowDiagram() {
  return (
    <div className="w-full bg-surface/30 border border-border/30 rounded-3xl p-8 md:p-12 glass-panel mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <h3 className="text-xl font-bold text-foreground mb-12 text-center uppercase tracking-widest opacity-80">
        Lifecycle: Secure Invitation & Audit
      </h3>

      <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto">
        <svg viewBox="0 0 1000 300" className="w-full h-full">
          {/* Main Flow (Execution Path) */}
          <g>
            {/* Steps */}
            {[
              { label: "Agent Client", sub: "User/Bot", x: 100, y: 100, color: "var(--muted)" },
              { label: "Talos SDK", sub: "Python / TS", x: 300, y: 100, color: "var(--primary)" },
              { label: "Gateway", sub: "FastAPI Bridge", x: 500, y: 100, color: "var(--primary)" },
              { label: "MCP Tool", sub: "Target Resource", x: 700, y: 100, color: "var(--accent)" },
              { label: "Resource", sub: "Data/Action", x: 900, y: 100, color: "var(--muted)" },
            ].map((node, i, arr) => (
              <g key={node.label}>
                {/* Arrow to Next */}
                {i < arr.length - 1 && (
                  <g>
                    <line x1={node.x + 60} y1={100} x2={arr[i+1].x - 60} y2={100} stroke="var(--border)" strokeWidth="2" strokeDasharray="4 2" />
                    <polygon points={`${arr[i+1].x-65},95 ${arr[i+1].x-55},100 ${arr[i+1].x-65},105`} fill="var(--border)" />
                  </g>
                )}
                
                <rect x={node.x-60} y={70} width="120" height="60" rx="8" fill="var(--surface)" stroke={node.color} strokeOpacity="0.5" strokeWidth="2" />
                <text x={node.x} y={100} textAnchor="middle" fill="white" className="text-xs font-bold">{node.label}</text>
                <text x={node.x} y={115} textAnchor="middle" fill="var(--muted-foreground)" className="text-[9px] uppercase tracking-tighter">{node.sub}</text>
              </g>
            ))}
          </g>

          {/* Audit Channel (Side Path) */}
          <g>
            <path d="M 500 130 Q 500 220 700 220" fill="none" stroke="var(--primary)" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="8 4" />
            <circle cx="500" cy="130" r="4" fill="var(--primary)" />
            
            <rect x={700} y={190} width="140" height="60" rx="8" fill="var(--surface)" stroke="var(--secondary)" strokeWidth="2" strokeOpacity="0.6" />
            <text x={770} y={220} textAnchor="middle" fill="white" className="text-xs font-bold">Audit Service</text>
            <text x={770} y={235} textAnchor="middle" fill="var(--secondary)" className="text-[9px] uppercase font-black">Immutable Logs</text>

            <line x1={840} y1={220} x2={900} y2={220} stroke="var(--border)" strokeWidth="1" />
            
            <rect x={900} y={190} width="80" height="60" rx="8" fill="var(--surface)" stroke="var(--muted)" strokeWidth="1" />
            <text x={940} y={225} textAnchor="middle" fill="white" className="text-[10px] font-bold">Dashboard</text>
          </g>

          {/* Annotations */}
          <text x="400" y="50" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 italic">Auth & Encrypt Path</text>
          <text x="600" y="270" textAnchor="middle" fill="var(--secondary)" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 italic">Verification Path</text>
        </svg>
      </div>
    </div>
  );
}
