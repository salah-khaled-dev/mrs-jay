import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCarousel } from "./hero-carousel";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Clean Eyebrow & Weekly Rotation Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
                DIVINE & DELIGHT
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[11px] font-medium tracking-wide">
                New Dishes & Specials Every Week
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] font-semibold text-foreground tracking-tight">
              Exceptional Meals. <br />
              <span className="italic font-normal text-primary">Made for You.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Premium meal prep and catering for everyday dining and special occasions. Discover new chef-crafted dishes, seasonal menus, and unique specials refreshed every single week.
            </p>

            {/* CTAs: Mobile-First, clearly visible */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/meal-prep"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Meals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/catering"
                className="w-full sm:w-auto px-7 py-3 rounded-full border border-border bg-card hover:bg-muted text-foreground font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Catering</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Rotating Meal Images (Crossfade Carousel) */}
          <div className="lg:col-span-5 w-full">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
