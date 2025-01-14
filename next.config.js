/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });

    config.externals = [...config.externals, { canvas: 'canvas' }]

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  transpilePackages: ['three']
};

module.exports = nextConfig;
