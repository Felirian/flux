/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    unoptimized: true,
    domains: [
      "localhost",
    ],
  },
}
module.exports = nextConfig
