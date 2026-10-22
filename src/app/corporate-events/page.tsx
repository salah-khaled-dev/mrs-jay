import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Event Dessert Catering & Brand Activations",
  description:
    "Elevated dessert cart catering for brand launches, executive galas, corporate conferences, and VIP hospitality across the United States.",
};

const CORPORATE_CAPABILITIES = [
  {
    title: "Edible Corporate Logo Printing",
    description: "High-resolution FDA-approved edible ink reproduction of your company crest or sponsor logos directly on French macarons and cookies.",
  },
  {
    title: "Full Venue COI & Compliance",
    description: "Standard $2M comprehensive commercial general liability insurance certificates issued naming your venue as additional insured.",
  },
  {
    title: "High-Volume Attendee Throughput",
    description: "Streamlined multi-cart configurations and dual dessert concierges capable of serving 100 to 1,000+ attendees seamlessly during conference intermissions.",
  },
  {
    title: "Dietary Clear Labeling",
    description: "Exquisite display signage detailing gluten-free, vegan, nut-free, and dairy-free options for diverse attendee groups.",
  },
  {
    title: "Corporate Invoicing & Net Terms",
    description: "Itemized billing, electronic W-9 provisioning, and purchase order processing tailored to corporate procurement departments.",
  },
  {
    title: "Brand Activation Custom Wrapping",
    description: "Customized cart canopy textiles, branded menu vitrines, and thematic color-matching to align with your product launch.",
  },
];

export default function CorporateEventsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span>Corporate Hospitality & Brand Activations</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
              Sophisticated Dessert Catering for Modern Brands.
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Impress clients, celebrate annual milestones, and activate high-energy product launches with bespoke artisan sweet stations designed for rapid guest flow and immaculate visual branding.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Corporate Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-border bg-card hover:bg-muted text-foreground font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Inquire With Event Specs</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-border grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="font-serif text-xl font-bold text-foreground">50 – 1,000+</span>
                <p className="text-xs text-muted-foreground">Attendee Throughput</p>
              </div>
              <div className="border-l border-border pl-4">
                <span className="font-serif text-xl font-bold text-foreground">COI Ready</span>
                <p className="text-xs text-muted-foreground">$2M Venue Coverage</p>
              </div>
              <div className="border-l border-border pl-4">
                <span className="font-serif text-xl font-bold text-foreground">Edible Logos</span>
                <p className="text-xs text-muted-foreground">Custom Branded Treats</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
              <Image
                src="/images/meals/corporate-catering.webp"
                alt="Corporate luncheon and executive boardroom catering"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Corporate Capabilities Grid */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block">
              Enterprise Excellence
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Built for Flawless Corporate Logistics
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We understand corporate event protocols, freight dock guidelines, and tight executive schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORPORATE_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-card border border-border shadow-xs hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/30 text-primary flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {cap.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Event Types */}
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block">
              Event Applications
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Tailored Corporate Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
              <span className="font-serif font-bold text-lg text-foreground block">
                Brand Activations
              </span>
              <p className="text-xs text-muted-foreground">
                High-impact consumer engagement with branded logo treats and photo-friendly dessert carts.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
              <span className="font-serif font-bold text-lg text-foreground block">
                Executive Galas
              </span>
              <p className="text-xs text-muted-foreground">
                Decadent dessert stations and white-glove concierges for annual shareholder celebrations.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
              <span className="font-serif font-bold text-lg text-foreground block">
                Conferences & Expos
              </span>
              <p className="text-xs text-muted-foreground">
                Quick-serve dessert break kiosks to delight conference attendees between keynote sessions.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
              <span className="font-serif font-bold text-lg text-foreground block">
                Holiday Celebrations
              </span>
              <p className="text-xs text-muted-foreground">
                Festive winter dessert displays featuring spiced ganaches, gold dust truffles, and artisan fudge.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Booking Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-secondary/80 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Need an RFP Proposal or Itemized Invoice Estimate?
            </h3>
            <p className="text-xs text-muted-foreground">
              Submit your company specifications to receive a formal corporate catering estimate.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-md shrink-0 transition-colors"
          >
            Submit Corporate RFP
          </Link>
        </div>
      </div>
    </div>
  );
}
