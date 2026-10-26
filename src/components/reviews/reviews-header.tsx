import { Star, MessageSquarePlus, Award, ThumbsUp } from "lucide-react";
import { Review } from "@/types/review";

interface ReviewsHeaderProps {
  reviews: Review[];
  onOpenModal: () => void;
}

export function ReviewsHeader({ reviews, onOpenModal }: ReviewsHeaderProps) {
  const total = reviews.length;
  const average =
    total > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1)
      : "5.0";

  // Calculate star distribution
  const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    const star = Math.min(Math.max(r.rating, 1), 5);
    counts[star] = (counts[star] || 0) + 1;
  });

  return (
    <div className="w-full rounded-3xl bg-card border border-border/80 p-6 sm:p-8 lg:p-10 shadow-xs mb-8 sm:mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Overall Score */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Customer Feedback</span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-serif text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
              {average}
            </span>
            <div className="space-y-1">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Based on {total} guest {total === 1 ? "review" : "reviews"}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
            Handcrafted flavors, authentic ingredients, and tailored hospitality as experienced by our clients.
          </p>
        </div>

        {/* Center: Rating Distribution Bars */}
        <div className="lg:col-span-5 space-y-2 border-y lg:border-y-0 lg:border-x border-border/70 py-6 lg:py-0 lg:px-8">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = counts[star] || 0;
            const percentage = total > 0 ? (count / total) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-3 text-xs">
                <span className="w-12 font-medium text-foreground flex items-center gap-1 justify-end">
                  <span>{star}</span>
                  <Star className="w-3 h-3 fill-muted-foreground text-muted-foreground" />
                </span>
                <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right text-muted-foreground font-mono">
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right: CTA Button & Confidence Badge */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ThumbsUp className="w-3.5 h-3.5 text-primary" />
            <span>100% Honest Dining Experiences</span>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:bg-primary-hover active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
          <p className="text-[11px] text-muted-foreground/80">
            Takes less than 1 minute • No signup required
          </p>
        </div>
      </div>
    </div>
  );
}
