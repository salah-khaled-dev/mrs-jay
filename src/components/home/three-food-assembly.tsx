"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import * as THREE from "three";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Star,
  Flame,
  Utensils,
  CakeSlice,
  Mail,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Building2,
} from "lucide-react";
import { INITIAL_REVIEWS } from "@/lib/reviews-data";
import { withBasePath } from "@/lib/utils";

interface ChapterConfig {
  id: string;
  number: string;
  shortTitle: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  ingredientLabel: string;
  startTime: number;
  endTime: number;
  loopStart?: number;
  // 3D Stage & Camera choreography targets
  stageScale: number;
  stageX: number;
  stageY: number;
  stageRotateX: number;
  stageRotateY: number;
  steamIntensity: number;
}

const CHAPTERS: ChapterConfig[] = [
  {
    id: "chapter-plate",
    number: "01",
    shortTitle: "The Canvas",
    badge: "The Arrival • Handcrafted Canvas",
    title: "Artisan Catering for",
    highlight: "Every Occasion.",
    description:
      "Every culinary masterpiece begins on a pristine canvas. Watch our signature dish assemble live as you scroll—starting with fragrant steamed jasmine rice landing on our handcrafted plate.",
    ingredientLabel: "Handcrafted Plate & Jasmine Rice",
    startTime: 0.0,
    endTime: 1.65,
    stageScale: 1.0,
    stageX: 0,
    stageY: 0,
    stageRotateX: 0,
    stageRotateY: 0,
    steamIntensity: 0.15,
  },
  {
    id: "chapter-shrimp",
    number: "02",
    shortTitle: "Cajun Shrimp",
    badge: "Signature Entrée • Crafted by Fire",
    title: "Charred Cajun",
    highlight: "Jumbo Shrimp.",
    description:
      "Wild-caught colossal shrimp, pan-seared with French Cajun herbs, cracked black pepper, and warm butter glaze—dropping fresh onto the plate for unforgettable events & celebrations.",
    ingredientLabel: "Seared Cajun Jumbo Shrimp Trio",
    startTime: 1.65,
    endTime: 3.65,
    stageScale: 1.05,
    stageX: 6,
    stageY: -5,
    stageRotateX: 2.5,
    stageRotateY: -3,
    steamIntensity: 0.35,
  },
  {
    id: "chapter-veggies",
    number: "03",
    shortTitle: "Garden Veggies",
    badge: "Farm-to-Table • Organic Harvest",
    title: "Crisp Garden",
    highlight: "Vegetables & Meal Prep.",
    description:
      "Vibrant broccoli florets, glazed heirloom carrots, and tender green beans steamed to perfection—bringing wholesome nutrition and vivid color to your weekly routine.",
    ingredientLabel: "Fresh Broccoli, Carrots & Green Beans",
    startTime: 3.65,
    endTime: 5.65,
    stageScale: 1.06,
    stageX: -6,
    stageY: 4,
    stageRotateX: -2,
    stageRotateY: 3,
    steamIntensity: 0.45,
  },
  {
    id: "chapter-garnish",
    number: "04",
    shortTitle: "Chef's Finish",
    badge: "Chef's Finishing Touch • Reviews & Sweets",
    title: "Artisanal Detail &",
    highlight: "Handcrafted Desserts.",
    description:
      "Freshly chopped garden chives rain down to crown the dish—finished with the same Michelin-level precision we bring to our luxury pastries and 5-star guest experiences.",
    ingredientLabel: "Fresh Garden Chives & Artisanal Finish",
    startTime: 5.65,
    endTime: 7.65,
    stageScale: 1.04,
    stageX: 0,
    stageY: -4,
    stageRotateX: 1.5,
    stageRotateY: -1.5,
    steamIntensity: 0.65,
  },
  {
    id: "chapter-complete",
    number: "05",
    shortTitle: "The Masterpiece",
    badge: "Grand Finale • Plated & Steaming Hot",
    title: "The Complete",
    highlight: "Culinary Masterpiece.",
    description:
      "All ingredients united in harmony—steaming hot and ready to serve. Reserve bespoke catering for your next celebration or order weekly gourmet meal prep today.",
    ingredientLabel: "Complete Dish • Hot & Steaming",
    startTime: 7.65,
    endTime: 9.92,
    loopStart: 7.85,
    stageScale: 1.08,
    stageX: 0,
    stageY: -6,
    stageRotateX: 3,
    stageRotateY: 0,
    steamIntensity: 1.0,
  },
];

