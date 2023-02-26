/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["www.dropbox.com","lh3.googleusercontent.com","drive.google.com"],
    },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
