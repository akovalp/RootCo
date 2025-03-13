import React from "react";

interface BlogHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function BlogHero({
  title,
  subtitle,
  backgroundImage,
}: BlogHeroProps) {
  return (
    <div
      className="blog-hero"
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
