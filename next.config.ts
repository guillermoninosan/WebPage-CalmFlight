import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure strict reactivation to catch potential issues, though it might double-invoke effects in dev
  reactStrictMode: true,
};

export default nextConfig;
