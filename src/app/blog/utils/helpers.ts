import { BlogPost } from "./types";

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Check if an image is vertical or horizontal
 * Returns a promise that resolves to 'vertical', 'horizontal', or 'square'
 */
export function getImageOrientation(
  src: string
): Promise<"vertical" | "horizontal" | "square"> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const { naturalWidth, naturalHeight } = img;

      // Consider a small tolerance for "square" images (within 5%)
      const aspectRatio = naturalWidth / naturalHeight;
      if (aspectRatio >= 0.95 && aspectRatio <= 1.05) {
        resolve("square");
      } else if (naturalWidth > naturalHeight) {
        resolve("horizontal");
      } else {
        resolve("vertical");
      }
    };

    // Fallback to horizontal in case of error
    img.onerror = () => resolve("horizontal");

    // Assign src after adding event listeners
    img.src = src;
  });
}

/**
 * Sort posts by date (newest first)
 */
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}
