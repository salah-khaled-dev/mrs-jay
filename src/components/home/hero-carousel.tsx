"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SHOWCASE_SECTIONS = [
  {
    category: "Events & Celebrations",
    title: "Artisan Presentation & Bespoke Buffets",
    image: "/images/meals/catering-event.webp",
  },
  {
    category: "Corporate & Team Building",
    title: "Executive Banquets & Workplace Hospitality",
    image: "/images/meals/corporate-catering.webp",
  },
  {
    category: "Birthdays & Private Parties",
    title: "Lavish Dining for Unforgettable Gatherings",
    image: "/images/meals/wedding-catering.webp",
  },
  {
    category: "Artisanal Desserts",
    title: "Handcrafted Pastries & Sweet Delights",
    image: "/images/desserts/dubai-eclair.webp",
  },
  {
    category: "Gourmet Meals",
    title: "Chef-Prepared Fresh Savory Creations",
    image: "/images/meals/hero-spread.webp",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    // Respect user's motion preference
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;
    }

    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_SECTIONS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative aspect-[16/10] sm:aspect-[16/8.5] min-h-[220px] max-h-[340px] w-full max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 shadow-md bg-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Catering and food showcase carousel"
      role="region"
    >
      {/* Rotating Images across each section with Smooth Crossfade */}
      {SHOWCASE_SECTIONS.map((item, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={item.category}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            )}
          >
            <Image
              src={item.image}
              alt={`${item.category} — ${item.title}`}
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
              className="object-cover"
            />
            {/* Elegant luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
          </div>
        );
      })}

      {/* Floating Section Info & Minimal Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-3.5 sm:left-5 right-3.5 sm:right-5 flex items-end justify-between text-white z-20 pointer-events-auto">
        <div className="space-y-0.5 max-w-[70%]">
          <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-widest text-amber-300 font-semibold drop-shadow-xs truncate">
            {SHOWCASE_SECTIONS[currentIndex].category}
          </span>
          <p className="font-serif text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md truncate">
            {SHOWCASE_SECTIONS[currentIndex].title}
          </p>
        </div>

        {/* Minimal Progress Dots */}
        <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/15 shrink-0">
          {SHOWCASE_SECTIONS.map((item, dotIdx) => (
            <button
              key={item.category}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={cn(
                "h-1.5 rounded-full transition-all cursor-pointer",
                dotIdx === currentIndex
                  ? "w-4 bg-primary"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Go to ${item.category}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
