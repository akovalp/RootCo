import React from "react";
import BlogCard from "./BlogCard";

interface BlogListProps {
  posts: Array<{
    title: string;
    excerpt: string;
    slug: string;
    date: string;
  }>;
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="blog-list">
      <h2>Latest Posts</h2>
      <div className="posts-grid">
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
            />
          ))
        )}
      </div>
    </div>
  );
}
