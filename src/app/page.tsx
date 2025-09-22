"use client";

import Script from "next/script"; // Instagram eklentisi için gerekli

export default function HomePage() {
  return (
    <div>
      {/* 1. YENİ HERO BÖLÜMÜ */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center">
        {/* Arka Plan Fotoğrafı */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-background.jpg" // <-- KENDİ FOTOĞRAFINIZIN YOLUNU BURAYA YAZIN
            alt="Dernek faaliyeti"
            className="w-full h-full object-cover"
          />
          {/* Fotoğrafın üzerine metnin okunması için hafif karartma efekti */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero İçeriği */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bir Bulut Olsam Derneği
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Gençlerle birlikte üretim, eşitlik ve sosyal etki için çalışıyoruz.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/programlar"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Programlarımız
            </a>
            <a
              href="/gonullu-ol"
              className="px-8 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Gönüllü Ol
            </a>
          </div>
        </div>
      </section>

      {/* 2. HAKKIMIZDA VE ETKİ ALANI */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Bir Fikirden Topluluğa
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Misyonumuz, gençlerin potansiyelini ortaya çıkararak toplumsal
            değişime öncülük etmelerini sağlamaktır. Bugüne kadar 
            <span className="font-bold text-blue-600"> 10.000'den fazla gence</span> ulaştık ve 
            <span className="font-bold text-blue-600"> 200'den fazla gönüllümüzle</span> 
            birlikte nice projeye imza attık.
          </p>
        </div>
      </section>

      {/* 3. INSTAGRAM GALERİ BÖLÜMÜ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Yaptıklarımızdan Bazıları
          </h2>
          <p className="mt-4 mb-12 text-lg text-gray-600">
            En güncel etkinlik ve duyurularımız için sosyal medyamızı takip edin.
          </p>
          
          {/* Elfsight Instagram Kodu */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div
            className="elfsight-app-f30e60bc-0597-44b0-83f3-9451052c1448"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* 4. CTA KARTLARI (Tasarımı aynı, üst boşluk ayarlandı) */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Kartlar burada (değişiklik yok) */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-bold text-blue-600">Bizi Tanıyın</h3>
            <p className="mt-2 text-slate-600">
              Derneğimizin misyonu, vizyonu ve hikayesini keşfedin.
            </p>
            <a
              href="/hakkimizda"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Daha Fazla →
            </a>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-bold text-blue-600">Gönüllümüz Olun</h3>
            <p className="mt-2 text-slate-600">
              Gençlerle birlikte üretim yapın, toplumsal etki yaratın.
            </p>
            <a
              href="/gonullu-ol"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Başvur →
            </a>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-bold text-blue-600">Topluluk Merkezleri</h3>
            <p className="mt-2 text-slate-600">
              Yerelde yürüttüğümüz gençlik merkezlerimizi tanıyın.
            </p>
            <a
              href="/merkezler"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Keşfet →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}