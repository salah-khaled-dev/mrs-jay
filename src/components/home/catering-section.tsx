"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowDown,
  Mail,
  RotateCcw,
  Sparkles,
  CalendarHeart,
  Cake,
  Building2,
  Award,
} from "lucide-react";
import { withBasePath } from "@/lib/utils";

// Existing cinematic catering video in /public/videos/
const CATERING_VIDEO_SRC = withBasePath(
  "/videos/Luxury_dessert_showcase_display_6ddc102a_1080p%20(1).mp4"
);
const CATERING_POSTER_SRC = withBasePath("/images/meals/catering-event.webp");

const EMAIL_INQUIRY_LINK =
  "mailto:dnd.cater.events@gmail.com?subject=Bespoke%20Catering%20Inquiry%20%E2%80%94%20Divine%20%26%20Delight&body=Hello%20Divine%20%26%20Delight%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20catering%20for%20an%20upcoming%20occasion.%0D%0A%0D%0AOccasion%20Type%3A%20%0D%0AEstimated%20Guests%3A%20%0D%0APreferred%20Date%3A%20%0D%0A%0D%0AThank%20you.";

interface CateringWorldConfig {
  id: string;
  number: string;
  shortTitle: string;
  badge: string;
  title: string;
  highlight: string;
  quote: string;
  description: string;
  details: string[];
  startTime: number;
  endTime: number;
  loopStart?: number;
  // 3D Stage & Camera choreography targets
  stageScale: number;
  stageX: number;
  stageY: number;
  stageRotateX: number;
  stageRotateY: number;
  particleSpeed: number;
}

const CATERING_WORLDS: CateringWorldConfig[] = [
  {
    id: "catering-world-01",
    number: "01",
    shortTitle: "Events & Celebrations",
    badge: "World 01 • Bespoke Hospitality",
    title: "Events &",
    highlight: "Celebrations.",
    quote: "Exceptional Catering for Unforgettable Moments.",
    description:
      "Step inside a grand luxury ballroom adorned with white florals, warm candlelight, crystal chandeliers, and artisan plated courses crafted for unforgettable gatherings.",
    details: [
      "Elegant Banquet Tables",
      "Artisan Catering Plates",
      "Premium Serving Stations",
    ],
    startTime: 0.0,
    endTime: 2.65,
    stageScale: 1.0,
    stageX: 0,
    stageY: 0,
    stageRotateX: 0,
    stageRotateY: 0,
    particleSpeed: 1.0,
  },
  {
    id: "catering-world-02",
    number: "02",
    shortTitle: "Birthdays & Parties",
    badge: "World 02 • Private Milestones",
    title: "Birthdays &",
    highlight: "Private Parties.",
    quote: "Every Celebration Deserves Something Special.",
    description:
      "Transition into an intimate celebration featuring a two-tier 24k gold-leaf birthday cake, strawberry verrines, chocolate layered squares, and bespoke party trays.",
    details: [
      "Couture Birthday Cakes",
      "Artisanal Dessert Displays",
      "Luxury Party Trays",
    ],
    startTime: 2.65,
    endTime: 4.85,
    stageScale: 1.04,
    stageX: 5,
    stageY: -4,
    stageRotateX: 2.0,
    stageRotateY: -2.5,
    particleSpeed: 1.35,
  },
  {
    id: "catering-world-03",
    number: "03",
    shortTitle: "Corporate & Teams",
    badge: "World 03 • Executive Dining",
    title: "Corporate &",
    highlight: "Team Building.",
    quote: "Bringing Teams Together Through Great Food.",
    description:
      "Experience elevated workplace hospitality with individually packaged gourmet meals, organized executive lunch setups, fresh refreshments, and seamless team dining.",
    details: [
      "Individually Packaged Meals",
      "Premium Catering Boxes",
      "Executive Office Luncheons",
    ],
    startTime: 4.85,
    endTime: 6.8,
    stageScale: 1.05,
    stageX: -5,
    stageY: 3,
    stageRotateX: -1.8,
    stageRotateY: 2.5,
    particleSpeed: 1.25,
  },
  {
    id: "catering-world-04",
    number: "04",
    shortTitle: "Every Occasion",
    badge: "Grand Finale • Culinary Signature",
    title: "Divine &",
    highlight: "Delight.",
    quote: "MADE FOR EVERY OCCASION.",
    description:
      "From grand ballroom receptions and milestone birthdays to executive boardrooms—our culinary team brings bespoke hospitality and unforgettable flavor to your table.",
    details: [
      "Grand Celebrations",
      "Private Soirées",
      "Corporate Galas & Team Dining",
    ],
    startTime: 6.8,
    endTime: 7.92,
    loopStart: 7.05,
    stageScale: 1.07,
    stageX: 0,
    stageY: -5,
    stageRotateX: 2.5,
    stageRotateY: 0,
    particleSpeed: 1.65,
  },
];

