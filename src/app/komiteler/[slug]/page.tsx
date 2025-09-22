// src/app/komiteler/[slug]/page.tsx
import Image from "next/image";
import { committees } from "@/data/committees";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return committees.map((c) => ({ slug: c.slug }));
}

function formatTR(dateISO?: string) {
  if (!dateISO) return null;
  try {
    return new Date(dateISO).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return null;
  }
}

export default function CommitteePage({ params }: { params: { slug: string } }) {
  const committee = committees.find((c) => c.slug === params.slug);

  if (!committee) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4 text-white">Komite bulunamadı</h1>
        <p className="text-slate-300">Adres doğru mu kontrol eder misin?</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <section className="mb-8">
        {committee.heroImage && (
          <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow">
            <Image
              src={committee.heroImage}
              alt={committee.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mt-6 text-white">
          {committee.name}
        </h1>
        <p className="mt-3 text-slate-300 max-w-3xl leading-relaxed">
          {committee.description}
        </p>
      </section>

      {/* Kartlar başlığı */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">
          Bu kapsamda yaptıklarımız
        </h2>
      </div>

      {/* Kart ızgarası (tıklama yok) */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {committee.cards.map((card, idx) => {
          const dateTR = formatTR(card.date);
          return (
            <article
              key={idx}
              className="bg-white text-slate-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              aria-label={card.title}
            >
              {/* Üst görsel */}
              <div className="relative w-full h-44 bg-slate-200">
                {card.coverImage ? (
                  <Image
                    src={card.coverImage}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : null}
              </div>

              {/* Alt açıklama */}
              <div className="p-5">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {card.excerpt}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  {dateTR && <span>{dateTR}</span>}
                  {card.tag && (
                    <>
                      <span aria-hidden>•</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border">
                        {card.tag}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
