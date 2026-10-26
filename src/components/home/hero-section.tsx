import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { HeroCarousel } from "./hero-carousel";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-4 sm:pt-10 sm:pb-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
        {/* Brand Eyebrow & Mobile QR Quick Review Access */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Catering & Culinary Artistry</span>
          </div>

          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary hover:bg-muted border border-border/80 text-foreground text-[11px] sm:text-xs font-medium transition-all shadow-2xs group cursor-pointer"
            aria-label="View guest reviews and ratings"
          >
            <div className="flex items-center gap-1 text-primary">
              <Star className="w-3 h-3 fill-primary text-primary" />
              <span className="font-bold">5.0</span>
            </div>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              • Guest Reviews
            </span>
          </Link>
        </div>

        {/* Headline */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.15]">
            Artisan Catering for <br className="hidden sm:inline" />
            <span className="italic font-normal text-primary">Every Occasion.</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            From special gatherings and private celebrations to workplace hospitality and artisanal desserts, we create unforgettable food experiences.
          </p>
        </div>

        {/* The Balanced 5s Rotating Showcase Carousel */}
        <div className="w-full pt-1">
          <HeroCarousel />
        </div>

        {/* Quick Actions: Direct & Clear */}
        <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs hover:shadow flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Inquire About Catering</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/catering"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Catering Details</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
 