import { ShieldCheck, Key, Lock, FileSearch } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BentoCard({ title, description, icon }: Readonly<BentoCardProps>) {
  return (
    <div className="p-8 bg-surface rounded-3xl border border-border hover:border-primary/30 transition-all duration-500">
      <div className="mb-6 p-4 bg-surface-muted rounded-2xl w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="px-6 py-32 max-w-6xl mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 tracking-tight">
          Security primitives for<br />the agent economy.
        </h2>
        <p className="text-xl text-muted-foreground">
          Four cryptographic guarantees that make autonomous agents trustworthy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BentoCard 
          title="Decentralized Identity" 
          description="Every agent and service has a self-sovereign DID. Cryptographic verification replaces centralized trust. No spoofing. No impersonation."
          icon={<ShieldCheck className="w-8 h-8 text-[#5856d6]" />}
        />
        <BentoCard 
          title="Capability Tokens" 
          description="Time-limited, scope-restricted authorization tokens. Grant access to specific tools—not entire accounts. Revocable at any time."
          icon={<Key className="w-8 h-8 text-[#ff9f0a]" />}
        />
        <BentoCard 
          title="End-to-End Encryption" 
          description="Double Ratchet protocol provides forward secrecy. Every message encrypted. Session keys rotate automatically. Zero plaintext exposure."
          icon={<Lock className="w-8 h-8 text-[#34c759]" />}
        />
        <BentoCard 
          title="Immutable Audit" 
          description="Every capability check logged to a Merkle tree. Tamper-evident by design. Compliance-ready. Full incident response visibility."
          icon={<FileSearch className="w-8 h-8 text-primary" />}
        />
      </div>
    </section>
  );
}
