import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote, Info } from "lucide-react";

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-[11px] font-medium mb-1">
            <Info className="w-3.5 h-3.5 text-primary" />
            <span>Sample Client Impressions (Preview Mode)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Words of Celebration
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            How our bespoke dessert carts and sweet styling elevate moments into lifelong memories.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-3xl bg-card border border-border shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <p className="text-sm text-foreground/90 font-serif italic leading-relaxed">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-1">
                <span className="font-serif font-bold text-foreground text-base block">
                  {test.clientName}
                </span>
                <span className="text-xs text-primary font-medium block">
                  {test.role} • {test.eventType}
                </span>
                <span className="text-[11px] text-muted-foreground block">
                  {test.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
