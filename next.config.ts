import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/studio',
        destination: '/studio',
      },
    ];
  },
  turbopack: {
    // Enable turbopack for dev
  }
};

export default withNextIntl(nextConfig);
