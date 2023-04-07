const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/lickpurity.github.io/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
