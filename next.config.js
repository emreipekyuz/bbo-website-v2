/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // ESLint hataları build'i durdurmasın
  eslint: { ignoreDuringBuilds: true },

  // TypeScript hataları build'i durdurmasın
  typescript: { ignoreBuildErrors: true },

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

module.exports = nextConfig;
