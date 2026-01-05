import { ShieldCheck, Zap, Lock, Eye } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function BentoCard({ title, description, icon, className = "" }: BentoCardProps) {
  return (
    <div className={`p-8 bg-surface/40 border border-border/50 rounded-3xl hover:border-primary/50 transition-all duration-500 group glass-panel ${className}`}>
      <div className="mb-6 p-3 bg-surface-muted rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm font-light">{description}</p>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-2xl mx-auto animate-in fade-in duration-700">
        <h2 className="text-4xl font-extrabold text-foreground mb-4 tracking-tight">Built for the Agent Economy</h2>
        <p className="text-muted-foreground text-lg">Talos provides the critical infrastructure needed to deploy autonomous agents with confidence and control.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard 
          title="Cryptographic Identity" 
          description="Self-sovereign DIDs verify every message. No more spoofed agents or man-in-the-middle attacks."
          icon={<ShieldCheck className="w-6 h-6 text-foreground group-hover:text-primary" />}
          className="md:col-span-2 shadow-premium"
        />
        <BentoCard 
          title="Capability Authorization" 
          description="Scoped, time-limited tokens replace static API keys. Grant access to tools, not entire accounts."
          icon={<Zap className="w-6 h-6 text-foreground group-hover:text-amber-500" />}
        />
        <BentoCard 
          title="Confidentiality" 
          description="Double Ratchet E2EE tunnels ensure forward secrecy. Messages are encrypted byte-for-byte."
          icon={<Lock className="w-6 h-6 text-foreground group-hover:text-emerald-500" />}
        />
        <BentoCard 
          title="Auditability" 
          description="Every capability check is logged to a tamper-evident merkle structure for compliance."
          icon={<Eye className="w-6 h-6 text-foreground group-hover:text-primary" />}
          className="md:col-span-2 bg-gradient-to-br from-surface to-surface-muted border-primary/20"
        />
      </div>
    </section>
  );
}
