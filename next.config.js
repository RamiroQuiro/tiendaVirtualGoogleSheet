/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["lh3.googleusercontent.com","drive.google.com","googleusercontent.com","docs.googleusercontent.com"],
    remotePatterns: [
      { protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
