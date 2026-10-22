"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandLogo } from "@/components/brand-logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/catering", label: "Catering" },
  { href: "/desserts", label: "Desserts" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile menu during render if pathname changes
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Brand Logo: Compact on mobile, prevents overflow */}
            <BrandLogo
              variant="horizontal"
              priority
              imageClassName="h-8 sm:h-10 w-auto"
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
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

            {/* Right Actions: Theme Toggle & Desktop CTA / Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <ThemeToggle />

              {/* Desktop CTA: VIEW MENU (Hidden on mobile/tablet) */}
              <Link
                href="/meal-prep"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-full bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xs hover:shadow cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Trigger: Touch-friendly 40x40 circle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full border border-border bg-card text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center justify-center transition-colors cursor-pointer"
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

      {/* Mobile Drawer Navigation (Optimized for QR Code Visitors) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-background/98 backdrop-blur-xl border-b border-border pt-20 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold px-3 mb-1">
              Menu Navigation
            </span>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 text-base font-serif rounded-xl transition-colors",
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground hover:bg-card"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border mt-8 flex flex-col gap-3">
            <Link
              href="/meal-prep"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 rounded-xl bg-primary text-primary-foreground text-center font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>View Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-muted-foreground pt-1">
              Divine & Delight • Premium Meal Prep & Catering
            </p>
          </div>
        </div>
      )}
    </>
  );
}
