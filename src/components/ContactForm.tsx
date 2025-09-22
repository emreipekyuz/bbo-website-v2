"use client";
import { useState } from "react";

export default function ContactForm() {
  // TODO: Buraya kendi Formspree endpoint'ini yapıştır
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xandalzo";

  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || "Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.");
        setState("error");
      }
    } catch (err) {
      setErrorMsg("Bağlantı hatası. İnternetinizi kontrol edin.");
      setState("error");
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Ad Soyad</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
              placeholder="Adınız Soyadınız"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">E-posta</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
              placeholder="ornek@domain.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="subject">Konu (opsiyonel)</label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
            placeholder="Kısa konu başlığı"
          />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="message">Mesajınız</label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
            placeholder="Mesajınızı buraya yazın…"
          />
        </div>

        {/* KVKK onayı istersen */}
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" required className="mt-1" />
          Mesajımın iletişim amacıyla işlenmesini kabul ediyorum.
        </label>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {state === "submitting" ? "Gönderiliyor…" : "Gönder"}
        </button>

        {state === "success" && (
          <p className="text-green-400 text-sm mt-2">
            Teşekkürler! Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.
          </p>
        )}
        {state === "error" && (
          <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
        )}
      </form>

      {/* Alternatif iletişim bilgileri */}
      <div className="mt-8 text-sm text-gray-400">
        <p>✉️ <a href="mailto:iletisim@birbulutolsam.com" className="hover:text-white">iletisim@birbulutolsam.com</a></p>
        <p>📍 Bursa, Türkiye</p>
      </div>
    </div>
  );
}
