import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Full-Spectrum Culinary Services</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
              Bespoke Meal Prep & Luxury Catering
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              From our famous 5 for $65 weekly meal prep drops to lavish hot chafing buffets for corporate galas and weddings, we bring culinary artistry to your table.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-md text-[10px] font-medium text-foreground tracking-wider border border-border">
                    {service.startingGuests}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary font-medium tracking-wide">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-border/40 mt-4">
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground font-medium">
                    {service.setupTime}
                  </span>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
