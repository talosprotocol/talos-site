export const UCPFeature = () => {
  return (
    <section className="py-24 border-t border-slate-100 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Universal Commerce Protocol</h2>
          <p className="text-slate-600 text-lg">
            Talos now connects AI agents to the real-world economy through UCP.
            Discover, negotiate, and transact securely with thousands of merchants.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-2 text-slate-900">Discovery</h3>
              <p className="text-sm text-slate-600">Find verified merchants exposing standardized capabilities.</p>
           </div>
           <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-2 text-slate-900">Negotiation</h3>
              <p className="text-sm text-slate-600">Secure handshake ensuring policy compliance and feature overlap.</p>
           </div>
           <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-2 text-slate-900">Payments</h3>
              <p className="text-sm text-slate-600">Opaque credential handling via secure Wallet Providers.</p>
           </div>
        </div>
      </div>
    </section>
  );
};
