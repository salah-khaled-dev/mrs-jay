import { Metadata } from "next";
import Link from "next/link";
import { PACKAGES } from "@/lib/data";
import { Sparkles, Check, ArrowRight, PlusCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Catering Packages & Pricing Inquiries",
  description:
    "Compare our Petite, Signature, and Grand dessert catering packages with inclusions, customizations, and bespoke enhancements.",
};

const ENHANCEMENTS = [
  {
    title: "Artisan 6-Inch Cutting Cake Centerpiece",
    description: "A beautifully styled companion cake for ceremonial photos, flavor-paired to your dessert cart.",
    category: "Bakery",
  },
  {
    title: "Takeaway Favor Packaging with Wax Seals",
    description: "Custom embossed ballotin boxes packed with 2 Parisian macarons for your guests to take home.",
    category: "Guest Favors",
  },
  {
    title: "Gourmet Espresso & Herbal Tea Cart",
    description: "A companion beverage cart featuring European espresso, loose-leaf teas, and flavored syrups.",
    category: "Beverage",
  },
  {
    title: "Live Dessert Torching & Flambé Station",
    description: "An interactive chef-attended moment caramelizing mini crème brûlées and artisan s'mores on-site.",
    category: "Interactive",
  },
  {
    title: "Additional Attended Service Hours",
    description: "Extend your dessert concierge service for late-night dance floor replenishment.",
    category: "Hospitality",
  },
  {
    title: "Bespoke Monogram Acrylic or Wood Signage",
    description: "Laser-cut 3D signage featuring the couple's monogram or corporate brand crest mounted on the cart.",
    category: "Styling",
  },
];

export default function PackagesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Tiered Experiences</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Curated Catering Packages
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Every package includes our handcrafted mobile cart or architectural display, artisan pastry curation, and white-glove on-site concierge service.
          </p>
        </div>

        {/* 3 Packages Detailed Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300",
                pkg.featured
                  ? "bg-card border-2 border-primary shadow-2xl lg:-translate-y-3 relative z-10"
                  : "bg-card/90 border border-border shadow-md hover:shadow-xl"
              )}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Requested</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="border-b border-border pb-6 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold block">
                    {pkg.guestCount}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                    {pkg.title}
                  </h2>
                  <p className="text-xs text-muted-foreground italic">
                    {pkg.tagline}
                  </p>
                  <div className="pt-3">
                    <span className="font-serif text-3xl font-bold text-foreground">
                      Custom Quote
                    </span>
                    <span className="text-xs text-muted-foreground block mt-0.5">
                      Tailored to your location, date & selections
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>

                {/* Inclusions */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider text-foreground font-semibold block">
                    Full Package Inclusions:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customizations */}
                <div className="pt-2 border-t border-border/60 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-primary font-semibold block">
                    Included Customizations:
                  </span>
                  <ul className="space-y-1.5">
                    {pkg.customizations.map((c, cIdx) => (
                      <li key={cIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-border">
                <Link
                  href={`/book?package=${pkg.id}`}
                  className={cn(
                    "w-full py-3.5 px-4 rounded-xl font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs",
                    pkg.featured
                      ? "bg-primary hover:bg-primary-hover text-primary-foreground shadow-md hover:shadow-lg"
                      : "bg-muted/80 hover:bg-muted text-foreground border border-border"
                  )}
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Add-Ons Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block">
              Bespoke Enhancements
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Optional Add-Ons & Experiences
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Elevate your catering package with interactive culinary moments, signature favors, and extended service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENHANCEMENTS.map((add, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-secondary/50 border border-border/80 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                    {add.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {add.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {add.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-primary font-medium">
                  <span>Available on all packages</span>
                  <PlusCircle className="w-4 h-4 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Transparency Callout */}
        <div className="p-8 rounded-3xl bg-secondary/80 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Have questions regarding travel fees or venue insurance?
            </h3>
            <p className="text-xs text-muted-foreground">
              We provide itemized, transparent quotes with zero hidden travel charges or surprise fees.
            </p>
          </div>
          <Link
            href="/faq"
            className="px-6 py-3 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold uppercase tracking-wider text-foreground shrink-0 transition-colors"
          >
            Review FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
