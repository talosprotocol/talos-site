import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 max-w-7xl mx-auto pt-24 text-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20 blur-[120px]">
        <div className="w-[800px] h-[600px] bg-gradient-to-tr from-primary to-indigo-600 rounded-full animate-pulse" />
      </div>

      <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Security First Gateway
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight text-foreground sm:text-8xl leading-[1.05]">
          The trust layer for <br className="hidden sm:block"/>
          <span className="text-gradient">autonomous agents.</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Talos provides cryptographic identity, capability authorization, and auditable communication channels for the agent economy.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <a 
            href="mailto:contact@talosprotocol.com?subject=Talos%20Protocol%20Inquiry"
            className="px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-1 hover:shadow-blue-500/40"
          >
            Talk to an Expert
          </a>
          <Link 
            href="https://github.com/talosprotocol/talos/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-base font-bold text-foreground bg-surface border border-border rounded-full hover:bg-surface-muted transition-all hover:border-primary/50"
          >
            Read Documentation
          </Link>
        </div>
      </div>
      
      {/* Bottom Interface Preview Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_50px_2px_rgba(59,130,246,0.3)]" />
    </section>
  );
}
