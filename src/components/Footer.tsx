import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          © {year} Talos Protocol. Open Source (Apache-2.0).
        </div>
        <div className="flex gap-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link href="/services" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="https://github.com/talosprotocol/talos" target="_blank" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
