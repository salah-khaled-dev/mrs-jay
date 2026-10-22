import type { Metadata } from "next";
import Image from "next/image";
import { CakeSlice, Mail } from "lucide-react";
import { DESSERT_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artisanal Desserts | Divine & Delight",
  description:
    "Explore our handcrafted collection of luxury dessert cups, artisan pastries, and sweet catering delights.",
};

const EMAIL_LINK =
  "mailto:dnd.cater.events@gmail.com?subject=Inquiry%20%E2%80%94%20Divine%20%26%20Delight&body=Hello%20Divine%20%26%20Delight%2C%0D%0A%0D%0AI%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20requirements.%0D%0A%0D%0AThank%20you.";

const INSTAGRAM_LINK = "https://www.instagram.com/divineanddelight.cater";

export default function DessertsPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Compact, Elegant Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-primary/25 text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            <CakeSlice className="w-3.5 h-3.5" />
            <span>Divine & Delight</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Artisanal Desserts
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Thoughtfully crafted mini dessert cups, golden choux pastries, and sweet event displays.
          </p>
        </div>

        {/* 6 Dessert Cards: Display-Only Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DESSERT_ITEMS.map((dessert) => (
            <div
              key={dessert.id}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Professional Dessert Image (Compact 160-180px height) */}
              <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden bg-muted">
                <Image
                  src={dessert.image}
                  alt={dessert.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Dessert Name & Short Description Only */}
              <div className="p-4 sm:p-5 space-y-1.5 flex flex-col flex-1">
                <h2 className="font-serif text-lg font-bold text-foreground">
                  {dessert.name}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {dessert.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small Direct Contact Section */}
        <div className="rounded-3xl bg-card border border-border p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4 shadow-xs">
          <div className="space-y-1.5">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
              Interested in Our Desserts?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Contact us to learn more about availability, dessert cart displays, and event options.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={EMAIL_LINK}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us via Email</span>
            </a>

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Message Us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
