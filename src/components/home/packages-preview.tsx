import Link from "next/link";
import { PACKAGES } from "@/lib/data";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PackagesPreview() {
  return (
    <section className="py-24 bg-card/30 dark:bg-card/10 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
            Tailored Catering Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Our Signature Packages
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Thoughtfully structured catering packages designed around your guest count and aesthetic desires. All packages are fully personalized with customized menus and bespoke decor.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300",
                pkg.featured
                  ? "bg-card border-2 border-primary shadow-2xl lg:-translate-y-3 relative z-10"
                  : "bg-card/90 border border-border shadow-md hover:shadow-xl"
              )}
            >
              {/* Highlight Badge for Featured Package */}
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Beloved</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-border pb-6 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold block">
                    {pkg.guestCount}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-muted-foreground italic">
                    {pkg.tagline}
                  </p>
                  <div className="pt-3">
                    <span className="font-serif text-3xl font-bold text-foreground">
                      Custom Quote
                    </span>
                    <span className="text-xs text-muted-foreground block mt-0.5">
                      Itemized based on selections & guest size
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>

                {/* Sample Inclusions */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider text-foreground font-semibold block">
                    Curated Inclusions:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block mb-2">
                    Ideal For:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.idealFor.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-secondary text-foreground/80 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-border">
                <Link
                  href={`/book?package=${pkg.id}`}
                  className={cn(
                    "w-full py-3.5 px-4 rounded-xl font-medium uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs",
                    pkg.featured
                      ? "bg-primary hover:bg-primary-hover text-primary-foreground shadow-md hover:shadow-lg"
                      : "bg-muted/80 hover:bg-muted text-foreground border border-border"
                  )}
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Page Link */}
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            <span>Compare full package features and optional enhancements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
