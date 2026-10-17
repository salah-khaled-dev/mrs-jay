"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/dessert-menu", label: "Dessert Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
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

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs py-3"
            : "bg-background/70 backdrop-blur-xs border-b border-border/50 py-4.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Mrs Jay</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block mb-1" />
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium -mt-1">
                Luxury Dessert Catering
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
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

            {/* Right Actions: Theme Toggle & Book Event CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <ThemeToggle />

              <Link
                href="/book"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide uppercase rounded-full bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xs hover:shadow-md cursor-pointer group"
              >
                <span>Book Your Event</span>
                <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full border border-border bg-card text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-background/95 backdrop-blur-xl border-b border-border pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-250">
          <div className="flex flex-col space-y-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold px-3 mb-2">
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
                    "flex items-center justify-between px-4 py-3 text-lg font-serif rounded-xl transition-colors",
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

            <div className="pt-4 border-t border-border mt-4 flex flex-col gap-2">
              <Link
                href="/weddings"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                Weddings & Bridal
              </Link>
              <Link
                href="/corporate-events"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                Corporate Catering & Galas
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-border mt-8 flex flex-col gap-3">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 rounded-xl bg-primary text-primary-foreground text-center font-medium uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <span>Book Your Event</span>
              <Sparkles className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-muted-foreground">
              Artisan mobile dessert carts serving across the United States
            </p>
          </div>
        </div>
      )}
    </>
  );
}
