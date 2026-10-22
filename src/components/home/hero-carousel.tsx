"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ROTATING_MEALS = [
  {
    name: "Lasagna",
    serving: "With Vegetables Only",
    image: "/images/meals/lasagna.jpg",
  },
  {
    name: "Chicken Kabobs",
    serving: "With Rice & Broccoli",
    image: "/images/meals/chicken-kabobs.jpg",
  },
  {
    name: "Shrimp Cajun",
    serving: "With Rice and Vegetables",
    image: "/images/meals/shrimp-cajun.jpg",
  },
  {
    name: "Meat Della Casa",
    serving: "With Rice and Vegetables",
    image: "/images/meals/meat-della-casa.jpg",
  },
  {
    name: "Carne Mushroom in White Sauce",
    serving: "With Rice & Broccoli",
    image: "/images/meals/carne-mushroom.jpg",
  },
  {
    name: "Tilapia Lemon",
    serving: "With Rice & Broccoli",
    image: "/images/meals/tilapia-lemon.jpg",
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
      setCurrentIndex((prev) => (prev + 1) % ROTATING_MEALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative aspect-[4/3] sm:aspect-[4/3.4] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-border shadow-lg bg-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Featured meals carousel"
      role="region"
    >
      {/* 6 Rotating Meal Images with Smooth Crossfade */}
      {ROTATING_MEALS.map((meal, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={meal.name}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            )}
          >
            <Image
              src={meal.image}
              alt={`${meal.name} - ${meal.serving}`}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          </div>
        );
      })}

      {/* Floating Active Meal Label & Minimal Dots */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white z-20 pointer-events-auto">
        <div className="space-y-0.5 max-w-[65%]">
          <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold block truncate">
            {ROTATING_MEALS[currentIndex].serving}
          </span>
          <p className="font-serif text-sm sm:text-base font-bold drop-shadow-sm truncate">
            {ROTATING_MEALS[currentIndex].name}
          </p>
        </div>

        {/* Minimal Progress Dots */}
        <div className="flex items-center gap-1.5 bg-neutral-950/75 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10 shrink-0">
          {ROTATING_MEALS.map((meal, dotIdx) => (
            <button
              key={meal.name}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={cn(
                "h-1.5 rounded-full transition-all cursor-pointer",
                dotIdx === currentIndex
                  ? "w-4 bg-primary"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Show ${meal.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
