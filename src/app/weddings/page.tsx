import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Wedding Dessert Catering & Carts",
  description:
    "Elevate your wedding celebration with our bespoke mobile dessert carts, French macarons, handcrafted pastries, and white-glove catering service.",
};

export default function WeddingsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Wedding Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
              <Heart className="w-3.5 h-3.5 text-primary fill-primary/20" />
              <span>Weddings & Bridal Celebrations</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
              An Unforgettable Sweet Finale for Your Love Story.
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              From romantic vineyard ceremonies to grand metropolitan ballroom receptions, Divine & Delight delivers handcrafted culinary masterworks presented from breathtaking bespoke setups and luxury carts.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Inquire About Your Wedding</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/gallery"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-border bg-card hover:bg-muted text-foreground font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Browse Wedding Gallery</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-border grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="font-serif text-xl font-bold text-foreground">Custom</span>
                <p className="text-xs text-muted-foreground">Color Palette Matching</p>
              </div>
              <div className="border-l border-border pl-4">
                <span className="font-serif text-xl font-bold text-foreground">Tasting</span>
                <p className="text-xs text-muted-foreground">Couples Box Delivered</p>
              </div>
              <div className="border-l border-border pl-4">
                <span className="font-serif text-xl font-bold text-foreground">White-Glove</span>
                <p className="text-xs text-muted-foreground">Uniformed Concierge</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
              <Image
                src="/images/meals/wedding-catering.webp"
                alt="Luxury wedding reception dinner and catering by Divine & Delight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Why Couples Love Our Carts */}
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border space-y-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block">
              The Wedding Experience
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Designed in Harmony With Your Floral & Event Design
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We collaborate directly with your wedding coordinator, florist, and venue team to ensure absolute visual unity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-2xl bg-secondary/50 border border-border">
              <span className="font-serif text-xl font-bold text-foreground block">
                1. Palette & Floral Synergy
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We custom-tint our French macaron shells, mini tart glazes, and cake frostings to echo your bridesmaid dresses, stationery hues, and floral installations.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-secondary/50 border border-border">
              <span className="font-serif text-xl font-bold text-foreground block">
                2. Interactive Guest Delight
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rather than an untouched static cake table, our mobile cart becomes an interactive social hub during late-night dancing where guests mingle and sample multiple flavors.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-secondary/50 border border-border">
              <span className="font-serif text-xl font-bold text-foreground block">
                3. Couple&apos;s Tasting Consultation
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enjoy a private tasting delivery box containing our signature French macarons, tartlets, and brownies to select your exact wedding menu from home.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Wedding Delicacies */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block">
              Curated Wedding Favorites
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Beloved by Brides & Guests
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xs">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="/images/desserts/mini-tiramisu.webp"
                  alt="Divine Mini Tiramisu"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Divine Mini Tiramisu
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Espresso-soaked ladyfingers layered with mascarpone and Dutch cocoa.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xs">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="/images/desserts/dubai-eclair.webp"
                  alt="Delight Dubai Chocolate Eclairs"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Dubai Pistachio Eclairs
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Petite choux eclairs with dark chocolate glaze and pistachio drizzle.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xs">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="/images/desserts/velvet-mousse-dome.webp"
                  alt="D&D Velvet Mousse Dome"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Velvet Mousse Domes
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Cocoa-dusted cream mousse dome on spiced biscuit crumble.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xs">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="/images/desserts/golden-ganache-cups.webp"
                  alt="D&D Golden Ganache Cups"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Golden Ganache Cups
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Dark chocolate fudge ganache cubes topped with 24k edible gold leaf.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Booking CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-secondary/80 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Are you planning your 2026 – 2027 Wedding?
            </h3>
            <p className="text-xs text-muted-foreground">
              Our calendar reserves peak spring and autumn dates months in advance. Inquire today to check your date.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-md shrink-0 transition-colors"
          >
            Check Wedding Date
          </Link>
        </div>
      </div>
    </div>
  );
}
