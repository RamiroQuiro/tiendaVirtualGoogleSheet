/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["www.dropbox.com","lh3.googleusercontent.com","drive.google.com"],
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
