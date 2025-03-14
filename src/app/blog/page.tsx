/**
 * Blog Main Page
 *
 * This component renders the main blog listing page.
 * It displays a hero section with a featured post,
 * a sidebar with blog categories, and a grid of all blog posts.
 * The component fetches all posts and determines which one
 * to feature in the hero section.
 */
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import BlogList from "./components/BlogList";
// import BlogCategories from "./components/BlogCategories";
import BlogHero from "./components/BlogHero";
import { getAllPosts } from "./api/posts";

export default function BlogPage() {
  // Get all blog posts
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) || posts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero section with featured post */}
        {featuredPost && <BlogHero post={featuredPost} />}

        <div className="mt-12 w-full">
          {/* Main content with blog list */}
          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
