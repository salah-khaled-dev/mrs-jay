import type { Metadata } from "next";
import { LuxuryDessertShowcase } from "@/components/home/luxury-dessert-showcase";

export const metadata: Metadata = {
  title: "Artisanal Desserts | Divine & Delight",
  description:
    "Explore our handcrafted 3D collection of luxury dessert cups, artisan pastries, and sweet catering delights.",
};

export default function DessertsPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <LuxuryDessertShowcase id="desserts-gallery" variant="full" />
    </div>
  );
}
