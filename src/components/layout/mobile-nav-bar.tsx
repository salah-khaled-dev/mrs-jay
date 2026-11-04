"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Utensils, CakeSlice, Sparkles, MessageCircle } from "lucide-react";
import { cn, withBasePath } from "@/lib/utils";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: Home,
    video: "/videos/food-assembly.mp4",
  },
  {
    href: "/meal-prep",
    label: "Meals",
    icon: Utensils,
    video: "/videos/Luxury_dessert_showcase_display_0ed66c12_1080p.mp4",
  },
  {
    href: "/desserts",
    label: "Desserts",
    icon: CakeSlice,
    video: "/videos/Luxury_dessert_showcase_display_848f58e6_1080p.mp4",
  },
  {
    href: "/catering",
    label: "Catering",
    icon: Sparkles,
    video: "/videos/Luxury_dessert_showcase_display_6ddc102a_1080p%20(1).mp4",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: MessageCircle,
  },
];

const prewarmedVideos = new Set<string>();

function prewarmVideo(videoPath?: string) {
  if (!videoPath || typeof document === "undefined") return;
  const fullSrc = withBasePath(videoPath);
  if (prewarmedVideos.has(fullSrc)) return;
  prewarmedVideos.add(fullSrc);

  // Fetch the first 256KB (ftyp + moov + first keyframes) into browser HTTP cache
  fetch(fullSrc, {
    headers: { Range: "bytes=0-262143" },
    priority: "low" as RequestPriority,
  }).catch(() => {});
}

export function MobileNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [optimisticPath, setOptimisticPath] = React.useState<string | null>(null);
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOptimisticPath(null);
  }

  // Prefetch all mobile routes and pre-warm video headers during idle time
  React.useEffect(() => {
    NAV_ITEMS.forEach((item) => {
      router.prefetch(item.href);
    });

    const timer = window.setTimeout(() => {
      NAV_ITEMS.forEach((item) => {
        if (item.href !== pathname && item.video) {
          prewarmVideo(item.video);
        }
      });
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [router, pathname]);

  const activePath = optimisticPath ?? pathname;

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
            item.href === "/"
              ? activePath === "/"
              : activePath.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              onTouchStart={() => {
                if (item.video) prewarmVideo(item.video);
              }}
              onClick={() => {
                setOptimisticPath(item.href);
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
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
