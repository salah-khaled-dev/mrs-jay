import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart, Check, Users, Calendar, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Wedding Dessert Catering & Carts",
  description:
    "Elevate your wedding celebration with our bespoke mobile dessert carts, French macarons, handcrafted pastries, and white-glove catering service.",
};

export default function WeddingsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
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
              From romantic vineyard ceremonies to grand metropolitan ballroom receptions, Mrs Jay delivers handcrafted French pastries presented from breathtaking vintage-inspired mobile carts.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book?eventType=wedding"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Reserve Your Wedding Date</span>
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
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                alt="Outdoor vineyard wedding reception dessert cart setup"
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
                  src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80"
                  alt="Wedding macarons"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Parisian Macaron Towers
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Rose raspberry, pistachio, and champagne infused shells.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xs">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
                  alt="Petite wedding tarts"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Petite Berry Sablés
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Madagascar vanilla bean curd crowned with seasonal blackberries.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xs">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
                  alt="Mini cupcakes"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Floral Mini Cupcakes
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Swiss meringue buttercream dusted with 24k edible gold leaf.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xs">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
                  alt="Wedding favors"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-foreground">
                  Monogrammed Favors
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Wax-sealed ballotin boxes for guests to cherish at home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Booking CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-secondary/80 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Are you planning your 2025 – 2026 Wedding?
            </h3>
            <p className="text-xs text-muted-foreground">
              Our calendar reserves peak spring and autumn dates months in advance. Inquire today to check your date.
            </p>
          </div>

          <Link
            href="/book?eventType=wedding"
            className="px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-md shrink-0 transition-colors"
          >
            Check Wedding Date
          </Link>
        </div>
      </div>
    </div>
  );
}
