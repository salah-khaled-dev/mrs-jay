import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Mail } from "lucide-react";

const OFFICIAL_EMAIL = "dnd.cater.events@gmail.com";
const OFFICIAL_INSTAGRAM = "https://www.instagram.com/divineanddelight.cater";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Meal Prep", href: "/meal-prep" },
  { label: "Catering", href: "/catering" },
  { label: "Desserts", href: "/desserts" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#08080A] text-foreground border-t border-border/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border/40">
          {/* Brand */}
          <div className="space-y-2 max-w-sm">
            <BrandLogo variant="horizontal" height={36} />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Thoughtfully prepared meals, desserts, and catering for special occasions.
            </p>
          </div>

          {/* Quick Links: Only essential navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Verified Contact Channels */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 text-xs text-muted-foreground">
            <a
              href={`mailto:${OFFICIAL_EMAIL}?subject=Inquiry%20%E2%80%94%20Divine%20%26%20Delight`}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{OFFICIAL_EMAIL}</span>
            </a>

            <a
              href={OFFICIAL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
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
        </div>

        {/* Footer Bottom */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <p>© {currentYear} Divine & Delight. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Privacy & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
