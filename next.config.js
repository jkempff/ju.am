/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.are.na",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
