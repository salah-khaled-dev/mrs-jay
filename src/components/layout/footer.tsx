"use client";

import * as React from "react";
import Link from "next/link";
import { BRAND_INFO, SERVICES } from "@/lib/data";
import { Mail, Phone, MapPin, Sparkles, ArrowRight } from "lucide-react";

export function Footer() {
  const [emailInput, setEmailInput] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <footer className="w-full bg-[#0B0B0D] text-[#F7F5F0] border-t border-[#2C2C30] transition-colors">
      {/* Decorative Champagne Gold Hairline Accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl font-bold tracking-wide text-[#F7F5F0] group-hover:text-primary transition-colors flex items-center gap-1.5">
                <span>{BRAND_INFO.name}</span>
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E8D5A8] block mt-0.5">
                Luxury Dessert Catering & Carts
              </span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm pt-2">
              Elevating weddings, milestone celebrations, and corporate galas across the United States with bespoke mobile dessert carts, handcrafted French pastries, and white-glove hospitality.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{BRAND_INFO.serviceArea}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Experiences & Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#F7F5F0] tracking-wider uppercase text-xs mb-4">
              Catering Experiences
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/weddings"
                  className="hover:text-primary transition-colors flex items-center gap-1.5 font-medium text-neutral-200 group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Weddings & Bridal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-events"
                  className="hover:text-primary transition-colors flex items-center gap-1.5 font-medium text-neutral-200 group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Corporate Galas</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#F7F5F0] tracking-wider uppercase text-xs mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/packages" className="hover:text-primary transition-colors">
                  Signature Packages
                </Link>
              </li>
              <li>
                <Link href="/dessert-menu" className="hover:text-primary transition-colors">
                  Artisan Dessert Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Event Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  Booking FAQ & Guidelines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Direct Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-primary hover:underline font-medium flex items-center gap-1 pt-1"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Inquiries */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-[#F7F5F0] tracking-wider uppercase text-xs mb-1">
              Sweet Inspirations
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Receive seasonal dessert menu previews, styling inspiration for luxury celebrations, and booking availability announcements.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-xs text-[#E8D5A8]">
                Thank you for subscribing! We look forward to inspiring your upcoming celebrations.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-[#1C1C1E] border border-[#2C2C30] text-[#F7F5F0] placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-neutral-500 block">
                  We respect your privacy. Unsubscribe anytime.
                </span>
              </form>
            )}

            <div className="pt-2">
              <span className="text-xs text-[#E8D5A8] block mb-2 font-medium">Follow Our Journey</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2C2C30] text-xs text-neutral-300 hover:text-white hover:border-primary transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>{BRAND_INFO.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-[#2C2C30] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">Handcrafted with care for memorable events.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/faq" className="hover:text-primary transition-colors">
              Catering Policies
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
