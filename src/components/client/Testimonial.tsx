"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TestimonialType = {
  quote: string;
  author: string;
};

const testimonials: TestimonialType[] = [
  {
    quote:
      "Root, yurtdışına taşınma sürecimde vazgeçilmez bir destek sistemi oldu. Danışmanlık ve topluluk büyük fark yarattı.",
    author: "Root topluluk üyesi(İstanbul -> Münih)",
  },
  {
    quote:
      "Yeni bir ülkeye uyum sağlamak zor olsa da, Root'un rehberliği ile çok daha kolay hale geldi.",
    author: "Root topluluk üyesi (İzmir -> Lisbon)",
  },
  {
    quote:
      "Türkiyeden göç sürecimde root, benimle aynı deneyimleri yaşayan akranlarım ile tanışmamda oldukça yardımcı oldu.",
    author: "Root topluluk üyesi (İstanbul -> Padova)",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance the carousel every 10 seconds, paused when hovering
  useEffect(() => {
    // Only set the interval if not hovering
    if (isHovering) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Increased from 5000ms to 10000ms (10 seconds)

    return () => clearInterval(timer);
  }, [isHovering]); // Re-run effect when hovering state changes

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="relative bg-quarter-spanish-white p-10 rounded-lg shadow-md"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-[120px]" // Set minimum height to prevent layout shifts
        >
          <blockquote className="text-willow-grove italic">
            "{testimonials[current].quote}"
            <footer className="mt-4 text-sm font-medium text-battleship-gray">
              — {testimonials[current].author}
            </footer>
          </blockquote>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-bourbon bg-opacity-10 text-bourbon hover:bg-opacity-20 transition-all"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex space-x-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current
                  ? "bg-bourbon scale-125"
                  : "bg-battleship-gray bg-opacity-30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-bourbon bg-opacity-10 text-bourbon hover:bg-opacity-20 transition-all"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
