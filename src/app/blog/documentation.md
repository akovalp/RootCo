# Comprehensive Blog Section Documentation

## 1. Architecture Overview

### 1.1 Core Architecture Principles

- **File-based Content:** Blog posts are stored as Markdown files with YAML frontmatter
- **Component-driven UI:** Modular React components for different aspects of the blog interface
- **Type Safety:** Comprehensive TypeScript definitions ensure data consistency
- **Clean API Layer:** Utility functions abstract file system operations and data manipulation
- **SEO Optimization:** Built-in metadata generation for search engines and social sharing
- **Responsive Design:** Tailwind CSS ensures proper display across all device sizes

### 1.2 Directory Structure

```
src/app/blog/
├── page.tsx                # Main blog listing page
├── [slug]/                 # Dynamic route for individual blog posts
│   └── page.tsx            # Single blog post page component
├── api/                    # API functions for blog data
│   └── posts.ts            # Functions to get and manipulate blog posts
├── components/             # React components for the blog UI
│   ├── BlogCard.tsx        # Card component for post previews
│   ├── BlogCategories.tsx  # Categories sidebar component
│   ├── BlogHero.tsx        # Hero component for featured posts
│   ├── BlogList.tsx        # Post listing component
│   └── BlogPost.tsx        # Full post content component
├── data/                   # Data storage
│   ├── categories.ts       # Blog categories data
│   └── posts/              # Markdown files for blog posts
│       ├── geride-kalanlar.md
│       └── sikayet.md
└── utils/                  # Utility functions and types
    ├── helpers.ts          # Helper functions
    └── types.ts            # TypeScript type definitions
```

## 2. Data Flow and State Management

### 2.1 Content Storage and Retrieval

The blog uses a file-based approach for storing and retrieving content:

1. **Storage:** Each blog post is a Markdown file in `data/posts/` with YAML frontmatter
2. **Reading:** The `posts.ts` API functions read files from the filesystem using Next.js's built-in file system capabilities
3. **Parsing:** The gray-matter library parses frontmatter and content
4. **Data Structure:** Content is transformed into `BlogPost` objects with consistent structure

### 2.2 Data Flow Diagram

```
Markdown Files → File System API → gray-matter Parsing → 
BlogPost Objects → React Components → Rendered UI
```

### 2.3 State Management

The blog implementation uses a simple, efficient approach to state management:

- **Server Components:** Next.js server components fetch data directly during rendering
- **Static Generation:** Blog pages are ideal candidates for static generation
- **No Client-side State:** Most blog functionality doesn't require client-side state management
- **Component Props:** Data flows down through component props in a predictable manner

## 3. Core Components and Their Functionality

### 3.1 Page Components

#### 3.1.1 Main Blog Listing (`page.tsx`)

