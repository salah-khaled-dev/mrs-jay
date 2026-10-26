import Link from "next/link";
import { Star, ArrowRight, Sparkles, Quote } from "lucide-react";
import { INITIAL_REVIEWS } from "@/lib/reviews-data";

export function ReviewsPreview() {
  const featuredReviews = INITIAL_REVIEWS.slice(0, 3);

  const formatReviewDate = (rawDate: string): string => {
    if (!rawDate) return "Recently";
    const parsed = new Date(rawDate);
    if (isNaN(parsed.getTime())) {
      return rawDate.slice(0, 10);
    }
    return parsed.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="w-full py-10 sm:py-16 bg-secondary/30 border-y border-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3" />
              <span>Client Experiences</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Words From Our Guests
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              Real stories and culinary memories from celebrations, corporate gatherings, and weekly clients.
            </p>
          </div>

          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover group transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Read All Reviews</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl sm:rounded-3xl bg-card border border-border/80 shadow-xs flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3.5 h-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {review.service}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-5 h-5 text-primary/15 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed pl-2 line-clamp-3">
                    {review.comment}
                  </p>
                </div>

                {/* Photo thumbnail if available */}
                {review.image && (
                  <div className="pt-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.image}
                      alt={`Dish photo by ${review.name}`}
                      loading="lazy"
                      className="w-full h-32 rounded-xl object-cover border border-border/60"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground">
                  {review.name}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {formatReviewDate(review.date)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="rounded-2xl bg-card border border-border/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="font-serif text-sm sm:text-base font-semibold text-foreground">
              Have you experienced our catering or meal prep?
            </h4>
            <p className="text-xs text-muted-foreground">
              We&apos;d love to hear your feedback. Your review helps other guests choose their menus.
            </p>
          </div>
          <Link
            href="/reviews"
            className="shrink-0 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary-hover active:scale-95 transition-all shadow-xs cursor-pointer"
          >
            Leave a Review
          </Link>
        </div>
      </div>
    </section>
  );
}
