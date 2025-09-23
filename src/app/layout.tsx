import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.birbulutolsamdernegi.org"),  // 🔹 Domaini buraya ekledim
  title: "Bir Bulut Olsam Derneği",
  description:
    "Gençlerin kurduğu ve gençlerle birlikte yönettiği sosyal girişim derneği.",
  openGraph: {
    title: "Bir Bulut Olsam Derneği",
    description:
      "Gençlerin kurduğu ve gençlerle birlikte yönettiği sosyal girişim derneği.",
    url: "/",  
    siteName: "Bir Bulut Olsam",
    images: [
      {
        url: "/logo.png",     // public/logo.png
        width: 600,
        height: 600,
        alt: "Bir Bulut Olsam Derneği Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bir Bulut Olsam Derneği",
    description:
      "Gençlerin kurduğu ve gençlerle birlikte yönettiği sosyal girişim derneği.",
    images: ["/logo.png"],
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