```typescript
export default function BlogPage() {
  // Get all blog posts
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) || posts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero section with featured post */}
        {featuredPost && <BlogHero post={featuredPost} />}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          {/* Main content with blog list */}
          <div className="lg:col-span-3">
            <BlogList posts={posts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

This component:
- Fetches all blog posts using the `getAllPosts()` API function
- Identifies a featured post (either marked as featured or the first post)
- Renders the page layout with navigation, hero section, and post list
- Provisions space for categories sidebar (currently commented out)

#### 3.1.2 Single Post Page (`[slug]/page.tsx`)

```typescript
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
          {/* ... */}
          
          {/* Cover Image */}
          {/* ... */}
          
          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Post Footer */}
          {/* ... */}
        </article>
      </main>
      <Footer />
    </div>
  );
}
```

This component:
- Uses dynamic routing to match the slug parameter to a specific post
- Generates SEO metadata for the page based on post content
- Renders the full post with header, cover image, content, and footer
- Handles the not-found case gracefully

### 3.2 UI Components

#### 3.2.1 BlogCard Component

```typescript
export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="blog-card bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300">
      <div className="relative h-48 w-full">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition"
        >
          Devamını Okuyun →
        </Link>
      </div>
    </div>
  );
}
```

This component:
- Displays a preview card for a single blog post
- Shows cover image, date, reading time, title, and excerpt
- Truncates long titles and excerpts using line-clamp
- Provides a link to the full post
- Includes hover effects for better user experience

#### 3.2.2 BlogHero Component

```typescript
export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <div
      className="blog-hero relative overflow-hidden rounded-xl h-96 flex items-center"
      style={{
        backgroundImage: `url(${post.coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="container relative z-10 p-8 text-white">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
              {typeof post.category === "string"
                ? post.category
                : post.category?.name}
            </span>
            <span className="ml-4 text-sm opacity-80">
              {post.date} • {post.readingTime}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg opacity-90 mb-6">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Yazıyı Okuyun
          </Link>
        </div>
      </div>
    </div>
  );
}
```

This component:
- Creates a large, eye-catching hero section for featured posts
- Uses the cover image as a background with a gradient overlay
- Shows category, date, reading time, title, and excerpt
- Includes a prominent call-to-action button
- Ensures text remains readable over any background image

#### 3.2.3 BlogList Component

```typescript
export default function BlogList({
  posts,
  title = "Latest Posts",
}: BlogListProps) {
  return (
    <div className="blog-list">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {posts.length === 0 ? (
        <div className="bg-gray-50 p-8 text-center rounded-lg">
          <p className="text-gray-500">No posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
```

This component:
- Renders a grid of blog post cards
- Accepts a title prop with a default value of "Latest Posts"
- Handles empty state with a "No posts found" message
- Creates a responsive grid layout (1 column on mobile, 2 columns on desktop)
- Maps through posts array and renders a BlogCard for each post

## 4. Data Management and API Functions

### 4.1 API Functions (`posts.ts`)

The core API functions in `posts.ts` handle all the data operations:

#### 4.1.1 Getting All Posts

```typescript
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
```

This function:
- Reads all Markdown files from the posts directory
- Parses each file using gray-matter to extract frontmatter and content
- Creates a BlogPost object for each file with appropriate properties
- Calculates reading time for each post
- Sorts posts by date in descending order (newest first)

#### 4.1.2 Getting a Single Post

```typescript
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
```

This function:
- Takes a slug parameter to identify a specific post
- Constructs the file path and reads the file contents
- Parses the frontmatter and content
- Creates and returns a BlogPost object
- Handles errors gracefully and returns null if the post doesn't exist

#### 4.1.3 Calculating Reading Time

```typescript
// Helper function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} dk okuma süresi`;
}
```

This function:
- Calculates approximate reading time based on word count
- Assumes an average reading speed of 200 words per minute
- Returns a formatted string in Turkish with the reading time in minutes

### 4.2 Utility Functions (`helpers.ts`)

Several helper functions in `helpers.ts` provide additional functionality:

```typescript
// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Sort posts by date (newest first)
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Truncate text to specified length
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}
```

These functions:
- Format dates using locale-specific formatting (Turkish in this case)
- Sort posts by date in descending order
- Truncate text with ellipsis for display in previews

## 5. Data Structure and Type Definitions

### 5.1 Type Definitions (`types.ts`)

```typescript
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
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: BlogAuthor | string;
  category: BlogCategory | string;
  date: string;
  readingTime: string;
  featured?: boolean;
  tags?: string[];
};
```

These type definitions:
- Ensure consistent data structure throughout the application
- Allow for both simple string references and full object references for authors and categories
- Include optional fields for featured status and tags
- Provide a blueprint for creating new blog posts

### 5.2 Post Frontmatter Structure

Each Markdown file begins with YAML frontmatter that defines the post metadata:

```yaml
---
title: 'Göçün İlk Anları: Umut, Heyecan ve Vedalar'
excerpt: 'Göç yolculuğunun ilk anları, umut dolu valizlerden, bilinmezliğe yapılan ilk yolculuğa kadar hislerle örülü bir deneyimdir.'
date: '2025-03-13'
author: 'Selcen Serin Görgüner'
category: 'göç'
tags: ['göç', 'expat', 'yeni başlangıç', 'özlem']
coverImage: '/BlogImages/geride-kalanlar.webp'
---
```

This structure:
- Defines essential metadata for each post
- Is parsed by gray-matter into structured data
- Allows for easy addition of new fields in the future
- Separates content from metadata

## 6. Rendering and Content Display

### 6.1 Markdown Rendering

Blog post content is stored as Markdown and rendered using ReactMarkdown:

```typescript
<div className="prose prose-lg max-w-none">
  <ReactMarkdown>{post.content}</ReactMarkdown>
