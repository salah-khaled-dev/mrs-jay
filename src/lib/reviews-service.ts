import { Review } from "@/types/review";
import { INITIAL_REVIEWS } from "./reviews-data";

const LOCAL_STORAGE_KEY = "divine_delight_user_reviews";

// Live Google Apps Script Web App connected to the Google Sheet backend
export const DEFAULT_GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbw4-lEseUvu0Bg2dJV7bTA0pX5w9iRYBjuTvEtGVMsBKuqKJhOAaK1FmtMwZX7f_ySNtQ/exec";

export const getGoogleSheetUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL?.trim() ||
    DEFAULT_GOOGLE_SHEET_URL
  );
};

// Normalize dates from Google Apps Script (e.g. verbose localized strings) into clean ISO dates (YYYY-MM-DD)
function normalizeReviewDate(raw: string): string {
  if (!raw) return new Date().toISOString().split("T")[0];
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  try {
    const clean = raw.replace(/\s*\([^)]*\)$/, "");
    const d = new Date(clean);
    if (!isNaN(d.getTime())) {
      return d.toISOString().split("T")[0];
    }
  } catch {
    // fallback
  }
  return raw;
}

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
      const targetUrl = scriptUrl.includes("?")
        ? `${scriptUrl}&_t=${Date.now()}`
        : `${scriptUrl}?_t=${Date.now()}`;

      const res = await fetch(targetUrl, {
        method: "GET",
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          // Normalize server reviews
          const serverReviews: Review[] = data.map((item) => ({
            id: String(item.id || `rev-${Date.now()}`),
            name: String(item.name || "Anonymous Guest"),
            rating: Number(item.rating) || 5,
            service: String(item.service || "General"),
            comment: String(item.comment || ""),
            date: normalizeReviewDate(String(item.date || "")),
            approved: item.approved !== false,
            image: item.image ? String(item.image) : undefined,
          }));

          // Merge: Server reviews take priority as global truth + local un-synced + initial starter reviews
          const combined = [...serverReviews, ...localSubmissions, ...INITIAL_REVIEWS];

          // Deduplicate by ID
          const seen = new Set<string>();
          return combined.filter((r) => {
            if (seen.has(r.id)) return false;
            seen.add(r.id);
            return true;
          });
        }
      }
    } catch (err) {
      console.warn("Could not fetch reviews from Google Sheets, using fallback.", err);
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
    let sentSuccessfully = false;

    // 1. Try standard CORS POST first
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(newReview),
      });
      if (response.ok) {
        sentSuccessfully = true;
      }
    } catch (err) {
      console.warn("Standard POST to Google Sheet failed, trying no-cors fallback:", err);
    }

    // 2. If standard fetch failed or was blocked by browser CORS redirect policy, send via no-cors mode
    if (!sentSuccessfully) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(newReview),
        });
        sentSuccessfully = true;
      } catch (err) {
        console.error("Failed to post review to Google Sheet via no-cors fallback:", err);
      }
    }
  }

  // Save to localStorage for instant client reflection on current device
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      const existing: Review[] = stored ? JSON.parse(stored) : [];
      // Deduplicate in localStorage
      const filtered = existing.filter((r) => r.id !== newReview.id);
      filtered.unshift(newReview);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered));
    } catch {
      // ignore
    }
  }

  return newReview;
}
