// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { PortableTextBlock } from "@portabletext/react";
import { createClient } from "next-sanity";
import { urlFor } from "@/lib/sanity.image";

// --- Sanity client (gerekirse kendi client'ını kullanabilirsin) ---
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
});

// --- Types ---
type PostCard = {
  title: string;
  slug: string;
  publishedAt?: string;
  mainImage?: unknown;
  // body?: PortableTextBlock[]; // kısaltma/özet istersek açarız
};

// Bu sayfanın statik üretildiğini açıkça belirtelim
export const dynamic = "force-static";

async function getPosts(): Promise<PostCard[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    mainImage
  }`;
  const posts = await client.fetch<PostCard[]>(query);
  return posts ?? [];
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-400">Şu anda yayında blog yazısı bulunmuyor.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white text-black rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Kapak görseli */}
              {post.mainImage ? (
                <div className="w-full h-48 bg-gray-200">
                  <Image
                    src={urlFor(post.mainImage).width(800).height(450).url()}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-200" />
              )}

              {/* İçerik */}
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline"
                  >
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
