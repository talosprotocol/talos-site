export function RuntimeFlowDiagram() {
  return (
    <div className="w-full bg-surface/30 rounded-[3rem] border border-border/50 p-12 glass-panel group shadow-premium">
      <h3 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-12 text-center">
        Runtime: Secure tool invocation with auditability
      </h3>
      
      <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto">
        <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
          {/* Main Flow (Horizontal) */}
          <g className="main-path">
            {/* Boxes */}
            {[
              { id: 'agent', label: 'Agent / Client', x: 100, y: 150 },
              { id: 'sdk', label: 'Talos SDK (TS/Py)', x: 300, y: 150 },
            ].map((node) => (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                <rect x="-60" y="-30" width="120" height="60" rx="12" className="fill-surface stroke-border" />
                <text textAnchor="middle" alignmentBaseline="middle" className="fill-foreground font-black text-[11px] uppercase tracking-tighter italic">{node.label}</text>
              </g>
            ))}

            {/* Branching Logic */}
            <g transform="translate(500, 150)">
               {/* MCP Path */}
               <path d="M 0 0 L 100 -60" stroke="currentColor" className="text-primary/40" strokeWidth="2" fill="none" />
               <g transform="translate(100, -60)">
                  <rect x="-70" y="-30" width="140" height="60" rx="12" className="fill-primary/5 stroke-primary/30" />
                  <text textAnchor="middle" alignmentBaseline="middle" className="fill-foreground font-black text-[10px] uppercase">MCP Connector</text>
                  <text y="12" textAnchor="middle" className="fill-muted-foreground text-[8px] italic">(secure bridge)</text>
                  
                  <path d="M 70 0 L 120 0" stroke="currentColor" className="text-primary/40" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                  <g transform="translate(120, 0)">
                     <rect x="-50" y="-20" width="100" height="40" rx="8" className="fill-surface stroke-border" />
                     <text textAnchor="middle" alignmentBaseline="middle" className="fill-muted-foreground font-bold text-[9px]">MCP Tool Server</text>
                  </g>
               </g>

               {/* Gateway Path */}
               <path d="M 0 0 L 100 60" stroke="currentColor" className="text-primary/40" strokeWidth="2" fill="none" />
               <g transform="translate(100, 60)">
                  <rect x="-70" y="-30" width="140" height="60" rx="12" className="fill-surface stroke-border" />
                  <text textAnchor="middle" alignmentBaseline="middle" className="fill-foreground font-black text-[10px] uppercase">Gateway</text>
                  <text y="12" textAnchor="middle" className="fill-muted-foreground text-[8px] italic">(API entrypoint)</text>

                   <path d="M 70 0 L 120 0" stroke="currentColor" className="text-primary/40" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                   <g transform="translate(120, 0)">
                     <rect x="-50" y="-20" width="100" height="40" rx="8" className="fill-surface stroke-border" />
                     <text textAnchor="middle" alignmentBaseline="middle" className="fill-muted-foreground font-bold text-[9px]">Service / Tool</text>
                  </g>
               </g>
            </g>

            {/* Connecting Arrows with Labels */}
            <path d="M 160 150 L 240 150" stroke="currentColor" className="text-primary" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
            <text x="200" y="140" textAnchor="middle" className="fill-primary font-black text-[7px] uppercase tracking-widest antialiased">Encrypted session</text>

            <path d="M 360 150 L 500 150" stroke="currentColor" className="text-primary" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
            <text x="430" y="140" textAnchor="middle" className="fill-primary font-black text-[7px] uppercase tracking-widest antialiased">Per-request authorization</text>
          </g>

          {/* Audit Side Channel */}
          <g transform="translate(400, 320)">
             <path d="M -100 -170 L 0 0" stroke="currentColor" className="text-emerald-500/20" strokeWidth="2" fill="none" strokeDasharray="5 5" />
             <path d="M 100 -110 L 0 0" stroke="currentColor" className="text-emerald-500/20" strokeWidth="2" fill="none" strokeDasharray="5 5" />
             
             <rect x="-70" y="-30" width="140" height="60" rx="30" className="fill-emerald-500/5 stroke-emerald-500/30" />
             <text textAnchor="middle" alignmentBaseline="middle" className="fill-foreground font-black text-[11px] uppercase italic">Audit Service</text>
             <text x="0" y="-45" textAnchor="middle" className="fill-emerald-500 font-black text-[7px] uppercase tracking-widest antialiased">Audit commit (hash-only)</text>

             <path d="M 70 0 L 150 0" stroke="currentColor" className="text-emerald-500/30" strokeWidth="2" fill="none" markerEnd="url(#arrow-audit)" />
             <g transform="translate(150, 0)">
                <rect x="-50" y="-20" width="100" height="40" rx="8" className="fill-surface stroke-border" />
                <text textAnchor="middle" alignmentBaseline="middle" className="fill-muted-foreground font-black text-[10px] uppercase">Dashboard</text>
             </g>
          </g>

          {/* Arrow Markers */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orientation="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="fill-primary" />
            </marker>
            <marker id="arrow-audit" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orientation="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="fill-emerald-500" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}
