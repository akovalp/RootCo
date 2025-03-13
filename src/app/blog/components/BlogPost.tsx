/**
 * Blog Post Component
 *
 * This component renders the content of an individual blog post.
 * It displays the post title, content, publication date, author,
 * and category. The content is rendered using dangerouslySetInnerHTML
 * which allows for HTML content to be displayed. This component is used
 * within the single blog post page to present the full post content.
 */
import React from "react";

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  author?: string;
  category?: string;
}

export default function BlogPost({
  title,
  content,
  date,
  author,
  category,
}: BlogPostProps) {
  return (
    <article className="blog-post">
      <header>
        <h1>{title}</h1>
        <div className="meta">
          <time>{date}</time>
          {author && <span className="author">By {author}</span>}
          {category && <span className="category">In {category}</span>}
        </div>
      </header>
      <div className="content">
        {/* Content will be rendered here */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
}
