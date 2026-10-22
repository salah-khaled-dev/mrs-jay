"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Utensils, CakeSlice, Sparkles, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/meal-prep", label: "Meals", icon: Utensils },
  { href: "/desserts", label: "Desserts", icon: CakeSlice },
  { href: "/catering", label: "Catering", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export function MobileNavBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Quick mobile navigation"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 md:hidden w-[calc(100%-1.5rem)] max-w-sm pointer-events-auto"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="bg-card/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-primary/25 shadow-2xl rounded-full px-2 py-1.5 flex items-center justify-around gap-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-full transition-all duration-200 relative select-none",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60 font-medium"
              )}
            >
              <Icon className="w-4 h-4 mb-0.5 shrink-0" />
              <span className="text-[10px] tracking-tight leading-none truncate">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
