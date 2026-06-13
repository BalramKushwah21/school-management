/** @type {import('next').NextConfig} */
const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_HOSTNAME || "domain.in";

const nextConfig = {
  images: {
    domains: ["technocratsgroup.edu.in"],
  },
  reactCompiler: true,
  allowedDevOrigins: ['10.187.194.234'],
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: `(?<tenant>[a-z0-9-]+)\\.${MAIN_DOMAIN}`,
          },
        ],
        destination: '/school/:tenant/:path*',
      },
    ];
  },
};





export default nextConfig;
