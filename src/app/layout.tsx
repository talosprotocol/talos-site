import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://talosprotocol.com'),
  title: 'Talos Protocol | The Trust Layer for AI Agents',
  description: 'Cryptographic identity, capability authorization, and auditable communication channels for the agent economy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
