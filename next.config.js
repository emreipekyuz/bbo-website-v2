/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true, // ❌ hataları build'i durdurmasın
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" }
    ],
  },
};

module.exports = nextConfig;
