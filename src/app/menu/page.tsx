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
  Clock,
  Leaf,
  Home,
  ChefHat,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "Complete Menu" },
  { id: "weekly", label: "Meals of the Week (5 for $65)" },
  { id: "high-protein", label: "High Protein (40g+)" },
  { id: "catering", label: "Catering & Event Platters" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [bundleCounts, setBundleCounts] = React.useState<Record<string, number>>({
    "lasagna-vegetables": 1,
    "chicken-kabobs-salad": 2,
    "shrimp-cajun-rice-veg": 1,
    "meat-della-casa-rice-veg": 1,
  });

  const totalMeals = Object.values(bundleCounts).reduce((acc, curr) => acc + curr, 0);

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

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return MEAL_ITEMS;
    if (activeCategory === "weekly") return MEAL_ITEMS.filter((item) => item.isWeeklySpecial);
    if (activeCategory === "high-protein") return MEAL_ITEMS.filter((item) => item.macros.protein >= 40);
    if (activeCategory === "catering") return MEAL_ITEMS.filter((item) => item.category === "catering-platter");
    return MEAL_ITEMS;
  }, [activeCategory]);

  const bundlePrice = totalMeals <= 5 ? 65 : 65 + (totalMeals - 5) * 13;

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Flyer-Style Header Banner */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1C1C1E] via-[#121214] to-[#0A0A0C] border border-primary/40 shadow-2xl p-8 sm:p-14 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-amber-300 text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Official Weekly Menu Catalog</span>
            </div>

            <div className="space-y-1">
              <p className="font-serif italic text-2xl sm:text-3xl text-amber-200">
                Meals
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
                OF THE WEEK
              </h1>
            </div>

            {/* Flyer-Style Gold Promo Brush */}
            <div className="py-2 flex justify-center">
              <div className="inline-flex items-center justify-center px-10 sm:px-14 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-neutral-950 font-serif font-black text-2xl sm:text-4xl shadow-2xl tracking-wider uppercase transform -rotate-1">
                <span>5 FOR $65</span>
              </div>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Select any 5 chef-prepared meals for $65. Handcrafted from scratch with lean meats, wild seafood, and farm-fresh greens. Packaged in microwave & freezer-safe black containers.
            </p>

            {/* 3 Pillars from Flyer Footer */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-6 max-w-md mx-auto text-center">
              <div className="flex flex-col items-center gap-1">
                <Leaf className="w-5 h-5 text-amber-300" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-200">
                  HEALTHY
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-white/10">
                <Home className="w-5 h-5 text-amber-300" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-200">
                  HOME MADE
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ChefHat className="w-5 h-5 text-amber-300" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-200">
                  HIGH QUALITY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Floating / Sticky 5 for $65 Box Tracker */}
        <div className="sticky top-20 z-40 p-4 sm:p-5 rounded-2xl bg-card/95 backdrop-blur-md border-2 border-primary shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-serif font-bold text-lg flex items-center justify-center shrink-0">
              {totalMeals}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider text-primary">
                  Weekly 5 for $65 Box
                </span>
                <span className="text-[11px] text-muted-foreground">
                  ({totalMeals}/5 items selected)
                </span>
              </div>
              <p className="text-xs font-medium text-foreground">
                {totalMeals === 5
                  ? "Box complete! Total: $65 (Free thermal pack included)"
                  : totalMeals < 5
                  ? `Select ${5 - totalMeals} more meal${5 - totalMeals === 1 ? "" : "s"} to complete your deal`
                  : `${totalMeals} meals selected: $${bundlePrice} total ($13/meal)`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="font-serif font-bold text-xl text-foreground">
              ${bundlePrice}
            </span>
            <Link
              href={`/book?type=meal_prep&lasagna=${bundleCounts["lasagna-vegetables"] || 0}&chicken=${bundleCounts["chicken-kabobs-salad"] || 0}&shrimp=${bundleCounts["shrimp-cajun-rice-veg"] || 0}&beef=${bundleCounts["meat-della-casa-rice-veg"] || 0}`}
              className={cn(
                "px-6 py-2.5 rounded-full font-semibold uppercase tracking-wider text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer whitespace-nowrap",
                totalMeals >= 5
                  ? "bg-primary hover:bg-primary-hover text-primary-foreground animate-pulse"
                  : "bg-primary text-primary-foreground hover:bg-primary-hover"
              )}
            >
              <span>Review & Order Box</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-border">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all cursor-pointer",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((meal) => {
            const count = bundleCounts[meal.id] || 0;
            return (
              <div
                key={meal.id}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-primary/50"
              >
                <div>
                  {/* Photo with container styling */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <Image
                      src={meal.image}
                      alt={`${meal.name} - ${meal.servingInfo}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {meal.isWeeklySpecial && (
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          5 for $65 Special
                        </span>
                      )}
                      {meal.dietary.map((d, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-medium border border-white/20"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Title & Serving Information Matching Flyer */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="space-y-1">
                        <span className="px-3 py-1 rounded-full bg-neutral-950/85 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block">
                          {meal.servingInfo}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                          {meal.name}
                        </h2>
                      </div>

                      <div className="bg-neutral-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-right">
                        <span className="text-xs font-bold text-amber-400 block">
                          {meal.macros.calories} kcal
                        </span>
                        <span className="text-[10px] text-neutral-300">
                          {meal.macros.protein}g Protein
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meal Details & Nutritional Card */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {meal.description}
                    </p>

                    {/* Macro Breakdown */}
                    <div className="grid grid-cols-4 gap-2 text-center pt-2">
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

                    {/* Fresh Inclusions */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                        Fresh Inclusions:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {meal.ingredients.map((ing, iIdx) => (
                          <span
                            key={iIdx}
                            className="text-[10px] px-2.5 py-0.5 rounded-md bg-secondary text-foreground/80 font-medium"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Heating & Container Info */}
                    {meal.heatingInstructions && (
                      <div className="pt-2 border-t border-border/60 flex items-start gap-2 text-[11px] text-muted-foreground">
                        <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{meal.heatingInstructions}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Interactive Add/Remove Controls */}
                <div className="p-6 sm:p-7 pt-0 border-t border-border/40 mt-2">
                  <div className="flex items-center justify-between gap-4 pt-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium block">
                        Quantity in your box:
                      </span>
                      <span className="text-xs font-semibold text-foreground">
                        {count > 0 ? `${count} added` : "0 added"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-secondary/80 rounded-full p-1 border border-border">
                      <button
                        type="button"
                        onClick={() => decrementMeal(meal.id)}
                        disabled={count <= 0}
                        aria-label={`Remove one ${meal.name}`}
                        className="w-8 h-8 rounded-full bg-card hover:bg-muted text-foreground flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-foreground">
                        {count}
                      </span>
                      <button
                        type="button"
                        onClick={() => incrementMeal(meal.id)}
                        aria-label={`Add one ${meal.name}`}
                        className="w-8 h-8 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catering Trays & Large Groups Note */}
        <div className="p-8 sm:p-10 rounded-3xl bg-secondary/70 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-primary">
              Planning a Gathering or Office Lunch?
            </span>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Hot Chafing Trays & Full-Service Event Catering
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              All 4 signature dishes are also available in half pans, full pans, and luxury buffet chafing dish setups with attendants for weddings, corporate summits, and private parties.
            </p>
          </div>

          <Link
            href="/book?type=catering"
            className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover text-xs font-semibold uppercase tracking-wider shrink-0 shadow-md cursor-pointer flex items-center gap-2"
          >
            <span>Inquire for Event Catering</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
