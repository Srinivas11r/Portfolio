/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.srinivasulur.com",
        pathname: "/**"
      }
    ]
  }
};

module.exports = nextConfig;
