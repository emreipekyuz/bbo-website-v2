"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuItem = { href: string; label: string };
type MenuGroup = { label: string; items: MenuItem[] };

const dropdownMenus: MenuGroup[] = [
  {
    label: "Dernek",
    items: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/ekibimiz", label: "Ekibimiz" },
      { href: "/is-birliklerimiz", label: "İş Birliklerimiz" },
      { href: "/politika-belgelerimiz", label: "Politika Belgelerimiz" },
      { href: "/tarihce", label: "Tarihçe" },
    ],
  },
  {
    label: "Programlar",
    items: [
      { href: "/programlar/nilufer-genclik-programi", label: "Nilüfer Gençlik Programı" },
      { href: "/programlar/genclik", label: "Gençlik Komitesi" },
      { href: "/programlar/kultur-sanat", label: "Kültür-Sanat Komitesi" },
      { href: "/programlar/esitlik", label: "Eşitlik Komitesi" },
      { href: "/programlar/sosyal-etki", label: "Sosyal Etki Komitesi" },
    ],
  },
];

const singleLinks: MenuItem[] = [
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Dışarı tıklayınca mobil paneli kapat
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (mobileOpen && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [mobileOpen]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMenu = (label: string) => {
    clearCloseTimer();
    setOpenDesktop(label);
  };
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 150);
  };

  const frameClasses =
    "px-3 py-1.5 rounded-md text-sm font-medium text-white hover:bg-gray-700 hover:text-white transition-colors duration-200";

  const toggleGroup = (label: string) =>
    setExpanded((p) => ({ ...p, [label]: !p[label] }));

  const closeAll = () => {
    setOpenDesktop(null);
    setMobileOpen(false);
  };

  return (
    <header className="bg-black shadow-lg sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-white text-xl"
          onClick={closeAll}
        >
          Bir Bulut Olsam Derneği
        </Link>

        {/* Desktop NAV */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4 relative" aria-label="Ana menü">
            {dropdownMenus.map((m) => (
              <div
                key={m.label}
                className="relative"
                onMouseEnter={() => openMenu(m.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={frameClasses}
                  aria-haspopup="menu"
                  aria-expanded={openDesktop === m.label}
                >
                  {m.label}
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 bg-gray-900 border border-gray-800 shadow-xl rounded-lg p-2 grid gap-1 min-w-[220px] transition-all duration-200 transform origin-top z-50 ${
                    openDesktop === m.label
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={scheduleClose}
                  role="menu"
                >
                  {m.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 rounded-md"
                      onClick={closeAll}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {singleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={frameClasses}
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Gönüllü Ol (Desktop) */}
          <a
            href="https://forms.gle/9JuQ1o751rbpXrxE8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            ☁️ Gönüllü Ol
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Menüyü aç/kapat"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((s) => !s)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {mobileOpen ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Panel (tam genişlik, üstte görünür) */}
      <div
        ref={panelRef}
        className={`md:hidden absolute left-0 right-0 top-full bg-black border-t border-gray-800 transition-[max-height,opacity] duration-200 overflow-hidden z-[55] ${
          mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="px-4 py-3 space-y-3" aria-label="Mobil menü">
          {dropdownMenus.map((g) => {
            const isOpen = !!expanded[g.label];
            return (
              <div key={g.label} className="rounded-lg border border-gray-800">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white"
                  onClick={() => toggleGroup(g.label)}
                  aria-expanded={isOpen}
                  aria-controls={`section-${g.label}`}
                >
                  <span className="text-sm font-medium">{g.label}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path strokeWidth="2" strokeLinecap="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`section-${g.label}`}
                  className={`grid gap-1 px-2 pb-2 transition-[max-height] duration-200 overflow-hidden ${
                    isOpen ? "max-h-64" : "max-h-0"
                  }`}
                >
                  {g.items.map((item, idx) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm text-white hover:bg-gray-800 rounded-md ${
                        idx < g.items.length - 1 ? "border-b border-gray-800" : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Tekil linkler */}
          <div className="grid gap-2">
            {singleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-white rounded-md border border-gray-800 hover:bg-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Gönüllü Ol (Mobile) */}
          <a
            href="https://forms.gle/9JuQ1o751rbpXrxE8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center bg-white text-black font-bold px-4 py-3 rounded-lg hover:bg-gray-200"
            onClick={() => setMobileOpen(false)}
          >
            ☁️ Gönüllü Ol
          </a>
        </nav>
      </div>
    </header>
  );
}
