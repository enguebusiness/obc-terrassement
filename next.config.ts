import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force clean dist dir on every build — évite les routes orphelines dans le cache
  cleanDistDir: true,
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
