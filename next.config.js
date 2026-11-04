/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/portofolio',
        destination: '/portfolio',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
