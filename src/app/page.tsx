"use client";
import { useCountUp } from "@/hooks/useCountUp";

export default function HomePage() {
  // İstatistikler için sayılar (artarak geliyor)
  const genc = useCountUp(10000, 1500);
  const gonullu = useCountUp(200, 1500);
  const proje = useCountUp(15, 1500);

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bir Bulut Olsam Derneği
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100">
            Gençlerle birlikte üretim, eşitlik ve sosyal etki için çalışıyoruz.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/programlar"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
            >
              Programlarımız
            </a>
            <a
              href="/gonullu-ol"
              className="px-6 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              ☁️ Gönüllü Ol
            </a>
          </div>
        </div>
      </section>

      {/* İSTATİSTİK KUTULARI */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">{genc}+</h3>
            <p className="mt-2 text-slate-600">Gence Ulaşıldı</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">{gonullu}+</h3>
            <p className="mt-2 text-slate-600">Gönüllü</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">{proje}+</h3>
            <p className="mt-2 text-slate-600">Proje</p>
          </div>
        </div>
      </section>

      {/* CTA KARTLARI */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-600">Bizi Tanıyın</h3>
            <p className="mt-2 text-slate-600">
              Derneğimizin misyonu, vizyonu ve hikayesini keşfedin.
            </p>
            <a
              href="/hakkimizda"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Daha Fazla →
            </a>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-600">Gönüllümüz Olun</h3>
            <p className="mt-2 text-slate-600">
              Gençlerle birlikte üretim yapın, toplumsal etki yaratın.
            </p>
            <a
              href="/gonullu-ol"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Başvur →
            </a>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-600">Topluluk Merkezleri</h3>
            <p className="mt-2 text-slate-600">
              Yerelde yürüttüğümüz gençlik merkezlerimizi tanıyın.
            </p>
            <a
              href="/merkezler"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Keşfet →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
