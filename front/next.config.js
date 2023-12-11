/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;
