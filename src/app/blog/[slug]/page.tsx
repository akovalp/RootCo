import React from "react";
// This the file that will be the Dynamic route for individual blog posts
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Individual blog post page - content will be implemented later</p>
    </div>
  );
}
