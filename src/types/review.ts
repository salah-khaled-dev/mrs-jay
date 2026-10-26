export interface Review {
  id: string;
  name: string;
  rating: number; // 1 to 5
  service: string; // e.g. "Catering", "Meal Prep", "Desserts", "Corporate Events"
  comment: string;
  date: string; // e.g. "2026-03-15" or formatted
  image?: string; // Base64 or URL of the customer's photo
  approved?: boolean;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    [star: number]: number;
  };
}
