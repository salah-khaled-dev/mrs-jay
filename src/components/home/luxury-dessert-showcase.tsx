"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  CakeSlice,
  Mail,
  RotateCcw,
  CheckCircle2,
  Award,
  Utensils,
  Eye,
} from "lucide-react";
import { DESSERT_ITEMS } from "@/lib/data";
import type { DessertProduct } from "@/types";
import { withBasePath } from "@/lib/utils";

// Existing project video assets (preserved at their exact paths)
const VIDEO_1_SRC = withBasePath(
  "/videos/Luxury_dessert_showcase_display_848f58e6_1080p.mp4"
);
const VIDEO_2_SRC = withBasePath(
  "/videos/Luxury_dessert_showcase_display_4187fdc6_1080p.mp4"
);

const EMAIL_LINK =
  "mailto:dnd.cater.events@gmail.com?subject=Inquiry%20%E2%80%94%20Divine%20%26%20Delight%20Desserts&body=Hello%20Divine%20%26%20Delight%2C%0D%0A%0D%0AI%27m%20interested%20in%20your%20artisanal%20desserts%20and%20would%20like%20to%20discuss%20options%20for%20my%20event.%0D%0A%0D%0AThank%20you.";

const INSTAGRAM_LINK = "https://www.instagram.com/divineanddelight.cater";

interface DessertChapterConfig {
  id: string;
  number: string;
  shortTitle: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stepLabel: string;
  videoIndex: 1 | 2;
  startTime: number;
  endTime: number;
  loopStart?: number;
  dessertIndex: number; // Maps to DESSERT_ITEMS[0..5]
  // 3D Stage & Camera choreography targets (matching ThreeFoodAssembly)
  stageScale: number;
  stageX: number;
  stageY: number;
  stageRotateX: number;
  stageRotateY: number;
  shimmerIntensity: number;
}

