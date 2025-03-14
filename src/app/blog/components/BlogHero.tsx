"use client";

/**
 * Blog Hero Component
 *
 * This component renders a prominent hero section at the top of the blog page.
 * It displays the featured post with a large background image, title, excerpt,
 * publication date, and a "Read More" link. The component creates visual focus
 * on the most important or latest blog post to drive user engagement.
 */
import React, { useState, useEffect } from "react";
import { BlogPost } from "../utils/types";
import Link from "next/link";
import Image from "next/image";
import { getImageOrientation } from "../utils/helpers";

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  const [orientation, setOrientation] = useState<
    "vertical" | "horizontal" | "square" | null
  >(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Detect image orientation and dimensions when component mounts
    if (post.coverImage) {
      const img = new window.Image();
      img.onload = () => {
        const { naturalWidth, naturalHeight } = img;
        setImgDimensions({ width: naturalWidth, height: naturalHeight });

        // Consider a small tolerance for "square" images (within 5%)
        const aspectRatio = naturalWidth / naturalHeight;
        if (aspectRatio >= 0.95 && aspectRatio <= 1.05) {
          setOrientation("square");
        } else if (naturalWidth > naturalHeight) {
          setOrientation("horizontal");
        } else {
          setOrientation("vertical");
        }
        setIsLoaded(true);
      };

      img.onerror = () => {
        setOrientation("horizontal");
        setIsLoaded(true);
      };

      img.src = post.coverImage;
    } else {
      setIsLoaded(true);
    }
  }, [post.coverImage]);

  // Show a skeleton loader while image orientation is being detected
  if (!isLoaded) {
    return (
      <div className="blog-hero rounded-xl overflow-hidden bg-gray-100 animate-pulse">
        <div className="h-80 md:h-96"></div>
      </div>
    );
  }

  // Calculate aspect ratio for CSS
  const aspectRatio =
    imgDimensions.width && imgDimensions.height
      ? `${imgDimensions.width} / ${imgDimensions.height}`
      : undefined;

  // For all image types, use a flexible layout that adapts to the image
  return (
    <div className="blog-hero rounded-xl overflow-hidden bg-gray-100">
      <div
        className={`flex flex-col ${
          orientation !== "horizontal" ? "md:flex-row" : ""
        }`}
      >
        {/* Image Container - Adapts to natural dimensions */}
        <div
          className={`relative ${
            orientation === "horizontal" ? "w-full" : "md:w-1/2"
          }`}
          style={orientation === "horizontal" ? {} : { aspectRatio }}
        >
          {orientation === "horizontal" ? (
            <div className="relative w-full" style={{ aspectRatio }}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
              {/* Content for horizontal images */}
              <div className="absolute inset-0 z-10 flex items-center p-6 md:p-8">
                <div className="w-full max-w-2xl">
                  <div className="mb-4">
                    <span className="text-sm bg-blue-600 px-3 py-1 rounded-full text-white">
                      {typeof post.category === "string"
                        ? post.category
                        : post.category?.name}
                    </span>
                    <span className="ml-4 text-sm text-white opacity-80">
                      {post.date} • {post.readingTime}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                    {post.title}
                  </h1>
                  <p className="text-base md:text-lg text-white opacity-90 mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                  >
                    Yazıyı Okuyun
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          )}
        </div>

        {/* Content Container for vertical/square images */}
        {(orientation === "vertical" || orientation === "square") && (
          <div className="bg-gradient-to-r from-black to-gray-800 p-6 md:p-8 flex items-center md:w-1/2">
            <div className="w-full">
              <div className="mb-4">
                <span className="text-sm bg-blue-600 px-3 py-1 rounded-full text-white">
                  {typeof post.category === "string"
                    ? post.category
                    : post.category?.name}
                </span>
                <span className="ml-4 text-sm text-white opacity-80">
                  {post.date} • {post.readingTime}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                {post.title}
              </h1>
              <p className="text-base md:text-lg text-white opacity-90 mb-6">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
              >
                Yazıyı Okuyun
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
