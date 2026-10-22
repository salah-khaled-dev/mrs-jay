import { Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-14 sm:py-20 bg-background border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold block">
          CONNECT WITH US
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
          Ready to Experience Divine & Delight?
        </h2>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Contact our culinary team directly to discuss weekly meal prep options, custom catering for your upcoming event, or special dietary requirements.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:dnd.cater.events@gmail.com?subject=Inquiry%20%E2%80%94%20Divine%20%26%20Delight&body=Hello%20Divine%20%26%20Delight%2C%0D%0A%0D%0AI%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20requirements.%0D%0A%0D%0AThank%20you."
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us via Email</span>
          </a>

          <a
            href="https://www.instagram.com/divineanddelight.cater"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-border bg-card hover:bg-muted text-foreground font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Message Us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
