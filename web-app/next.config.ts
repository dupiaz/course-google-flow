import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Enable static export for markdown content
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
