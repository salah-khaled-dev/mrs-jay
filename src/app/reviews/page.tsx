import type { Metadata } from "next";
import { MessageSquare, Sparkles } from "lucide-react";
import { INITIAL_REVIEWS } from "@/lib/reviews-data";
import { ReviewsContainer } from "@/components/reviews/reviews-container";

export const metadata: Metadata = {
  title: "Guest Reviews & Experiences | Divine & Delight",
  description:
    "Read honest reviews from our private catering, weekly meal prep, corporate events, and artisanal dessert clients.",
};

export default function ReviewsPage() {
  return (
    <div className="w-full min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community & Client Stories</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Guest Reviews & Experiences
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Discover what our guests have to say about our bespoke catering, weekly meal prep, and artisanal pastries. We welcome every reflection.
          </p>
        </div>

        {/* Interactive Reviews Container (Header, Feed, Modal) */}
        <ReviewsContainer initialReviews={INITIAL_REVIEWS} />
      </div>
    </div>
  );
}
