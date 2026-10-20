import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Home, ChefHat } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-20 bg-card/40 dark:bg-card/20 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Meal Prep Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border group">
                <Image
                  src="/images/meals/lasagna.jpg"
                  alt="Homestyle Baked Lasagna with Steamed Vegetables"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-amber-300 bg-neutral-950/80 px-2.5 py-1 rounded-full border border-amber-400/30">
                  Lasagna • Vegetables
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-secondary/70 border border-border">
                <span className="font-serif text-2xl font-bold text-primary block mb-1">
                  5 for $65
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our signature weekly routine. Gourmet chef cooking packaged for peak weekday convenience.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8">
              <div className="p-5 rounded-2xl bg-accent/20 dark:bg-accent/10 border border-border">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
                  Peak Freshness
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cooked in small artisanal batches with zero artificial additives, delivered chilled straight to you.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border group">
                <Image
                  src="/images/meals/chicken-kabobs.jpg"
                  alt="Grilled Chicken Kabobs with Mediterranean Salad"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-amber-300 bg-neutral-950/80 px-2.5 py-1 rounded-full border border-amber-400/30">
                  Chicken Kabobs • Salad
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
                The Divine & Delight Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                Healthy. Homemade. <br />
                <span className="italic font-normal">High Quality Living.</span>
              </h2>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              At Divine & Delight, we believe nutritious eating should never feel like a sacrifice. Whether fueling an active career, keeping family dinners stress-free, or celebrating life&apos;s grandest milestones, our culinary team brings the standard of fine dining into everyday life.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Every meal is prepared by hand in our state-of-the-art kitchen, using premium choice meats, wild-caught shrimp, slow-simmered sauces, and crisp farm-grown produce. Sealed in BPA-free black containers with clear macro counts, your meals are ready in just 120 seconds.
            </p>

            {/* Three Pillar Points from Flyer */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/30 text-primary flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    Healthy Nutrition
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Portion-controlled, high-protein recipes crafted for vitality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    Homemade Warmth
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Authentic scratch-made recipes with slow-cooked homestyle love.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                  <ChefHat className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    High Quality
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Prime proteins, wild shrimp, and crisp market vegetables.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
              >
                <span>Read our full brand story & standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
