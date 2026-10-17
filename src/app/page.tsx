import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { PackagesPreview } from "@/components/home/packages-preview";
import { HowItWorks } from "@/components/home/how-it-works";
import { DessertShowcase } from "@/components/home/dessert-showcase";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Introduction */}
      <IntroSection />

      {/* 3. Our Services */}
      <ServicesPreview />

      {/* 4. Signature Packages */}
      <PackagesPreview />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. Featured Desserts */}
      <DessertShowcase />

      {/* 7. Event Gallery */}
      <GalleryPreview />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Testimonials */}
      <TestimonialsPreview />

      {/* 10. Final Booking CTA */}
      <FinalCTA />
    </div>
  );
}
