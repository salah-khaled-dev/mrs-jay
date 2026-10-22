import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarHeart,
  Cake,
  Users,
  Utensils,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Catering | Divine & Delight",
  description:
    "Made for every occasion. Discover bespoke catering for celebrations, birthdays, corporate gatherings, meals, and handcrafted desserts.",
};

const SERVICES = [
  {
    title: "Events & Celebrations",
    description:
      "Beautiful food experiences for special gatherings and celebrations.",
    icon: CalendarHeart,
  },
  {
    title: "Birthdays & Private Parties",
    description:
      "Celebrate meaningful moments with delicious food and sweet treats.",
    icon: Cake,
  },
  {
    title: "Corporate & Team Building",
    description:
      "Catering inquiries for workplace events, team gatherings, and corporate occasions.",
    icon: Users,
  },
  {
    title: "Meals & Desserts",
    description:
      "Explore savory meals and handcrafted desserts for your occasion.",
    icon: Utensils,
  },
];

export default function CateringPage() {
  return (
    <div className="py-8 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* PHASE 1: Compact Catering Hero */}
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <span className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold block">
                DIVINE & DELIGHT CATERING
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
                Made for Every Occasion.
              </h1>

              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                From intimate celebrations to corporate gatherings, discover catering made for your occasion.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="mailto:dnd.cater.events@gmail.com?subject=Catering%20Inquiry%20%E2%80%94%20Divine%20%26%20Delight"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Discuss Your Event</span>
                </a>

                <Link
                  href="/desserts"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-border bg-background hover:bg-muted text-foreground text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Desserts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Medium-Sized Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border shadow-md">
                <Image
                  src="/images/meals/catering-event.webp"
                  alt="Divine & Delight Catering Presentation"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PHASE 2: Exactly Four Compact Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-5 sm:p-6 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 transition-all flex flex-col justify-start space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-lg font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* PHASE 5: Compact Direct Contact Area */}
        <div
          id="contact"
          className="p-6 sm:p-10 rounded-3xl bg-card border border-primary/25 shadow-xs text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold block">
              Direct Contact
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Let&apos;s Make Your Event Special.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Tell us about your occasion, and we&apos;ll discuss the details with you.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:dnd.cater.events@gmail.com?subject=Catering%20Inquiry%20%E2%80%94%20Divine%20%26%20Delight"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs uppercase tracking-wider font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Discuss Your Event</span>
            </a>

            <a
              href="https://www.instagram.com/divineanddelight.cater"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-border bg-background hover:bg-muted text-foreground text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-primary"
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
              <span>Instagram Direct</span>
            </a>
          </div>

          <p className="text-[11px] text-muted-foreground pt-1">
            Email:{" "}
            <a
              href="mailto:dnd.cater.events@gmail.com?subject=Catering%20Inquiry%20%E2%80%94%20Divine%20%26%20Delight"
              className="text-foreground hover:text-primary transition-colors font-medium underline"
            >
              dnd.cater.events@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
