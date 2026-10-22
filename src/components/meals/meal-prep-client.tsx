"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Utensils } from "lucide-react";
import { MealItem } from "@/types";
import { MealDetailsModal } from "@/components/meal-details-modal";

interface MealPrepClientProps {
  meals: MealItem[];
}

export function MealPrepClient({ meals }: MealPrepClientProps) {
  const [selectedMeal, setSelectedMeal] = React.useState<MealItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {meals.map((meal, index) => (
          <div
            key={meal.id}
            onClick={() => setSelectedMeal(meal)}
            className="group rounded-2xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Professional Meal Image */}
            <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden bg-muted">
              <Image
                src={meal.image}
                alt={meal.name}
                fill
                priority={index < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase border border-white/10">
                  Inspect Dish
                </span>
              </div>
            </div>

            {/* Meal Name & Details */}
            <div className="p-4 sm:p-5 space-y-2 flex flex-col flex-1 justify-between">
              <div>
                <h2 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {meal.name}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1">
                  {meal.description}
                </p>
              </div>

              {/* Tap for ingredients prompt */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-primary font-medium border-t border-border/40">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Ingredients & Macros</span>
                </span>
                <span className="text-muted-foreground text-[10px]">Tap to view →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dish Details Modal */}
      <MealDetailsModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
    </>
  );
}
