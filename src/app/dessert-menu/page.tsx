"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { DESSERT_ITEMS } from "@/lib/data";
import { Sparkles, ArrowRight, Check, Heart, Info, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "Complete Collection" },
  { id: "macarons", label: "French Macarons" },
  { id: "cupcakes", label: "Artisan Cupcakes" },
  { id: "mini-desserts", label: "Petite Tarts" },
  { id: "brownies", label: "Fudge Brownies" },
  { id: "cookies", label: "Heirloom Cookies" },
  { id: "custom-treats", label: "Cakesicles & Bonbons" },
];

export default function DessertMenuPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return DESSERT_ITEMS;
    return DESSERT_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Artisan Patisserie Menu</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Handcrafted Delicacies
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Baked fresh from scratch for each event using French culinary technique, pure butter, Valrhona chocolate, and fresh botanical essences.
          </p>
        </div>

        {/* Wishlist Notice & Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border pb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-card border border-border text-foreground hover:bg-muted"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Selected Wishlist Indicator */}
          {selectedItems.length > 0 && (
            <div className="flex items-center gap-3 bg-secondary/80 px-4 py-2 rounded-full border border-border text-xs text-foreground">
              <span>{selectedItems.length} delicacies marked for your quote</span>
              <Link
                href="/book"
                className="font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>Add to Booking</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isSelected = selectedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Item Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                      {item.popular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                          Signature
                        </span>
                      )}
                      {item.dietary.map((d, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-card/90 backdrop-blur-md text-foreground text-[10px] font-medium border border-border"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(item.id)}
                      className={cn(
                        "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md",
                        isSelected
                          ? "bg-primary text-white"
                          : "bg-black/30 hover:bg-black/50 text-white"
                      )}
                      aria-label="Save to event menu wishlist"
                      title="Save to event wishlist"
                    >
                      <Heart
                        className={cn("w-4 h-4", isSelected ? "fill-current" : "")}
                      />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                      {item.categoryLabel}
                    </span>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      {item.name}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Flavors List */}
                    <div className="pt-3 border-t border-border space-y-2">
                      <span className="text-[11px] uppercase tracking-wider text-foreground font-semibold block">
                        Available Flavors & Infusions:
                      </span>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {item.flavors.map((flavor, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                            <span>{flavor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => toggleWishlist(item.id)}
                    className={cn(
                      "w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer",
                      isSelected
                        ? "bg-accent/40 text-foreground border border-primary/30"
                        : "bg-muted/70 hover:bg-muted text-foreground border border-border"
                    )}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-primary" />
                        <span>Saved for Event Quote</span>
                      </>
                    ) : (
                      <>
                        <PlusCircleIcon />
                        <span>Add to Event Selection</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tasting Box Note */}
        <div className="p-8 sm:p-10 rounded-3xl bg-secondary/80 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Interested in a Private Tasting Box?
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We offer courier-delivered tasting boxes for booked wedding couples and corporate planning committees featuring sample macarons, mini tarts, and brownies.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-xs shrink-0 transition-colors"
          >
            Inquire About Tastings
          </Link>
        </div>
      </div>
    </div>
  );
}

function PlusCircleIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}
