"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Utensils, CakeSlice } from "lucide-react";
import { cn, withBasePath } from "@/lib/utils";

const DESSERT_VIDEO_SRC = withBasePath("/videos/dessert-hero.mp4");

const HERO_SERVICES = [
  {
    title: "CATERING",
    subtitle: "Weddings & Bespoke Events",
    href: "/catering",
    icon: Sparkles,
    badge: "Events",
  },
  {
    title: "MEAL PREP",
    subtitle: "Chef-Prepared Weekly Delivery",
    href: "/meal-prep",
    icon: Utensils,
    badge: "Weekly",
  },
  {
    title: "DESSERTS",
    subtitle: "Artisanal Luxury Patisserie",
    href: "/desserts",
    icon: CakeSlice,
    badge: "Sweets",
  },
];

function setupAndPlayVideo(video: HTMLVideoElement | null) {
  if (!video) return;

  // Strict property bindings required by iOS Safari (WebKit) and Android Chrome
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.setAttribute("x5-playsinline", "");
  video.setAttribute("muted", "");

  const attemptPlay = () => {
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback (e.g. iOS Low Power Mode / Battery Saver)
        // Resume video on the very first user interaction anywhere on screen
        const unlock = () => {
          if (video && video.paused) {
            video.muted = true;
            video.play().catch(() => {});
          }
          window.removeEventListener("touchstart", unlock);
          window.removeEventListener("touchend", unlock);
          window.removeEventListener("click", unlock);
          window.removeEventListener("scroll", unlock);
        };
        window.addEventListener("touchstart", unlock, { once: true, passive: true });
        window.addEventListener("touchend", unlock, { once: true, passive: true });
        window.addEventListener("click", unlock, { once: true, passive: true });
        window.addEventListener("scroll", unlock, { once: true, passive: true });
      });
    }
  };

  // If already ready, start playing immediately
  if (video.readyState >= 2) {
    attemptPlay();
  } else {
    video.addEventListener("canplay", attemptPlay, { once: true });
    video.addEventListener("loadeddata", attemptPlay, { once: true });
    attemptPlay();
  }
}

