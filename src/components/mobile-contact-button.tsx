"use client";

import * as React from "react";
import { MessageCircle, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL_LINK =
  "mailto:dnd.cater.events@gmail.com?subject=Inquiry%20%E2%80%94%20Divine%20%26%20Delight&body=Hello%20Divine%20%26%20Delight%2C%0D%0A%0D%0AI%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20requirements.%0D%0A%0D%0AThank%20you.";

const INSTAGRAM_LINK = "https://www.instagram.com/divineanddelight.cater";

export function MobileContactButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Close on outside click or touch
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-5 z-50 md:hidden flex flex-col items-end pointer-events-auto"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* Popover Action Menu */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Contact options"
          className="mb-3 w-56 rounded-2xl bg-card/98 backdrop-blur-xl border border-primary/30 p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 space-y-1 text-foreground"
        >
          <div className="px-3 py-1.5 border-b border-border/60">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary block">
              Direct Contact
            </span>
            <p className="text-[11px] text-muted-foreground">
              We respond promptly
            </p>
          </div>

          {/* Option 1: Email Us */}
          <a
            href={EMAIL_LINK}
            onClick={() => setIsOpen(false)}
            role="menuitem"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-primary/10 transition-colors text-xs font-semibold cursor-pointer text-foreground group"
          >
            <div className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate">Email Us</span>
              <span className="text-[10px] font-normal text-muted-foreground truncate">
                dnd.cater.events@gmail.com
              </span>
            </div>
          </a>

          {/* Option 2: Message on Instagram */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            role="menuitem"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-primary/10 transition-colors text-xs font-semibold cursor-pointer text-foreground group"
          >
            <div className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <svg
                className="w-4 h-4"
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
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate">Instagram</span>
              <span className="text-[10px] font-normal text-muted-foreground truncate">
                @divineanddelight.cater
              </span>
            </div>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        className={cn(
          "h-12 px-4 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center gap-2 font-semibold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer border border-amber-300/30 hover:bg-primary-hover",
          isOpen && "ring-2 ring-primary ring-offset-2 ring-offset-background"
        )}
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4" />
            <span>Close</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-4 h-4" />
            <span>Contact</span>
          </>
        )}
      </button>
    </div>
  );
}
