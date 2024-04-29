/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
