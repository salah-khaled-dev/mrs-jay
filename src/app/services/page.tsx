import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { Sparkles, ArrowRight, Check, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Meal Prep & Catering Services",
  description:
    "Explore our full collection of chef-prepared weekly meal prep, corporate office luncheons, wedding receptions, and private event catering.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Culinary & Catering Solutions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Meal Prep & Bespoke Catering
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From our famous 5 for $65 weekly meal prep delivery to lavish hot chafing buffets for corporate summits and weddings, Divine & Delight delivers culinary excellence.
          </p>
        </div>

        {/* Detailed Service Blocks */}
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xs hover:shadow-xl transition-shadow`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-muted ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-md text-xs font-semibold text-foreground border border-border">
                    {service.startingGuests}
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-primary font-bold">
                      Service {index + 1} of {SERVICES.length}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-primary italic">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs uppercase tracking-wider text-foreground font-semibold block">
                      Key Highlights & Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.inclusions.slice(0, 4).map((inc, iIdx) => (
                        <li
                          key={iIdx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Details & Actions */}
                  <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>Setup: {service.setupTime}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="px-4 py-2 rounded-full border border-border hover:bg-muted text-xs font-medium uppercase tracking-wider text-foreground transition-colors"
                      >
                        Learn More
                      </Link>
                      <Link
                        href={`/book?service=${service.slug}`}
                        className="px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-xs transition-colors"
                      >
                        <span>Book Format</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Planning Notice */}
        <div className="p-8 sm:p-12 rounded-3xl bg-secondary/80 border border-border text-center max-w-4xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            Looking for a Completely Custom Concept?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From multi-tier macaron pyramids matching your bride’s gown to full multi-room festival sweet carts, our design team welcomes bespoke production commissions.
          </p>
          <div className="pt-2">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Discuss Your Vision With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
