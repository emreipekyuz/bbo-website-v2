"use client";
import Link from "next/link";
import { useRef, useState } from "react";

// Tipler ve Menü Verisi (Değişiklik yok)
type MenuItem = { href: string; label: string };
type MenuGroup = { label: string; items: MenuItem[] };

const dropdownMenus: MenuGroup[] = [
  {
    label: "Dernek",
    items: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/ekibimiz", label: "Ekibimiz" },
      { href: "/is-birliklerimiz", label: "İş Birliklerimiz" },
      { href: "/tarihce", label: "Tarihçe" },
    ],
  },
  {
    label: "Komiteler",
    items: [
      { href: "/komiteler/genclik", label: "Gençlik Komitesi" },
      { href: "/komiteler/kultur-sanat", label: "Kültür-Sanat Komitesi" },
      { href: "/komiteler/esitlik", label: "Eşitlik Komitesi" },
      { href: "/komiteler/sosyal-sorumluluk", label: "Sosyal Sorumluluk Komitesi" },
    ],
  },
];

const singleLinks: MenuItem[] = [
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // Açılır menü kontrol mantığı (Değişiklik yok)
  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = (label: string) => {
    clearCloseTimer();
    setOpen(label);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };

  // Menü elemanları için ortak çerçeve stili
  const frameClasses = "px-3 py-1.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-colors duration-200";

  return (
    // 1. Arka plan lacivert ve sabit hale getirildi
    <header className="bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
          Bir Bulut Olsam Derneği
        </Link>

        {/* Menü + CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-2 relative">
            {/* Açılır Menüler */}
            {dropdownMenus.map((m) => (
              <div
                key={m.label}
                className="relative"
                onMouseEnter={() => openMenu(m.label)}
                onMouseLeave={scheduleClose}
              >
                {/* 2. Başlıklara çerçeve eklendi */}
                <button className={frameClasses}>
                  {m.label}
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 bg-slate-800 border border-slate-700 shadow-xl rounded-lg p-2 grid gap-1 min-w-[240px] transition-all duration-200 transform origin-top ${
                    open === m.label ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={scheduleClose}
                >
                  {m.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 hover:text-white rounded-md"
                      onClick={() => setOpen(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {/* Tekil Linkler */}
            {singleLinks.map((link) => (
              // 2. Başlıklara çerçeve eklendi
              <Link key={link.href} href={link.href} className={frameClasses}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Gönüllü Ol butonu */}
          <a
            href="https://forms.gle/b6jD1YLVgvns2gGTA"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white text-slate-900 font-bold px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors duration-200"
          >
            ☁️ Gönüllü Ol
          </a>
        </div>
      </div>
    </header>
  );
}