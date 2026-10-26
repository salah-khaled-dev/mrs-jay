"use client";

import * as React from "react";
import { Star, CheckCircle, Calendar, Quote, Filter, ZoomIn, X } from "lucide-react";
import { Review } from "@/types/review";
import { cn } from "@/lib/utils";

interface ReviewsFeedProps {
  reviews: Review[];
}

const CATEGORIES = [
  "All Reviews",
  "Events & Celebrations",
  "Corporate Hospitality",
  "Weekly Meal Prep",
  "Artisanal Desserts",
];

export function ReviewsFeed({ reviews }: ReviewsFeedProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("All Reviews");
  const [sortBy, setSortBy] = React.useState<"newest" | "highest">("newest");
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

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

  const filteredReviews = React.useMemo(() => {
    let result = reviews;

    if (selectedCategory !== "All Reviews") {
      result = result.filter(
        (r) =>
          r.service.toLowerCase().trim() ===
          selectedCategory.toLowerCase().trim()
      );
    }

    return [...result].sort((a, b) => {
      if (sortBy === "highest") {
        return b.rating - a.rating;
      }
      // default: newest
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [reviews, selectedCategory, sortBy]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Filters & Sorting Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/60">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "bg-secondary text-foreground/80 hover:bg-muted"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <Filter className="w-3.5 h-3.5 text-muted-foreground" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "highest")}
            className="text-xs bg-secondary border border-border rounded-lg px-2.5 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="highest">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      {filteredReviews.length === 0 ? (
        <div className="py-16 text-center space-y-3 bg-card rounded-3xl border border-border/80">
          <p className="text-sm font-medium text-foreground">
            No reviews found under &quot;{selectedCategory}&quot;.
          </p>
          <p className="text-xs text-muted-foreground">
            Be the first to share your experience with this service!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="group relative p-6 rounded-3xl bg-card border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: User Info & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-serif font-bold text-sm flex items-center justify-center shrink-0 border border-primary/20">
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-semibold text-sm text-foreground">
                          {review.name}
                        </h4>
                        <span title="Verified Client Review">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" />
                        </span>
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        {review.service}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "w-3.5 h-3.5",
                          star <= review.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* Comment Content */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-primary/15 absolute -top-2 -left-1 -z-0 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed relative z-10 pl-2">
                    {review.comment}
                  </p>
                </div>

                {/* Customer Attached Photo (Ultra Lightweight Thumbnail) */}
                {review.image && (
                  <div className="relative pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedImage(review.image || null)}
                      className="group/img relative block w-full h-40 rounded-2xl overflow-hidden border border-border/70 bg-secondary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={review.image}
                        alt={`Photo by ${review.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-xs">
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>View Photo</span>
                        </span>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Card Footer: Date */}
              <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-muted-foreground/70" />
                  {formatReviewDate(review.date)}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary/80">
                  Verified Dining
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full-Screen Lightbox Modal for Reviews Photos */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Review attachment"
              className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
