import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
      <body className={`${inter.className} antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900`}>{children}</body>
    </html>
  );
}
