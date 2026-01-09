import { Navbar } from "@/components/Navbar";
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             We are currently in private beta with select partners. 
             Reach out to discuss integration or security partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full text-blue-600 mb-6">
                    <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
                <p className="text-slate-500 mb-6">
                    For partnerships, media, and general questions.
                </p>
                <Link href="mailto:contact@talosprotocol.com" className="text-blue-600 font-semibold hover:underline">
                    contact@talosprotocol.com
                </Link>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="p-4 bg-amber-100 rounded-full text-amber-600 mb-6">
                    <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Engineering Support</h3>
                <p className="text-slate-500 mb-6">
                    Technical integration support for early adopters.
                </p>
                <Link href="https://github.com/talosprotocol/talos/discussions" target="_blank" className="text-blue-600 font-semibold hover:underline">
                    GitHub Discussions
                </Link>
            </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">Security Concerns?</h3>
            <p className="text-slate-300 mb-6">
                If you have found a security vulnerability, please do NOT open a GitHub issue.
            </p>
            <Link href="/security/disclosure" className="inline-block px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors">
                View Disclosure Policy
            </Link>
        </div>
      </div>
       <footer className="py-12 px-6 border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Talos Protocol. Apache 2.0 Licensed.
          </div>
          <div className="flex gap-6">
             <Link href="https://github.com/talosprotocol/talos" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              GitHub
            </Link>
            <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
