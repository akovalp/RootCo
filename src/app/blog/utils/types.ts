/**
 * Blog Type Definitions
 *
 * This file contains TypeScript type definitions for the blog section.
 * It defines the structure for blog posts, categories, and authors
 * to ensure type safety throughout the application and provide
 * intellisense when working with blog data.
 *
 * These types are used by the API functions and UI components
 * to maintain consistency in data handling.
 */
export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type BlogAuthor = {
  id: string;
  name: string;
  image: string;
};

export type BlogPost = {
  id: string; // This is the unique identifier for the post
  title: string; // This is the title of the post
  slug: string; // This is the slug of the post (URL-friendly identifier for a resource, typically used in web development to create human-readable and SEO-friendly URLs.)
  excerpt: string; // This is the short description of the post
  content: string; // This is the content of the post
  coverImage: string; // This is the image of the post
  author: BlogAuthor | string; // Can be author object or author ID
  category: BlogCategory | string; // Can be category object or category ID
  date: string;
  readingTime: string;
  featured?: boolean;
  tags?: string[];
};
