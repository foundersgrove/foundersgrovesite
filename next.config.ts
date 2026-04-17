import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: '/analytics.js',
        destination: 'https://cloud.umami.is/script.js',
      },
    ];
  },
};

export default nextConfig;
