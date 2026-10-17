import Link from "next/link";
import { HOW_IT_WORKS_STEPS } from "@/lib/data";
import { Sparkles, Calendar, FileText, GlassWater, ArrowRight } from "lucide-react";

const STEP_ICONS = [
  Sparkles,
  Calendar,
  FileText,
  GlassWater,
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
            Effortless Planning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            How It Works
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            From your first inquiry to the sweet celebratory toast, our streamlined 4-step process ensures complete peace of mind.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = STEP_ICONS[index % STEP_ICONS.length];
            return (
              <div
                key={item.step}
                className="relative rounded-2xl p-7 bg-card border border-border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-primary/40 dark:text-primary/60">
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
              Ready to begin planning your dessert station?
            </h4>
            <p className="text-xs text-muted-foreground">
              Complete our 2-minute booking questionnaire to check availability.
            </p>
          </div>

          <Link
            href="/book"
            className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs shrink-0 cursor-pointer"
          >
            <span>Start Booking Wizard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
