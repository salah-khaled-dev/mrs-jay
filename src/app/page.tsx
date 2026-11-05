import { MinimalHero } from "@/components/home/minimal-hero";
import { ServicesGateway } from "@/components/home/services-gateway";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-[calc(100svh-64px)] lg:h-[calc(100svh-76px)] flex flex-col justify-between bg-background overflow-x-hidden">
      {/* 1. Balanced Two-Column Hero: Headline & CTA Left, Contain Video Right */}
      <MinimalHero />

      {/* 2. Compact Horizontal Services Navigation Strip: MEAL PREP → | CATERING → | DESSERTS → */}
      <ServicesGateway />
    </div>
  );
}
