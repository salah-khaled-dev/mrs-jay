import type { NextConfig } from "next";

// GitHub Pages serves from /mrs-jay in GitHub Actions.
// Vercel (process.env.VERCEL === "1") and local dev serve from root ("").
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && process.env.VERCEL !== "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubPages ? "/mrs-jay" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
