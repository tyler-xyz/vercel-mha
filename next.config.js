/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // This MUST be inside the compiler object
    styledComponents: true,
  },
}

module.exports = nextConfig