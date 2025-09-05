import Image from "next/image";
import { sanityClient } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { PortableText } from "@portabletext/react";

interface Post {
  title: string;
  mainImage?: any;
  body: any;
  publishedAt?: string;
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title, mainImage, body, publishedAt
  }`;
  return await sanityClient.fetch(query, { slug });
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div className="max-w-3xl mx-auto py-12">Yazı bulunamadı.</div>;
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
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}
      <div className="prose">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
