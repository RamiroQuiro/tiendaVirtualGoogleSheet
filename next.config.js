/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["lh3.googleusercontent.com","drive.google.com","googleusercontent.com","docs.googleusercontent.com"],
    remotePatterns: [
      { protocol: 'https',
        hostname: '**.google.com',
        port: '',
        pathname: '/s/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
