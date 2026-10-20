"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MEAL_ITEMS } from "@/lib/data";
import {
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  Leaf,
  Home,
  ChefHat,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function MealShowcase() {
  const [bundleCounts, setBundleCounts] = React.useState<Record<string, number>>({
    "lasagna-vegetables": 1,
    "chicken-kabobs-salad": 2,
    "shrimp-cajun-rice-veg": 1,
    "meat-della-casa-rice-veg": 1,
  });

  const totalSelected = Object.values(bundleCounts).reduce((acc, curr) => acc + curr, 0);

  const incrementMeal = (id: string) => {
    setBundleCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrementMeal = (id: string) => {
    setBundleCounts((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return {
        ...prev,
        [id]: current - 1,
      };
    });
  };

  const confirmedMeals = MEAL_ITEMS.filter((item) => item.isWeeklySpecial);

  return (
    <section className="py-24 bg-card/40 dark:bg-card/20 border-t border-border/60 relative overflow-hidden">
      {/* Decorative luxury gold ambient glow */}
      <div
        className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promotional Banner Styled after the Original Flyer */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1A1C] via-[#121214] to-[#0A0A0C] border border-primary/40 shadow-2xl p-8 sm:p-12 mb-16 text-center text-white">
          {/* Subtle gold marbled background pattern simulation */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-70 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-amber-300 text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Divine & Delight • Signature Weekly Lineup</span>
            </div>

            <div className="space-y-1">
              <p className="font-serif italic text-2xl sm:text-3xl text-amber-200">
                Meals
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
                OF THE WEEK
              </h2>
            </div>

            {/* Flyer-Style Gold Brush Badge: 5 FOR 65 */}
            <div className="py-2 flex justify-center">
              <div className="relative inline-flex items-center justify-center px-8 sm:px-12 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-neutral-950 font-serif font-black text-2xl sm:text-4xl shadow-xl tracking-wider uppercase transform -rotate-1 hover:rotate-0 transition-transform">
                <span className="drop-shadow-xs">5 FOR $65</span>
              </div>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our 4 confirmed chef-prepared signature meals. Packaged individually in microwave & freezer-safe black containers. Ready to heat in just 2 minutes.
            </p>

            {/* 3 Icons from the Flyer Footer */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-6 max-w-lg mx-auto text-center">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-200">
                  HEALTHY
                </span>
                <span className="text-[10px] text-neutral-400 hidden sm:block">Balanced Macros</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 border-x border-white/10">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
                  <Home className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-200">
                  HOME MADE
                </span>
                <span className="text-[10px] text-neutral-400 hidden sm:block">From Scratch Daily</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
                  <ChefHat className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-200">
                  HIGH QUALITY
                </span>
                <span className="text-[10px] text-neutral-400 hidden sm:block">Prime Proteins</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Confirmed Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {confirmedMeals.map((meal) => {
            const count = bundleCounts[meal.id] || 0;
            return (
              <div
                key={meal.id}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-primary/50"
              >
                <div>
                  {/* Meal Photo in Black Prep Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <Image
                      src={meal.image}
                      alt={`${meal.name} - ${meal.servingInfo}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Serving Info Badge Matching the Flyer */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                      <div className="space-y-1">
                        <span className="px-3 py-1 rounded-full bg-neutral-950/85 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block">
                          {meal.servingInfo}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                          {meal.name}
                        </h3>
                      </div>

                      <div className="bg-neutral-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-right">
                        <span className="text-xs font-bold text-amber-400 block">
                          {meal.macros.calories} kcal
                        </span>
                        <span className="text-[9px] text-neutral-300">
                          {meal.macros.protein}g Protein
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meal Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {meal.description}
                    </p>

                    {/* Macro Pill Indicators */}
                    <div className="grid grid-cols-4 gap-2 pt-2 border-t border-border/60 text-center">
                      <div className="p-2 rounded-xl bg-secondary/80 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Calories</span>
                        <span className="font-serif text-xs sm:text-sm font-bold text-foreground">{meal.macros.calories}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-secondary/80 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Protein</span>
                        <span className="font-serif text-xs sm:text-sm font-bold text-primary">{meal.macros.protein}g</span>
                      </div>
                      <div className="p-2 rounded-xl bg-secondary/80 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Carbs</span>
                        <span className="font-serif text-xs sm:text-sm font-bold text-foreground">{meal.macros.carbs}g</span>
                      </div>
                      <div className="p-2 rounded-xl bg-secondary/80 border border-border">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Fats</span>
                        <span className="font-serif text-xs sm:text-sm font-bold text-foreground">{meal.macros.fat}g</span>
                      </div>
                    </div>

                    {/* Key Ingredients */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                        Fresh Wholesome Inclusions:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {meal.ingredients.slice(0, 4).map((ing, iIdx) => (
                          <span
                            key={iIdx}
                            className="text-[10px] px-2.5 py-0.5 rounded-md bg-secondary text-foreground/80 font-medium"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Quantity Selector for 5 for $65 Box */}
                <div className="p-6 sm:p-7 pt-0 border-t border-border/40 mt-2">
                  <div className="flex items-center justify-between gap-4 pt-4">
                    <div className="text-left">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium block">
                        Included in 5 for $65:
                      </span>
                      <span className="text-xs font-semibold text-foreground">
                        {count > 0 ? `${count} added to box` : "Not in box"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-secondary/80 rounded-full p-1 border border-border">
                      <button
                        type="button"
                        onClick={() => decrementMeal(meal.id)}
                        disabled={count <= 0}
                        aria-label={`Remove one ${meal.name}`}
                        className="w-7 h-7 rounded-full bg-card hover:bg-muted text-foreground flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-foreground">
                        {count}
                      </span>
                      <button
                        type="button"
                        onClick={() => incrementMeal(meal.id)}
                        aria-label={`Add one ${meal.name}`}
                        className="w-7 h-7 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 for $65 Interactive Bundle Progress & Order Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-card border-2 border-primary/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                Weekly Box Builder
              </span>
              <span className="text-xs text-muted-foreground">
                {totalSelected} of 5 meals selected
              </span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
              {totalSelected === 5
                ? "Your 5 for $65 Weekly Meal Box is Complete!"
                : totalSelected < 5
                ? `Add ${5 - totalSelected} more meal${5 - totalSelected === 1 ? "" : "s"} to complete your $65 deal`
                : `${totalSelected} meals selected ($65 base + $${(totalSelected - 5) * 13} for additional meals)`}
            </h4>
            <p className="text-xs text-muted-foreground">
              Delivered chilled on Sunday or Wednesday in an insulated thermal pack with gel ice.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={`/book?type=meal_prep&lasagna=${bundleCounts["lasagna-vegetables"] || 0}&chicken=${bundleCounts["chicken-kabobs-salad"] || 0}&shrimp=${bundleCounts["shrimp-cajun-rice-veg"] || 0}&beef=${bundleCounts["meat-della-casa-rice-veg"] || 0}`}
              className={cn(
                "px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer",
                totalSelected >= 5
                  ? "bg-primary hover:bg-primary-hover text-primary-foreground animate-pulse"
                  : "bg-primary text-primary-foreground hover:bg-primary-hover"
              )}
            >
              <span>Order Your 5 for $65 Box</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Link to Full Menu & Catering Options */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            <span>View Full Menu & Catering Trays</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
