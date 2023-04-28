const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  devtool: 'source-map',
};

module.exports = nextConfig;
