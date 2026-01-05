import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://talosprotocol.org"),
  title: "Talos Protocol | Secure trust layer for autonomous AI systems",
  description:
    "Talos is the missing trust layer for autonomous AI systems: decentralized identity, capability-based authorization, forward secrecy, and verifiable auditability.",
  openGraph: {
    title: "Talos Protocol | Secure trust layer for autonomous AI systems",
    description:
      "Secure, decentralized communication for the AI agent era with capability-based authorization, forward secrecy, and verifiable audit.",
    url: "https://talosprotocol.org",
    siteName: "Talos Protocol",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talos Protocol | Secure trust layer for autonomous AI systems",
    description:
      "Secure, decentralized communication for the AI agent era with capability-based authorization, forward secrecy, and verifiable audit.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
