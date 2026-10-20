import Link from "next/link";
import { Utensils, Flame, Truck, Clock, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Utensils,
    title: "Select Your Weekly Meals",
    description:
      "Choose any 5 meals for $65 from our weekly lineup: Lasagna, Chicken Kabobs, Shrimp Cajun, and Meat Della Casa. Or customize your catering platter.",
  },
  {
    step: "02",
    icon: Flame,
    title: "Chef-Prepared Fresh",
    description:
      "Our culinary team scratch-prepares each dish using prime meats, wild seafood, and crisp vegetables. No artificial preservatives or fillers.",
  },
  {
    step: "03",
    icon: Truck,
    title: "Chilled Doorstep Delivery",
    description:
      "Delivered in insulated thermal coolers with gel ice packs right to your home or office every Sunday and Wednesday on schedule.",
  },
  {
    step: "04",
    icon: Clock,
    title: "Heat & Eat in 2 Minutes",
    description:
      "Vent the BPA-free container lid and microwave for 2 minutes. Enjoy zero prep, zero cooking, and zero dishwashing.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
            Effortless Gourmet Living
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            How It Works
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            From your weekly Sunday meal selection to dinner ready in 120 seconds, healthy eating has never been this seamless.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl p-7 bg-card border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group hover:border-primary/40"
              >
                <div className="space-y-4">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-primary/40 dark:text-primary/60 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-accent/30 dark:bg-accent/15 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/60">
                  <span className="text-[11px] font-medium text-primary uppercase tracking-wider">
                    Step {index + 1} of 4
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-secondary/80 border border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl font-bold text-foreground">
              Ready to claim this week&apos;s 5 for $65 special?
            </h4>
            <p className="text-xs text-muted-foreground">
              Orders close Friday at 11:59 PM EST for Sunday delivery.
            </p>
          </div>

          <Link
            href="/menu"
            className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs shrink-0 cursor-pointer"
          >
            <span>Order Your 5 Meals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
