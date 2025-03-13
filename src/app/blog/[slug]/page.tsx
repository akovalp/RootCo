/**
 * Single Blog Post Page
 *
 * This component renders an individual blog post based on the slug from the URL.
 * It fetches the post data, generates SEO metadata, and renders the full post
 * with its title, cover image, content, author information, and publication date.
 * This page uses React Markdown to render the content and provides metadata for
 * search engines and social sharing.
 */
import React from "react";
import { getPostBySlug } from "../api/posts";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";

// This the file that will be the Dynamic route for individual blog posts
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <div className="mb-6">
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Blog Sayfasına Geri Dönün
              </Link>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readingTime}</span>
              {post.tags && post.tags.length > 0 && (
                <>
                  <span className="mx-2">•</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium mb-1">Yazan</h3>
                <p>
                  {typeof post.author === "string"
                    ? post.author
                    : post.author.name}
                </p>
              </div>
              <Link
                href="/blog"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
              >
                Diğer Yazılar
              </Link>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
