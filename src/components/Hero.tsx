import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 max-w-7xl mx-auto pt-24 text-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-60" />

      <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl leading-[1.1]">
          The trust layer for <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">autonomous AI agents.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
          Talos provides cryptographic identity, capability authorization, and auditable communication channels for the agent economy.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a 
            href="mailto:contact@talosprotocol.com?subject=Talos%20Protocol%20Inquiry"
            className="px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5"
          >
            Talk to us
          </a>
          <Link 
            href="https://github.com/talosprotocol/talos/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-base font-semibold text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:border-slate-300"
          >
            Read Documentation
          </Link>
        </div>
      </div>
      
      {/* Abstract Background Element Refined */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 opacity-30 blur-3xl">
         <div className="w-[800px] h-[800px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      </div>
    </section>
  );
}
