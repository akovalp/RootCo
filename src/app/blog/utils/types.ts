export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}
