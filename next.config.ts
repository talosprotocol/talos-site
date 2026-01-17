import type { NextConfig } from "next";


const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: 'export',
  // Only set basePath if configuring for GitHub Pages deployment
  basePath: isGithubActions ? '/talos' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
