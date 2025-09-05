"use client";
import Link from "next/link";
import { useRef, useState } from "react";

type MenuItem = { href: string; label: string };
type MenuGroup = { label: string; items: MenuItem[] };

const menu: MenuGroup[] = [
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
    label: "Programlar",
    items: [
      { href: "/programlar/esitlik", label: "Eşitlik Programı" },
      { href: "/programlar/genclik", label: "Gençlik Programı" },
      { href: "/programlar/kultur-sanat", label: "Kültür-Sanat Programı" },
    ],
  },
  {
    label: "Blog",
    items: [
      { href: "/blog", label: "Tüm Yazılar" },
      { href: "/blog/kategoriler", label: "Kategoriler" },
    ],
  },
  {
    label: "Medya Merkezi",
    items: [
      { href: "/medya/basin-bultenleri", label: "Basın Bültenleri" },
      { href: "/medya/fotograflar", label: "Fotoğraflar" },
      { href: "/medya/videolar", label: "Videolar" },
    ],
  },
  {
    label: "Kaynaklar",
    items: [
      { href: "/yayinlar", label: "Yayınlar" },
      { href: "/raporlar", label: "Raporlar" },
      { href: "/gorseller", label: "Görseller & Logolar" },
      { href: "/podcast", label: "Podcast" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = (label: string) => {
    clearCloseTimer();
    setOpen(label);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
          Bir Bulut Olsam Derneği
        </Link>

        {/* Menü + CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 relative text-white">
            {menu.map((m) => (
              <div
                key={m.label}
                className="relative"
                onMouseEnter={() => openMenu(m.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="hover:text-blue-400"
                  onClick={() => setOpen((cur) => (cur === m.label ? null : m.label))}
                >
                  {m.label}
                </button>

                <div
                  className={`absolute left-0 top-full bg-white border shadow-lg rounded-md p-2 grid gap-1 min-w-[220px] ${
                    open === m.label ? "block" : "hidden"
                  }`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={scheduleClose}
                >
                  {m.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 rounded"
                      onClick={() => setOpen(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/iletisim" className="hover:text-blue-400">
              İletişim
            </Link>
          </nav>

          {/* Gönüllü Ol butonu */}
          <a
            href="https://forms.gle/b6jD1YLVgvns2gGTA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white text-white font-medium px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
          >
            ☁️ Gönüllü Ol
          </a>
        </div>
      </div>
    </header>
  );
}