export interface CateringSectionProps {
  id?: string;
}

export function CateringSection({ id = "catering" }: CateringSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const threeMountRef = useRef<HTMLDivElement>(null);
  const stageTransformRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeWorld, setActiveWorld] = useState<number>(0);
  const [isPlayingSegment, setIsPlayingSegment] = useState<boolean>(true);

  const activeWorldRef = useRef<number>(0);
  const prevWorldRef = useRef<number>(0);
  const targetStartRef = useRef<number>(CATERING_WORLDS[0].startTime);
  const targetEndRef = useRef<number>(CATERING_WORLDS[0].endTime);
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isInViewportRef = useRef<boolean>(true);
  const reducedMotionRef = useRef<boolean>(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Smooth scroll to a specific Catering World chapter (0..3)
  const scrollToWorld = useCallback((index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Replay full cinematic catering video from 0.0s
  const handleReplayFull = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.currentTime = 0;
    } catch {
      // Ignore
    }
    targetStartRef.current = 0;
    targetEndRef.current = 7.92;
    setIsPlayingSegment(true);
    video.playbackRate = 1.0;
    video.play().catch(() => {});
  }, []);

  // Pause video when completely outside the Catering section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        isInViewportRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          videoRef.current?.pause();
        } else {
          videoRef.current?.play().catch(() => {});
        }
      },
      { rootMargin: "200px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Trigger Catering World video segment playback when activeWorld changes (forward or reverse)
  useEffect(() => {
    activeWorldRef.current = activeWorld;
    const world = CATERING_WORLDS[activeWorld];
    const prevWorld = prevWorldRef.current;
    prevWorldRef.current = activeWorld;

    targetStartRef.current = world.startTime;
    targetEndRef.current = world.endTime;

    const video = videoRef.current;
    if (!video) return;

    const diffFromStart = Math.abs(video.currentTime - world.startTime);
    if (activeWorld === prevWorld + 1 && diffFromStart < 0.85) {
      video.playbackRate = 1.05;
      setIsPlayingSegment(true);
      if (isInViewportRef.current) {
        video.play().catch(() => {});
      }
    } else {
      try {
        video.currentTime = world.startTime;
      } catch {
        // Ignore if metadata not yet loaded
      }
      video.playbackRate = 1.05;
      setIsPlayingSegment(true);
      if (isInViewportRef.current) {
        video.play().catch(() => {});
      }
    }
  }, [activeWorld]);

  // GSAP ScrollTrigger + Viewport Center Synchronization
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const viewportMid = window.innerHeight * 0.48;
      let bestIdx = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((sec, idx) => {
        if (!sec) return;
        const secRect = sec.getBoundingClientRect();
        const secCenter = secRect.top + secRect.height * 0.5;
        const dist = Math.abs(secCenter - viewportMid);
        if (dist < minDistance) {
          minDistance = dist;
          bestIdx = idx;
        }
      });

      if (bestIdx !== activeWorldRef.current) {
        setActiveWorld(bestIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop pointer parallax listener
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      pointerRef.current = { x: nx, y: ny };
    };
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  // Three.js WebGL Scene + 60fps Video Segment Controller + 3D Stage Choreography
  useEffect(() => {
    const mount = threeMountRef.current;
    if (!mount) return;

    const isLowPower =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isLowPower,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, isLowPower ? 1.5 : 2)
    );
    mount.innerHTML = "";
    mount.appendChild(renderer.domElement);

    const createGlowTexture = (innerColor: string, outerColor: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
        grad.addColorStop(0, innerColor);
        grad.addColorStop(0.45, outerColor);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Crisp 3D Champagne Gold Dust Particles (no hazy white fog)
    const isReduced = reducedMotionRef.current;
    const goldCount = isReduced ? 20 : isLowPower ? 40 : 70;
    const goldPositions = new Float32Array(goldCount * 3);
    const goldSpeeds = new Float32Array(goldCount);
    const goldPhases = new Float32Array(goldCount);

    for (let i = 0; i < goldCount; i++) {
      goldPositions[i * 3] = (Math.random() - 0.5) * 11;
      goldPositions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      goldPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      goldSpeeds[i] = 0.008 + Math.random() * 0.016;
      goldPhases[i] = Math.random() * Math.PI * 2;
    }

    const goldGeometry = new THREE.BufferGeometry();
    goldGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(goldPositions, 3)
    );

    const goldTexture = createGlowTexture(
      "rgba(255, 235, 175, 0.95)",
      "rgba(212, 165, 65, 0.40)"
    );
    const goldMaterial = new THREE.PointsMaterial({
      size: 0.22,
      map: goldTexture,
      transparent: true,
      opacity: 0.68,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const goldPoints = new THREE.Points(goldGeometry, goldMaterial);
    scene.add(goldPoints);

    const currentTransform = {
      scale: 1.0,
      x: 0,
      y: 0,
      rotX: 0,
      rotY: 0,
    };

    let animFrameId: number;
    let clock = 0;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      if (!isInViewportRef.current) return;

      clock += 0.016;

      const idx = activeWorldRef.current;
      const world = CATERING_WORLDS[idx];
      const video = videoRef.current;

      // Control Video Segment Playback & Pausing on Exact World Frame
      if (video && video.readyState >= 2) {
        const endT = targetEndRef.current;
        if (idx === CATERING_WORLDS.length - 1 && world.loopStart !== undefined) {
          if (video.currentTime >= endT) {
            video.currentTime = world.loopStart;
            video.play().catch(() => {});
          } else if (video.paused) {
            video.play().catch(() => {});
          }
          setIsPlayingSegment(false);
        } else {
          if (!video.paused && video.currentTime >= endT) {
            video.pause();
            video.currentTime = endT;
            setIsPlayingSegment(false);
          }
        }
      }

      // Lerp 3D Stage & Camera Choreography
      const rm = reducedMotionRef.current;
      const pointer = pointerRef.current;
      const targetScale = rm ? 1.0 : world.stageScale;
      const targetX = rm ? 0 : world.stageX + pointer.x * -10;
      const targetY = rm ? 0 : world.stageY + pointer.y * -8;
      const targetRotX = rm ? 0 : world.stageRotateX + pointer.y * -3.2;
      const targetRotY = rm ? 0 : world.stageRotateY + pointer.x * 4.2;

      currentTransform.scale += (targetScale - currentTransform.scale) * 0.06;
      currentTransform.x += (targetX - currentTransform.x) * 0.06;
      currentTransform.y += (targetY - currentTransform.y) * 0.06;
      currentTransform.rotX += (targetRotX - currentTransform.rotX) * 0.06;
      currentTransform.rotY += (targetRotY - currentTransform.rotY) * 0.06;

      if (stageTransformRef.current) {
        stageTransformRef.current.style.transform = `perspective(1200px) translate3d(${currentTransform.x.toFixed(
          2
        )}px, ${currentTransform.y.toFixed(
          2
        )}px, 0px) rotateX(${currentTransform.rotX.toFixed(
          2
        )}deg) rotateY(${currentTransform.rotY.toFixed(
          2
        )}deg) scale(${currentTransform.scale.toFixed(4)})`;
      }

      camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.05;
      camera.position.y += (-pointer.y * 0.35 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Update 3D Gold Shimmer Particles
      if (!rm) {
        const gPos = goldGeometry.attributes.position.array as Float32Array;
        const speedMult =
          video && !video.paused ? world.particleSpeed * 1.8 : 0.85;
        for (let i = 0; i < goldCount; i++) {
          gPos[i * 3 + 1] += goldSpeeds[i] * speedMult;
          gPos[i * 3] += Math.sin(clock * 1.5 + goldPhases[i]) * 0.004;
          if (gPos[i * 3 + 1] > 4.8) {
            gPos[i * 3 + 1] = -4.8;
            gPos[i * 3] = (Math.random() - 0.5) * 11;
          }
        }
        goldGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      goldGeometry.dispose();
      goldMaterial.dispose();
      goldTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className="relative w-full bg-background border-t border-border/60"
    >
      {/* =====================================================================
          1. STICKY FULL-VIEWPORT 3D VIDEO & THREE.JS STAGE (100% x 100dvh)
             - Light Mode Warm Ivory (#FAF8F5) / Dark Mode Obsidian (bg-background)
             - On Mobile (<lg): Full-screen 100% x 100dvh native video stage
             - On Desktop (lg+): Full-height right 60% stage with a clean 7%
               left-edge transition (no white oval glare!)
         ===================================================================== */}
      <div className="sticky top-0 left-0 w-full h-dvh -mb-[100dvh] overflow-hidden pointer-events-none z-0 bg-[#EFE9DF] lg:bg-background">
        {/* 3D Choreographed Full-Stage Video */}
        <div
          ref={stageTransformRef}
          className="relative w-full h-full lg:w-[60%] lg:ml-auto flex items-center justify-center will-change-transform"
        >
          <video
            ref={videoRef}
            src={CATERING_VIDEO_SRC}
            poster={CATERING_POSTER_SRC}
            muted
            playsInline
            autoPlay
            preload="auto"
            onLoadedData={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => {});
              }
            }}
            className="w-full h-full object-cover object-center lg:object-[50%_50%] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_7%,black_100%)] select-none"
          />
        </div>

        {/* Three.js WebGL 3D Golden Dust Particles */}
        <div
          ref={threeMountRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Mobile Subtle Top & Bottom Warm Ivory Edge Gradients */}
        <div
          className="lg:hidden absolute inset-x-0 top-0 h-28 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250, 248, 245, 0.78) 0%, rgba(250, 248, 245, 0) 100%)",
          }}
        />
        <div
          className="lg:hidden absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(245, 239, 230, 0.78) 0%, rgba(245, 239, 230, 0) 100%)",
          }}
        />

        {/* Live Catering World Step Indicator Bar (Mobile Top Pill) */}
        <div className="lg:hidden absolute top-[64px] left-0 right-0 z-30 pointer-events-none px-4">
          <div className="max-w-md mx-auto flex items-center justify-between gap-2 px-3.5 py-1 rounded-full bg-background/85 backdrop-blur-md border border-primary/30 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlayingSegment ? "bg-primary animate-ping" : "bg-primary"
                }`}
              />
              <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
                World {CATERING_WORLDS[activeWorld].number}/04 •{" "}
                <span className="text-primary">
                  {CATERING_WORLDS[activeWorld].shortTitle}
                </span>
              </span>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">
              {Math.round(((activeWorld + 1) / CATERING_WORLDS.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. SCROLLABLE FULL-VIEWPORT CATERING WORLDS (01 – 04)
             - Light Mode Warm Ivory Editorial Typography on the Left (lg:w-[44%])
             - Mobile: Top Header + 100% Open Center Window + Bottom Editorial Overlay
         ===================================================================== */}
      <div className="relative z-20">
        {CATERING_WORLDS.map((world, idx) => {
          const isCurrent = activeWorld === idx;
          const isLastWorld = idx === CATERING_WORLDS.length - 1;
          const WorldIcon =
            idx === 0
              ? CalendarHeart
              : idx === 1
              ? Cake
              : idx === 2
              ? Building2
              : Award;

          return (
            <section
              key={world.id}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
              id={world.id}
              className="relative w-full min-h-dvh flex flex-col justify-between lg:justify-center pt-24 pb-24 sm:pt-28 sm:pb-16 lg:py-20 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto pointer-events-none"
            >
              <div className="w-full my-auto flex flex-col justify-between lg:justify-center min-h-[76dvh] lg:min-h-0 lg:w-[44%] lg:space-y-7">
                {/* Top Editorial Typography Block */}
                <div
                  className={`pointer-events-auto transition-all duration-700 ${
                    isCurrent
                      ? "opacity-100 translate-y-0"
                      : "opacity-30 lg:opacity-15 -translate-y-4"
                  }`}
                >
                  <div className="p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-background/85 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/80 lg:border-none shadow-lg lg:shadow-none space-y-3 sm:space-y-4 text-center lg:text-left">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        <WorldIcon className="w-3.5 h-3.5" />
                        <span>{world.badge}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground text-[10px] sm:text-xs font-semibold">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span>
                          {world.number} / 0{CATERING_WORLDS.length}
                        </span>
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-semibold text-foreground tracking-tight leading-[1.08]">
                      {world.title}{" "}
                      <span className="italic font-normal text-primary block">
                        {world.highlight}
                      </span>
                    </h2>

                    <p className="font-serif italic text-sm sm:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                      &ldquo;{world.quote}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed hidden sm:block">
                      {world.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Open Window: 100% Clear for Full-Screen Catering Video */}
                <div className="lg:hidden h-[36dvh] sm:h-[42dvh] pointer-events-none" />

                {/* Bottom Service Highlights & Scroll Action */}
                <div
                  className={`pointer-events-auto transition-all duration-700 ${
                    isCurrent
                      ? "opacity-100 translate-y-0"
                      : "opacity-30 lg:opacity-15 translate-y-4"
                  }`}
                >
                  <div className="p-4 sm:p-5 lg:p-0 rounded-3xl lg:rounded-none bg-background/85 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/80 lg:border-none shadow-lg lg:shadow-none space-y-4 text-center lg:text-left">
                    {/* Minimal Gold-Accented Service Highlights */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-foreground/80">
                      {world.details.map((detail, dIdx) => (
                        <React.Fragment key={detail}>
                          <span>{detail}</span>
                          {dIdx < world.details.length - 1 && (
                            <span className="text-primary">•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* World Step Navigation / Final Reservation Actions */}
                    {!isLastWorld ? (
                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => scrollToWorld(idx + 1)}
                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>
                            Next: {CATERING_WORLDS[idx + 1].shortTitle}
                          </span>
                          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                        </button>

                        <a
                          href={EMAIL_INQUIRY_LINK}
                          className="w-full sm:w-auto px-6 py-3 rounded-full border border-primary/40 bg-card/90 hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5 text-primary" />
                          <span>Inquire Now</span>
                        </a>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
                        <a
                          href={EMAIL_INQUIRY_LINK}
                          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Reserve Catering / Inquire</span>
                        </a>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <Link
                            href="/contact"
                            className="flex-1 sm:flex-initial py-3 px-5 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>Contact Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <button
                            type="button"
                            onClick={handleReplayFull}
                            className="py-3 px-4 rounded-full border border-primary/35 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                            title="Replay catering animation"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Replay</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
