import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "What is Talos", href: "#what-is-talos" },
  { label: "Why now", href: "#why-now" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Open source", href: "#open-source" },
  { label: "Contact", href: "#contact" },
];

const proofPoints = [
  "Capability tokens with session-cached fast path",
  "Forward secrecy via Double Ratchet",
  "Verifiable audit trail anchored on-chain",
];

const problemPoints = [
  {
    title: "Identity",
    detail:
      "Agents need self-sovereign, cryptographic identity instead of static API keys.",
  },
  {
    title: "Authorization",
    detail:
      "Role-based access breaks down for tools; scoped capability tokens keep permissions precise and revocable.",
  },
  {
    title: "Confidentiality",
    detail:
      "TLS alone is not enough; agents require session-level forward secrecy so every hop is protected.",
  },
  {
    title: "Accountability",
    detail:
      "Operators need verifiable audit trails for every action—not log lines that can be edited.",
  },
  {
    title: "Decentralization",
    detail:
      "Central servers create choke points; Talos uses P2P with DHT discovery to keep agents resilient.",
  },
];

const solutionTiles = [
  {
    title: "Identity",
    description:
      "Self-sovereign DIDs make every agent and tool verifiable without centralized issuers.",
    source: "https://github.com/talosprotocol/talos",
  },
  {
    title: "Authorization",
    description:
      "Signed, scoped, expiring capability tokens replace ACLs—and support delegation when needed.",
    source: "https://github.com/talosprotocol/talos/wiki/Capability-Authorization",
  },
  {
    title: "Confidentiality",
    description:
      "Double Ratchet encryption keeps sessions forward-secure, even if a key is later compromised.",
    source: "https://github.com/talosprotocol/talos",
  },
  {
    title: "Accountability",
    description:
      "Every request produces verifiable, blockchain-anchored proof for auditors and security teams.",
    source: "https://github.com/talosprotocol/talos",
  },
  {
    title: "Decentralization",
    description:
      "Peer-to-peer transport with DHT discovery removes single points of failure for agent communication.",
    source: "https://github.com/talosprotocol/talos",
  },
];

const steps = [
  {
    title: "Establish identity",
    detail:
      "Agents exchange DIDs and keys so each request starts with a verifiable actor.",
  },
  {
    title: "Negotiate a secure session",
    detail:
      "Talos sets up a forward-secure channel, handling encryption and sequencing automatically.",
  },
  {
    title: "Authorize every tool call",
    detail:
      "Each request carries a capability token; subsequent calls reuse a session cache for sub-millisecond checks.",
  },
];

const benchmarks = [
  {
    metric: "Ed25519 verification",
    value: "7,023 ops/sec",
    context: "M4 Max, loopback bench for signed tool calls.",
    source:
      "https://github.com/talosprotocol/talos/wiki/Benchmarks#1-cryptographic-primitives",
  },
  {
    metric: "Capability authorize_fast",
    value: "~4µs avg",
    context: "Session-cached path; targets <1ms p99 across workloads.",
    source:
      "https://github.com/talosprotocol/talos/wiki/Capability-Authorization#performance-slas",
  },
  {
    metric: "MCP tunnel overhead",
    value: "+12.3 ms RTT",
    context: "Loopback delta vs raw stdio; acceptable for tool calls 100ms+.",
    source:
      "https://github.com/talosprotocol/talos/wiki/Benchmarks#3-mcp-tunneling-performance",
  },
];

const repoHighlights = [
  "Multi-repo system with contracts as the source of truth.",
  "Rust performance kernel with Python, TypeScript, Go, and Java SDKs.",
  "Gateway, audit service, MCP connector, and dashboard maintained together.",
];

const repoLinks = [
  { label: "Core repo", href: "https://github.com/talosprotocol/talos" },
  { label: "Docs & wiki", href: "https://github.com/talosprotocol/talos/wiki" },
  {
    label: "Threat model",
    href: "https://github.com/talosprotocol/talos/wiki/Threat-Model",
  },
];

