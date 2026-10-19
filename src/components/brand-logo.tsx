"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "horizontal" | "full" | "monogram";
  className?: string;
  imageClassName?: string;
  asLink?: boolean;
  priority?: boolean;
  height?: number;
}

export function BrandLogo({
  variant = "horizontal",
  className,
  imageClassName,
  asLink = true,
  priority = false,
  height,
}: BrandLogoProps) {
  const content = (
    <div className={cn("inline-flex items-center group transition-transform", className)}>
      {variant === "horizontal" && (
        <div className="relative flex items-center">
          {/* Dark mode version: radiant metallic gold */}
          <Image
            src="/images/brand/logo-horizontal.png"
            alt="Divine & Delight — Meal Prep + Catering"
            width={240}
            height={48}
            priority={priority}
            className={cn(
              "h-10 sm:h-11 w-auto object-contain hidden dark:block transition-all duration-300 group-hover:brightness-110",
              imageClassName
            )}
            style={height ? { height: `${height}px` } : undefined}
          />
          {/* Light mode version: deep rich gold for high contrast */}
          <Image
            src="/images/brand/logo-horizontal-lightmode.png"
            alt="Divine & Delight — Meal Prep + Catering"
            width={240}
            height={48}
            priority={priority}
            className={cn(
              "h-10 sm:h-11 w-auto object-contain block dark:hidden transition-all duration-300 drop-shadow-xs group-hover:brightness-95",
              imageClassName
            )}
            style={height ? { height: `${height}px` } : undefined}
          />
        </div>
      )}

      {variant === "full" && (
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/brand/logo-full-tight.png"
            alt="Divine & Delight — Meal Prep + Catering"
            width={280}
            height={220}
            priority={priority}
            className={cn(
              "w-auto max-h-24 sm:max-h-28 object-contain transition-all duration-300 group-hover:scale-105",
              imageClassName
            )}
            style={height ? { height: `${height}px` } : undefined}
          />
        </div>
      )}

      {variant === "monogram" && (
        <div className="relative flex items-center">
          <Image
            src="/images/brand/logo-monogram.png"
            alt="D&D Monogram"
            width={64}
            height={52}
            priority={priority}
            className={cn(
              "h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105",
              imageClassName
            )}
            style={height ? { height: `${height}px` } : undefined}
          />
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md inline-flex items-center"
        aria-label="Divine & Delight — Return to Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
