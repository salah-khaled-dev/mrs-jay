"use client";

import * as React from "react";
import Image from "next/image";
import { MealItem } from "@/types";
import { X, Flame, ShieldAlert, Utensils, Mail, Check, Sparkles } from "lucide-react";

interface MealDetailsModalProps {
  meal: MealItem | null;
  onClose: () => void;
}

export function MealDetailsModal({ meal, onClose }: MealDetailsModalProps) {
  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (meal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [meal, onClose]);

  if (!meal) return null;

  const inquiryLink = `mailto:dnd.cater.events@gmail.com?subject=Inquiry%20%E2%80%94%20${encodeURIComponent(
    meal.name
  )}&body=Hello%20Divine%20%26%20Delight%2C%0D%0A%0D%0AI%20am%20interested%20in%20ordering%20or%20learning%20more%20about%3A%20${encodeURIComponent(
    meal.name
  )}%20(${encodeURIComponent(
    meal.servingInfo
  )}).%0D%0A%0D%0APlease%20let%20me%20know%20availability%20and%20ordering%20details.%0D%0A%0D%0AThank%20you.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="meal-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[88vh] overflow-y-auto flex flex-col relative animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-200 text-foreground"
        onClick={(e) => e.stopPropagation()}
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
        }}
      >
        {/* Sticky Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-[16/10] min-h-[200px] sm:min-h-[240px] w-full overflow-hidden bg-muted rounded-t-3xl sm:rounded-t-3xl">
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 520px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Floating Badges on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
              {meal.categoryLabel || "Chef-Crafted Meal Prep"}
            </span>
            <h2
              id="meal-modal-title"
              className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight"
            >
              {meal.name}
            </h2>
            <p className="text-xs text-neutral-200 font-medium mt-0.5">
              {meal.servingInfo}
            </p>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {meal.description}
          </p>

          {/* Macros Chips (Calories, Protein, Carbs, Fat) */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>Nutrition & Macros Per Serving</span>
            </div>

            <div className="grid grid-cols-4 gap-2 pt-1">
              <div className="p-2.5 rounded-2xl bg-muted/60 border border-border text-center">
                <span className="text-[10px] uppercase text-muted-foreground font-semibold block">
                  Calories
                </span>
                <span className="text-sm font-bold text-foreground">
                  {meal.macros.calories}
                </span>
                <span className="text-[9px] text-muted-foreground block">kcal</span>
              </div>

              <div className="p-2.5 rounded-2xl bg-primary/10 border border-primary/25 text-center">
                <span className="text-[10px] uppercase text-primary font-semibold block">
                  Protein
                </span>
                <span className="text-sm font-bold text-primary">
                  {meal.macros.protein}g
                </span>
                <span className="text-[9px] text-primary/80 block">Lean fuel</span>
              </div>

              <div className="p-2.5 rounded-2xl bg-muted/60 border border-border text-center">
                <span className="text-[10px] uppercase text-muted-foreground font-semibold block">
                  Carbs
                </span>
                <span className="text-sm font-bold text-foreground">
                  {meal.macros.carbs}g
                </span>
                <span className="text-[9px] text-muted-foreground block">Complex</span>
              </div>

              <div className="p-2.5 rounded-2xl bg-muted/60 border border-border text-center">
                <span className="text-[10px] uppercase text-muted-foreground font-semibold block">
                  Fat
                </span>
                <span className="text-sm font-bold text-foreground">
                  {meal.macros.fat}g
                </span>
                <span className="text-[9px] text-muted-foreground block">Healthy</span>
              </div>
            </div>
          </div>

          {/* Core Ingredients (المكونات الأساسية) */}
          {meal.ingredients && meal.ingredients.length > 0 && (
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground uppercase tracking-wider">
                <Utensils className="w-3.5 h-3.5 text-primary" />
                <span>Core Ingredients & Preparation</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {meal.ingredients.map((ing, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-xl bg-muted/40 border border-border/70 text-xs text-foreground/90"
                  >
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-tight">{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dietary & Allergens */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-primary" />
              <span>Allergens & Dietary Information</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {meal.dietary?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-secondary border border-border text-foreground text-xs font-medium"
                >
                  {tag}
                </span>
              ))}

              {meal.allergens && meal.allergens.length > 0 ? (
                meal.allergens.map((allergen, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-medium"
                  >
                    Contains: {allergen}
                  </span>
                ))
              ) : (
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  Gluten-Conscious
                </span>
              )}
            </div>
          </div>

          {/* Heating Instructions */}
          {meal.heatingInstructions && (
            <div className="p-3 rounded-2xl bg-secondary/50 border border-border text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground block mb-0.5">
                Preparation / Heating Note:
              </span>
              {meal.heatingInstructions}
            </div>
          )}

          {/* Bottom Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href={inquiryLink}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Inquire / Request This Dish</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-border bg-card hover:bg-muted text-foreground text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
