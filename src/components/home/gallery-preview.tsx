import Link from "next/link";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/data";
import { ArrowRight, MapPin, Users, Sparkles } from "lucide-react";

export function GalleryPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Real Event Impressions</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Curated Event & Meal Prep Gallery
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Explore our chef-prepared weekly meals in multi-compartment prep packaging, executive corporate boardroom spreads, and polished hot buffet banquets.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group shrink-0"
          >
            <span>View Full Gallery (Lightbox)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Balanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-primary/40"
            >
              <div>
                {/* Photo: 16/11 aspect ratio showing the complete meal and packaging */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Category Badge on Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-neutral-950/85 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-amber-300 border border-amber-400/30">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content: Neatly placed below photo */}
                <div className="p-6 sm:p-7 space-y-3">
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

              {/* Card Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-border/40 mt-2">
                <div className="pt-4 flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                    Divine & Delight
                  </span>
                  <Link
                    href="/gallery"
                    className="text-primary hover:text-primary-hover flex items-center gap-1 font-semibold group/link"
                  >
                    <span>View In Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
