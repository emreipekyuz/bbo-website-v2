// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

// Statik üretim (SSG)
export const dynamic = "force-static";

export default async function BlogIndexPage() {
  // İstersen burada sıralama yapabilirsin
  const sorted = [...posts].sort((a, b) => {
    const da = a.publishedAt ? +new Date(a.publishedAt) : 0;
    const db = b.publishedAt ? +new Date(b.publishedAt) : 0;
    return db - da;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Blog</h1>

      {sorted.length === 0 ? (
        <p className="text-gray-400">Şu anda yayında blog yazısı bulunmuyor.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="bg-white text-black rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Kapak görseli (public/ altında olmalı ya da tam URL olmalı) */}
              <div className="w-full h-48 bg-gray-200 relative">
                <Image
                  src={post.coverImage ?? "/placeholder.jpg"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>

              {/* İçerik */}
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                {post.publishedAt && (
                  <p className="text-sm text-gray-600 mb-3">
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                  </p>
                )}

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm text-blue-600 hover:underline font-medium"
                >
                  Devamını oku →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
