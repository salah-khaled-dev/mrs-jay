"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Home, Utensils, CakeSlice, Sparkles, MessageCircle } from "lucide-react";
import { cn, withBasePath } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/meal-prep", label: "Meals", icon: Utensils },
  { href: "/desserts", label: "Desserts", icon: CakeSlice },
  { href: "/catering", label: "Catering", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

/**
 * Stops every <video> on the current page and aborts its network download,
 * so the next page gets the full connection pool and decoder immediately.
 */
function releaseMedia() {
  if (typeof document === "undefined") return;
  document.querySelectorAll("video").forEach((v) => {
    try {
      v.pause();
      v.removeAttribute("src");
      v.load();
    } catch {
      // ignore
    }
  });
}

export function MobileNavBar() {
  const pathname = usePathname();
  const [optimisticPath, setOptimisticPath] = React.useState<string | null>(null);
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOptimisticPath(null);
  }

  const activePath = optimisticPath ?? pathname;

  return (
    <nav
      aria-label="Quick mobile navigation"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[calc(100%-1.5rem)] max-w-sm pointer-events-auto"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        touchAction: "manipulation",
      }}
    >
      <div className="bg-card/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-primary/25 shadow-2xl rounded-full px-2 py-1.5 flex items-center justify-around gap-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? activePath === "/"
              : activePath.startsWith(item.href);

          return (
            <a
              key={item.href}
              href={withBasePath(item.href)}
              onClick={(e) => {
                if (item.href === pathname) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  return;
                }
                setOptimisticPath(item.href);
                releaseMedia();
              }}
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-full transition-all duration-150 relative select-none active:scale-95",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60 font-medium"
              )}
            >
              <Icon className="w-4 h-4 mb-0.5 shrink-0" />
              <span className="text-[10px] tracking-tight leading-none truncate">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export { releaseMedia };
