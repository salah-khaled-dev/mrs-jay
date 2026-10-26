"use client";

import * as React from "react";
import { Review } from "@/types/review";
import { fetchAllReviews } from "@/lib/reviews-service";
import { ReviewsHeader } from "./reviews-header";
import { ReviewsFeed } from "./reviews-feed";
import { ReviewModal } from "./review-modal";

interface ReviewsContainerProps {
  initialReviews: Review[];
}

export function ReviewsContainer({ initialReviews }: ReviewsContainerProps) {
  const [reviews, setReviews] = React.useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Fetch newest reviews on mount from Google Sheets (or local storage fallback)
  React.useEffect(() => {
    let isMounted = true;
    const fetchLatest = async () => {
      try {
        const latest = await fetchAllReviews();
        if (isMounted && Array.isArray(latest) && latest.length > 0) {
          setReviews(latest);
        }
      } catch (err) {
        console.error("Failed to fetch fresh reviews:", err);
      }
    };

    fetchLatest();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleReviewAdded = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="w-full">
      <ReviewsHeader
        reviews={reviews}
        onOpenModal={() => setIsModalOpen(true)}
      />

      <ReviewsFeed reviews={reviews} />

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewAdded={handleReviewAdded}
      />
    </div>
  );
}
