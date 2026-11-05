"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICE_LINKS = [
  { label: "CATERING", href: "/catering" },
  { label: "MEAL PREP", href: "/meal-prep" },
  { label: "DESSERTS", href: "/desserts" },
];

export function ServicesGateway() {
  return (
    <nav
      aria-label="Explore Our Services Navigation Strip"
      className="hidden lg:block w-full border-t border-border/50 py-4 lg:py-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between divide-x divide-border/40">
          {SERVICE_LINKS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center justify-center gap-2 text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors cursor-pointer py-1 flex-1 ${
                index === 0
                  ? "justify-start pr-6"
                  : index === SERVICE_LINKS.length - 1
                  ? "justify-end pl-6"
                  : "px-6"
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
