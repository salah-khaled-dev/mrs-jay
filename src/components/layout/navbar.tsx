"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandLogo } from "@/components/brand-logo";
import { Menu, X, ArrowRight, Star, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { onNavLinkClick } from "@/lib/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/desserts", label: "Desserts" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [optimisticPath, setOptimisticPath] = React.useState<string | null>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile menu and optimistic state during render if pathname changes
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setOptimisticPath(null);
  }

  const activePath = optimisticPath ?? pathname;

  // Lock scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs py-2.5 sm:py-3"
            : "bg-background/80 backdrop-blur-xs border-b border-border/50 py-3 sm:py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-1.5 sm:gap-3 w-full">
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Mobile Back Button (on non-home pages) */}
              {pathname !== "/" && (
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="md:hidden inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border bg-card text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer shadow-2xs"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-primary" />
                </button>
              )}

              {/* Brand Logo: Preserved exact brand identity */}
              <BrandLogo
                variant="horizontal"
                priority
                imageClassName="h-7 sm:h-10 w-auto max-w-[130px] sm:max-w-none object-contain"
              />
            </div>

            {/* Desktop Navigation Links: Minimal, Elegant Uppercase */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = activePath === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      if (pathname === link.href) {
                        return;
                      }
                      setOptimisticPath(link.href);
                      onNavLinkClick(link.href);
                    }}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-150",
                      isActive
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Reviews Pill & Theme Toggle & Primary CTA / Mobile Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* 1-Tap Reviews Pill Button (As in reference screenshot) */}
              <Link
                href="/reviews"
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 active:scale-95 transition-all shadow-2xs cursor-pointer"
                aria-label="Reviews and Ratings"
              >
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary" />
                <span>Reviews</span>
              </Link>

              <ThemeToggle />

              {/* Desktop Single Primary CTA: VIEW MENU */}
              <Link
                href="/meal-prep"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xs hover:shadow cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Trigger: Touch-friendly circle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full border border-border bg-card text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-primary" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation: Compact, Clean, Luxury */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-background/98 backdrop-blur-2xl border-b border-border pt-4 pb-6 px-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col">
            {/* Top Bar with Clear Back Button and Close Button */}
            <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-border/60">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card hover:bg-muted border border-border text-foreground text-xs font-medium active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label=" Back"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-primary" />
                <span> Back</span>
              </button>

              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Menu Navigation
              </span>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full border border-border bg-card text-foreground hover:bg-muted flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-primary" />
              </button>
            </div>

            {/* Compact Nav Items */}
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activePath === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (pathname === link.href) {
                        return;
                      }
                      setOptimisticPath(link.href);
                      onNavLinkClick(link.href);
                    }}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all",
                      isActive
                        ? "text-primary bg-primary/10 font-semibold border border-primary/20"
                        : "text-foreground hover:bg-card active:bg-muted/70"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Compact Bottom Section */}
          <div className="pt-3 border-t border-border mt-3 flex flex-col gap-2">
            {/* Quick Review Link inside drawer */}
            <Link
              href="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-center font-semibold text-xs flex items-center justify-center gap-2 shadow-2xs cursor-pointer active:scale-98 transition-all"
            >
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span>Leave a Review </span>
            </Link>

            {/* Primary CTA: VIEW MENU */}
            <Link
              href="/meal-prep"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98 transition-all"
            >
              <span>View Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <p className="text-center text-[10px] text-muted-foreground pt-0.5 tracking-wider uppercase">
              Divine & Delight • Premium Meal Prep & Catering
            </p>
          </div>
        </div>
      )}
    </>
  );
}
