"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Flame,
  Utensils,
  Mail,
  RotateCcw,
  Calendar,
  Eye,
  Award,
} from "lucide-react";
import type { MealItem } from "@/types";
import { MealDetailsModal } from "@/components/meal-details-modal";
import { withBasePath } from "@/lib/utils";

const MEAL_PREP_VIDEO_SRC = withBasePath(
  "/videos/Luxury_dessert_showcase_display_0ed66c12_1080p.mp4"
);

const EMAIL_LINK =
  "mailto:dnd.cater.events@gmail.com?subject=Weekly%20Meal%20Prep%20Inquiry%20%E2%80%94%20Divine%20%26%20Delight&body=Hello%20Divine%20%26%20Delight%2C%0D%0A%0D%0AI%27m%20interested%20in%20your%20Weekly%20Meal%20Prep%20menu%20(prepared%20fresh%20every%20Monday)%20and%20would%20like%20to%20discuss%20meal%20options%20and%20availability.%0D%0A%0D%0AThank%20you.";

const INSTAGRAM_LINK = "https://www.instagram.com/divineanddelight.cater";

interface MealChapterConfig {
  id: string;
  number: string;
  shortTitle: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stepLabel: string;
  startTime: number;
  endTime: number;
  loopStart?: number;
  mealIndex: number; // Maps to confirmedMeals[0..5]
  // 3D Stage & Camera choreography targets (matching Home Page ThreeFoodAssembly)
  stageScale: number;
  stageX: number;
  stageY: number;
  stageRotateX: number;
  stageRotateY: number;
}

// Pure close-up culinary segments (1.92s -> 5.92s) — completely skips the 0.0-1.85s
// dark kitchen wall spotlight & logo and the 6.0-7.9s black marble title card!
const MEAL_CHAPTERS: MealChapterConfig[] = [
  {
    id: "meal-chapter-01",
    number: "01",
    shortTitle: "Artisan Lasagna",
    badge: "Chapter 01 • Signature Hero Meal",
    title: "Artisan Layered",
    highlight: "Lasagna & Vegetables.",
    description:
      "Our weekly culinary showcase opens with a macro view of golden-baked artisanal lasagna—layered with rich house beef ragù, melted mozzarella cheese pull, and roasted garden vegetables.",
    stepLabel: "Lasagna • With Vegetables Only",
    startTime: 0.0,
    endTime: 2.55,
    mealIndex: 0,
    stageScale: 1.0,
    stageX: 0,
    stageY: 0,
    stageRotateX: 0,
    stageRotateY: 0,
  },
  {
    id: "meal-chapter-02",
    number: "02",
    shortTitle: "Chicken Kabobs",
    badge: "Chapter 02 • Flame-Grilled Poultry",
    title: "Charred Herb",
    highlight: "Chicken Kabobs.",
    description:
      "Gliding across the dish, tender marinated chicken skewers grilled with sweet bell peppers rest over fragrant steamed jasmine rice and crisp broccoli.",
    stepLabel: "Chicken Kabobs • With Rice & Broccoli",
    startTime: 2.55,
    endTime: 3.25,
    mealIndex: 1,
    stageScale: 1.04,
    stageX: 5,
    stageY: -4,
    stageRotateX: 2.0,
    stageRotateY: -2.5,
  },
  {
    id: "meal-chapter-03",
    number: "03",
    shortTitle: "Shrimp Cajun",
    badge: "Chapter 03 • Coastal Cajun Spice",
    title: "Pan-Seared",
    highlight: "Shrimp Cajun.",
    description:
      "Wild-caught jumbo shrimp seared in bold Cajun herbs and warm lemon butter—paired with fluffy steamed rice and vibrant seasonal vegetables for clean high-protein nutrition.",
    stepLabel: "Shrimp Cajun • With Rice & Vegetables",
    startTime: 3.25,
    endTime: 3.95,
    mealIndex: 2,
    stageScale: 1.05,
    stageX: -5,
    stageY: 3,
    stageRotateX: -1.8,
    stageRotateY: 2.5,
  },
  {
    id: "meal-chapter-04",
    number: "04",
    shortTitle: "Meat Della Casa",
    badge: "Chapter 04 • Chef's Signature Beef",
    title: "Savory Beef",
    highlight: "Meat Della Casa.",
    description:
      "Tender strips of prime beef sautéed with tri-color bell peppers and our signature house herb glaze—served alongside seasoned jasmine rice.",
    stepLabel: "Meat Della Casa • With Rice & Vegetables",
    startTime: 3.95,
    endTime: 4.68,
    mealIndex: 3,
    stageScale: 1.03,
    stageX: 0,
    stageY: -3,
    stageRotateX: 1.5,
    stageRotateY: -1.5,
  },
  {
    id: "meal-chapter-05",
    number: "05",
    shortTitle: "Carne Mushroom",
    badge: "Chapter 05 • Velvety Cream Reduction",
    title: "Carne Mushroom",
    highlight: "in White Sauce.",
    description:
      "Steaming seared beef tenderloin ribbons folded into a velvety roasted mushroom white sauce, paired with fragrant steamed rice and crisp broccoli florets.",
    stepLabel: "Carne Mushroom • With Rice & Broccoli",
    startTime: 4.68,
    endTime: 5.32,
    mealIndex: 4,
    stageScale: 1.05,
    stageX: 4,
    stageY: -5,
    stageRotateX: 2.5,
    stageRotateY: -2.0,
  },
  {
    id: "meal-chapter-06",
    number: "06",
    shortTitle: "Tilapia Lemon",
    badge: "Grand Finale • Prepared Every Monday",
    title: "Tilapia Lemon &",
    highlight: "Weekly Meal Prep.",
    description:
      "Light flaky tilapia baked with bright lemon-herb butter, fluffy jasmine rice, and crisp steamed broccoli completes our 6-meal weekly collection—prepared fresh every Monday.",
    stepLabel: "Tilapia Lemon • All 6 Weekly Meals",
    startTime: 5.32,
    endTime: 7.9,
    loopStart: 6.2,
    mealIndex: 5,
    stageScale: 1.02,
    stageX: 0,
    stageY: 0,
    stageRotateX: 0,
    stageRotateY: 0,
  },
];

