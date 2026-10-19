import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, Palette, HeartHandshake } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-20 bg-card/40 dark:bg-card/20 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80"
                  alt="Pastel French Macarons stacked gracefully"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 rounded-2xl bg-secondary/70 border border-border">
                <span className="font-serif text-3xl font-bold text-primary block mb-1">
                  Artisan
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Baked fresh with Valrhona chocolate, Tahitian vanilla, and organic seasonal berries.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8">
              <div className="p-5 rounded-2xl bg-accent/20 dark:bg-accent/10 border border-border">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
                  Bespoke Styling
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every cart canopy, linen, and signage element is hand-curated to reflect your exact event palette.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  alt="Outdoor wedding dessert station setup"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
                The Art of Sweet Celebrations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                More Than Desserts. <br />
                <span className="italic font-normal">An Experience to Remember.</span>
              </h2>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              At Divine & Delight, we believe every culinary touchpoint is never just an afterthought—it is the centerpiece of your celebration, an interactive gathering point where conversations flourish and memories are savored.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              We replace ordinary catering trays with thoughtfully designed mobile carts, European-inspired patisserie vitrines, and custom botanical canopies. Whether hosting an outdoor garden wedding or an executive gala, our desserts are presented with the reverence of fine jewelry.
            </p>

            {/* Three Pillar Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/30 text-primary flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    Chef-Crafted
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Made from scratch using pure European butter & fair-trade cacao.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    Custom Coordinated
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Color-matched macaron shells, monograms, and custom florals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-foreground">
                    White-Glove Care
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Attentive dessert concierges ensuring flawless guest hospitality.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
              >
                <span>Read our full brand philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
