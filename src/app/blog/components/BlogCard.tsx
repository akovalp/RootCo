import React from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
}: BlogCardProps) {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{excerpt}</p>
      {/* Link to blog post will be implemented later */}
    </div>
  );
}
