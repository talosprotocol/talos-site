import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Privacy
        </p>
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="text-muted">
          We designed this marketing site to collect as little personal data as
          possible. The current implementation uses static content only.
        </p>
      </div>

      <section className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Data we collect</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>
            <span className="font-semibold text-foreground">Contact:</span>{" "}
            Clicking “Talk to us” launches your email client; no data is stored
            on this site.
          </li>
          <li>
            <span className="font-semibold text-foreground">Analytics:</span>{" "}
            No analytics are enabled in this MVP. If added later, we will choose
            a privacy-friendly provider and disclose the exact events tracked.
          </li>
          <li>
            <span className="font-semibold text-foreground">Outbound links:</span>{" "}
            GitHub and wiki links navigate directly; no tracking parameters are
            appended.
          </li>
        </ul>
      </section>

      <section className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Security</h2>
        <p className="text-muted">
          Talos emphasizes verifiable security. If we enable a contact form in
          the future, it will use serverless handling with spam protection,
          enforce TLS, and avoid long-term storage of submissions by default.
        </p>
        <p className="text-muted">
          For product security details, review the{" "}
          <Link
            href="https://github.com/talosprotocol/talos/wiki/Threat-Model"
            className="text-brand transition hover:text-brand-strong"
          >
            Threat Model
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-muted">
          Questions about privacy? Reach us at{" "}
          <Link
            href="mailto:invest@talosprotocol.org?subject=Privacy%20question"
            className="text-brand transition hover:text-brand-strong"
          >
            invest@talosprotocol.org
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
