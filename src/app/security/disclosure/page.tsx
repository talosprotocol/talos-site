import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function SecurityDisclosure() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">Responsible Disclosure Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-8">
                Security is the core of Talos Protocol. We take all vulnerability reports seriously and are committed to working with the security research community.
            </p>

            <h3>How to Report</h3>
            <p>
                Please report vulnerabilities via email to <a href="mailto:security@talosprotocol.com" className="font-bold text-blue-600">security@talosprotocol.com</a>.
            </p>
            <p>
                Include &quot;VULNERABILITY&quot; in the subject line. We accept reports encrypted with our PGP key (see <code>/.well-known/security.txt</code>).
            </p>

            <h3>What to Include</h3>
            <ul className="list-disc pl-5 space-y-2 mb-8">
                <li>Description of the vulnerability</li>
                <li>Steps to reproduce (POC scripts preferred)</li>
                <li>Affected component (Contract, Dashboard, Gateway, SDK)</li>
                <li>Potential impact estimation</li>
            </ul>

            <h3>Our Commitment</h3>
            <ul className="list-disc pl-5 space-y-2 mb-8">
                <li>We will acknowledge receipt within 48 hours.</li>
                <li>We will provide a timeline for fixes.</li>
                <li>We will publicly credit you (with permission) in our changelog once the fix is deployed.</li>
                <li>We generally do not pursue legal action against researchers who follow this policy.</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-sm text-amber-900 mb-8">
                <strong>Out of Scope:</strong> Social engineering, denial of service (DoS) against public infrastructure, and physical security attacks.
            </div>

            <p>
                <Link href="/security" className="text-blue-600 hover:underline">
                    &larr; Back to Security Overview
                </Link>
            </p>
          </div>
      </div>
    </main>
  );
}
