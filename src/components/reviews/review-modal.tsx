"use client";

import * as React from "react";
import { Star, X, CheckCircle2, Loader2, Sparkles, Camera, Image as ImageIcon, Trash2 } from "lucide-react";
import { Review } from "@/types/review";
import { cn } from "@/lib/utils";
import { submitReviewToSheet } from "@/lib/reviews-service";
import { compressImage } from "@/lib/image-compressor";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewAdded: (newReview: Review) => void;
}

const SERVICE_OPTIONS = [
  "Events & Celebrations",
  "Corporate Hospitality",
  "Weekly Meal Prep",
  "Artisanal Desserts",
  "General Experience",
];

const RATING_LABELS: Record<number, string> = {
  1: "Needs Improvement",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Exceptional / 5 Stars",
};

export function ReviewModal({ isOpen, onClose, onReviewAdded }: ReviewModalProps) {
  const [rating, setRating] = React.useState<number>(5);
  const [hoveredRating, setHoveredRating] = React.useState<number | null>(null);
  const [name, setName] = React.useState("");
  const [service, setService] = React.useState(SERVICE_OPTIONS[0]);
  const [comment, setComment] = React.useState("");
  const [image, setImage] = React.useState<string | null>(null);
  const [imageStats, setImageStats] = React.useState<{ sizeKb: number; originalSizeKb: number } | null>(null);
  const [isCompressing, setIsCompressing] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Reset helper
  const handleClose = React.useCallback(() => {
    setIsSuccess(false);
    setErrorMessage(null);
    onClose();
  }, [onClose]);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please select a valid image file (JPG, PNG, WebP).");
      return;
    }

    setIsCompressing(true);
    setErrorMessage(null);

    try {
      const result = await compressImage(file, 800, 0.72);
      setImage(result.base64);
      setImageStats({
        sizeKb: result.sizeKb,
        originalSizeKb: result.originalSizeKb,
      });
    } catch (err) {
      console.error("Compression error:", err);
      setErrorMessage("Could not process this image. Please try another.");
    } finally {
      setIsCompressing(false);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageStats(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!comment.trim()) {
      setErrorMessage("Please write a few words about your experience.");
      return;
    }

    setIsSubmitting(true);

    try {
      const createdReview = await submitReviewToSheet({
        name: name.trim(),
        rating,
        service,
        comment: comment.trim(),
        image: image || undefined,
      });

      setIsSuccess(true);
      onReviewAdded(createdReview);

      // Reset form after short delay
      setTimeout(() => {
        setName("");
        setComment("");
        setImage(null);
        setImageStats(null);
        setRating(5);
        handleClose();
      }, 1800);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeStarCount = hoveredRating !== null ? hoveredRating : rating;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-card border border-border shadow-2xl p-6 sm:p-8 z-10 transition-all animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close review dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Thank You for Your Review!
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Your feedback has been recorded and published. We truly appreciate your support!
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Modal Header */}
            <div className="space-y-1.5 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Share Your Experience</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Leave a Review
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We value your culinary feedback! Your review will appear directly on our website.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 text-xs rounded-xl bg-destructive/10 text-destructive border border-destructive/20 font-medium">
                {errorMessage}
              </div>
            )}

            {/* Star Rating Interactive Picker */}
            <div className="space-y-2 pt-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Overall Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(null)}
                    className="p-1.5 rounded-lg hover:bg-primary/10 transition-transform active:scale-90 cursor-pointer"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className={cn(
                        "w-7 h-7 sm:w-8 sm:h-8 transition-colors",
                        star <= activeStarCount
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/30"
                      )}
                    />
                  </button>
                ))}
                <span className="ml-3 text-xs sm:text-sm font-medium text-foreground">
                  {RATING_LABELS[activeStarCount]}
                </span>
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="review-name"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Your Name *
              </label>
              <input
                id="review-name"
                type="text"
                required
                maxLength={60}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            {/* Service Category */}
            <div className="space-y-1.5">
              <label
                htmlFor="review-service"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Service Experienced
              </label>
              <select
                id="review-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-card text-foreground">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Review Comment */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="review-comment"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Your Feedback *
                </label>
                <span className="text-[11px] text-muted-foreground">
                  {comment.length}/1000
                </span>
              </div>
              <textarea
                id="review-comment"
                required
                rows={4}
                maxLength={1000}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us what you loved about the food, presentation, or service..."
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
            </div>

            {/* Photo Attachment (Optional & Ultra-Lightweight) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Add a Photo (Optional)
              </label>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="review-image-upload"
              />

              {!image ? (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isCompressing}
                  className="w-full py-3 px-4 rounded-xl border border-dashed border-border hover:border-primary/60 bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground flex items-center justify-center gap-2.5 transition-all text-xs cursor-pointer group"
                >
                  {isCompressing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span>Optimizing photo for speed...</span>
                    </>
                  ) : (
                    <>
                      <Camera className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span>Attach a photo of your food or event</span>
                      <span className="text-[10px] text-muted-foreground/70 hidden sm:inline">
                        (Auto-compressed for instant loading)
                      </span>
                    </>
                  )}
                </button>
              ) : (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary border border-border">
                  <div className="flex items-center gap-3">
                    {/* Thumbnail Preview */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt="Review attachment preview"
                      className="w-12 h-12 rounded-lg object-cover border border-border/80 shadow-2xs"
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-foreground">
                          Photo Attached
                        </span>
                      </div>
                      {imageStats && (
                        <p className="text-[10px] text-muted-foreground">
                          Compressed to: <strong className="text-foreground">{imageStats.sizeKb} KB</strong> (⚡ Ultra light & fast)
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
                    aria-label="Remove attached photo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-secondary transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:bg-primary-hover active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <span>Submit Review</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