export function ThreeFoodAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const threeMountRef = useRef<HTMLDivElement>(null);
  const stageTransformRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isDropping, setIsDropping] = useState<boolean>(true);

  const activeChapterRef = useRef<number>(0);
  const prevChapterRef = useRef<number>(0);
  const targetStartRef = useRef<number>(CHAPTERS[0].startTime);
  const targetEndRef = useRef<number>(CHAPTERS[0].endTime);
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Jump or scroll smoothly to a specific chapter
  const scrollToChapter = useCallback((index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Replay the full assembly animation from 0.0s
  const handleReplayFull = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    targetStartRef.current = 0;
    targetEndRef.current = 9.92;
    setIsDropping(true);
    video.playbackRate = 1.0;
    video.play().catch(() => {});
  }, []);

  // Trigger chapter video segment playback whenever activeChapter changes
  useEffect(() => {
    activeChapterRef.current = activeChapter;
    const chapter = CHAPTERS[activeChapter];
    const prevChapter = prevChapterRef.current;
    prevChapterRef.current = activeChapter;

    targetStartRef.current = chapter.startTime;
    targetEndRef.current = chapter.endTime;

    const video = videoRef.current;
    if (!video) return;

    const diffFromStart = Math.abs(video.currentTime - chapter.startTime);
    if (activeChapter === prevChapter + 1 && diffFromStart < 0.75) {
      video.playbackRate = 1.05;
      setIsDropping(true);
      video.play().catch(() => {});
    } else {
      try {
        video.currentTime = chapter.startTime;
      } catch {
        // Ignore if metadata not loaded yet
      }
      video.playbackRate = 1.05;
      setIsDropping(true);
      video.play().catch(() => {});
    }
  }, [activeChapter]);

  // Observe scroll position to update activeChapter
  useEffect(() => {
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

  // Three.js WebGL Scene + 60fps Video Time Controller + 3D Stage Choreography
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

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    // 1. Culinary Golden Spice & Light Particles (3D Points)
    const spiceCount = 70;
    const spicePositions = new Float32Array(spiceCount * 3);
    const spiceSpeeds = new Float32Array(spiceCount);
    const spicePhases = new Float32Array(spiceCount);

    for (let i = 0; i < spiceCount; i++) {
      spicePositions[i * 3] = (Math.random() - 0.5) * 11;
      spicePositions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      spicePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      spiceSpeeds[i] = 0.008 + Math.random() * 0.018;
      spicePhases[i] = Math.random() * Math.PI * 2;
    }

    const spiceGeometry = new THREE.BufferGeometry();
    spiceGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(spicePositions, 3)
    );

    const spiceTexture = createGlowTexture(
      "rgba(255, 235, 175, 0.95)",
      "rgba(212, 165, 65, 0.35)"
    );
    const spiceMaterial = new THREE.PointsMaterial({
      size: 0.22,
      map: spiceTexture,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const spicePoints = new THREE.Points(spiceGeometry, spiceMaterial);
    scene.add(spicePoints);

    // 2. 3D Volumetric Rising Steam Plumes
    const steamCount = 42;
    const steamPositions = new Float32Array(steamCount * 3);
    const steamSpeeds = new Float32Array(steamCount);
    const steamOffsets = new Float32Array(steamCount);

    for (let i = 0; i < steamCount; i++) {
      steamPositions[i * 3] = (Math.random() - 0.5) * 3.4;
      steamPositions[i * 3 + 1] = -1.2 + Math.random() * 4.5;
      steamPositions[i * 3 + 2] = 0.5 + (Math.random() - 0.5) * 1.5;
      steamSpeeds[i] = 0.012 + Math.random() * 0.018;
      steamOffsets[i] = Math.random() * Math.PI * 2;
    }

    const steamGeometry = new THREE.BufferGeometry();
    steamGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(steamPositions, 3)
    );

    const steamTexture = createGlowTexture(
      "rgba(255, 252, 246, 0.38)",
      "rgba(245, 238, 228, 0.12)"
    );
    const steamMaterial = new THREE.PointsMaterial({
      size: 1.55,
      map: steamTexture,
      transparent: true,
      opacity: 0.25,
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
      steamOpacity: 0.15,
    };

    let animFrameId: number;
    let clock = 0;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      clock += 0.016;

      const idx = activeChapterRef.current;
      const chapter = CHAPTERS[idx];
      const video = videoRef.current;

      // Control Video Segment Playback & Looping
      if (video && video.readyState >= 2) {
        const endT = targetEndRef.current;
        if (idx === CHAPTERS.length - 1 && chapter.loopStart !== undefined) {
          if (video.currentTime >= endT) {
            video.currentTime = chapter.loopStart;
            video.play().catch(() => {});
          } else if (video.paused) {
            video.play().catch(() => {});
          }
          setIsDropping(false);
        } else {
          if (!video.paused && video.currentTime >= endT) {
            video.pause();
            video.currentTime = endT;
            setIsDropping(false);
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
      currentTransform.steamOpacity +=
        (chapter.steamIntensity * 0.55 - currentTransform.steamOpacity) * 0.05;

      if (stageTransformRef.current) {
        stageTransformRef.current.style.transform = `perspective(1200px) translate3d(${currentTransform.x.toFixed(
          2
        )}px, ${currentTransform.y.toFixed(2)}px, 0px) rotateX(${currentTransform.rotX.toFixed(
          2
        )}deg) rotateY(${currentTransform.rotY.toFixed(2)}deg) scale(${currentTransform.scale.toFixed(
          4
        )})`;
      }

      camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.05;
      camera.position.y += (-pointer.y * 0.35 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Update 3D Spice Particles
      const sPos = spiceGeometry.attributes.position.array as Float32Array;
      const speedMultiplier = video && !video.paused ? 2.4 : 0.85;
      for (let i = 0; i < spiceCount; i++) {
        sPos[i * 3 + 1] += spiceSpeeds[i] * speedMultiplier;
        sPos[i * 3] += Math.sin(clock * 1.5 + spicePhases[i]) * 0.004;
        if (sPos[i * 3 + 1] > 4.8) {
          sPos[i * 3 + 1] = -4.8;
          sPos[i * 3] = (Math.random() - 0.5) * 11;
        }
      }
      spiceGeometry.attributes.position.needsUpdate = true;

      // Update 3D Rising Steam Plumes
      steamMaterial.opacity = currentTransform.steamOpacity;
      const stPos = steamGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < steamCount; i++) {
        stPos[i * 3 + 1] += steamSpeeds[i] * (0.7 + chapter.steamIntensity);
        stPos[i * 3] += Math.sin(clock * 1.2 + steamOffsets[i]) * 0.006;
        if (stPos[i * 3 + 1] > 3.6) {
          stPos[i * 3 + 1] = -1.0;
          stPos[i * 3] = (Math.random() - 0.5) * 3.0;
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
      spiceGeometry.dispose();
      spiceMaterial.dispose();
      spiceTexture.dispose();
      steamGeometry.dispose();
      steamMaterial.dispose();
      steamTexture.dispose();
    };
  }, []);

  const featuredReview = INITIAL_REVIEWS[0];

  return (
    <div ref={containerRef} className="relative w-full bg-background">
      {/* =====================================================================
          1. STICKY FULL-VIEWPORT 3D VIDEO & THREE.JS STAGE (100% x 100dvh)
             - On Mobile (<lg): The exact full-screen native video stage that
               worked flawlessly on mobile!
             - On Desktop (lg+): Positioned on the Right half of the screen
               with a soft elliptical studio fade into #FAF8F5 so the plate
               is large and clean while the Left half holds the content!
         ===================================================================== */}
      <div className="sticky top-0 left-0 w-full h-dvh -mb-[100dvh] overflow-hidden pointer-events-none z-0 bg-[#EFE9DF] lg:bg-background">
        {/* 3D Choreographed Video Stage */}
        <div
          ref={stageTransformRef}
          className="relative w-full h-full lg:w-[60%] lg:ml-auto flex items-center justify-center will-change-transform"
        >
          <video
            ref={videoRef}
            src={withBasePath("/videos/food-assembly.mp4")}
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
            className="w-full h-full object-cover object-center lg:object-[50%_48%] lg:[mask-image:radial-gradient(ellipse_62%_52%_at_50%_50%,black_58%,transparent_98%)] select-none"
          />
        </div>

        {/* Three.js WebGL 3D Particles & Volumetric Steam Overlay */}
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

        {/* Live Assembly Step Indicator Bar (Mobile Top Pill) */}
        <div className="lg:hidden absolute top-[64px] left-0 right-0 z-30 pointer-events-none px-4">
          <div className="max-w-md mx-auto flex items-center justify-between gap-2 px-3.5 py-1 rounded-full bg-background/85 backdrop-blur-md border border-primary/30 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isDropping ? "bg-primary animate-ping" : "bg-primary"
                }`}
              />
              <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
                Step {CHAPTERS[activeChapter].number}/05 •{" "}
                <span className="text-primary">
                  {CHAPTERS[activeChapter].ingredientLabel}
                </span>
              </span>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">
              {Math.round(((activeChapter + 1) / CHAPTERS.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. SCROLLABLE FULL-VIEWPORT SECTIONS
             - Mobile (<lg): Top Title + 100% Open Center Window + Bottom Card
               (The exact mobile design the user loved!)
             - Desktop (lg+): Clean Left-Side Editorial Column (lg:w-[46%]) while
               the Right Side showcases the 3D Plate!
         ===================================================================== */}
      <div className="relative z-20">
        {/* -------------------------------------------------------------------
            SECTION 01: THE PLATE & STEAMED JASMINE RICE (HERO)
           ------------------------------------------------------------------- */}
        <section
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          id="chapter-plate"
          className="relative w-full min-h-dvh flex flex-col justify-between lg:justify-center pt-24 pb-24 sm:pt-28 sm:pb-16 lg:py-20 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto pointer-events-none"
        >
          <div className="w-full my-auto flex flex-col justify-between lg:justify-center min-h-[76dvh] lg:min-h-0 lg:w-[46%] lg:space-y-6">
            {/* Top / Editorial Block */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-40 lg:opacity-20 -translate-y-3"
              }`}
            >
              <div className="p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-background/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/80 lg:border-none shadow-lg lg:shadow-none space-y-2.5 sm:space-y-4 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>{CHAPTERS[0].badge}</span>
                  </span>

                  <Link
                    href="/reviews"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card border border-border text-foreground text-[10px] sm:text-xs font-semibold hover:border-primary transition-colors"
                  >
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span>5.0</span>
                  </Link>
                </div>

                <h1 className="font-serif text-2xl sm:text-4xl xl:text-6xl font-semibold text-foreground tracking-tight leading-[1.12]">
                  {CHAPTERS[0].title}{" "}
                  <span className="italic font-normal text-primary block sm:inline lg:block">
                    {CHAPTERS[0].highlight}
                  </span>
                </h1>

                <p className="text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed hidden sm:block">
                  {CHAPTERS[0].description}
                </p>
              </div>
            </div>

            {/* Mobile Open Window: 100% Clear for Plate & Falling Rice */}
            <div className="lg:hidden h-[36dvh] sm:h-[42dvh] pointer-events-none" />

            {/* Bottom / Action Card */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-40 lg:opacity-20 translate-y-3"
              }`}
            >
              <div className="p-4 sm:p-6 rounded-3xl bg-background/85 lg:bg-card backdrop-blur-xl border border-border/80 shadow-lg space-y-3 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Interactive Culinary Experience</span>
                </div>

                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  Scroll down to watch every fresh ingredient drop onto the plate and explore our catering & meal prep services.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => scrollToChapter(1)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-primary/40 bg-card/90 hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Drop Cajun Shrimp</span>
                    <ArrowDown className="w-3.5 h-3.5 text-primary animate-bounce" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 02: CHARRED CAJUN JUMBO SHRIMP DROP + EVENT CATERING CARDS
           ------------------------------------------------------------------- */}
        <section
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          id="chapter-shrimp"
          className="relative w-full min-h-dvh flex flex-col justify-between lg:justify-center pt-24 pb-24 sm:pt-28 sm:pb-16 lg:py-20 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto pointer-events-none"
        >
          <div className="w-full my-auto flex flex-col justify-between lg:justify-center min-h-[76dvh] lg:min-h-0 lg:w-[46%] lg:space-y-6">
            {/* Top / Editorial Block */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 -translate-y-4"
              }`}
            >
              <div className="p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-background/82 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/80 lg:border-none shadow-lg lg:shadow-none space-y-2.5 sm:space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{CHAPTERS[1].badge}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  {CHAPTERS[1].title}{" "}
                  <span className="italic font-normal text-primary block sm:inline lg:block">
                    {CHAPTERS[1].highlight}
                  </span>
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed hidden sm:block">
                  {CHAPTERS[1].description}
                </p>
              </div>
            </div>

            {/* Mobile Open Window: 100% Clear for Falling Cajun Shrimp */}
            <div className="lg:hidden h-[36dvh] sm:h-[42dvh] pointer-events-none" />

            {/* Bottom / Catering Cards */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 translate-y-4"
              }`}
            >
              <div className="space-y-2.5 sm:space-y-3">
                <Link
                  href="/catering"
                  className="block p-4 sm:p-5 rounded-3xl bg-background/85 lg:bg-card hover:bg-background/95 backdrop-blur-xl border border-border/80 hover:border-primary/50 shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Events & Celebrations</span>
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        Weddings, Banquets & Private Parties
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Custom buffet spreads and chef-attended stations tailored to your celebration.
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/corporate-events"
                  className="block p-4 sm:p-5 rounded-3xl bg-background/85 lg:bg-card hover:bg-background/95 backdrop-blur-xl border border-border/80 hover:border-primary/50 shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Corporate Hospitality</span>
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        Executive Lunches & Galas
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Seamless workplace catering and VIP dining experiences that impress every guest.
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 03: FRESH GARDEN VEGETABLES DROP + MEAL PREP CARDS
           ------------------------------------------------------------------- */}
        <section
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          id="chapter-veggies"
          className="relative w-full min-h-dvh flex flex-col justify-between lg:justify-center pt-24 pb-24 sm:pt-28 sm:pb-16 lg:py-20 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto pointer-events-none"
        >
          <div className="w-full my-auto flex flex-col justify-between lg:justify-center min-h-[76dvh] lg:min-h-0 lg:w-[46%] lg:space-y-6">
            {/* Top / Editorial Block */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 2
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 -translate-y-4"
              }`}
            >
              <div className="p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-background/82 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/80 lg:border-none shadow-lg lg:shadow-none space-y-2.5 sm:space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>{CHAPTERS[2].badge}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  {CHAPTERS[2].title}{" "}
                  <span className="italic font-normal text-primary block sm:inline lg:block">
                    {CHAPTERS[2].highlight}
                  </span>
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed hidden sm:block">
                  {CHAPTERS[2].description}
                </p>
              </div>
            </div>

            {/* Mobile Open Window: 100% Clear for Falling Broccoli & Carrots */}
            <div className="lg:hidden h-[36dvh] sm:h-[42dvh] pointer-events-none" />

            {/* Bottom / Gourmet Meal Prep Card */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 2
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 translate-y-4"
              }`}
            >
              <div className="p-4 sm:p-6 rounded-3xl bg-background/85 lg:bg-card backdrop-blur-xl border border-border/80 shadow-lg space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Weekly Gourmet Meal Prep
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-semibold">
                    Fresh Weekly
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-2xl bg-card/90 border border-border/70 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-medium text-foreground">
                      Balanced Macros
                    </span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-card/90 border border-border/70 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-medium text-foreground">
                      100% Real Produce
                    </span>
                  </div>
                </div>

                <Link
                  href="/meal-prep"
                  className="w-full py-2.5 px-5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Meal Prep Menus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 04: FRESH HERB GARNISHES + DESSERTS & GUEST REVIEWS
           ------------------------------------------------------------------- */}
        <section
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          id="chapter-garnish"
          className="relative w-full min-h-dvh flex flex-col justify-between lg:justify-center pt-24 pb-24 sm:pt-28 sm:pb-16 lg:py-20 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto pointer-events-none"
        >
          <div className="w-full my-auto flex flex-col justify-between lg:justify-center min-h-[76dvh] lg:min-h-0 lg:w-[46%] lg:space-y-6">
            {/* Top / Editorial Block */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 -translate-y-4"
              }`}
            >
              <div className="p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-background/82 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/80 lg:border-none shadow-lg lg:shadow-none space-y-2.5 sm:space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  <CakeSlice className="w-3.5 h-3.5" />
                  <span>{CHAPTERS[3].badge}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  {CHAPTERS[3].title}{" "}
                  <span className="italic font-normal text-primary block sm:inline lg:block">
                    {CHAPTERS[3].highlight}
                  </span>
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed hidden sm:block">
                  {CHAPTERS[3].description}
                </p>
              </div>
            </div>

            {/* Mobile Open Window: 100% Clear for Sprinkling Green Herbs */}
            <div className="lg:hidden h-[36dvh] sm:h-[42dvh] pointer-events-none" />

            {/* Bottom / Desserts & Guest Review Cards */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 translate-y-4"
              }`}
            >
              <div className="space-y-2.5 sm:space-y-3">
                <Link
                  href="/desserts"
                  className="block p-4 rounded-3xl bg-background/85 lg:bg-card hover:bg-background/95 backdrop-blur-xl border border-border/80 hover:border-primary/50 shadow-lg transition-all group text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Sweet Finale • Artisanal Desserts
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        French Choux, Ganache Cups & Pastry Tables
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                {featuredReview && (
                  <div className="p-4 rounded-3xl bg-background/85 lg:bg-card backdrop-blur-xl border border-border/80 shadow-lg space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-primary">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-3.5 h-3.5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <Link
                        href="/reviews"
                        className="text-[11px] font-semibold text-primary hover:underline"
                      >
                        All Reviews →
                      </Link>
                    </div>
                    <p className="text-xs text-foreground/85 italic line-clamp-2">
                      &ldquo;{featuredReview.comment}&rdquo;
                    </p>
                    <p className="text-[11px] font-semibold text-foreground">
                      — {featuredReview.name} •{" "}
                      <span className="text-muted-foreground font-normal">
                        {featuredReview.service}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            SECTION 05: THE COMPLETE STEAMING MASTERPIECE & RESERVATIONS
           ------------------------------------------------------------------- */}
        <section
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          id="chapter-complete"
          className="relative w-full min-h-dvh flex flex-col justify-between lg:justify-center pt-24 pb-28 sm:pt-28 sm:pb-20 lg:py-20 px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto pointer-events-none"
        >
          <div className="w-full my-auto flex flex-col justify-between lg:justify-center min-h-[76dvh] lg:min-h-0 lg:w-[46%] lg:space-y-6">
            {/* Top / Finale Header */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 4
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 -translate-y-4"
              }`}
            >
              <div className="p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-background/85 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-primary/35 lg:border-none shadow-xl lg:shadow-none space-y-2.5 sm:space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{CHAPTERS[4].badge}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                  {CHAPTERS[4].title}{" "}
                  <span className="italic font-normal text-primary block sm:inline lg:block">
                    {CHAPTERS[4].highlight}
                  </span>
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-foreground/85 leading-relaxed">
                  {CHAPTERS[4].description}
                </p>
              </div>
            </div>

            {/* Mobile Open Window: 100% Clear for Complete Dish & Rising Steam */}
            <div className="lg:hidden h-[36dvh] sm:h-[42dvh] pointer-events-none" />

            {/* Bottom / Final Booking Card */}
            <div
              className={`pointer-events-auto transition-all duration-700 ${
                activeChapter === 4
                  ? "opacity-100 translate-y-0"
                  : "opacity-35 lg:opacity-20 translate-y-4"
              }`}
            >
              <div className="p-5 sm:p-6 rounded-3xl bg-background/88 lg:bg-card backdrop-blur-xl border border-primary/35 shadow-xl space-y-3.5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Plated & Steaming Hot • Ready to Serve
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Ready to bring Divine & Delight to your table? Book your custom event menu or weekly meal prep consultation now.
                </p>

                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Reserve Catering / Inquire</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/catering"
                      className="flex-1 py-2.5 px-4 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>All Menus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={handleReplayFull}
                      className="py-2.5 px-4 rounded-full border border-primary/35 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      title="Watch full dish assembly animation"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Replay</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
