import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Mail } from "lucide-react";

const OFFICIAL_EMAIL = "dnd.cater.events@gmail.com";
const OFFICIAL_INSTAGRAM = "https://www.instagram.com/divineanddelight.cater";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Catering", href: "/catering" },
  { label: "Meal Prep", href: "/meal-prep" },
  { label: "Desserts", href: "/desserts" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F7F4EE] dark:bg-[#08080A] text-foreground border-t border-border/70 transition-colors">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-10 text-center space-y-4 sm:space-y-5">
        {/* Centered Brand Logo & Elegant Tagline */}
        <div className="flex flex-col items-center justify-center space-y-1.5">
          <BrandLogo variant="horizontal" height={32} />
          <p className="text-xs text-muted-foreground tracking-wide">
            Bespoke Catering & Elevated Food Experiences
          </p>
        </div>

        {/* Clean, Centered Navigation with Subtle Dot Separators */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-xs font-medium text-foreground/80"
        >
          {QUICK_LINKS.map((link, idx) => (
            <div key={link.href} className="inline-flex items-center gap-3.5">
              <Link
                href={link.href}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
              {idx < QUICK_LINKS.length - 1 && (
                <span className="text-muted-foreground/40 text-[10px] select-none" aria-hidden="true">
                  •
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Compact Contact Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-0.5">
          <a
            href={`mailto:${OFFICIAL_EMAIL}?subject=Inquiry%20%E2%80%94%20Divine%20%26%20Delight`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border/80 hover:border-primary/50 text-xs text-muted-foreground hover:text-foreground transition-all shadow-2xs"
            aria-label="Email Divine & Delight"
          >
            <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate max-w-[210px]">{OFFICIAL_EMAIL}</span>
          </a>

          <a
            href={OFFICIAL_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border/80 hover:border-primary/50 text-xs text-muted-foreground hover:text-foreground transition-all shadow-2xs"
            aria-label="Instagram Divine & Delight"
          >
            <svg
              className="w-3.5 h-3.5 text-primary shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>@divineanddelight.cater</span>
          </a>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-3 border-t border-border/40 text-[11px] text-muted-foreground">
          <p>© {currentYear} Divine & Delight. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
