import { Leaf, Home, ChefHat, DollarSign, ShieldCheck, Award } from "lucide-react";

const VALUES = [
  {
    icon: Leaf,
    title: "100% Healthy & Balanced",
    description:
      "Nutrient-dense, macro-calculated meals packed with lean proteins, complex carbs, and fresh greens. Clean fuel with zero guilt.",
  },
  {
    icon: Home,
    title: "Homemade From Scratch",
    description:
      "We simmer our beef ragù for hours, hand-marinate chicken skewers, and blend our own Cajun spices. Real homestyle craftsmanship.",
  },
  {
    icon: ChefHat,
    title: "High Quality Sourcing",
    description:
      "Choice beef cuts, wild-caught jumbo shrimp, cage-free poultry, and crisp produce. Zero artificial preservatives or fillers.",
  },
  {
    icon: DollarSign,
    title: "Unbeatable 5 for $65 Value",
    description:
      "Enjoy 5 chef-prepared gourmet meals for only $65 ($13 per meal). Experience luxury dining at a fraction of takeout and grocery costs.",
  },
  {
    icon: ShieldCheck,
    title: "BPA-Free Recyclable Trays",
    description:
      "Engineered multi-compartment black containers that are 100% microwave-safe, freezer-safe, and dishwasher-safe. No soggy sides.",
  },
  {
    icon: Award,
    title: "Full-Service Event Catering",
    description:
      "From hot chafing buffet banquets with gold accents to corporate lunch boxes, we bring white-glove hospitality to life's grand occasions.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-card/30 dark:bg-card/10 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
            The Divine & Delight Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Why Food Lovers Choose Us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We bridge the gap between high-nutrition meal prep and restaurant-level flavor. Here is what sets Divine & Delight apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-card border border-border shadow-xs hover:shadow-lg transition-all space-y-4 hover:border-primary/40 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/30 dark:bg-accent/15 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {val.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
