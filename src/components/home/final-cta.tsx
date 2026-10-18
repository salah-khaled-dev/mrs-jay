import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1C1C1E] via-[#141416] to-[#0B0B0D] dark:from-[#18181A] dark:via-[#111113] dark:to-[#0B0B0D] text-[#F7F5F0] p-8 sm:p-14 lg:p-20 shadow-2xl border border-primary/30">
          {/* Subtle Decorative Background Gold Glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-[#E8D5A8] text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Begin Your Custom Reservation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Make Your Next Event Sweeter.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Tell us about your celebration, and we&apos;ll help create a dessert experience worth remembering. Our catering concierge responds with customized availability and proposals within 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Your Booking</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#F7F5F0] font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ask A Question First</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>No Commitment Initial Inquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Nationwide Booking for 2025 – 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
