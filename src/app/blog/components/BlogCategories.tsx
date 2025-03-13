/**
 * Blog Categories Component
 *
 * This component renders a sidebar with a list of blog categories.
 * It highlights the current category if one is selected and allows users
 * to filter blog posts by category. The component shows the category name
 * and optionally the post count for each category. It's used in the blog
 * main page to provide navigation and content organization.
 * This component is not used in the current implementation. We will add it later.
 */
import React from "react";
import Link from "next/link";
import { BlogCategory } from "../utils/types";

interface BlogCategoriesProps {
  currentCategory?: string;
}

export default function BlogCategories({
  currentCategory,
}: BlogCategoriesProps) {
  // Hardcoded categories for now - in a real app, these would be fetched from an API
  const categories: BlogCategory[] = [
    {
      id: "1",
      name: "Development",
      slug: "development",
      description: "Development related content",
    },
    {
      id: "2",
      name: "Design",
      slug: "design",
      description: "Design related content",
    },
    {
      id: "3",
      name: "Marketing",
      slug: "marketing",
      description: "Marketing related content",
    },
    {
      id: "4",
      name: "Business",
      slug: "business",
      description: "Business related content",
    },
  ];

  return (
    <div className="blog-categories bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li className={!currentCategory ? "font-medium text-blue-600" : ""}>
          <Link href="/blog" className="hover:text-blue-600 transition">
            All Posts
          </Link>
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={
              currentCategory === category.slug
                ? "font-medium text-blue-600"
                : ""
            }
          >
            <Link
              href={`/blog/category/${category.slug}`}
              className="hover:text-blue-600 transition"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
