/**
 * Blog List Component
 *
 * This component renders a grid of blog post cards.
 * It takes an array of blog posts and an optional title,
 * then displays each post as a BlogCard in a responsive grid layout.
 * The component handles empty states by showing a "No posts found" message
 * when the posts array is empty.
 */
import React from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "../utils/types";

interface BlogListProps {
  posts: BlogPost[];
  title?: string;
}

export default function BlogList({
  posts,
  title = "Latest Posts",
}: BlogListProps) {
  return (
    <div className="blog-list">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {posts.length === 0 ? (
        <div className="bg-gray-50 p-8 text-center rounded-lg">
          <p className="text-gray-500">No posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
