import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  reactStrictMode: true,
  output: process.env.APP_ENV !== "development" ? "standalone" : undefined,
  experimental: {
    taint: true,
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  async redirects() {
    return [
      {
        source: "/wp-admin/index.php",
        permanent: true,
        destination: "/studio",
      },
      {
        source: "/wp-admin",
        permanent: true,
        destination: "/studio",
      },
    ];
  },
};

export default nextConfig;
