"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS } from "@/lib/data";
import { GalleryItem } from "@/types";
import { X, MapPin, Users, ZoomIn, ArrowRight, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: "All Images" },
  { id: "meal-prep", label: "Weekly Meal Prep" },
  { id: "catering", label: "Hot Buffet Catering" },
  { id: "corporate", label: "Corporate Catering" },
  { id: "events", label: "Weddings & Celebrations" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [selectedImage, setSelectedImage] = React.useState<GalleryItem | null>(null);

  // Close on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = React.useMemo(() => {
    if (activeFilter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <UtensilsCrossed className="w-3.5 h-3.5 text-primary" />
            <span>Visual Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Meal Prep & Event Catering Gallery
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Browse our signature meal prep dishes in sealed black containers, corporate boardroom lunch setups, and luxury wedding buffet banquets. Click any photo to view full details.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap pb-4">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer",
                activeFilter === f.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:border-primary/50"
            >
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Top Zoom Cue */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-neutral-950/85 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-amber-300 border border-amber-400/30">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{item.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5 border-l border-border pl-3">
                      <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{item.guestCount}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card Bottom Click Action */}
              <div className="p-6 pt-0 border-t border-border/40 mt-2">
                <div className="pt-4 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                    Divine & Delight
                  </span>
                  <span className="text-primary flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Expand Photo</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Image side */}
                <div className="md:col-span-8 relative aspect-[4/3] md:aspect-auto md:min-h-[460px] bg-black">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>

                {/* Details side */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-card text-foreground">
                  <div className="space-y-4">
                    <span className="text-[11px] uppercase tracking-widest text-primary font-bold block">
                      {selectedImage.categoryLabel}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      {selectedImage.title}
                    </h2>

                    <div className="space-y-2 text-xs text-muted-foreground pt-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span>{selectedImage.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary shrink-0" />
                        <span>{selectedImage.guestCount}</span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                      {selectedImage.caption}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link
                      href="/contact"
                      className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Inquire About Similar Setup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
