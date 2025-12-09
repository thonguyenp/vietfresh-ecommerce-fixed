// ======================
// Phần 1: CONFIG FILES
// ======================

//////////////////////////
// next.config.ts
//////////////////////////
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "unsplash.com",
          },
        ],
        destination: "https://images.unsplash.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
