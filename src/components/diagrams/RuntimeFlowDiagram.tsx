export function RuntimeFlowDiagram() {
  return (
    <div className="w-full">
      <div className="relative w-full max-w-5xl mx-auto">
        <svg viewBox="0 0 900 400" className="w-full h-auto">
          <defs>
            <marker id="blueArrow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <path d="M 0 0 L 12 4 L 0 8 L 3 4 Z" fill="#0071e3" />
            </marker>
            <marker id="greenArrow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <path d="M 0 0 L 12 4 L 0 8 L 3 4 Z" fill="#34c759" />
            </marker>
          </defs>

          {/* Execution lane background */}
          <rect x="30" y="40" width="840" height="160" rx="16" fill="#0071e3" fillOpacity="0.02" stroke="#0071e3" strokeOpacity="0.1" strokeWidth="1" />
          <text x="50" y="65" fill="#0071e3" fontSize="11" fontWeight="600" letterSpacing="0.1em">EXECUTION PATH</text>

          {/* Agent Node */}
          <rect x="60" y="90" width="120" height="70" rx="12" fill="#ffffff" stroke="#d2d2d7" strokeWidth="1.5" />
          <text x="120" y="120" textAnchor="middle" fill="#1d1d1f" fontWeight="600" fontSize="14">Agent</text>
          <text x="120" y="140" textAnchor="middle" fill="#6e6e73" fontSize="10">AI Client</text>

          {/* Universal SDK Node */}
          <rect x="240" y="90" width="140" height="70" rx="12" fill="#0071e3" fillOpacity="0.08" stroke="#0071e3" strokeWidth="1.5" />
          <text x="310" y="115" textAnchor="middle" fill="#1d1d1f" fontWeight="600" fontSize="13">Universal SDK</text>
          <text x="310" y="133" textAnchor="middle" fill="#6e6e73" fontSize="9">TypeScript · Python</text>
          <text x="310" y="148" textAnchor="middle" fill="#6e6e73" fontSize="9">Java · Go · Rust</text>

          {/* MCP Connector */}
          <rect x="480" y="75" width="140" height="55" rx="10" fill="#ffffff" stroke="#d2d2d7" strokeWidth="1.5" />
          <text x="550" y="100" textAnchor="middle" fill="#1d1d1f" fontWeight="500" fontSize="12">MCP Connector</text>
          <text x="550" y="118" textAnchor="middle" fill="#6e6e73" fontSize="9">Tool Bridge</text>

          {/* Gateway */}
          <rect x="480" y="145" width="140" height="55" rx="10" fill="#ffffff" stroke="#d2d2d7" strokeWidth="1.5" />
          <text x="550" y="170" textAnchor="middle" fill="#1d1d1f" fontWeight="500" fontSize="12">Gateway</text>
          <text x="550" y="188" textAnchor="middle" fill="#6e6e73" fontSize="9">REST API</text>

          {/* Targets */}
          <rect x="720" y="80" width="100" height="45" rx="8" fill="#f5f5f7" stroke="#d2d2d7" strokeWidth="1" />
          <text x="770" y="108" textAnchor="middle" fill="#6e6e73" fontSize="11">MCP Tool</text>

          <rect x="720" y="150" width="100" height="45" rx="8" fill="#f5f5f7" stroke="#d2d2d7" strokeWidth="1" />
          <text x="770" y="178" textAnchor="middle" fill="#6e6e73" fontSize="11">Service</text>

          {/* Execution arrows */}
          <line x1="180" y1="125" x2="235" y2="125" stroke="#0071e3" strokeWidth="2" markerEnd="url(#blueArrow)" />
          <text x="208" y="115" textAnchor="middle" fill="#0071e3" fontSize="9" fontWeight="500">E2EE</text>

          <line x1="380" y1="115" x2="475" y2="102" stroke="#0071e3" strokeWidth="2" markerEnd="url(#blueArrow)" />
          <line x1="380" y1="135" x2="475" y2="172" stroke="#0071e3" strokeWidth="2" markerEnd="url(#blueArrow)" />
          <text x="420" y="108" fill="#0071e3" fontSize="9" fontWeight="500">Auth</text>

          <line x1="620" y1="102" x2="715" y2="102" stroke="#0071e3" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#blueArrow)" />
          <line x1="620" y1="172" x2="715" y2="172" stroke="#0071e3" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#blueArrow)" />

          {/* Audit lane */}
          <rect x="180" y="260" width="500" height="100" rx="16" fill="#34c759" fillOpacity="0.02" stroke="#34c759" strokeOpacity="0.1" strokeWidth="1" />
          <text x="200" y="285" fill="#34c759" fontSize="11" fontWeight="600" letterSpacing="0.1em">AUDIT CHANNEL</text>

          {/* Audit Service */}
          <rect x="290" y="305" width="130" height="45" rx="22" fill="#34c759" fillOpacity="0.08" stroke="#34c759" strokeOpacity="0.4" strokeWidth="1.5" />
          <text x="355" y="333" textAnchor="middle" fill="#1d1d1f" fontWeight="600" fontSize="12">Audit Service</text>

          {/* Dashboard */}
          <rect x="500" y="305" width="120" height="45" rx="10" fill="#ffffff" stroke="#d2d2d7" strokeWidth="1.5" />
          <text x="560" y="333" textAnchor="middle" fill="#1d1d1f" fontWeight="500" fontSize="11">Dashboard</text>

          {/* Dashed audit lines */}
          <path d="M 310 160 L 310 220 L 330 305" fill="none" stroke="#34c759" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" />
          <path d="M 550 200 L 550 250 L 380 305" fill="none" stroke="#34c759" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" />

          {/* Audit arrow */}
          <line x1="420" y1="328" x2="495" y2="328" stroke="#34c759" strokeWidth="2" markerEnd="url(#greenArrow)" />
          <text x="458" y="318" textAnchor="middle" fill="#34c759" fontSize="9" fontWeight="500">Hash</text>

          {/* Legend */}
          <g transform="translate(50, 375)">
            <line x1="0" y1="0" x2="25" y2="0" stroke="#0071e3" strokeWidth="2" />
            <text x="32" y="4" fill="#6e6e73" fontSize="10">Execution</text>
            <line x1="100" y1="0" x2="125" y2="0" stroke="#34c759" strokeWidth="1.5" strokeDasharray="6 4" />
            <text x="132" y="4" fill="#6e6e73" fontSize="10">Audit</text>
          </g>
        </svg>
      </div>
      <p className="mt-8 text-center text-gray-600 text-base max-w-xl mx-auto">
        Every request is encrypted, authorized, and logged. Parallel audit commits provide visibility without latency.
      </p>
    </div>
  );
}
