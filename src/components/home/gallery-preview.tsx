import Link from "next/link";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/data";
import { ArrowRight, MapPin, Users } from "lucide-react";

export function GalleryPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
              Real Event Impressions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Curated Event Gallery
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Explore past dessert carts and sweet pavilion setups from luxury estate weddings, garden celebrations, and metropolitan corporate galas.
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

        {/* Masonry-Style Responsive Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            const isTall = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    isTall ? "aspect-[4/5]" : "aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-medium text-white tracking-wider border border-white/20">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Bottom Content Card Info */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                    <div className="flex items-center gap-4 text-[11px] text-white/80">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{item.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        <span>{item.guestCount}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
