/** @type {import('next').NextConfig} */
const nextConfig = {
  styledComponents: true,
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false, // Add this to stop the Font fetch crash
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
