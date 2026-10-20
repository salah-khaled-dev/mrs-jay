import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic decorative backdrop orbs */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 dark:bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-48 right-0 w-[400px] h-[400px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6 text-center lg:text-left">
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-[0.2em] font-medium mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Meals of the Week • 5 for $65</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.12] font-semibold text-foreground tracking-tight">
              Healthy, Homemade, <br />
              <span className="italic font-normal text-primary">High Quality Dining.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Elevated culinary meal preparation and luxury bespoke catering. Savor chef-prepared weekly meals delivered chilled to your doorstep, or indulge guests with extraordinary event catering across the United States.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Order 5 for $65 Meals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-border bg-card/80 hover:bg-muted text-foreground font-medium text-sm tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Catering & Events</span>
              </Link>
            </div>

            {/* Brand Proof Highlights */}
            <div className="pt-8 border-t border-border/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <span className="font-serif text-2xl font-bold text-foreground">5 for $65</span>
                <p className="text-xs text-muted-foreground">Weekly Chef Special</p>
              </div>
              <div className="space-y-1 border-l border-border pl-4">
                <span className="font-serif text-2xl font-bold text-foreground">100% Fresh</span>
                <p className="text-xs text-muted-foreground">Scratch Made Weekly</p>
              </div>
              <div className="space-y-1 border-l border-border pl-4">
                <span className="font-serif text-2xl font-bold text-foreground">Full-Service</span>
                <p className="text-xs text-muted-foreground">Weddings & Corporate</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Feature Image with Soft Rounded Corners */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-card/80">
                <Image
                  src="/images/meals/hero-spread.jpg"
                  alt="Divine & Delight Luxury Meal Prep Lineup on Black Marble"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold block">
                    Weekly Meal Prep
                  </span>
                  <p className="text-sm font-serif font-semibold drop-shadow-sm">
                    Lasagna • Chicken Kabobs • Cajun Shrimp • Meat Della Casa
                  </p>
                </div>
              </div>

              {/* Floating Accent Badge: 5 for $65 */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 bg-card/95 backdrop-blur-md p-4 rounded-2xl border border-primary/40 shadow-xl max-w-[220px] hidden sm:block animate-in fade-in duration-500">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-serif font-bold text-foreground">
                    Meals of the Week
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  5 Chef-Prepared Fresh Meals for $65. Heat & eat in 2 minutes.
                </p>
              </div>

              {/* Floating Accent Badge: Delivery Days */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:-right-6 bg-card/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-border shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-semibold">
                    Doorstep Delivery
                  </span>
                  <span className="text-xs font-serif font-bold text-foreground">
                    Sundays & Wednesdays
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
