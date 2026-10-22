import { HeroSection } from "@/components/home/hero-section";
import { FeaturedMeals } from "@/components/home/featured-meals";
import { DessertSection } from "@/components/home/dessert-section";
import { CateringSection } from "@/components/home/catering-section";
import { ContactCTA } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Compact Hero: short message, rotating meal images, clear CTAs */}
      <HeroSection />

      {/* 2. Featured Meal Prep: 3 display-only dishes, view all meals CTA */}
      <FeaturedMeals />

      {/* 3. Artisanal Desserts: 2 featured desserts with link to dessert menu */}
      <DessertSection />

      {/* 4. Catering Preview: 1 image, bespoke hospitality, explore catering CTA */}
      <CateringSection />

      {/* 5. Contact CTA: Direct inquiry and communication channels */}
      <ContactCTA />
    </div>
  );
}

