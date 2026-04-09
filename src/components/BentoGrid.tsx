import { ShieldCheck, Key, Lock, FileSearch } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BentoCard({ title, description, icon }: Readonly<BentoCardProps>) {
  return (
    <div className="p-8 bg-white rounded-[2rem] border border-slate-200 hover:border-slate-300 transition-all duration-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group">
      <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit border border-slate-100 group-hover:bg-slate-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="px-6 py-32 max-w-6xl mx-auto bg-white relative">
      <div className="absolute inset-0 bg-slate-50/50 -skew-y-2 -z-10 origin-bottom-left" />
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Security primitives for<br />the agent economy.
        </h2>
        <p className="text-xl text-slate-600 font-medium">
          Four cryptographic guarantees that make autonomous agents trustworthy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BentoCard 
          title="Decentralized Identity" 
          description="Every agent and service has a self-sovereign DID. Cryptographic verification replaces centralized trust. No spoofing. No impersonation."
          icon={<ShieldCheck className="w-8 h-8 text-slate-700" />}
        />
        <BentoCard 
          title="Capability Tokens" 
          description="Time-limited, scope-restricted authorization tokens. Grant access to specific tools—not entire accounts. Revocable at any time."
          icon={<Key className="w-8 h-8 text-slate-700" />}
        />
        <BentoCard 
          title="End-to-End Encryption" 
          description="Double Ratchet protocol provides forward secrecy. Every message encrypted. Session keys rotate automatically. Zero plaintext exposure."
          icon={<Lock className="w-8 h-8 text-slate-700" />}
        />
        <BentoCard 
          title="Immutable Audit" 
          description="Every capability check logged. Tamper-evident architecture. Compliance-ready. Full incident response visibility."
          icon={<FileSearch className="w-8 h-8 text-slate-700" />}
        />
      </div>
    </section>
  );
}
