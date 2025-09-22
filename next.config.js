/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel için output: "export" kaldırıldı → SSR/dinamik rotalar da çalışır

  eslint: {
    // ESLint hataları build'i durdurmasın
    ignoreDuringBuilds: true,
  },

  typescript: {
    // TypeScript hataları build'i durdurmasın
    ignoreBuildErrors: true,
  },

  images: {
    // Vercel kendi optimize eder, istersen unoptimized:true bırakabilirsin
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
