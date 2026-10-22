"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { MEAL_ITEMS } from "@/lib/data";
import { MealItem } from "@/types";
import { MealDetailsModal } from "@/components/meal-details-modal";

export function FeaturedMeals() {
  const [selectedMeal, setSelectedMeal] = React.useState<MealItem | null>(null);

  // Show only 3 featured meals from the existing 6-meal catalog
  const featured = MEAL_ITEMS.filter((item) =>
    [
      "lasagna-vegetables",
      "chicken-kabobs-salad",
      "shrimp-cajun-rice-veg",
    ].includes(item.id)
  );

  return (
    <section className="py-12 sm:py-16 bg-card/30 dark:bg-card/10 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
            CHEF-PREPARED MEAL PREP
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
            Featured Dishes
          </h2>

          {/* High Protein & Low Carb + Prepared Every Monday + Weekly Rotation */}
          <div className="pt-0.5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-[0.16em]">
              High Protein • Low Carb
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-foreground text-xs font-medium">
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Prepared Every Monday</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-medium">
              <span>Rotating Dishes & Specials Every Week</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Freshly prepared every Monday in artisanal batches. Enjoy a diverse weekly rotation of chef-crafted recipes, seasonal features, and special offerings with clean ingredients and lean proteins.
          </p>
        </div>

        {/* 3 Compact Consistent Product Cards without prices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((meal) => (
            <div
              key={meal.id}
              onClick={() => setSelectedMeal(meal)}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col hover:border-primary/50 cursor-pointer"
            >
              <div className="relative aspect-[16/10] min-h-[160px] sm:min-h-[180px] w-full overflow-hidden bg-muted">
                <Image
                  src={meal.image}
                  alt={meal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase border border-white/10">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {meal.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {meal.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-primary font-medium border-t border-border/40">
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Ingredients & Macros</span>
                  </span>
                  <span className="text-muted-foreground text-[10px]">Tap to inspect →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single View All Meals CTA button */}
        <div className="mt-8 text-center">
          <Link
            href="/meal-prep"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow cursor-pointer"
          >
            <span>View All Meals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Dish Details Modal */}
      <MealDetailsModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
    </section>
  );
}

