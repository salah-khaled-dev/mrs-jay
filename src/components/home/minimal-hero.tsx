"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/utils";

const DESSERT_VIDEO_SRC = withBasePath(
  "/videos/Dessert_commercial_animation_seq\u2026_367e3088_1080p.mp4"
);

export function MinimalHero() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    mobileVideoRef.current?.play().catch(() => {});
    desktopVideoRef.current?.play().catch(() => {});
  }, []);

  return (
    <>
      {/* =====================================================================
          1. MOBILE LAYOUT (<lg) - ULTRA LUXURY CINEMATIC HERO
             - Full-Screen Seamless Video Background (Zero Dead Space / No Black Void)
             - Elegant Top Floating Brand Pill & Headline (Direct Video Overlay)
             - 100% Unobstructed Center for the Artisanal 3D Dessert Animation
             - Direct Video Overlay Action Layer (NO BOXY FLOATING CARD):
               * Ultra-crisp Supporting Sentence with drop shadow
               * Refined French Gold Primary CTA Button (Explore Our Menu)
               * 3 Frosted Glass Interactive Service Pills (Meal Prep, Catering, Desserts)
         ===================================================================== */}
      <div className="lg:hidden relative w-full h-[calc(100svh-64px)] flex flex-col justify-between overflow-hidden bg-[#0A0908]">
        {/* Full-Screen Seamless Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
          <video
            ref={mobileVideoRef}
            src={DESSERT_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          />

          {/* Top Subtle Scrim for Header Contrast */}
          <div
            className="absolute inset-x-0 top-0 h-48 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8, 8, 10, 0.88) 0%, rgba(8, 8, 10, 0.72) 55%, rgba(8, 8, 10, 0.2) 85%, transparent 100%)",
            }}
          />

          {/* Bottom Luxury Scrim for CTA & Navigation - Blends naturally into the video */}
          <div
            className="absolute inset-x-0 bottom-0 h-[52%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(8, 8, 10, 0.96) 0%, rgba(8, 8, 10, 0.75) 45%, rgba(8, 8, 10, 0.25) 80%, transparent 100%)",
            }}
          />
        </div>

        {/* Foreground Overlay Content Stack */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between px-4 pt-3 pb-5 pointer-events-none">
          {/* Top Section: Brand Pill + Elegant Headline */}
          <div className="w-full max-w-sm mx-auto text-center space-y-2 pointer-events-auto">
            {/* Top Step / Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-white/95">
                DIVINE & DELIGHT • 3D PATISSERIE
              </span>
            </div>

            {/* Headline overlaid directly on video - High Contrast Luxury Typography */}
            <h1
              className="font-serif text-2xl sm:text-[1.75rem] font-medium text-white tracking-tight leading-[1.2] max-w-xs mx-auto text-balance"
              style={{
                textShadow:
                  "0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.9)",
              }}
            >
              A Little Taste of{" "}
              <span className="italic font-normal text-white block mt-0.5">
                Something Extraordinary<span className="text-primary not-italic">.</span>
              </span>
            </h1>
          </div>

          {/* Center 100% Open Window: Pure Unobstructed View of the 3D Dessert */}
          <div className="flex-1 pointer-events-none" />

          {/* Bottom Section: Buttons Directly Integrated Over Video (NO BOXY FLOATING CARD) */}
          <div className="w-full max-w-sm mx-auto pointer-events-auto space-y-3">
            {/* Supporting Sentence - Elevated Editorial Luxury Tag */}
            <div className="w-full flex justify-center">
              <div className="inline-flex flex-col items-center justify-center px-4 py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 shadow-md max-w-xs text-center">
                <p className="font-serif italic text-xs sm:text-[13px] text-[#FAF8F5] leading-snug">
                  Thoughtfully prepared. Beautifully presented.
                </p>
                <span className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#E5B56A] mt-0.5">
                  Made for every occasion
                </span>
              </div>
            </div>

            {/* Primary CTA Button */}
            <Link
              href="/desserts"
              className="w-full py-3.5 px-6 rounded-full bg-primary hover:bg-primary-hover active:scale-[0.98] text-primary-foreground font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-black/50 flex items-center justify-center gap-2 transition-all cursor-pointer border border-primary-hover/50"
            >
              <span>EXPLORE OUR MENU</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Three Frosted Glass Interactive Navigation Pills */}
            <div className="grid grid-cols-3 gap-2 pt-0.5">
              <Link
                href="/meal-prep"
                className="group py-2 px-1.5 rounded-xl bg-black/45 hover:bg-black/70 active:scale-95 backdrop-blur-md border border-white/15 hover:border-primary/50 text-center transition-all shadow-xs cursor-pointer"
              >
                <span className="block text-[10px] font-semibold tracking-wider text-white group-hover:text-primary transition-colors">
                  MEAL PREP
                </span>
                <span className="text-[9px] text-[#E5B56A] font-medium flex items-center justify-center gap-0.5 mt-0.5">
                  Menu →
                </span>
              </Link>

              <Link
                href="/catering"
                className="group py-2 px-1.5 rounded-xl bg-black/45 hover:bg-black/70 active:scale-95 backdrop-blur-md border border-white/15 hover:border-primary/50 text-center transition-all shadow-xs cursor-pointer"
              >
                <span className="block text-[10px] font-semibold tracking-wider text-white group-hover:text-primary transition-colors">
                  CATERING
                </span>
                <span className="text-[9px] text-[#E5B56A] font-medium flex items-center justify-center gap-0.5 mt-0.5">
                  Events →
                </span>
              </Link>

              <Link
                href="/desserts"
                className="group py-2 px-1.5 rounded-xl bg-black/45 hover:bg-black/70 active:scale-95 backdrop-blur-md border border-white/15 hover:border-primary/50 text-center transition-all shadow-xs cursor-pointer"
              >
                <span className="block text-[10px] font-semibold tracking-wider text-white group-hover:text-primary transition-colors">
                  DESSERTS
                </span>
                <span className="text-[9px] text-[#E5B56A] font-medium flex items-center justify-center gap-0.5 mt-0.5">
                  Sweets →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. DESKTOP LAYOUT (lg+)
             - The clean, balanced 2-column layout:
               Left Column: Headline & CTA
               Right Column: Full-Bleed Video with soft radial vignette
         ===================================================================== */}
      <section
        aria-label="Divine & Delight Luxury Hero"
        className="hidden lg:flex w-full flex-1 items-center py-0 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-10 xl:gap-14 items-center">
            {/* LEFT COLUMN: 42% (col-span-5) */}
            <div className="col-span-5 min-w-0 flex flex-col items-start text-left z-10">
              <span className="text-xs font-semibold tracking-[0.28em] uppercase text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                <span>DIVINE & DELIGHT</span>
              </span>

              <h1
                style={{ fontSize: "clamp(2rem, 3.2vw, 3.6rem)" }}
                className="font-serif font-medium leading-[1.12] tracking-tight text-heading mb-4 text-balance max-w-lg"
              >
                A Little Taste of Something Extraordinary.
              </h1>

              <p className="font-sans text-base text-muted-foreground font-light leading-relaxed max-w-md mb-8 text-balance">
                Thoughtfully prepared. Beautifully presented. Made for every occasion.
              </p>

              <Link
                href="/desserts"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase shadow-xs hover:bg-primary-hover active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* RIGHT COLUMN: 58% (col-span-7) */}
            <div className="col-span-7 min-w-0 w-full flex items-center justify-center">
              <div className="relative w-full h-[480px] xl:h-[540px] flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-4 rounded-full bg-primary/10 blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                <video
                  ref={desktopVideoRef}
                  src={DESSERT_VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-[center_48%] select-none pointer-events-none [mask-image:radial-gradient(ellipse_78%_68%_at_50%_50%,black_62%,transparent_100%)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
