/**
 * Blog Hero Component
 *
 * This component renders a prominent hero section at the top of the blog page.
 * It displays the featured post with a large background image, title, excerpt,
 * publication date, and a "Read More" link. The component creates visual focus
 * on the most important or latest blog post to drive user engagement.
 */
import React from "react";
import { BlogPost } from "../utils/types";
import Link from "next/link";

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <div
      className="blog-hero relative overflow-hidden rounded-xl h-96 flex items-center"
      style={{
        backgroundImage: `url(${post.coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="container relative z-10 p-8 text-white">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
              {typeof post.category === "string"
                ? post.category
                : post.category?.name}
            </span>
            <span className="ml-4 text-sm opacity-80">
              {post.date} • {post.readingTime}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg opacity-90 mb-6">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Yazıyı Okuyun
          </Link>
        </div>
      </div>
    </div>
  );
}
