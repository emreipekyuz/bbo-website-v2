import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt?: string;
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id, title, slug, excerpt, mainImage, publishedAt
  }`;
  return await sanityClient.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).width(600).height(400).url()}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {post.excerpt && (
                <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
              )}
              {post.publishedAt && (
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
