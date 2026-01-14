import { Navbar } from "@/components/Navbar";
import Link from 'next/link';

export default function SpeedInsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Getting started with <span className="text-gradient">Speed Insights</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
          This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.
        </p>
      </section>

      {/* Prerequisites Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Prerequisites</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Accounts & Setup</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>A Vercel account</strong> - If you don&apos;t have one, you can <Link href="https://vercel.com/signup" className="text-blue-600 hover:underline">sign up for free</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>A Vercel project</strong> - If you don&apos;t have one, you can <Link href="https://vercel.com/new" className="text-blue-600 hover:underline">create a new project</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Vercel CLI installed</strong> - Install using your preferred package manager</span>
              </li>
            </ul>
          </div>

          {/* Installation Options */}
          <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl border border-gray-700 font-mono text-sm overflow-x-auto">
            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 font-semibold mb-3">pnpm</h4>
                <code className="block bg-gray-800 p-3 rounded text-gray-300">pnpm i vercel</code>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-3">yarn</h4>
                <code className="block bg-gray-800 p-3 rounded text-gray-300">yarn i vercel</code>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-3">npm</h4>
                <code className="block bg-gray-800 p-3 rounded text-gray-300">npm i vercel</code>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-3">bun</h4>
                <code className="block bg-gray-800 p-3 rounded text-gray-300">bun i vercel</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enable Speed Insights */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Enable Speed Insights in Vercel</h2>
        <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl space-y-4 mb-8">
          <p className="text-gray-900">
            On the <Link href="/dashboard" className="text-blue-600 hover:underline">Vercel dashboard</Link>, select your Project followed by the <strong>Speed Insights</strong> tab. Then, select <strong>Enable</strong> from the dialog.
          </p>
          <div className="bg-white p-4 border-l-4 border-blue-600 rounded">
            <p className="text-sm text-gray-700">
              <strong>💡 Note:</strong> Enabling Speed Insights will add new routes (scoped at <code className="bg-gray-100 px-2 py-1 rounded">/_vercel/speed-insights/*</code>) after your next deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Add Package Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Add @vercel/speed-insights to your project</h2>
        <p className="text-gray-700 mb-8">
          Using the package manager of your choice, add the <code className="bg-gray-100 px-2 py-1 rounded">@vercel/speed-insights</code> package to your project:
        </p>
        
        <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl border border-gray-700 font-mono text-sm overflow-x-auto space-y-6">
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">pnpm</h4>
            <code className="block bg-gray-800 p-3 rounded text-gray-300">pnpm i @vercel/speed-insights</code>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">yarn</h4>
            <code className="block bg-gray-800 p-3 rounded text-gray-300">yarn i @vercel/speed-insights</code>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">npm</h4>
            <code className="block bg-gray-800 p-3 rounded text-gray-300">npm i @vercel/speed-insights</code>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">bun</h4>
            <code className="block bg-gray-800 p-3 rounded text-gray-300">bun i @vercel/speed-insights</code>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Add the SpeedInsights component to your app</h2>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Next.js (13.5+)</h3>
            <p className="text-gray-700 mb-4">
              The <code className="bg-gray-100 px-2 py-1 rounded">SpeedInsights</code> component is a wrapper around the tracking script, offering more seamless integration with Next.js.
            </p>
            
            <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">App Router (Recommended)</h4>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6">
              <pre>{`// app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</pre>
            </div>

            <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Pages Router</h4>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`// pages/_app.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Create React App</h3>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`// App.tsx
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`}</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Remix</h3>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`// app/root.tsx
import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vue.js / Nuxt</h3>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`<!-- src/App.vue or layouts/default.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">SvelteKit</h3>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`// src/routes/+layout.ts
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Astro</h3>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`--- 
// BaseHead.astro
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />`}</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Plain HTML</h3>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`<!-- index.html -->
<body>
  <!-- ... content ... -->
  
  <script>
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/speed-insights/script.js"></script>
</body>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Deploy your app to Vercel</h2>
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
          <p className="text-gray-700">
            You can deploy your app to Vercel&apos;s global CDN by running the following command from your terminal:
          </p>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
            <code>vercel deploy</code>
          </div>
          <p className="text-gray-700">
            Alternatively, you can <Link href="https://vercel.com/docs/git" className="text-blue-600 hover:underline">connect your project&apos;s git repository</Link>, which will enable Vercel to deploy your latest pushes and merges to main.
          </p>
          <div className="bg-white p-4 border-l-4 border-blue-600 rounded">
            <p className="text-sm text-gray-700">
              <strong>💡 Note:</strong> If everything is set up correctly, you should be able to find the <code className="bg-gray-100 px-2 py-1 rounded">/_vercel/speed-insights/script.js</code> script inside the body tag of your page.
            </p>
          </div>
        </div>
      </section>

      {/* View Data Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">View your data in the dashboard</h2>
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
          <p className="text-gray-700">
            Once your app is deployed, and users have visited your site, you can view the data in the dashboard.
          </p>
          <p className="text-gray-700">
            To do so, go to your <Link href="/dashboard" className="text-blue-600 hover:underline">dashboard</Link>, select your project, and click the <strong>Speed Insights</strong> tab.
          </p>
          <p className="text-gray-700">
            After a few days of visitors, you&apos;ll be able to start exploring your metrics. For more information on how to use Speed Insights, check the <Link href="https://vercel.com/docs/speed-insights" className="text-blue-600 hover:underline">official documentation</Link>.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Next steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="https://vercel.com/docs/speed-insights/package"
            className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Package Documentation</h3>
            <p className="text-gray-600">Learn more about the @vercel/speed-insights package</p>
          </Link>
          <Link 
            href="https://vercel.com/docs/speed-insights/metrics"
            className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Metrics</h3>
            <p className="text-gray-600">Understand what metrics Speed Insights tracks</p>
          </Link>
          <Link 
            href="https://vercel.com/docs/speed-insights/privacy-policy"
            className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Privacy & Compliance</h3>
            <p className="text-gray-600">Learn about privacy and data compliance</p>
          </Link>
          <Link 
            href="https://vercel.com/docs/speed-insights/troubleshooting"
            className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Troubleshooting</h3>
            <p className="text-gray-600">Get help with common Speed Insights issues</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Talos Protocol. Apache 2.0 Licensed.
          </div>
          <div className="flex gap-6">
            <Link href="https://github.com/talosprotocol/talos" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              GitHub
            </Link>
            <Link href="mailto:contact@talosprotocol.com" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
