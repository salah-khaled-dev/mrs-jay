"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { DESSERT_ITEMS } from "@/lib/data";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Delicacies" },
  { id: "macarons", label: "French Macarons" },
  { id: "cupcakes", label: "Mini Cupcakes" },
  { id: "mini-desserts", label: "Petite Tarts" },
  { id: "brownies", label: "Fudge Brownies" },
  { id: "cookies", label: "Cookies" },
  { id: "custom-treats", label: "Cakesicles & Treats" },
];

export function DessertShowcase() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return DESSERT_ITEMS;
    return DESSERT_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 bg-card/40 dark:bg-card/20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Artisan Patisserie</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Featured Sweet Creations
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every item is freshly baked from scratch using pure European butter, organic berries, and premium single-origin chocolate.
            </p>
          </div>

          <Link
            href="/dessert-menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group shrink-0"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
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

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
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
                    <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider shadow-xs">
                      Popular
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
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Popular Flavors */}
                <div className="pt-3 border-t border-border">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-1.5">
                    Signature Flavors:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.flavors.slice(0, 3).map((flavor, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-foreground font-medium"
                      >
                        {flavor}
                      </span>
                    ))}
                    {item.flavors.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">
                        +{item.flavors.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
