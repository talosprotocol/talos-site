export const UCPFeature = () => {
  return (
    <section className="py-24 border-t border-slate-100 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Universal Commerce Protocol</h2>
          <p className="text-slate-600 text-lg">
            Talos enables AI agents to execute secure, allowlist-driven transactions on the Universal Commerce Protocol (UCP).
            Finalize checkouts and manage sessions with merchant-level policy enforcement.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-2 text-slate-900">Merchant Allowlist</h3>
              <p className="text-sm text-slate-600">Enforce transaction trust by restricting agent checkout to verified merchant domains.</p>
           </div>
           <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-2 text-slate-900">Secure Checkout</h3>
              <p className="text-sm text-slate-600">Full lifecycle support for UCP Shopping sessions including creation, updates, and completion.</p>
           </div>
           <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-2 text-slate-900">Budget Controls</h3>
              <p className="text-sm text-slate-600">Real-time spend limit validation and cryptographic audit logs for every transaction.</p>
           </div>
        </div>
      </div>
    </section>
  );
};
