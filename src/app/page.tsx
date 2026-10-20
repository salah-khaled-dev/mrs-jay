import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { MealShowcase } from "@/components/home/meal-showcase";
import { ServicesPreview } from "@/components/home/services-preview";
import { PackagesPreview } from "@/components/home/packages-preview";
import { HowItWorks } from "@/components/home/how-it-works";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with Featured 5 for $65 Promo & Meal Spread */}
      <HeroSection />

      {/* 2. Brand Philosophy & Healthy / Homemade / High Quality Pillars */}
      <IntroSection />

      {/* 3. Featured Confirmed Meals of the Week (5 for $65 Interactive Bundle) */}
      <MealShowcase />

      {/* 4. Full-Spectrum Catering Services */}
      <ServicesPreview />

      {/* 5. Signature Packages & Plans */}
      <PackagesPreview />

      {/* 6. How It Works: Ordering to 2-Min Reheating */}
      <HowItWorks />

      {/* 7. Event & Meal Prep Gallery */}
      <GalleryPreview />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Client & Event Testimonials */}
      <TestimonialsPreview />

      {/* 10. Final Booking & Order CTA */}
      <FinalCTA />
    </div>
  );
}
