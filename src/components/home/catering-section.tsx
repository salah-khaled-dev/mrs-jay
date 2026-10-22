import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Utensils, CakeSlice } from "lucide-react";

export function CateringSection() {
  return (
    <section id="catering" className="py-14 sm:py-18 bg-card/40 dark:bg-card/20 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: One elegant, appropriately sized catering/event image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-border/80 shadow-lg group">
              <Image
                src="/images/meals/catering-event.webp"
                alt="Divine & Delight Luxury Event Catering & Celebrations"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              {/* Subtle gold accent frame badge */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold block">
                  Bespoke Hospitality
                </span>
                <p className="text-xs font-serif text-neutral-200">
                  Artisan presentation & culinary craftsmanship
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold block">
                DIVINE & DELIGHT CATERING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                Make Every Occasion Special
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              From intimate private gatherings to grand celebrations and corporate banquets, our culinary team designs bespoke food experiences crafted with artisan passion and effortless elegance.
            </p>

            {/* Three Compact Service Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {/* Indicator 1 */}
              <div className="p-3.5 rounded-2xl bg-card border border-border flex items-center gap-3 shadow-2xs hover:border-primary/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-serif font-bold text-foreground block truncate">
                    Events & Celebrations
                  </span>
                  <span className="text-[10px] text-muted-foreground block truncate">
                    Bespoke hospitality
                  </span>
                </div>
              </div>

              {/* Indicator 2 */}
              <div className="p-3.5 rounded-2xl bg-card border border-border flex items-center gap-3 shadow-2xs hover:border-primary/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-serif font-bold text-foreground block truncate">
                    Meal Catering
                  </span>
                  <span className="text-[10px] text-muted-foreground block truncate">
                    Buffets & group dining
                  </span>
                </div>
              </div>

              {/* Indicator 3: Artisanal Desserts */}
              <Link
                href="/desserts"
                className="p-3.5 rounded-2xl bg-card border border-border/80 hover:border-primary/40 flex items-center gap-3 shadow-2xs relative overflow-hidden transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CakeSlice className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-serif font-bold text-foreground block truncate">
                      Desserts
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full bg-accent/25 text-primary text-[9px] uppercase font-bold tracking-wider shrink-0">
                      Showcase
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground block truncate">
                    Mini cups & sweet displays
                  </span>
                </div>
              </Link>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Explore Catering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
