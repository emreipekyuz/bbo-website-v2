// app/blog/[slug]/page.tsx
import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { createClient } from "next-sanity";
import { urlFor } from "@/lib/sanity.image";

// ------ Sanity client (senin mevcut client'ını da kullanabilirsin) ------
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
});

// ------ Types ------
interface Post {
  title: string;
  mainImage?: unknown;
  body: PortableTextBlock[] | undefined;
  publishedAt?: string;
}

interface Params {
  slug: string;
}

// ------ Data fetchers ------
async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title, mainImage, body, publishedAt
  }`;
  const data = await client.fetch<Post | null>(query, { slug });
  return data ?? null;
}

// Static export için tüm slug'ları build-time'da üret
export async function generateStaticParams(): Promise<Params[]> {
  const query = `*[_type == "post" && defined(slug.current)][].{"slug": slug.current}`;
  const slugs = await client.fetch<{ slug: string }[]>(query);
  return slugs.map((s) => ({ slug: s.slug }));
}

// fallback istemiyoruz (static export)
export const dynamicParams = false;

// (opsiyonel) açıkça statik olduğunu belirtelim
export const dynamic = "force-static";

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        Yazı bulunamadı.
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {post.publishedAt && (
        <p className="text-gray-500 mb-4">
          {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
        </p>
      )}

      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(1200).height(630).url()}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      {post.body && (
        <div className="prose">
          <PortableText value={post.body} />
        </div>
      )}
    </article>
  );
}
