/**
 * Blog Categories Data
 *
 * This file defines the list of available blog categories.
 * Each category has an ID, name, slug (URL-friendly identifier),
 * and description. These categories are used for organizing and
 * filtering blog posts and are displayed in the categories sidebar.
 */
import { Category } from "../utils/types";

const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "Articles about the latest technology trends and innovations.",
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    description: "Thoughts and tips on UI/UX design and creative processes.",
  },
  {
    id: "3",
    name: "Development",
    slug: "development",
    description:
      "Programming tutorials, code snippets, and development best practices.",
  },
  {
    id: "4",
    name: "Business",
    slug: "business",
    description:
      "Insights on startups, entrepreneurship, and business strategies.",
  },
];

export default categories;
