import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CakeSlice, Cookie } from "lucide-react";

export function DessertSection() {
  const featuredDesserts = [
    {
      id: "dubai-eclair",
      title: "Dubai Pistachio Chocolate Eclairs",
      tag: "Signature Pastry",
      description:
        "Petite choux pastries filled with silky pistachio cream, drizzled with dark chocolate glaze and delicate gold shimmer.",
      image: "/images/desserts/dubai-eclair.webp",
      alt: "Delight Dubai Chocolate Eclairs with pistachio cream drizzle",
    },
    {
      id: "golden-ganache-cups",
      title: "Golden Ganache Tasting Cups",
      tag: "Luxury Tasting Cups",
      description:
        "Decadent dark chocolate fudge ganache cubes finished with fine Dutch cocoa dusting and artisan 24k gold leaf.",
      image: "/images/desserts/golden-ganache-cups.webp",
      alt: "D&D Golden Ganache Cups with gold leaf",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-background border-t border-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
            HANDCRAFTED SWEETS & DISPLAYS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
            Artisanal Dessert Creations
          </h2>

          <div className="pt-0.5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-medium">
              <CakeSlice className="w-3.5 h-3.5 shrink-0" />
              <span>Sweet Tables & Luxury Displays</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-foreground text-xs font-medium">
              <Cookie className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Individual Tasting Cups & Bites</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            From lavish celebratory dessert spreads to individually packaged luxury tasting cups, our artisanal pastries add effortless sweetness and sophistication to any event.
          </p>
        </div>

        {/* 2-Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {featuredDesserts.map((dessert) => (
            <div
              key={dessert.id}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col hover:border-primary/40"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                <Image
                  src={dessert.image}
                  alt={dessert.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase font-semibold tracking-wider">
                    {dessert.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {dessert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                    {dessert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <Link
            href="/desserts"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow cursor-pointer"
          >
            <span>Explore Dessert Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
