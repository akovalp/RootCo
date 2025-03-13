/**
 * Blog Posts API
 *
 * This file contains utility functions for reading and manipulating blog post data.
 * It provides functions to:
 * - Get all posts from the file system
 * - Get a single post by its slug
 * - Filter posts by category or tag
 * - Get featured posts
 * - Calculate reading time
 *
 * The file uses the gray-matter library to parse Markdown files with YAML frontmatter
 * and returns structured BlogPost objects that can be used by the UI components.
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/app/blog/utils/types";

const postsDirectory = path.join(process.cwd(), "src/app/blog/data/posts");

// This is a placeholder for the API functions
// Actual implementation will be added later

export function getAllPosts(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get the slug
      const slug = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the slug and content
      return {
        id: slug,
        slug,
        content,
        title: data.title || "",
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "",
        date: data.date || "",
        author: data.author || "",
        category: data.category || "",
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
        featured: data.featured || false,
      } as BlogPost;
    });

  // Sort posts by date in descending order
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Combine the data with the slug and content
    return {
      id: slug,
      slug,
      content,
      title: data.title || "",
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "",
      date: data.date || "",
      author: data.author || "",
      category: data.category || "",
      tags: data.tags || [],
      readingTime: calculateReadingTime(content),
      featured: data.featured || false,
    } as BlogPost;
  } catch (error) {
    console.error(`Error getting post with slug ${slug}:`, error);
    return null;
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => {
    if (typeof post.category === "string") {
      return post.category === category;
    }
    return post.category?.slug === category;
  });
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

// Helper function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} dk okuma süresi`;
}
