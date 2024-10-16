const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    //GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    NEXT_PUBLISH_PHONE_NUMBER: process.env.NEXT_PUBLISH_PHONE_NUMBER,
    NEXT_PUBLISH_EMAIL: process.env.NEXT_PUBLISH_EMAIL,
  },
}

module.exports = nextConfig
