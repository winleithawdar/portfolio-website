import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Shown as "Last updated" in the footer; set once per build/deploy.
    BUILD_DATE: new Date().toISOString(),
  },
};

export default nextConfig;
