/**
 * Blog Card Component
 *
 * This component renders an individual blog post card in the blog listing.
 * It displays the post's cover image, title, excerpt, publication date,
 * and reading time in an attractive card format. The entire card is clickable
 * and links to the full blog post page. On hover, a shadow effect is applied
 * to provide visual feedback.
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../utils/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="blog-card bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300">
      <div className="relative h-48 w-full">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition"
        >
          Devamını Okuyun →
        </Link>
      </div>
    </div>
  );
}
