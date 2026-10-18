import { Sparkles, Palette, Clock, ShieldCheck, Heart, Award } from "lucide-react";

const VALUES = [
  {
    icon: Sparkles,
    title: "Artistic Presentation",
    description:
      "We treat every dessert station as an editorial gallery installation—layering vintage pedestals, polished glass vitrines, and bespoke florals.",
  },
  {
    icon: Palette,
    title: "Thoughtful Customization",
    description:
      "From color-matched macaron shells to monogrammed sugar cookies, we coordinate directly with your wedding or event aesthetic.",
  },
  {
    icon: Clock,
    title: "Punctual White-Glove Setup",
    description:
      "We arrive 2 to 3 hours prior to your event start to assemble, style, temperature-check, and test all lighting before any guest steps inside.",
  },
  {
    icon: ShieldCheck,
    title: "Dietary & Allergen Mindfulness",
    description:
      "Naturally gluten-free French macarons, vegan sponge options, and nut-conscious labeling ensure every guest can celebrate safely.",
  },
  {
    icon: Heart,
    title: "Dedicated On-Site Concierge",
    description:
      "Uniformed, gracious dessert concierges remain on-site to assist guests, replenish displays, and maintain spotless presentation.",
  },
  {
    icon: Award,
    title: "Pure European Ingredients",
    description:
      "Crafted exclusively with real butter, Valrhona single-origin chocolate, Madagascar Bourbon vanilla, and seasonal local fruit purées.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-card/30 dark:bg-card/10 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
            Our Brand Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Why Discerning Hosts Choose Mrs Jay
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Crafting memorable dessert hospitality requires both pastry mastery and meticulous event coordination. Here is what sets our sweet experiences apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-card border border-border shadow-xs hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/30 dark:bg-accent/15 text-primary flex items-center justify-center">
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
