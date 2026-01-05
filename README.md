# Talos Protocol — Gateway Site

Marketing-grade landing site for Talos Protocol: a fast, credible gateway that
explains the product in under two minutes and routes visitors to GitHub, the
wiki, or a direct conversation.

- Stack: Next.js (App Router), Tailwind v4, TypeScript
- Goals: investor-friendly clarity, WCAG-friendly contrast, 90+ Lighthouse

## Local development

Install dependencies (already present in this workspace after scaffold):

```bash
npm install
```

Run the dev server:

```bash
npm run dev
# open http://localhost:3000
```

Lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Content map

- Hero + CTA: “Talos is the missing trust layer for autonomous AI systems.”
- Problem: identity, authorization, confidentiality, accountability, decentralization
- Solution tiles: DIDs, capability tokens, forward secrecy, verifiable audit, P2P+DHT
- How it works: identity → secure session → capability + session cache fast path
- Benchmarks: Ed25519 verify throughput, capability `authorize_fast`, MCP tunnel overhead (with hardware context)
- Open source: MIT-licensed, multi-repo architecture, links to GitHub/wiki/threat model
- Privacy: lightweight policy for the marketing site

## Brand kit

- Colors: brand `#6BE7FF`, violet `#A78BFA`, accent `#7EF2C9`, dark background `#050710`
- Logo mark: `public/logo-mark.svg`
- Wordmark: `public/logo-wordmark.svg`
- Favicon/Icon: `public/icon.svg`, `public/favicon.svg`
- OG image: `public/og-image.svg`

## Useful links

- GitHub: https://github.com/talosprotocol/talos
- Wiki: https://github.com/talosprotocol/talos/wiki
- Threat model: https://github.com/talosprotocol/talos/wiki/Threat-Model
