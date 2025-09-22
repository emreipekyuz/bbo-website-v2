/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statik yayın (cPanel/public_html için gerekli)
  output: "export",

  images: {
    // next/image optimizasyonunu kapat (export'ta zorunlu)
    unoptimized: true,

    // Mevcut uzaktan görsellerin (Sanity) aynen kalsın
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
