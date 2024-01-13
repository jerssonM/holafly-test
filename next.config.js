/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.countryflags.com",
      },
    ],
  },
};

module.exports = nextConfig;
