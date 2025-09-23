import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.birbulutolsamdernegi.org"), // kendi domainin
  title: "Bir Bulut Olsam Derneği",
  description:
    "Gençlerin kurduğu ve gençlerle birlikte yönettiği sosyal girişim derneği.",
  // 🔹 Tarayıcı sekmesi ikonu (favicon) + kısayol + iOS
  icons: {
    icon: "/favicon.ico",      // public/favicon.ico (önerilen)
    shortcut: "/favicon.ico",
    apple: "/logo2.png",       // public/logo2.png (Apple Touch ikonu olarak da kullanılır)
  },
  // 🔹 Open Graph (WhatsApp/LinkedIn/FB önizleme)
  openGraph: {
    title: "Bir Bulut Olsam Derneği",
    description:
      "Gençlerin kurduğu ve gençlerle birlikte yönettiği sosyal girişim derneği.",
    url: "/",                  // ana sayfa
    siteName: "Bir Bulut Olsam",
    images: [
      {
        url: "/logo2.png",     // public/logo2.png
        width: 600,
        height: 600,
        alt: "Bir Bulut Olsam Derneği Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  // 🔹 Twitter/X kartı
  twitter: {
    card: "summary_large_image",
    title: "Bir Bulut Olsam Derneği",
    description:
      "Gençlerin kurduğu ve gençlerle birlikte yönettiği sosyal girişim derneği.",
    images: ["/logo2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-[#0e0f12] text-white">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
