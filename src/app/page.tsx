"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Arkadaki bulut animasyonları */}
        <motion.div
          className="absolute top-20 left-[-200px] w-96 h-48 bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, 150, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-[-200px] w-96 h-48 bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, -150, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 relative z-10">
          Bulutların Ötesinde <br /> Gençlik Hareketi
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl text-center relative z-10">
          Bir Bulut Olsam Derneği, gençlerin kurduğu ve gençlerle yönettiği
          sosyal girişim derneğidir.
        </p>
      </section>

      {/* Programlar */}
      <section className="py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Programlar</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            "Nilüfer Gençlik Programı",
            "Gençlik Komitesi",
            "Kültür-Sanat Komitesi",
            "Eşitlik Komitesi",
            "Sosyal Etki Komitesi",
          ].map((program) => (
            <motion.div
              key={program}
              className="w-40 h-40 rounded-full bg-gray-800 flex items-center justify-center text-center p-6 shadow-lg hover:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-white font-semibold text-sm">{program}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Öne Çıkan Projeler */}
      <section className="py-20 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">Öne Çıkan Projeler</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {["Proje A", "Proje B", "Proje C", "Proje D"].map((p, i) => (
            <motion.div
              key={p}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                ☁️
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p}</h3>
              <p className="text-gray-400 text-sm max-w-xs text-center">
                Kısa açıklama burada olacak. Projenin amacı, hedefi ve çıktıları özetlenebilir.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog + En Altta Gönüllü Ol */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black text-white text-center relative overflow-hidden">
        <motion.div
          className="absolute -top-20 left-0 w-full h-40 bg-white/10 blur-3xl"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 relative z-10">
          Blog
        </h2>

        {/* Blog Carousel */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[
              {
                title: "Blog Yazısı 1",
                excerpt: "Gençlerle dayanışma üzerine...",
              },
              {
                title: "Blog Yazısı 2",
                excerpt: "Nilüfer’de gençlik hareketleri...",
              },
              {
                title: "Blog Yazısı 3",
                excerpt: "Bir Bulut Olsam’dan proje notları...",
              },
              {
                title: "Blog Yazısı 4",
                excerpt: "Avrupa’daki gençlik programları...",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] max-w-[300px] bg-white rounded-xl shadow-lg p-6 text-left snap-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-bold text-sky-700 mb-2">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <Link
                  href="/blog"
                  className="text-sky-600 hover:underline text-sm font-medium"
                >
                  Devamını Oku →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* En Altta CTA */}
        <a
          href="https://forms.gle/9JuQ1o751rbpXrxE8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 inline-flex items-center px-10 py-5 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition-colors text-lg relative z-10"
        >
          Gönüllü Ol ☁️
        </a>
        <p className="text-lg md:text-xl font-medium text-white relative z-10 mt-6">
          Gençlerle Birlikte Gökyüzüne ☁️
        </p>
      </section>
    </div>
  );
}
