"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type PhotoItem = { src: string; thumb?: string; alt?: string };

export default function HomePage() {
  // ---- GALERİ VERİSİ ----
  // /public/gallery/... altına dosyaları koy
  const photos: PhotoItem[] = useMemo(
    () => [
      { src: "/gallery/photo-1.jpg", alt: "Etkinlik 1" },
      { src: "/gallery/photo-2.jpg", alt: "Atölye 2" },
      { src: "/gallery/photo-3.jpg", alt: "Saha Çalışması" },
      { src: "/gallery/photo-4.jpg", alt: "Gönüllüler" },
      { src: "/gallery/photo-5.jpg", alt: "Toplantı" },
      { src: "/gallery/photo-6.jpg", alt: "Sunum" },
    ],
    []
  );

  // ---- LIGHTBOX / NAV STATE ----
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prev = () => setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setCurrentIndex((i) => (i + 1) % photos.length);

  // Klavye kısayolları (lightbox açıkken)
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, photos.length]);

  // ---- AUTOPLAY ----
  // Hover/odak/visible durumlarına göre durdur/başlat
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersNoMotion = useRef<boolean>(false);

  useEffect(() => {
    // prefers-reduced-motion desteği
    if (typeof window !== "undefined") {
      prefersNoMotion.current =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  }, []);

  useEffect(() => {
    const shouldRun =
      !lightboxOpen &&
      !isHoveringCarousel &&
      !prefersNoMotion.current &&
      typeof document !== "undefined" &&
      document.visibilityState === "visible";

    if (shouldRun) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((i) => (i + 1) % photos.length);
      }, 3500);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [lightboxOpen, isHoveringCarousel, photos.length]);

  useEffect(() => {
    const onVisibility = () => {
      // görünürlük değişince autoplay efektinde effect tetiklensin
      setIsHoveringCarousel((h) => h);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // ---- SWIPE (mobil) basitçe: dokun sürükle ile next/prev ----
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 30) return; // küçük hareketleri yok say
    if (dx < 0) next();
    else prev();
  };

  const currentItem = photos[currentIndex];

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

      {/* ---- FOTO GALERİ (INSTAGRAM CAROUSEL STİLİ + AUTOPLAY) ---- */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-4xl font-bold">Galeri</h2>

            {/* sayaç */}
            <div className="text-white/60 text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          <div
            className="relative w-full h-[60vw] md:h-[500px] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHoveringCarousel(true)}
            onMouseLeave={() => setIsHoveringCarousel(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Katmanlı kartlar */}
            {photos.map((item, idx) => {
              const isActive = idx === currentIndex;
              const offset = idx - currentIndex; // negatif: sol, pozitif: sağ

              // katman davranışı: en fazla +/-2 görünür olsun, diğerleri fade-out
              const visible = Math.abs(offset) <= 2;

              return (
                <motion.button
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[78%] md:w-[62%] aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] focus:outline-none"
                  style={{ zIndex: visible ? 100 - Math.abs(offset) : 1, pointerEvents: visible ? "auto" : "none" }}
                  animate={{
                    x: offset * 70, // sağa/sola yatay kayma
                    scale: isActive ? 1 : Math.max(0.82, 1 - Math.abs(offset) * 0.08),
                    rotate: isActive ? 0 : offset * 1.5, // hafif bir eğim
                    opacity: visible ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  aria-label={item.alt ?? "Fotoğraf"}
                >
                  <Image
                    src={item.thumb ?? item.src}
                    alt={item.alt ?? "Fotoğraf"}
                    fill
                    sizes="(max-width: 768px) 78vw, 62vw"
                    className="object-cover"
                    priority={idx < 2}
                  />

                  {/* alt yazı şeridi */}
                  {item.alt && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left">
                      <span className="text-sm text-white/90">{item.alt}</span>
                    </div>
                  )}
                </motion.button>
              );
            })}

            {/* Önceki */}
            <button
              onClick={prev}
              className="absolute left-2 md:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
              aria-label="Önceki"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" stroke="white" fill="none">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Sonraki */}
            <button
              onClick={next}
              className="absolute right-2 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
              aria-label="Sonraki"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" stroke="white" fill="none">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobil ipucu */}
          <p className="mt-4 text-white/60 text-sm md:hidden">Sürükleyerek fotoğraflar arasında gez 👆</p>
        </div>
      </section>

      {/* BLOG + En Altta Gönüllü Ol */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black text-white text-center relative overflow-hidden">
        <motion.div
          className="absolute -top-20 left-0 w-full h-40 bg-white/10 blur-3xl"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 relative z-10">Blog</h2>

        {/* Blog Carousel (örnek dummy içerik) */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[
              { title: "Blog Yazısı 1", excerpt: "Gençlerle dayanışma üzerine..." },
              { title: "Blog Yazısı 2", excerpt: "Nilüfer’de gençlik hareketleri..." },
              { title: "Blog Yazısı 3", excerpt: "Bir Bulut Olsam’dan proje notları..." },
              { title: "Blog Yazısı 4", excerpt: "Avrupa’daki gençlik programları..." },
            ].map((post, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] max-w-[300px] bg-white rounded-xl shadow-lg p-6 text-left snap-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-bold text-sky-700 mb-2">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <Link href="/blog" className="text-sky-600 hover:underline text-sm font-medium">
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
          {photos.length > 1 && (
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
              <Image
                src={currentItem.src}
                alt={currentItem.alt ?? "Fotoğraf"}
                fill
                sizes="80vw"
                className="object-contain"
                priority
              />
            </div>
            {/* Sayaç */}
            <div className="text-center text-white/70 text-sm mt-3">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Sonraki */}
          {photos.length > 1 && (
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
