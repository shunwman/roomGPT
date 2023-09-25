/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbxt.replicate.delivery',
      },
    ],
    domains: ["upcdn.io", "replicate.delivery","pbxt.replicate.delivery"],
  },
};
