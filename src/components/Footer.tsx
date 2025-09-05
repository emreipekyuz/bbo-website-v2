import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm text-gray-400">
        {/* Sol kısım */}
        <div>
          <h3 className="text-white font-semibold mb-2">
            Bir Bulut Olsam Derneği
          </h3>
          <p>
            Gençlerin kurduğu ve gençlerle birlikte yönettiği sosyal girişim
            derneği.
          </p>
        </div>

        {/* Orta kısım */}
        <div>
          <h3 className="text-white font-semibold mb-2">Bağlantılar</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/hakkimizda" className="hover:text-white">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/ekibimiz" className="hover:text-white">
                Ekibimiz
              </Link>
            </li>
            <li>
              <Link href="/is-birliklerimiz" className="hover:text-white">
                İş Birliklerimiz
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-white">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Sağ kısım */}
        <div>
          <h3 className="text-white font-semibold mb-2">İletişim & Sosyal Medya</h3>
          <p>📍 Bursa, Türkiye</p>
          <p>✉️ info@birbulutolsam.org</p>
          <p>📞 +90 000 000 00 00</p>

          {/* Sosyal Medya ikonları */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/birbulutolsamdernegi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://forms.gle/b6jD1YLVgvns2gGTA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-sm border px-3 py-1 rounded-lg"
            >
              ☁️ Gönüllü Ol
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Bir Bulut Olsam Derneği. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