const contactLinks = [
  {
    label: "Talk to us",
    href: "mailto:invest@talosprotocol.org?subject=Talos%20investor%20conversation",
  },
  {
    label: "Read the docs",
    href: "https://github.com/talosprotocol/talos/wiki",
  },
  { label: "View GitHub", href: "https://github.com/talosprotocol/talos" },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-lg text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-white/5 via-transparent to-transparent blur-[120px]" />
      <header className="sticky top-0 z-30 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.svg"
              alt="Talos Protocol logo"
              width={36}
              height={36}
              priority
            />
            <div>
              <p className="text-sm font-semibold text-brand">Talos Protocol</p>
              <p className="text-xs text-muted">
                Secure, decentralized communication for the AI agent era.
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            className="hidden rounded-full bg-gradient-to-r from-brand via-brand-strong to-brand px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
            href="mailto:invest@talosprotocol.org?subject=Talos%20investor%20conversation"
          >
            Talk to us
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <section id="what-is-talos" className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-panel/90 to-panel/60 px-6 py-14 shadow-2xl shadow-cyan-500/10 sm:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6 lg:max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Trust layer for autonomous AI systems
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Talos is the missing trust layer for autonomous AI systems.
              </h1>
              <p className="text-lg text-muted">
                A secure, decentralized communication substrate that gives agents
                verifiable identity, capability-based authorization, forward
                secrecy, and auditable actions—without adding friction to rapid
                tool calls.
              </p>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-cyan-500/20"
                  >
                    {cta.label}
                    <span className="text-brand">↗</span>
                  </Link>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {proofPoints.map((item) => (
                  <div
                    key={item}
                    className="card-surface rounded-2xl px-4 py-3 text-sm text-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-surface relative mt-6 flex w-full max-w-md flex-col gap-5 rounded-3xl border border-white/10 px-6 py-6 shadow-xl lg:mt-0">
              <p className="text-sm font-semibold text-brand">Investor digest</p>
              <div className="space-y-3 text-sm text-muted">
                <p>
                  <span className="font-semibold text-foreground">Problem:</span>{" "}
                  agents lack trustable communication—identity, authorization,
                  confidentiality, accountability, and decentralization are
                  fragmented.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Proof:</span>{" "}
                  Capability tokens with a session-cached fast path, Double
                  Ratchet for forward secrecy, and verifiable audit proofs.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Outcome:</span>{" "}
                  Agents and tools communicate securely in sub-millisecond
                  fast-path flows while meeting security and compliance needs.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="h-px w-10 bg-white/10" />
                <span>Source: Talos GitHub &amp; wiki</span>
              </div>
            </div>
          </div>
        </section>

        <section id="why-now" className="mt-20 space-y-8">
          <SectionHeader
            eyebrow="Why now"
            title="AI agents need a trustable communication substrate"
            description="Security, compliance, and performance must coexist. Talos reframes agent connectivity with security properties that map to investor and enterprise requirements."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {problemPoints.map((item) => (
              <div
                key={item.title}
                className="card-surface rounded-2xl border border-white/5 p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-brand">
                    Need
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <SectionHeader
            eyebrow="Solution overview"
            title="One stack that aligns identity, authorization, confidentiality, accountability, and decentralization"
            description="Plain-language tiles for the core pieces of Talos. Each capability is source-backed in the GitHub repo or wiki to keep claims verifiable."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutionTiles.map((tile) => (
              <div
                key={tile.title}
                className="card-surface relative flex h-full flex-col justify-between rounded-2xl border border-white/5 p-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-white/5 text-center text-lg font-semibold leading-10 text-brand">
                      {tile.title.slice(0, 1)}
                    </span>
                    <h3 className="text-xl font-semibold">{tile.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{tile.description}</p>
                </div>
                <Link
                  href={tile.source}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-strong"
                >
                  Source ↗
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-16 grid gap-8 lg:grid-cols-[2fr,1fr]"
        >
          <div className="space-y-6">
            <SectionHeader
              eyebrow="How it works"
              title="A simple, auditable path for every tool request"
              description="Talos keeps security properties explicit: verifiable identity, a secure session, and capability-backed authorization with a fast session cache."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="card-surface relative rounded-2xl border border-white/5 p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-brand">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface flex flex-col gap-4 rounded-2xl border border-white/5 p-6">
            <h3 className="text-lg font-semibold">
              Capability + session cache (fast path)
            </h3>
            <p className="text-sm text-muted">
              First request uses a signed capability token. Subsequent requests
              reuse a session id for sub-millisecond authorization, keeping
              secure tool calls performant.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-muted">Request 1</span>
                <span className="font-semibold text-brand">capability + session</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-muted">Request 2</span>
                <span className="font-semibold text-brand">session only</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-muted">Audit</span>
                <span className="font-semibold text-brand">verifiable trail</span>
              </div>
            </div>
            <Link
              href="https://github.com/talosprotocol/talos/wiki/Capability-Authorization"
              className="text-sm font-semibold text-brand transition hover:text-brand-strong"
            >
              Read the capability design ↗
            </Link>
          </div>
        </section>

        <section id="benchmarks" className="mt-16 space-y-8">
          <SectionHeader
            eyebrow="Benchmarks"
            title="Performance with context"
            description="Numbers that matter for investor diligence, each linked to the authoritative wiki benchmarks. Hardware: M4 Max, 36GB RAM."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {benchmarks.map((bench) => (
              <div
                key={bench.metric}
                className="card-surface flex h-full flex-col justify-between rounded-2xl border border-white/5 p-5"
              >
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-brand">
                    {bench.metric}
                  </p>
                  <p className="text-3xl font-semibold">{bench.value}</p>
                  <p className="text-sm text-muted">{bench.context}</p>
                </div>
                <Link
                  href={bench.source}
                  className="mt-4 text-sm font-semibold text-brand transition hover:text-brand-strong"
                >
                  Source ↗
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-muted">
            <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
              Credibility check
            </span>
            <p>
              Every metric links to the Talos wiki, with hardware context and
              rationale for why overhead is acceptable for agent tool calls.
            </p>
          </div>
        </section>

        <section
          id="open-source"
          className="mt-16 grid gap-8 lg:grid-cols-[1.6fr,1fr]"
        >
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Open source"
              title="MIT-licensed, multi-repo system"
              description="Contracts are the source of truth; kernels, SDKs, gateway, audit, and dashboards ship together so teams can adopt incrementally."
            />
            <div className="space-y-4">
              {repoHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-muted"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface flex flex-col gap-4 rounded-2xl border border-white/5 p-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-wordmark.svg"
                alt="Talos wordmark"
                width={140}
                height={32}
              />
              <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
                MIT License
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted">
              <li>• Contracts, Rust core, polyglot SDKs</li>
              <li>• Gateway, audit service, MCP connector</li>
              <li>• Dashboard and docs for enterprise rollout</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              {repoLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-brand transition hover:text-brand-strong"
                >
                  {link.label} ↗
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-brand/10 via-brand-strong/10 to-accent/10 px-6 py-12 sm:px-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Call to action
              </p>
              <h3 className="text-3xl font-semibold sm:text-4xl">
                Ready for a walkthrough?
              </h3>
              <p className="text-lg text-muted">
                Investors and partners: request a demo. Builders: start with the
                docs. Security teams: review the threat model and audit trail.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:invest@talosprotocol.org?subject=Talos%20investor%20conversation"
                className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5"
              >
                Request a walkthrough
              </Link>
              <Link
                href="https://github.com/talosprotocol/talos/wiki"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-brand/40"
              >
                Start with docs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-background/90 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm text-muted">
            <p className="font-semibold text-foreground">Talos Protocol</p>
            <p>Secure, decentralized communication for the AI agent era.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://github.com/talosprotocol/talos"
              className="transition hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/talosprotocol/talos/wiki"
              className="transition hover:text-foreground"
            >
              Docs
            </Link>
            <Link href="/privacy" className="transition hover:text-foreground">
              Privacy
            </Link>
            <Link
              href="https://github.com/talosprotocol/talos/wiki/Threat-Model"
              className="transition hover:text-foreground"
            >
              Security
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
