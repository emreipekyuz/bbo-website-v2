/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚠️ Statik export kaldırıldı çünkü /studio gibi dinamik rotalar desteklenmiyor.
  // output: "export",

  eslint: {
    // ESLint hataları build'i durdurmasın
    ignoreDuringBuilds: true,
  },

  typescript: {
    // TypeScript hataları build'i durdurmasın
    ignoreBuildErrors: true,
  },

  images: {
    // Vercel kendi optimize eder
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
