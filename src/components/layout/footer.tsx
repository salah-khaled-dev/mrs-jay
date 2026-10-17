"use client";

import * as React from "react";
import Link from "next/link";
import { BRAND_INFO, SERVICES } from "@/lib/data";
import { Mail, Phone, MapPin, Sparkles, ArrowRight, Camera } from "lucide-react";

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
    <footer className="w-full bg-[#352520] dark:bg-[#151113] text-[#FFF0E9] border-t border-[#4E3932] dark:border-[#382C31] transition-colors">
      {/* Decorative Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent via-primary to-sage" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl font-bold tracking-wide text-[#FFF0E9] group-hover:text-primary transition-colors flex items-center gap-1.5">
                <span>{BRAND_INFO.name}</span>
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8BEBA] block mt-0.5">
                Luxury Dessert Catering & Carts
              </span>
            </Link>

            <p className="text-[#D8BEBA] text-sm leading-relaxed max-w-sm pt-2">
              Elevating weddings, milestone celebrations, and corporate galas across the United States with bespoke mobile dessert carts, handcrafted French pastries, and white-glove hospitality.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#D8BEBA]">
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
            <h3 className="font-serif text-base font-semibold text-[#FFF0E9] tracking-wider uppercase text-xs mb-4">
              Catering Experiences
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D8BEBA]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#FFF0E9] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/weddings"
                  className="hover:text-[#FFF0E9] transition-colors flex items-center gap-1.5 font-medium text-primary-foreground group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Weddings & Bridal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-events"
                  className="hover:text-[#FFF0E9] transition-colors flex items-center gap-1.5 font-medium text-primary-foreground group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Corporate Galas</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#FFF0E9] tracking-wider uppercase text-xs mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D8BEBA]">
              <li>
                <Link href="/packages" className="hover:text-[#FFF0E9] transition-colors">
                  Signature Packages
                </Link>
              </li>
              <li>
                <Link href="/dessert-menu" className="hover:text-[#FFF0E9] transition-colors">
                  Artisan Dessert Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FFF0E9] transition-colors">
                  Event Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFF0E9] transition-colors">
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#FFF0E9] transition-colors">
                  Booking FAQ & Guidelines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFF0E9] transition-colors">
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
            <h3 className="font-serif text-base font-semibold text-[#FFF0E9] tracking-wider uppercase text-xs mb-1">
              Sweet Inspirations
            </h3>
            <p className="text-xs text-[#D8BEBA] leading-relaxed">
              Receive seasonal dessert menu previews, styling inspiration for outdoor celebrations, and booking availability announcements.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 text-xs text-[#FFF0E9]">
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
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-[#281A16] dark:bg-[#20181B] border border-[#533D35] dark:border-[#443339] text-[#FFF0E9] placeholder-[#9C847E] focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-medium flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-[#A68F89] block">
                  We respect your privacy. Unsubscribe anytime.
                </span>
              </form>
            )}

            <div className="pt-2">
              <span className="text-xs text-[#D8BEBA] block mb-2 font-medium">Follow Our Journey</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#533D35] dark:border-[#443339] text-xs text-[#D8BEBA] hover:text-[#FFF0E9] hover:border-primary transition-colors"
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
        <div className="pt-8 border-t border-[#4E3932] dark:border-[#2A2024] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A68F89]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">Handcrafted with care for memorable events.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/faq" className="hover:text-[#FFF0E9] transition-colors">
              Catering Policies
            </Link>
            <Link href="/contact" className="hover:text-[#FFF0E9] transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-[#FFF0E9] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
