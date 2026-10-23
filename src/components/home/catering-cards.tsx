import Link from "next/link";
import {
  CalendarHeart,
  Cake,
  Building2,
  Utensils,
  ArrowRight,
} from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  tag: string;
  href: string;
  icon: typeof CalendarHeart;
}

const CATERING_SERVICES: ServiceCard[] = [
  {
    title: "Events & Celebrations",
    description:
      "Beautiful food experiences for special gatherings and celebrations.",
    tag: "Bespoke Gatherings",
    href: "/catering",
    icon: CalendarHeart,
  },
  {
    title: "Birthdays & Private Parties",
    description:
      "Celebrate meaningful moments with delicious food and sweet treats.",
    tag: "Private Hospitality",
    href: "/catering",
    icon: Cake,
  },
  {
    title: "Corporate & Team Building",
    description:
      "Catering inquiries for workplace events, team gatherings, and corporate occasions.",
    tag: "Workplace & Executive",
    href: "/corporate-events",
    icon: Building2,
  },
  {
    title: "Meals & Desserts",
    description:
      "Explore savory meals and handcrafted desserts for your occasion.",
    tag: "Chef Preparations",
    href: "/meal-prep",
    icon: Utensils,
  },
];

export function CateringCards() {
  return (
    <section className="w-full py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-primary font-semibold block">
            Catering & Culinary Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Crafted for Every Occasion
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Select a service below to explore curated menus, setups, and catering options.
          </p>
        </div>

        {/* The 4 Responsive Service Cards (1 column mobile, 2x2 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {CATERING_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative p-4 sm:p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium px-2.5 py-0.5 rounded-full bg-secondary">
                      {service.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-2 border-t border-border/50 flex items-center justify-between text-xs font-medium text-primary">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
