import { HeroSection } from "@/components/home/hero-section";
import { FeaturedMeals } from "@/components/home/featured-meals";
import { CateringSection } from "@/components/home/catering-section";
import { ContactCTA } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Compact Hero: short message, rotating meal images, clear CTAs */}
      <HeroSection />

      {/* 2. Featured Meal Prep: 3 display-only dishes, view all meals CTA */}
      <FeaturedMeals />

      {/* 3. Catering Preview: 1 image, bespoke hospitality, explore catering CTA */}
      <CateringSection />

      {/* 4. Contact CTA: Direct inquiry and communication channels */}
      <ContactCTA />
    </div>
  );
}
