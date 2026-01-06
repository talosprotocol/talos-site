import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.talosprotocol.com",
          },
        ],
        destination: "https://talosprotocol.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
