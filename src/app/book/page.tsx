import { Suspense } from "react";
import { Metadata } from "next";
import { BookingWizard } from "@/components/booking/booking-wizard";

export const metadata: Metadata = {
  title: "Book Your Event | Luxury Dessert Catering & Carts",
  description:
    "Plan your luxury dessert cart catering with our interactive multi-step booking wizard. Select event dates, guest count, custom pastry collections, and cart styling.",
};

export default function BookPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <span>Bespoke Reservation Inquiry</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Design Your Sweet Experience
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Complete our 6-step booking questionnaire to tailor your mobile dessert cart, pastry selections, and custom event aesthetic.
          </p>
        </div>

        {/* Multi-Step Wizard Wrapped in Suspense */}
        <Suspense
          fallback={
            <div className="p-12 text-center text-muted-foreground bg-card rounded-3xl border border-border">
              Loading booking experience...
            </div>
          }
        >
          <BookingWizard />
        </Suspense>
      </div>
    </div>
  );
}
