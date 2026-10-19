import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart, Award, ShieldCheck, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "About Divine & Delight | Luxury Meal Prep & Bespoke Catering",
  description:
    "Learn about our culinary heritage, bespoke meal prep excellence, and our philosophy of elevating dining into an interactive art form.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Our Heritage & Vision</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            The Story of Divine & Delight
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Founded on the belief that culinary dining and celebratory events should be as visually captivating as they are gastronomically sublime.
          </p>
        </div>

        {/* Narrative Section with Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                alt="Artisan culinary preparation and chef artistry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl border border-border shadow-xl max-w-xs hidden sm:block">
              <span className="font-serif text-xl font-bold text-primary block mb-1">
                Artisan Ingredients
              </span>
              <p className="text-xs text-muted-foreground leading-snug">
                Every meal prep curation, pastry layer, and bespoke recipe is prepared from scratch with meticulous culinary technique.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-primary font-bold block">
              Boutique Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Transforming Fine Dining & Event Catering Into an Art Form
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Divine & Delight was envisioned to bridge the gap between high-end gastronomy, personalized meal preparation, and modern event hospitality. Traditional catering often relegated dining to stationary buffets with tired presentations. We imagined something far more spirited: handcrafted culinary activations, European mobile carts, and tailor-made meal services with white-glove hospitality.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our presentation fixtures are built by boutique craftsmen using solid hardwoods, brass fittings, and interchangeable designer canopies. Whether your celebration is a sun-drenched vineyard wedding or a black-tie ballroom gala, Divine & Delight complements your aesthetic with effortless elegance.
            </p>

            {/* Note on Brand History */}
            <div className="p-4 rounded-xl bg-secondary/80 border border-border/80 text-xs text-muted-foreground italic">
              Note: Brand narrative and culinary milestones are curated to reflect Divine & Delight’s design standards and will be tailored as further archives are confirmed.
            </div>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-xs transition-colors"
              >
                <span>Explore Our Offerings</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Core Commitments Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block">
              Uncompromising Standards
            </span>
            <h3 className="font-serif text-3xl font-bold text-foreground">
              Our Four Guiding Promises
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/30 text-primary flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Scratch Artisan Baking
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No artificial flavorings, premade mixes, or frozen shortcuts. Every component is produced specifically for your event date.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Warm Personal Service
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                From responsive inquiry proposals to on-site white-glove concierges, we prioritize gracious guest interaction.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Inclusive Dietary Care
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Transparent allergen labeling with dedicated gluten-free and vegan luxury selections prepared with rigorous care.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/30 text-primary flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Visual Perfection
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Color harmony, custom calligraphy signage, and photogenic lighting ensuring your dessert cart is an Instagram sensation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