</div>
```

This approach:
- Allows content to be written in Markdown format
- Automatically converts Markdown syntax to HTML
- Uses Tailwind's typography plugin (prose) for consistent styling
- Supports rich content with headings, lists, links, and more

### 6.2 SEO Optimization

The blog generates SEO metadata for each post page:

```typescript
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
```

This function:
- Generates appropriate metadata for search engines
- Includes OpenGraph tags for social media sharing
- Uses post title, excerpt, and cover image
- Provides article-specific metadata like publication date

## 7. Extending the Blog

### 7.1 Adding New Posts

To add a new blog post:

1. Create a new Markdown file in `src/app/blog/data/posts/`
2. Add the required frontmatter metadata at the top
3. Write the post content in Markdown format
4. The post will automatically appear in the blog listing

Example of a new post file:

```markdown
---
title: 'New Post Title'
excerpt: 'Brief description of the post'
date: '2025-03-20'
author: 'Author Name'
category: 'category-slug'
tags: ['tag1', 'tag2', 'tag3']
coverImage: '/BlogImages/image-name.webp'
featured: true
---

# Heading 1

This is the content of your blog post. You can use **bold text**, 
*italic text*, and [links](https://example.com).

## Heading 2

- List item 1
- List item 2
- List item 3

> This is a blockquote.
```

### 7.2 Adding Categories

To implement the categories feature:

1. Uncomment the BlogCategories component in `page.tsx`
2. Populate the `categories.ts` file with category data
3. Update the `getPostsByCategory` function if needed
4. Create a dynamic route for category pages

### 7.3 Adding Custom Functionality

To extend the blog with new features:

1. Add new utility functions in `helpers.ts`
2. Extend type definitions in `types.ts` if needed
3. Create new components in the `components/` directory
4. Modify page components to use the new features

## 8. Performance Considerations

### 8.1 Static Generation

The blog is designed to work well with Next.js static generation:

- Posts are stored as files, which can be read at build time
- The getAllPosts() function can be used in getStaticProps
- Individual post pages can use getStaticPaths to pre-render all posts
- This approach provides excellent performance and SEO benefits

### 8.2 Image Optimization

The blog uses Next.js Image component for optimized image loading:

```typescript
<Image
  src={post.coverImage}
  alt={post.title}
  fill
  className="object-cover"
/>
```

This provides:
- Automatic responsive image generation
- Lazy loading for better performance
- WebP format conversion where supported
- Proper image sizing based on device

## 9. Internationalization

The blog currently includes Turkish language elements:

- "Devamını Okuyun" (Read More) links
- "dk okuma süresi" (minute reading time)
- Date formatting using Turkish locale

To support multiple languages, consider:
- Using a translation library like next-intl or next-i18next
- Creating language-specific post directories
- Adding a language switcher component

## 10. Future Enhancements

Potential improvements for the blog section:

1. **Comment System:** Add user comments with moderation
2. **Related Posts:** Show related posts based on categories or tags
3. **Search Functionality:** Implement full-text search for posts
4. **Newsletter Integration:** Add email subscription for new posts
5. **Social Sharing:** Add buttons for sharing posts on social media
6. **Analytics:** Integrate with web analytics to track post performance
7. **Rich Media:** Support for embedded videos and interactive elements

## 11. Conclusion

The blog section is a well-structured, modern implementation that provides a solid foundation for content publishing. Its file-based approach makes it easy to add new content while keeping the codebase clean and maintainable. The component-based architecture allows for easy customization and extension as the blog grows.