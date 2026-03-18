import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone output only for Docker builds
  ...(process.env.DOCKER_BUILD ? { output: "standalone" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