const DESSERT_CHAPTERS: DessertChapterConfig[] = [
  {
    id: "dessert-chapter-01",
    number: "01",
    shortTitle: "Mini Tiramisu",
    badge: "Chapter 01 • The Patisserie Portal",
    title: "Divine Mini",
    highlight: "Tiramisu Cubes.",
    description:
      "Our gallery doors open to reveal espresso-soaked savoiardi ladyfingers layered with velvety mascarpone cream and dark Dutch cocoa inside an architectural crystal cube.",
    stepLabel: "Divine Mini Tiramisu • Crystal Cube",
    videoIndex: 1,
    startTime: 0.0,
    endTime: 2.35,
    dessertIndex: 0,
    stageScale: 1.0,
    stageX: 0,
    stageY: 0,
    stageRotateX: 0,
    stageRotateY: 0,
    shimmerIntensity: 0.35,
  },
  {
    id: "dessert-chapter-02",
    number: "02",
    shortTitle: "Dubai Eclairs",
    badge: "Chapter 02 • Signature Choux Pastry",
    title: "Delight Dubai",
    highlight: "Chocolate Eclairs.",
    description:
      "As you glide deeper into the gallery, petite crisp choux eclairs emerge—glazed in dark Belgian chocolate, drizzled with roasted pistachio cream, and dusted with 24k gold shimmer.",
    stepLabel: "Dubai Pistachio Chocolate Eclairs",
    videoIndex: 1,
    startTime: 2.35,
    endTime: 4.85,
    dessertIndex: 1,
    stageScale: 1.04,
    stageX: 5,
    stageY: -4,
    stageRotateX: 2.0,
    stageRotateY: -2.5,
    shimmerIntensity: 0.5,
  },
  {
    id: "dessert-chapter-03",
    number: "03",
    shortTitle: "Lotus & Tasting Cups",
    badge: "Chapter 03 • Tiered Golden Stand",
    title: "Lotus Speculoos &",
    highlight: "Layered Tasting Cups.",
    description:
      "Multi-tiered golden frames reveal our caramelized Lotus Speculoos squares and whipped cream tasting glasses—crafted for effortless luxury at weddings and executive galas.",
    stepLabel: "Divine Lotus Speculoos & Tasting Cups",
    videoIndex: 1,
    startTime: 4.85,
    endTime: 7.85,
    dessertIndex: 3,
    stageScale: 1.06,
    stageX: -5,
    stageY: 3,
    stageRotateX: -1.8,
    stageRotateY: 2.5,
    shimmerIntensity: 0.65,
  },
  {
    id: "dessert-chapter-04",
    number: "04",
    shortTitle: "The Chocolate Pour",
    badge: "Chapter 04 • Macro Chocolate Artistry",
    title: "D&D Velvet",
    highlight: "Mousse Dome.",
    description:
      "Warm single-origin dark chocolate cascades in slow motion over our chilled velvety mousse dome resting on a spiced biscuit crumble base.",
    stepLabel: "Velvet Mousse Dome • Live Chocolate Pour",
    videoIndex: 2,
    startTime: 0.0,
    endTime: 2.35,
    dessertIndex: 2,
    stageScale: 1.03,
    stageX: 0,
    stageY: -3,
    stageRotateX: 1.5,
    stageRotateY: -1.5,
    shimmerIntensity: 0.75,
  },
  {
    id: "dessert-chapter-05",
    number: "05",
    shortTitle: "The Golden Fork",
    badge: "Chapter 05 • Artisanal Texture & Bite",
    title: "Chocolate Drizzle",
    highlight: "Choux & Mousse.",
    description:
      "A golden tasting fork slices effortlessly through the rich dark glaze to reveal the airy, honeycomb-light chocolate mousse and artisan choux craftsmanship within.",
    stepLabel: "The Golden Fork • Silky Mousse Interior",
    videoIndex: 2,
    startTime: 2.35,
    endTime: 5.55,
    dessertIndex: 4,
    stageScale: 1.06,
    stageX: 4,
    stageY: -5,
    stageRotateX: 2.5,
    stageRotateY: -2.0,
    shimmerIntensity: 0.85,
  },
  {
    id: "dessert-chapter-06",
    number: "06",
    shortTitle: "24K Gold Finale",
    badge: "Grand Finale • Couture Presentation",
    title: "Golden Ganache &",
    highlight: "Bespoke Sweet Tables.",
    description:
      "Crowned with delicate 24-karat edible gold leaf and presented in our signature black-and-gold couture box. Reserve a custom dessert display or tasting collection for your next occasion.",
    stepLabel: "24K Gold Leaf Finale • Ready to Serve",
    videoIndex: 2,
    startTime: 5.55,
    endTime: 7.9,
    loopStart: 6.1,
    dessertIndex: 5,
    stageScale: 1.08,
    stageX: 0,
    stageY: -6,
    stageRotateX: 3.0,
    stageRotateY: 0,
    shimmerIntensity: 1.0,
  },
];

export interface LuxuryDessertShowcaseProps {
  id?: string;
  variant?: "compact" | "full";
}

