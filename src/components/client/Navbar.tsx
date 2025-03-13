"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-quarter-spanish-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
      <Link href="/" className="text-walnut text-2xl font-bold">
        ROOT
      </Link>

      {/* //SECTION - Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {/* //ANCHOR: Home */}
        <Link
          href="/"
          className="text-willow-grove hover:text-walnut transition-colors"
        >
          Ana sayfa
        </Link>
        {/* //ANCHOR: About */}
        <Link
          href="/about"
          className="text-willow-grove hover:text-walnut transition-colors"
        >
          Hakkımızda
        </Link>
        {/* //ANCHOR: Founders */}
        <Link
          href="/founders"
          className="text-willow-grove hover:text-walnut transition-colors"
        >
          Kurucular
        </Link>
        {/* //ANCHOR: Contact */}
        <Link
          href="/contact"
          className="text-willow-grove hover:text-walnut transition-colors"
        >
          İletişim
        </Link>
        {/* //ANCHOR: Blog */}
        <Link
          href="/blog"
          className="text-willow-grove hover:text-walnut transition-colors"
        >
          Blog
        </Link>
      </div>
      {/* //!SECTION - Desktop Navigation */}

      {/* //SECTION - Mobile Navigation Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-willow-grove focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* //!SECTION - Mobile Navigation Button */}
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 right-0 bg-quarter-spanish-white shadow-md z-10 md:hidden"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="/"
              className="text-willow-grove hover:text-walnut transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/about"
              className="text-willow-grove hover:text-walnut transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/founders"
              className="text-willow-grove hover:text-walnut transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kurucular
            </Link>
            <Link
              href="/contact"
              className="text-willow-grove hover:text-walnut transition-colors"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
