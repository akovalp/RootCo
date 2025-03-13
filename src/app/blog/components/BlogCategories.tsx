import React from "react";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface BlogCategoriesProps {
  categories: Category[];
  currentCategory?: string;
}

export default function BlogCategories({
  categories,
  currentCategory,
}: BlogCategoriesProps) {
  return (
    <div className="blog-categories">
      <h3>Categories</h3>
      <ul>
        <li className={!currentCategory ? "active" : ""}>
          <a href="/blog">All</a>
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={currentCategory === category.slug ? "active" : ""}
          >
            <a href={`/blog/category/${category.slug}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
