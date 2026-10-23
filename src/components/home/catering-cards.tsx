import Link from "next/link";
import {
  CalendarHeart,
  Building2,
  Utensils,
  CakeSlice,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  tag: string;
  href: string;
  cta: string;
  icon: typeof CalendarHeart;
}

const CATERING_SERVICES: ServiceCard[] = [
  {
    title: "Events & Celebrations",
    description:
      "Full-service bespoke catering, artisanal buffets, and curated hospitality for memorable occasions.",
    tag: "Bespoke Catering",
    href: "/catering",
    cta: "Explore Catering",
    icon: CalendarHeart,
  },
  {
    title: "Corporate & Team Building",
    description:
      "Executive dining, corporate workshops, conference setups, and reliable workplace hospitality.",
    tag: "Corporate Hospitality",
    href: "/corporate-events",
    cta: "Explore Corporate",
    icon: Building2,
  },
  {
    title: "Gourmet Meal Prep",
    description:
      "Nutritious, chef-prepared savory dishes and healthy weekly portion-controlled meal plans.",
    tag: "Weekly Meal Prep",
    href: "/meal-prep",
    cta: "Explore Meal Prep",
    icon: Utensils,
  },
  {
    title: "Artisanal Desserts",
    description:
      "Handcrafted mini dessert cups, French choux, luxury pastries, and sweet catering displays.",
    tag: "Artisanal Sweets",
    href: "/desserts",
    cta: "Explore Desserts",
    icon: CakeSlice,
  },
];

export function CateringCards() {
  return (
    <section className="w-full py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" />
            <span>Our Core Culinary Services</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Crafted for Every Occasion
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Choose a service to explore menus, private catering options, and weekly culinary specialties.
          </p>
        </div>

        {/* 4 Cards in Balanced 2x2 Grid (1-col on mobile, 2-col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {CATERING_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-card border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-secondary text-foreground/80 border border-border/60 group-hover:border-primary/30 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-xs sm:text-sm font-semibold text-primary relative z-10">
                  <span>{service.cta}</span>
                  <div className="w-7 h-7 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