export function LuxuryDessertShowcase({
  id = "luxury-dessert-gallery",
}: LuxuryDessertShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video1WrapRef = useRef<HTMLDivElement>(null);
  const video2WrapRef = useRef<HTMLDivElement>(null);
  const threeMountRef = useRef<HTMLDivElement>(null);
  const stageTransformRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isPlayingSegment, setIsPlayingSegment] = useState<boolean>(true);
  const [selectedDessertModal, setSelectedDessertModal] =
    useState<DessertProduct | null>(null);

  const activeChapterRef = useRef<number>(0);
  const prevChapterRef = useRef<number>(0);
  const targetStartRef = useRef<number>(DESSERT_CHAPTERS[0].startTime);
  const targetEndRef = useRef<number>(DESSERT_CHAPTERS[0].endTime);
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isInViewportRef = useRef<boolean>(true);

  // Smooth scroll to a specific chapter (0..5)
  const scrollToChapter = useCallback((index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Replay current video from 0.0s
  const handleReplayFull = useCallback(() => {
    const ch = DESSERT_CHAPTERS[activeChapterRef.current];
    const activeVideo =
      ch.videoIndex === 1 ? video1Ref.current : video2Ref.current;
    if (!activeVideo) return;
    activeVideo.currentTime = 0;
    targetStartRef.current = 0;
    targetEndRef.current = 7.9;
    setIsPlayingSegment(true);
    activeVideo.playbackRate = 1.0;
    activeVideo.play().catch(() => {});
  }, []);

  // IntersectionObserver to pause videos when user is completely outside the dessert section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        isInViewportRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          video1Ref.current?.pause();
          video2Ref.current?.pause();
        } else {
          const ch = DESSERT_CHAPTERS[activeChapterRef.current];
          const v = ch.videoIndex === 1 ? video1Ref.current : video2Ref.current;
          v?.play().catch(() => {});
        }
      },
      { rootMargin: "200px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Trigger chapter video segment playback & GSAP crossfade between Video 1 and Video 2
  useEffect(() => {
    activeChapterRef.current = activeChapter;
    const chapter = DESSERT_CHAPTERS[activeChapter];
    const prevChapter = prevChapterRef.current;
    prevChapterRef.current = activeChapter;

    targetStartRef.current = chapter.startTime;
    targetEndRef.current = chapter.endTime;

    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    // Smooth GSAP crossfade when switching between Video 1 (Chapters 0-2) and Video 2 (Chapters 3-5)
    if (chapter.videoIndex === 1) {
      v2?.pause();
      if (video1WrapRef.current && video2WrapRef.current) {
        gsap.to(video1WrapRef.current, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        });
        gsap.to(video2WrapRef.current, {
          autoAlpha: 0,
          scale: 0.96,
          duration: 0.65,
          ease: "power2.out",
        });
      }
    } else {
      v1?.pause();
      if (video1WrapRef.current && video2WrapRef.current) {
        gsap.to(video2WrapRef.current, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        });
        gsap.to(video1WrapRef.current, {
          autoAlpha: 0,
          scale: 1.04,
          duration: 0.65,
          ease: "power2.out",
        });
      }
    }

    const activeVideo = chapter.videoIndex === 1 ? v1 : v2;
    if (!activeVideo) return;

    const prevConfig = DESSERT_CHAPTERS[prevChapter];
    const sameVideo = prevConfig?.videoIndex === chapter.videoIndex;
    const diffFromStart = Math.abs(
      activeVideo.currentTime - chapter.startTime
    );

    if (
      sameVideo &&
      activeChapter === prevChapter + 1 &&
      diffFromStart < 0.85
    ) {
      activeVideo.playbackRate = 1.05;
      setIsPlayingSegment(true);
      if (isInViewportRef.current) {
        activeVideo.play().catch(() => {});
      }
    } else {
      try {
        activeVideo.currentTime = chapter.startTime;
      } catch {
        // Ignore if metadata not yet loaded
      }
      activeVideo.playbackRate = 1.05;
      setIsPlayingSegment(true);
      if (isInViewportRef.current) {
        activeVideo.play().catch(() => {});
      }
    }
  }, [activeChapter]);

  // Observe scroll position using GSAP ScrollTrigger / viewport center (identical feel to ThreeFoodAssembly)
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

      if (bestIdx !== activeChapterRef.current) {
        setActiveChapter(bestIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pointer parallax listener
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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10);

    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2));
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

    // 1. 3D Champagne Gold Leaf & Cocoa Dust Particles
    const goldCount = 75;
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
      size: 0.24,
      map: goldTexture,
      transparent: true,
      opacity: 0.72,
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

      const idx = activeChapterRef.current;
      const chapter = DESSERT_CHAPTERS[idx];
      const activeVideo =
        chapter.videoIndex === 1 ? video1Ref.current : video2Ref.current;

      // Control Video Segment Playback & Pausing on Exact Dessert Frame
      if (activeVideo && activeVideo.readyState >= 2) {
        const endT = targetEndRef.current;
        if (
          idx === DESSERT_CHAPTERS.length - 1 &&
          chapter.loopStart !== undefined
        ) {
          if (activeVideo.currentTime >= endT) {
            activeVideo.currentTime = chapter.loopStart;
            activeVideo.play().catch(() => {});
          } else if (activeVideo.paused) {
            activeVideo.play().catch(() => {});
          }
          setIsPlayingSegment(false);
        } else {
          if (!activeVideo.paused && activeVideo.currentTime >= endT) {
            activeVideo.pause();
            activeVideo.currentTime = endT;
            setIsPlayingSegment(false);
          }
        }
      }

      // Lerp 3D Stage & Camera Choreography (Exact same feel as ThreeFoodAssembly)
      const pointer = pointerRef.current;
      const targetScale = chapter.stageScale;
      const targetX = chapter.stageX + pointer.x * -10;
      const targetY = chapter.stageY + pointer.y * -8;
      const targetRotX = chapter.stageRotateX + pointer.y * -3.5;
      const targetRotY = chapter.stageRotateY + pointer.x * 4.5;

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
      const gPos = goldGeometry.attributes.position.array as Float32Array;
      const speedMult = activeVideo && !activeVideo.paused ? 2.2 : 0.85;
      for (let i = 0; i < goldCount; i++) {
        gPos[i * 3 + 1] += goldSpeeds[i] * speedMult;
        gPos[i * 3] += Math.sin(clock * 1.5 + goldPhases[i]) * 0.004;
        if (gPos[i * 3 + 1] > 4.8) {
          gPos[i * 3 + 1] = -4.8;
          gPos[i * 3] = (Math.random() - 0.5) * 11;
        }
      }
      goldGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const currentVid1 = video1Ref.current;
    const currentVid2 = video2Ref.current;

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      if (currentVid1) currentVid1.pause();
      if (currentVid2) currentVid2.pause();
      renderer.forceContextLoss();
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
             Identical architecture to ThreeFoodAssembly on the Home Page:
             - On Mobile (<lg): Full-screen native video stage (w-full h-full
               object-cover) with 100% open center window!
             - On Desktop (lg+): Positioned on the Right 60% of the screen
               with a soft elliptical studio fade into #FAF8F5 so the video
               fills the stage without any small box/card border!
         ===================================================================== */}
      <div className="sticky top-0 left-0 w-full h-dvh -mb-[100dvh] overflow-hidden pointer-events-none z-0 bg-[#EFE9DF] lg:bg-background">
        {/* 3D Choreographed Full-Stage Video Container */}
        <div
          ref={stageTransformRef}
          className="relative w-full h-full lg:w-[60%] lg:ml-auto flex items-center justify-center will-change-transform"
        >
          {/* VIDEO 1: Opening Patisserie Gallery & Floating Golden Stands (Chapters 01 - 03) */}
          <div
            ref={video1WrapRef}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <video
              ref={video1Ref}
              src={VIDEO_1_SRC}
              muted
              playsInline
              autoPlay
              preload="auto"
              onLoadedData={() => {
                if (video1Ref.current && activeChapterRef.current < 3) {
                  video1Ref.current.play().catch(() => {});
                }
                if (video2Ref.current && video2Ref.current.preload !== "auto") {
                  video2Ref.current.preload = "auto";
                }
              }}
              className="w-full h-full object-cover object-center lg:object-[50%_50%] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_7%,black_100%)] select-none"
            />
          </div>

          {/* VIDEO 2: Macro Chocolate Pour, Golden Fork & Couture Box (Chapters 04 - 06) */}
          <div
            ref={video2WrapRef}
            className="absolute inset-0 w-full h-full opacity-0 will-change-transform"
          >
            <video
              ref={video2Ref}
              src={VIDEO_2_SRC}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center lg:object-[50%_50%] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_7%,black_100%)] select-none"
            />
          </div>
        </div>

        {/* Three.js WebGL 3D Golden Leaf Particles & Aura Overlay */}
        <div
          ref={threeMountRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Mobile Subtle Top & Bottom Edge Protection */}
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

        {/* Live Dessert Step Indicator Bar (Mobile Top Pill — identical to Home Page!) */}
        <div className="lg:hidden absolute top-[64px] left-0 right-0 z-30 pointer-events-none px-4">
          <div className="max-w-md mx-auto flex items-center justify-between gap-2 px-3.5 py-1 rounded-full bg-background/85 backdrop-blur-md border border-primary/30 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlayingSegment ? "bg-primary animate-ping" : "bg-primary"
                }`}
              />
              <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
                Dessert {DESSERT_CHAPTERS[activeChapter].number}/06 •{" "}
                <span className="text-primary">
                  {DESSERT_CHAPTERS[activeChapter].shortTitle}
                </span>
              </span>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">
              {Math.round(
                ((activeChapter + 1) / DESSERT_CHAPTERS.length) * 100
              )}
              %
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. SCROLLABLE FULL-VIEWPORT DESSERT CHAPTERS (01 – 06)
             - Mobile (<lg): Top Title + 100% Open Center Window + Bottom Card
             - Desktop (lg+): Clean Left-Side Editorial Column (lg:w-[46%]) while
               the Right Side showcases the full-bleed 3D Dessert Video!
         ===================================================================== */}
      <div className="relative z-20">
        {DESSERT_CHAPTERS.map((chapter, idx) => {
          const isCurrent = activeChapter === idx;
          const dessertProduct =
            DESSERT_ITEMS[chapter.dessertIndex] ?? DESSERT_ITEMS[0];
          const isLastChapter = idx === DESSERT_CHAPTERS.length - 1;

          return (
            <section
              key={chapter.id}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
              id={chapter.id}
              className="relative w-full min-h-dvh flex flex-col justify-between lg:justify-center pt-24 pb-24 sm:pt-28 sm:pb-16 lg:py-20 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto pointer-events-none"
            >
              <div className="w-full my-auto flex flex-col justify-between lg:justify-center min-h-[76dvh] lg:min-h-0 lg:w-[46%] lg:space-y-6">
                {/* Top Editorial Block */}
                <div
                  className={`pointer-events-auto transition-all duration-700 ${
                    isCurrent
                      ? "opacity-100 translate-y-0"
                      : "opacity-35 lg:opacity-20 -translate-y-4"
                  }`}
                >
                  <div className="p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-background/82 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/80 lg:border-none shadow-lg lg:shadow-none space-y-2.5 sm:space-y-4 text-center lg:text-left">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        {idx < 3 ? (
                          <CakeSlice className="w-3.5 h-3.5" />
                        ) : (
                          <Award className="w-3.5 h-3.5" />
                        )}
                        <span>{chapter.badge}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground text-[10px] sm:text-xs font-semibold">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span>
                          {chapter.number} / 0{DESSERT_CHAPTERS.length}
                        </span>
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl font-semibold text-foreground tracking-tight leading-[1.12]">
                      {chapter.title}{" "}
                      <span className="italic font-normal text-primary block sm:inline lg:block">
                        {chapter.highlight}
                      </span>
                    </h2>

                    <p className="text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed hidden sm:block">
                      {chapter.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Open Window: 100% Clear for Full-Screen Dessert Video */}
                <div className="lg:hidden h-[36dvh] sm:h-[42dvh] pointer-events-none" />

                {/* Bottom Action & Product Card */}
                <div
                  className={`pointer-events-auto transition-all duration-700 ${
                    isCurrent
                      ? "opacity-100 translate-y-0"
                      : "opacity-35 lg:opacity-20 translate-y-4"
                  }`}
                >
                  {!isLastChapter ? (
                    <div className="p-4 sm:p-5 rounded-3xl bg-background/85 lg:bg-card backdrop-blur-xl border border-border/80 shadow-lg space-y-3 text-center lg:text-left">
                      {/* Matching Dessert Product Preview Strip */}
                      <div
                        onClick={() => setSelectedDessertModal(dessertProduct)}
                        className="flex items-center gap-3 p-2.5 rounded-2xl bg-secondary/70 border border-border/80 hover:border-primary/50 transition-all cursor-pointer group text-left"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-border">
                          <Image
                            src={dessertProduct.image}
                            alt={dessertProduct.alt}
                            fill
                            sizes="56px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                            Featured Creation • {dessertProduct.category}
                          </span>
                          <h3 className="font-serif text-sm sm:text-base font-bold text-foreground truncate group-hover:text-primary transition-colors">
                            {dessertProduct.name}
                          </h3>
                          <p className="text-[11px] text-muted-foreground line-clamp-1">
                            {dessertProduct.shortDescription}
                          </p>
                        </div>
                        <Eye className="w-4 h-4 text-primary shrink-0 mr-1" />
                      </div>

                      {/* Chapter Step Navigation */}
                      <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-0.5">
                        <button
                          type="button"
                          onClick={() => scrollToChapter(idx + 1)}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>
                            Next: {DESSERT_CHAPTERS[idx + 1].shortTitle}
                          </span>
                          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                        </button>

                        <a
                          href={EMAIL_LINK}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-primary/40 bg-card/90 hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5 text-primary" />
                          <span>Inquire Now</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Final Chapter (06) Complete Collection & Reservation Card */
                    <div className="p-5 sm:p-6 rounded-3xl bg-background/88 lg:bg-card backdrop-blur-xl border border-primary/35 shadow-xl space-y-3.5 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                          All 6 Signature Desserts • Ready for Your Event
                        </span>
                      </div>

                      {/* Quick 6-Dessert Thumbnail Bar */}
                      <div className="grid grid-cols-6 gap-1.5 pt-0.5">
                        {DESSERT_ITEMS.map((item, dIdx) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedDessertModal(item)}
                            className="group relative aspect-square rounded-xl overflow-hidden border border-border hover:border-primary transition-all cursor-pointer"
                            title={item.name}
                          >
                            <Image
                              src={item.image}
                              alt={item.alt}
                              fill
                              sizes="64px"
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white drop-shadow">
                              0{dIdx + 1}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2.5 pt-1">
                        <a
                          href={EMAIL_LINK}
                          className="w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Reserve Dessert Catering / Inquire</span>
                        </a>

                        <div className="flex items-center gap-2">
                          <a
                            href={INSTAGRAM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 px-4 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>Instagram</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>

                          <button
                            type="button"
                            onClick={handleReplayFull}
                            className="py-2.5 px-4 rounded-full border border-primary/35 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                            title="Replay dessert animation"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Replay</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* =====================================================================
          DESSERT DETAILS MODAL
         ===================================================================== */}
      {selectedDessertModal && (
        <div
          onClick={() => setSelectedDessertModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-card border border-border shadow-2xl"
          >
            <div className="relative h-56 sm:h-64 w-full bg-muted">
              <Image
                src={selectedDessertModal.image}
                alt={selectedDessertModal.alt}
                fill
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedDessertModal(null)}
                className="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border text-foreground text-xs font-semibold hover:border-primary cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-[10px] font-semibold uppercase tracking-wider">
                  Divine & Delight Patisserie
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {selectedDessertModal.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-foreground">
                {selectedDessertModal.name}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {selectedDessertModal.shortDescription}
              </p>

              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-2xl bg-secondary border border-border flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground">
                    Handcrafted Fresh
                  </span>
                </div>
                <div className="p-2.5 rounded-2xl bg-secondary border border-border flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground">
                    Event Ready Display
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={EMAIL_LINK}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Inquire About This Dessert</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-border bg-background hover:bg-muted text-foreground text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <span>Full Inquiry Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
