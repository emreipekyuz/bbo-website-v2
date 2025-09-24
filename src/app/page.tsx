"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type MediaItem =
  | { type: "photo"; src: string; thumb?: string; alt?: string }
  | { type: "video"; src: string; thumb?: string; poster?: string; alt?: string };

export default function HomePage() {
  // ---- GALERİ VERİSİ ----
  // /public/gallery/... altına dosyaları koy
  const photos: MediaItem[] = useMemo(
    () => [
      { type: "photo", src: "/gallery/photo-1.jpg", alt: "Etkinlik 1" },
      { type: "photo", src: "/gallery/photo-2.jpg", alt: "Atölye 2" },
      { type: "photo", src: "/gallery/photo-3.jpg", alt: "Saha Çalışması" },
      { type: "photo", src: "/gallery/photo-4.jpg", alt: "Gönüllüler" },
      { type: "photo", src: "/gallery/photo-5.jpg", alt: "Toplantı" },
      { type: "photo", src: "/gallery/photo-6.jpg", alt: "Sunum" },
    ],
    []
  );

  const videos: MediaItem[] = useMemo(
    () => [
      // thumb veya poster eklersen grid’de hızlı yüklenir
      { type: "video", src: "/gallery/video-1.mp4", poster: "/gallery/video-1.jpg", alt: "Tanıtım Videosu" },
      { type: "video", src: "/gallery/video-2.mp4", poster: "/gallery/video-2.jpg", alt: "Proje Özeti" },
    ],
    []
  );

  // ---- GALERİ STATE ----
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const list = tab === "photos" ? photos : videos;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prev = () => setCurrentIndex((i) => (i - 1 + list.length) % list.length);
  const next = () => setCurrentIndex((i) => (i + 1) % list.length);

  // Klavye kısayolları
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, list.length]);

  const currentItem = list[currentIndex];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
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

      {/* ---- GALERİ (Öne Çıkan Projeler yerine) ---- */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-4xl font-bold">Galeri</h2>
            <div className="inline-flex rounded-lg border border-white/10 overflow-hidden">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  tab === "photos" ? "bg-white text-black" : "bg-transparent text-white hover:bg-white/10"
                }`}
                onClick={() => setTab("photos")}
              >
                Fotoğraflar
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium border-l border-white/10 ${
                  tab === "videos" ? "bg-white text-black" : "bg-transparent text-white hover:bg-white/10"
                }`}
                onClick={() => setTab("videos")}
              >
                Videolar
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {list.map((item, idx) => {
              const thumb = item.thumb ?? (item.type === "photo" ? item.src : item.poster ?? item.src);
              return (
                <button
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label={item.alt ?? (item.type === "photo" ? "Fotoğraf" : "Video")}
                >
                  {/* Thumbnail */}
                  {item.type === "photo" ? (
                    <Image
                      src={thumb}
                      alt={item.alt ?? "Fotoğraf"}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <Image
                        src={thumb}
                        alt={item.alt ?? "Video"}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover opacity-90"
                      />
                      {/* Play ikon */}
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="w-12 h-12 rounded-full bg-black/70 border border-white/20 flex items-center justify-center">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOG + En Altta Gönüllü Ol */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black text-white text-center relative overflow-hidden">
        <motion.div
          className="absolute -top-20 left-0 w-full h-40 bg-white/10 blur-3xl"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 relative z-10">
          Blog
        </h2>

        {/* Blog Carousel (örnek dummy içerik) */}
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

        {/* En Altta CTA (sadece burada ve header’da) */}
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

      {/* ------ LIGHTBOX (Modal) ------ */}
      {lightboxOpen && currentItem && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Kapat */}
          <button
            className="absolute top-4 right-4 p-2 rounded-md bg-white/10 hover:bg-white/20"
            onClick={closeLightbox}
            aria-label="Kapat"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Önceki */}
          {list.length > 1 && (
            <button
              className="absolute left-2 md:left-6 p-2 rounded-md bg-white/10 hover:bg-white/20"
              onClick={prev}
              aria-label="Önceki"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" stroke="white" fill="none">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* İçerik */}
          <div className="w-full max-w-5xl">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/10">
              {currentItem.type === "photo" ? (
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt ?? "Fotoğraf"}
                  fill
                  sizes="80vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  poster={currentItem.poster}
                  className="w-full h-full object-contain bg-black"
                />
              )}
            </div>
            {/* Sayaç */}
            <div className="text-center text-white/70 text-sm mt-3">
              {currentIndex + 1} / {list.length}
            </div>
          </div>

          {/* Sonraki */}
          {list.length > 1 && (
            <button
              className="absolute right-2 md:right-6 p-2 rounded-md bg-white/10 hover:bg-white/20"
              onClick={next}
              aria-label="Sonraki"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" stroke="white" fill="none">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
