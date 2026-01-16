/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['biodatawala.in'],
  },
  // Enable static export for better SEO
  output: 'standalone',
  // Optimize for production
  swcMinify: true,
  // Compression
  compress: true,
  // Performance optimizations
  poweredByHeader: false,
  // i18n for multilingual support
  i18n: {
    locales: ['en', 'hi', 'mr', 'gu', 'ta', 'te', 'bn', 'kn', 'ml', 'pa'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
