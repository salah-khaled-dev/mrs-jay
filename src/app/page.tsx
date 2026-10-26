import { HeroSection } from "@/components/home/hero-section";
import { CateringCards } from "@/components/home/catering-cards";
import { ReviewsPreview } from "@/components/home/reviews-preview";
import { ContactCTA } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Catering-centric Hero with Balanced 5-second Rotating Carousel */}
      <HeroSection />

      {/* 2. The 4 Core Service Cards (Events & Celebrations, Corporate, Meal Prep, Artisanal Desserts) */}
      <CateringCards />

      {/* 3. Featured Reviews & Guest Reflections */}
      <ReviewsPreview />

      {/* 4. Direct Inquiries & Contact Channels */}
      <ContactCTA />
    </div>
  );
}
