import type { Metadata } from "next";
import { MEAL_ITEMS } from "@/lib/data";
import { MealPrepClient } from "@/components/meals/meal-prep-client";

export const metadata: Metadata = {
  title: "Meal Prep | Divine & Delight",
  description:
    "Explore our selection of thoughtfully prepared high-protein, low-carb meals, made fresh every Monday of the week.",
};

const CONFIRMED_MEAL_IDS = [
  "lasagna-vegetables",
  "chicken-kabobs-salad",
  "shrimp-cajun-rice-veg",
  "meat-della-casa-rice-veg",
  "carne-mushroom-rice-veg",
  "tilapia-lemon-rice-veg",
];

export default function MealPrepPage() {
  const confirmedMeals = MEAL_ITEMS.filter((item) =>
    CONFIRMED_MEAL_IDS.includes(item.id)
  );

  return (
    <div className="w-full bg-background text-foreground">
      <MealPrepClient meals={confirmedMeals} />
    </div>
  );
}
