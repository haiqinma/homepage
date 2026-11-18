import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "output",
  generateBuildId: async () => process.env.NEXT_BUILD_ID ?? "local",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