function createGoldParticleTexture(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255, 238, 185, 1)");
  grad.addColorStop(0.35, "rgba(220, 165, 72, 0.85)");
  grad.addColorStop(0.7, "rgba(183, 126, 42, 0.28)");
  grad.addColorStop(1, "rgba(183, 126, 42, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createSteamTexture(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(255, 250, 242, 0.36)");
  grad.addColorStop(0.5, "rgba(245, 238, 226, 0.14)");
  grad.addColorStop(1, "rgba(245, 238, 226, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface MealPrepClientProps {
  meals: MealItem[];
}

export function MealPrepClient({ meals }: MealPrepClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageTransformRef = useRef<HTMLDivElement>(null);
  const threeMountRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlayingSegment, setIsPlayingSegment] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState<MealItem | null>(null);

  const activeChapterRef = useRef(0);
  const targetEndRef = useRef<number>(MEAL_CHAPTERS[0].endTime);
  const pointerRef = useRef({ x: 0, y: 0 });
  const isInViewportRef = useRef(true);

  const activateChapter = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(MEAL_CHAPTERS.length - 1, index));
    const prev = activeChapterRef.current;
    const chapter = MEAL_CHAPTERS[clamped];

    activeChapterRef.current = clamped;
    setActiveChapter(clamped);
    targetEndRef.current = chapter.endTime;

    const vid = videoRef.current;
    if (!vid) return;

    if (clamped === prev + 1) {
      if (
        vid.currentTime < chapter.startTime - 0.25 ||
        vid.currentTime > chapter.endTime + 0.2
      ) {
        vid.currentTime = chapter.startTime;
      }
      setIsPlayingSegment(true);
      vid.play().catch(() => {});
    } else if (clamped < prev) {
      vid.pause();
      vid.currentTime = chapter.endTime;
      setIsPlayingSegment(false);
    } else {
      vid.currentTime = chapter.startTime;
      setIsPlayingSegment(true);
      vid.play().catch(() => {});
    }
  }, []);

  const handleReplayFull = useCallback(() => {
    const firstSection = sectionRefs.current[0];
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const vid = videoRef.current;
    if (vid) {
      activeChapterRef.current = 0;
      setActiveChapter(0);
      targetEndRef.current = MEAL_CHAPTERS[0].endTime;
      vid.currentTime = 0;
      setIsPlayingSegment(true);
      vid.play().catch(() => {});
    }
  }, []);

  const scrollToChapter = useCallback((index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Track section visibility to pause WebGL loop when off-screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        isInViewportRef.current = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    io.observe(container);
    return () => io.disconnect();
  }, []);

  // GSAP ScrollTrigger for each of the 6 Meal Chapters
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers: ScrollTrigger[] = [];

    sectionRefs.current.forEach((sec, idx) => {
      if (!sec) return;
      const st = ScrollTrigger.create({
        trigger: sec,
        start: "top 58%",
        end: "bottom 42%",
        onEnter: () => activateChapter(idx),
        onEnterBack: () => activateChapter(idx),
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [activateChapter]);

  // Pointer parallax tracking for 3D Stage & Camera
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      pointerRef.current = { x: nx, y: ny };
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  // Three.js WebGL 3D Steam & Spice Particles + Stage Choreography
  useEffect(() => {
    const particleMount = threeMountRef.current;
    if (!particleMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    while (particleMount.firstChild) {
      particleMount.removeChild(particleMount.firstChild);
    }
    particleMount.appendChild(renderer.domElement);

    const goldTexture = createGoldParticleTexture();
    const steamTexture = createSteamTexture();

    // 1. 3D Floating Gold Culinary Spice Particles
    const goldCount = 45;
    const goldPositions = new Float32Array(goldCount * 3);
    const goldSpeeds = new Float32Array(goldCount);
    const goldPhases = new Float32Array(goldCount);

    for (let i = 0; i < goldCount; i++) {
      goldPositions[i * 3] = (Math.random() - 0.5) * 11;
      goldPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      goldPositions[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      goldSpeeds[i] = 0.005 + Math.random() * 0.009;
      goldPhases[i] = Math.random() * Math.PI * 2;
    }

    const goldGeometry = new THREE.BufferGeometry();
    goldGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(goldPositions, 3)
    );
    const goldMaterial = new THREE.PointsMaterial({
      size: 0.22,
      map: goldTexture ?? undefined,
      transparent: true,
      opacity: 0.68,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const goldPoints = new THREE.Points(goldGeometry, goldMaterial);
    scene.add(goldPoints);

    // 2. 3D Volumetric Rising Steam Wisps
    const steamCount = 18;
    const steamPositions = new Float32Array(steamCount * 3);
    const steamSpeeds = new Float32Array(steamCount);

    for (let i = 0; i < steamCount; i++) {
      steamPositions[i * 3] = (Math.random() - 0.3) * 4.5;
      steamPositions[i * 3 + 1] = -2.2 + Math.random() * 4.2;
      steamPositions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
      steamSpeeds[i] = 0.007 + Math.random() * 0.008;
    }

    const steamGeometry = new THREE.BufferGeometry();
    steamGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(steamPositions, 3)
    );
    const steamMaterial = new THREE.PointsMaterial({
      size: 1.65,
      map: steamTexture ?? undefined,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });

    const steamPoints = new THREE.Points(steamGeometry, steamMaterial);
    scene.add(steamPoints);

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
      const chapter = MEAL_CHAPTERS[idx];
      const vid = videoRef.current;

      // Control Video Segment Playback & Pausing on Exact Meal Frame
      if (vid && vid.readyState >= 2) {
        const endT = targetEndRef.current;
        if (
          idx === MEAL_CHAPTERS.length - 1 &&
          chapter.loopStart !== undefined
        ) {
          if (vid.currentTime >= endT) {
            vid.currentTime = chapter.loopStart;
            vid.play().catch(() => {});
          } else if (vid.paused) {
            vid.play().catch(() => {});
          }
          setIsPlayingSegment(false);
        } else {
          if (!vid.paused && vid.currentTime >= endT) {
            vid.pause();
            vid.currentTime = endT;
            setIsPlayingSegment(false);
          }
        }
      }

      // Lerp 3D Stage & Camera Choreography
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
      const speedMult = vid && !vid.paused ? 2.2 : 0.85;
      for (let i = 0; i < goldCount; i++) {
        gPos[i * 3 + 1] += goldSpeeds[i] * speedMult;
        gPos[i * 3] += Math.sin(clock * 1.5 + goldPhases[i]) * 0.004;
        if (gPos[i * 3 + 1] > 4.8) {
          gPos[i * 3 + 1] = -4.8;
          gPos[i * 3] = (Math.random() - 0.5) * 11;
        }
      }
      goldGeometry.attributes.position.needsUpdate = true;

      // Update 3D Rising Steam Wisps
      const stPos = steamGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < steamCount; i++) {
        stPos[i * 3 + 1] += steamSpeeds[i];
        stPos[i * 3] += Math.cos(clock * 0.9 + i) * 0.0025;
        if (stPos[i * 3 + 1] > 3.2) {
          stPos[i * 3 + 1] = -2.2;
        }
      }
      steamGeometry.attributes.position.needsUpdate = true;

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
      goldTexture?.dispose();
      steamGeometry.dispose();
      steamMaterial.dispose();
      steamTexture?.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="meal-prep-showcase"
      className="relative w-full bg-background border-t border-border/60"
    >
      {/* =====================================================================
          1. STICKY FULL-VIEWPORT 3D VIDEO & THREE.JS STAGE (100% x 100dvh)
             - Displays the full luxury marble culinary stage cleanly in both
               Light Mode and Dark Mode (matching Catering & Desserts!)
         ===================================================================== */}
      <div className="sticky top-0 left-0 w-full h-dvh -mb-[100dvh] overflow-hidden pointer-events-none z-0 bg-[#EFE9DF] lg:bg-background">
        {/* 3D Choreographed Full-Stage Video */}
        <div
          ref={stageTransformRef}
          className="relative w-full h-full lg:w-[60%] lg:ml-auto flex items-center justify-center will-change-transform"
        >
          <video
            ref={videoRef}
            src={MEAL_PREP_VIDEO_SRC}
            muted
            playsInline
            autoPlay
            preload="auto"
            onLoadedData={() => {
              if (videoRef.current && activeChapterRef.current === 0) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => {});
              }
            }}
            className="w-full h-full object-cover object-center lg:object-[50%_50%] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_7%,black_100%)] select-none"
          />
        </div>

        {/* Three.js WebGL 3D Golden Shimmer & Rising Steam Overlay */}
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

        {/* Live Meal Step Indicator Bar (Mobile Top Pill — identical to Home Page!) */}
        <div className="lg:hidden absolute top-[64px] left-0 right-0 z-30 pointer-events-none px-4">
          <div className="max-w-md mx-auto flex items-center justify-between gap-2 px-3.5 py-1 rounded-full bg-background/85 backdrop-blur-md border border-primary/30 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlayingSegment ? "bg-primary animate-ping" : "bg-primary"
                }`}
              />
              <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
                Meal {MEAL_CHAPTERS[activeChapter].number}/06 •{" "}
                <span className="text-primary">
                  {MEAL_CHAPTERS[activeChapter].shortTitle}
                </span>
              </span>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">
              {Math.round(((activeChapter + 1) / MEAL_CHAPTERS.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. SCROLLABLE FULL-VIEWPORT MEAL PREP CHAPTERS (01 – 06)
             - Mobile (<lg): Top Title + 100% Open Center Window + Bottom Card
             - Desktop (lg+): Clean Left-Side Editorial Column (lg:w-[46%]) while
               the Right Side showcases the Marble-Free 3D Dishes in Light Mode!
         ===================================================================== */}
      <div className="relative z-20">
        {MEAL_CHAPTERS.map((chapter, idx) => {
          const isCurrent = activeChapter === idx;
          const mealProduct = meals[chapter.mealIndex] ?? meals[0];
          const isLastChapter = idx === MEAL_CHAPTERS.length - 1;

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
                        {idx < 5 ? (
                          <Utensils className="w-3.5 h-3.5" />
                        ) : (
                          <Award className="w-3.5 h-3.5" />
                        )}
                        <span>{chapter.badge}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground text-[10px] sm:text-xs font-semibold">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span>
                          {chapter.number} / 0{MEAL_CHAPTERS.length}
                        </span>
                      </span>

                      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary border border-border text-foreground text-[10px] sm:text-xs font-medium">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span>Every Monday</span>
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

                    {/* High-Protein Macro Strip */}
                    {mealProduct && (
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-0.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/35 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                          <Flame className="w-3 h-3" />
                          <span>{mealProduct.macros.protein}g Protein</span>
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-card border border-border text-foreground text-[10px] sm:text-xs font-semibold">
                          {mealProduct.macros.calories} kcal
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground text-[10px] sm:text-xs font-medium">
                          {mealProduct.macros.carbs}g Carbs •{" "}
                          {mealProduct.macros.fat}g Fat
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Open Window: 100% Clear for Full-Screen Meal Prep Stage */}
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
                      {/* Matching Meal Product Preview Strip */}
                      {mealProduct && (
                        <div
                          onClick={() => setSelectedMeal(mealProduct)}
                          className="flex items-center gap-3 p-2.5 rounded-2xl bg-secondary/70 border border-border/80 hover:border-primary/50 transition-all cursor-pointer group text-left"
                        >
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-border">
                            <Image
                              src={mealProduct.image}
                              alt={mealProduct.name}
                              fill
                              sizes="56px"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                              Featured Dish • {mealProduct.servingInfo}
                            </span>
                            <h3 className="font-serif text-sm sm:text-base font-bold text-foreground truncate group-hover:text-primary transition-colors">
                              {mealProduct.name}
                            </h3>
                            <p className="text-[11px] text-muted-foreground line-clamp-1">
                              {mealProduct.description}
                            </p>
                          </div>
                          <Eye className="w-4 h-4 text-primary shrink-0 mr-1" />
                        </div>
                      )}

                      {/* Chapter Step Navigation */}
                      <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-0.5">
                        <button
                          type="button"
                          onClick={() => scrollToChapter(idx + 1)}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>
                            Next: {MEAL_CHAPTERS[idx + 1].shortTitle}
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
                          All 6 Weekly Meals • Prepared Fresh Every Monday
                        </span>
                      </div>

                      {/* Quick 6-Meal Thumbnail Bar */}
                      <div className="grid grid-cols-6 gap-1.5 pt-0.5">
                        {meals.map((item, mIdx) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedMeal(item)}
                            className="group relative aspect-square rounded-xl overflow-hidden border border-border hover:border-primary transition-all cursor-pointer"
                            title={`${item.name} (${item.macros.protein}g Protein)`}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="64px"
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white drop-shadow">
                              0{mIdx + 1}
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
                          <span>Reserve Weekly Meal Prep / Inquire</span>
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
                            title="Replay meal prep animation"
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
          MEAL DETAILS MODAL (Ingredients, Macros & Heating Instructions)
         ===================================================================== */}
      <MealDetailsModal
        meal={selectedMeal}
        onClose={() => setSelectedMeal(null)}
      />
    </div>
  );
}
