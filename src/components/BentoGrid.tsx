import { ShieldCheck, Zap, Lock, Eye } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function BentoCard({ title, description, icon, className = "" }: BentoCardProps) {
  return (
    <div className={`p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group ${className}`}>
      <div className="mb-4 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm font-light">{description}</p>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Built for the Agent Economy</h2>
        <p className="text-slate-500">Talos provides the critical infrastructure needed to deploy autonomous agents with confidence and control.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard 
          title="Cryptographic Identity" 
          description="Self-sovereign DIDs verify every message. No more spoofed agents or man-in-the-middle attacks."
          icon={<ShieldCheck className="w-6 h-6 text-slate-700 group-hover:text-blue-600" />}
          className="md:col-span-2 shadow-sm"
        />
        <BentoCard 
          title="Capability Authorization" 
          description="Scoped, time-limited tokens replace static API keys. Grant access to tools, not entire accounts."
          icon={<Zap className="w-6 h-6 text-slate-700 group-hover:text-amber-500" />}
        />
        <BentoCard 
          title="Confidentiality" 
          description="Double Ratchet E2EE tunnels ensure forward secrecy. Messages are encrypted byte-for-byte."
          icon={<Lock className="w-6 h-6 text-slate-700 group-hover:text-emerald-500" />}
        />
        <BentoCard 
          title="Auditability" 
          description="Every capability check is logged to a tamper-evident merkle structure for compliance."
          icon={<Eye className="w-6 h-6 text-slate-100 group-hover:text-white" />}
          className="md:col-span-2 bg-slate-900 text-white border-slate-800 hover:border-slate-700 hover:shadow-slate-900/20"
        />
      </div>
    </section>
  );
}
