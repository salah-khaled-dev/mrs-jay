import { Review } from "@/types/review";
import { INITIAL_REVIEWS } from "./reviews-data";

const LOCAL_STORAGE_KEY = "divine_delight_user_reviews";

export const getGoogleSheetUrl = (): string => {
  return process.env.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL || "";
};

export async function fetchAllReviews(): Promise<Review[]> {
  const scriptUrl = getGoogleSheetUrl();

  // Load any locally cached submissions from this browser
  let localSubmissions: Review[] = [];
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        localSubmissions = JSON.parse(stored);
      }
    } catch {
      // ignore
    }
  }

  if (scriptUrl) {
    try {
      const res = await fetch(scriptUrl, {
        method: "GET",
      });

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Merge with any instant local submissions that might not have refreshed yet
          const combined = [...localSubmissions, ...data];
          // Deduplicate by id
          const seen = new Set<string>();
          return combined.filter((r) => {
            if (seen.has(r.id)) return false;
            seen.add(r.id);
            return true;
          });
        }
      }
    } catch (err) {
      console.warn("Could not fetch reviews from Google Sheets, using defaults.", err);
    }
  }

  // Fallback: local submissions + initial reviews
  const combined = [...localSubmissions, ...INITIAL_REVIEWS];
  const seen = new Set<string>();
  return combined.filter((r) => {
    if (seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  });
}

export async function submitReviewToSheet(review: Omit<Review, "id" | "date">): Promise<Review> {
  const newReview: Review = {
    id: `rev-${Date.now()}`,
    name: review.name.trim(),
    rating: review.rating,
    service: review.service || "General",
    comment: review.comment.trim(),
    image: review.image || undefined,
    date: new Date().toISOString().split("T")[0],
    approved: true,
  };

  const scriptUrl = getGoogleSheetUrl();

  if (scriptUrl) {
    try {
      // Google Apps Script requires text/plain or URLSearchParams for smooth CORS without OPTIONS preflight
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // Standard mode for Google Apps Script Web App form posts
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
    } catch (err) {
      console.error("Failed to post review to Google Sheet:", err);
    }
  }

  // Save to localStorage for instant client reflection
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      const existing: Review[] = stored ? JSON.parse(stored) : [];
      existing.unshift(newReview);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // ignore
    }
  }

  return newReview;
}
