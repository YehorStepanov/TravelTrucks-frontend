import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zero4-team-final-project-backend.onrender.com',
      },
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
      },
    ],
  },
};

export default nextConfig;