export function MinimalHero() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Responsive video playback optimization:
  // Decodes only ONE 1080p video stream matching the device screen, preventing dual-stream GPU lag.
  useEffect(() => {
    const handleDevicePlayback = () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (isDesktop) {
        if (mobileVideoRef.current) {
          mobileVideoRef.current.pause();
          mobileVideoRef.current.removeAttribute("src");
          mobileVideoRef.current.load();
        }
        if (desktopVideoRef.current) {
          if (!desktopVideoRef.current.getAttribute("src")) {
            desktopVideoRef.current.src = DESSERT_VIDEO_SRC;
          }
          setupAndPlayVideo(desktopVideoRef.current);
        }
      } else {
        if (desktopVideoRef.current) {
          desktopVideoRef.current.pause();
          desktopVideoRef.current.removeAttribute("src");
          desktopVideoRef.current.load();
        }
        if (mobileVideoRef.current) {
          if (!mobileVideoRef.current.getAttribute("src")) {
            mobileVideoRef.current.src = DESSERT_VIDEO_SRC;
          }
          setupAndPlayVideo(mobileVideoRef.current);
        }
      }
    };

    handleDevicePlayback();

    const mql = window.matchMedia("(min-width: 1024px)");
    const onMediaChange = () => handleDevicePlayback();
    mql.addEventListener("change", onMediaChange);

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        const activeVideo = isDesktop ? desktopVideoRef.current : mobileVideoRef.current;
        if (activeVideo && activeVideo.paused) {
          activeVideo.play().catch(() => {});
        }
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      mql.removeEventListener("change", onMediaChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* =====================================================================
          1. MOBILE LAYOUT (<lg) - ULTRA LUXURY CINEMATIC HERO
             - Full-Screen Seamless Video Background (Zero Dead Space / No Black Void)
             - Strictly Centered (No Horizontal Drift or Wiggle)
             - Elegant Top Floating Brand Pill & Headline (Direct Video Overlay)
             - 100% Unobstructed Center for the Artisanal 3D Dessert Animation
             - Direct Video Overlay Action Layer (NO BOXY FLOATING CARD):
               * Ultra-crisp Supporting Sentence with drop shadow
               * Refined French Gold Primary CTA Button (Explore Our Menu)
               * 3 Frosted Glass Interactive Service Pills (Meal Prep, Catering, Desserts)
         ===================================================================== */}
      <div className="lg:hidden relative w-full max-w-full h-[calc(100svh-64px)] flex flex-col justify-between overflow-hidden bg-[#0A0908]">
        {/* Full-Screen Seamless Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
          <video
            ref={(el) => {
              mobileVideoRef.current = el;
              if (el) {
                el.muted = true;
                el.defaultMuted = true;
              }
            }}
            src={DESSERT_VIDEO_SRC}
            poster={withBasePath("/og-image.jpg")}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
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

        {/* Foreground Overlay Content Stack - Perfectly Centered */}
        <div className="relative z-10 w-full max-w-full h-full flex flex-col justify-between px-4 pt-3 pb-5 pointer-events-none">
          {/* Top Section: Brand Pill + Elegant Headline */}
          <div className="w-full max-w-sm mx-auto text-center space-y-2 pointer-events-auto flex flex-col items-center">
            {/* Top Step / Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-white/95">
                DIVINE & DELIGHT • 3D PATISSERIE
              </span>
            </div>

            {/* Headline overlaid directly on video - High Contrast Luxury Typography */}
            <h1
              className="font-serif text-2xl sm:text-[1.75rem] font-medium tracking-tight leading-[1.2] max-w-xs mx-auto text-balance !text-white"
              style={{
                color: "#FFFFFF",
                textShadow:
                  "0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.9)",
              }}
            >
              <span className="!text-white text-white block">A Little Taste of</span>
              <span className="italic font-normal !text-white text-white block mt-0.5">
                Something Extraordinary<span className="text-primary not-italic">.</span>
              </span>
            </h1>
          </div>

          {/* Center 100% Open Window: Pure Unobstructed View of the 3D Dessert */}
          <div className="flex-1 pointer-events-none" />

          {/* Bottom Section: 3 Luxury Vertical Service Navigation Buttons (Compact & Sleek) */}
          <div className="w-full max-w-[330px] sm:max-w-xs mx-auto pointer-events-auto space-y-1.5 flex flex-col items-center pb-2">
            {/* Supporting Tagline */}
            <div className="w-full flex justify-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-xs text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="font-serif italic text-[11px] text-[#FAF8F5] leading-snug">
                  Thoughtfully prepared. Beautifully presented.
                </p>
              </div>
            </div>

            {/* 3 Prominent Vertical Navigation Buttons (Catering -> Meal Prep -> Desserts) */}
            <div className="w-full flex flex-col gap-1.5 pt-0.5">
              {HERO_SERVICES.map((service, idx) => {
                const Icon = service.icon;
                const isFirst = idx === 0;
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={cn(
                      "group relative w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-md",
                      "bg-black/65 hover:bg-black/85 backdrop-blur-xl border border-white/20 hover:border-primary/70",
                      isFirst
                        ? "border-primary/50 bg-black/75 shadow-primary/10"
                        : "border-white/15"
                    )}
                  >
                    {/* Subtle Gold Hover Glow */}
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Left: Icon & Typography */}
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={cn(
                          "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-colors",
                          isFirst
                            ? "bg-primary/20 border-primary/40 text-primary"
                            : "bg-white/10 group-hover:bg-primary/20 border-white/15 group-hover:border-primary/40 text-primary"
                        )}
                      >
                        <Icon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                      </div>

                      <div className="flex flex-col text-left min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-white group-hover:text-primary transition-colors truncate">
                            {service.title}
                          </span>
                          <span className="text-[8px] uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-primary/20 text-[#E5B56A] border border-primary/30 font-semibold">
                            {service.badge}
                          </span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] text-white/70 group-hover:text-white/90 font-light truncate">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Right: Gold Circular Action Arrow */}
                    <div className="w-6.5 h-6.5 rounded-full bg-white/10 group-hover:bg-primary group-hover:text-primary-foreground border border-white/15 group-hover:border-primary flex items-center justify-center shrink-0 text-primary transition-all ml-1.5">
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. DESKTOP LAYOUT (lg+) - HIGH PERFORMANCE HARDWARE ACCELERATED
             - Left Column: Headline & CTA
             - Right Column: Buttery-Smooth 60fps GPU Video with Vignette Overlay
             - Zero Stutter / Zero Mask Lag
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
                className="font-serif font-medium leading-[1.12] tracking-tight text-foreground dark:text-heading mb-4 text-balance max-w-lg"
              >
                A Little Taste of Something Extraordinary.
              </h1>

              <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-md mb-6 text-balance">
                Thoughtfully prepared. Beautifully presented. Made for every occasion.
              </p>

              {/* 3 Prominent Vertical Navigation Buttons (Desktop) */}
              <div className="w-full max-w-sm flex flex-col gap-2">
                {HERO_SERVICES.map((service, idx) => {
                  const Icon = service.icon;
                  const isFirst = idx === 0;
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={cn(
                        "group relative flex items-center justify-between px-3.5 py-2 rounded-xl border transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md",
                        isFirst
                          ? "bg-primary/5 hover:bg-primary/10 border-primary/40 hover:border-primary text-foreground"
                          : "bg-card/70 hover:bg-card border-border/80 hover:border-primary/50 text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={cn(
                            "w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 border transition-colors",
                            isFirst
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-primary/10 text-primary border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground"
                          )}
                        >
                          <Icon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col text-left min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold tracking-wider uppercase group-hover:text-primary transition-colors">
                              {service.title}
                            </span>
                            <span className="text-[8.5px] uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                              {service.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground font-light truncate">
                            {service.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-muted/60 group-hover:bg-primary group-hover:text-primary-foreground border border-border group-hover:border-primary flex items-center justify-center shrink-0 text-muted-foreground transition-all ml-1.5">
                        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: 58% (col-span-7) - GPU Accelerated, Buttery Smooth */}
            <div className="col-span-7 min-w-0 w-full flex items-center justify-center">
              <div className="relative w-full h-[480px] xl:h-[540px] flex items-center justify-center overflow-hidden rounded-3xl bg-black/5">
                {/* Subtle ambient gold glow */}
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,165,72,0.12)_0%,transparent_70%)] pointer-events-none"
                  aria-hidden="true"
                />

                <video
                  ref={(el) => {
                    desktopVideoRef.current = el;
                    if (el) {
                      el.muted = true;
                      el.defaultMuted = true;
                    }
                  }}
                  poster={withBasePath("/og-image.jpg")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover object-[center_48%] select-none pointer-events-none transform-gpu will-change-transform"
                />

                {/* Hardware-accelerated soft radial vignette overlay (Runs on GPU compositor with 0 video lag) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 55%, var(--background) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
