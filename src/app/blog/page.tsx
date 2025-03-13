import React from "react";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog Page</h1>
        <p className="text-lg text-willow-grove">
          Main blog listing page - content will be implemented later
        </p>
      </main>
      <Footer />
    </div>
  );
}
