/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        // Support any subdomain of cloudinary
        protocol: 'https',
        hostname: '*.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  // Suppress ESLint errors during builds (use separate lint step)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow TypeScript errors to not block production builds
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
