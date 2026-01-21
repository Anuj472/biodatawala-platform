/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['biodatawala.in', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable standalone output for Vercel
  output: 'standalone',
  // Compression
  compress: true,
  // Performance optimizations
  poweredByHeader: false,
  // Experimental features
  experimental: {
    optimizePackageImports: ['@/components'],
  },
}

module.exports = nextConfig
