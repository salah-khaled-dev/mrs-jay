"use client";

import * as React from "react";
import Link from "next/link";
import { FAQS } from "@/lib/data";
import { Sparkles, ChevronDown, HelpCircle, ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

  const filteredFaqs = React.useMemo(() => {
    if (activeCategory === "All") return FAQS;
    return FAQS.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/30 dark:bg-accent/15 border border-primary/20 text-foreground text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Questions & Guidance</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Everything you need to know about booking our mobile dessert carts, dietary accommodations, venue requirements, and payment policies.
          </p>

          <div className="p-3.5 rounded-xl bg-secondary text-xs text-muted-foreground flex items-center justify-center gap-2 max-w-xl mx-auto">
            <Info className="w-4 h-4 text-primary shrink-0" />
            <span>
              Note: Operational and deposit policies reflect standard catering guidelines and remain in draft review until contract finalization.
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                      {faq.category}
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-foreground">
                      {faq.question}
                    </h2>
                  </div>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground transition-transform duration-200 shrink-0",
                      isOpen ? "rotate-180 bg-primary text-primary-foreground" : ""
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <span className="text-[10px] text-muted-foreground/80 block mt-3 italic">
                      [Draft Catering Standard — Verified upon custom quote issuance]
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="p-8 rounded-3xl bg-card border border-border text-center space-y-4 shadow-xs">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Still Have Questions About Your Specific Venue?
          </h3>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            Our catering director is always delighted to discuss custom floorplans, freight elevator dimensions, and power setups.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full border border-border hover:bg-muted text-xs font-semibold uppercase tracking-wider text-foreground transition-colors"
            >
              Contact Us Directly
            </Link>
            <Link
              href="/book"
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider shadow-xs transition-colors"
            >
              Start Booking Wizard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
