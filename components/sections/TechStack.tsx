"use client";

import { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FallbackImage from "../ui/FallbackImage";

// ===================================================================================
// TECH DEFINITIONS & COORDINATE SYSTEM
// Coordinates are in virtual SVG space:
// Desktop: 1000 x 720 (Loki center 500, 360 | Left Palm: 412, 381 | Right Palm: 594, 381 | Crown: 500, 275)
// Mobile: 400 x 640 (Loki center 200, 320 | Left Palm: 152, 332 | Right Palm: 248, 332 | Crown: 200, 274)
// ===================================================================================

interface TechItem {
  name: string;
  icon: string;
  darkInvert?: boolean;
  originSide: "left" | "right" | "top";
  // Desktop coordinates (1000 x 720 space)
  dx: number;
  dy: number;
  dcp1: [number, number];
  dcp2: [number, number];
  // Mobile coordinates (400 x 640 space)
  mx: number;
  my: number;
  mcp1: [number, number];
  mcp2: [number, number];
  pulseDuration: number;
  particleDuration: number;
  particleDelay: number;
}

const techs: TechItem[] = [
  // ==================== LEFT HAND CLUSTER (6 TECHS) ====================
  // TOP LEFT APEX: Terraform
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    originSide: "left",
    dx: 230,
    dy: 140,
    dcp1: [320, 240],
    dcp2: [250, 180],
    mx: 80,
    my: 110,
    mcp1: [115, 220],
    mcp2: [90, 150],
    pulseDuration: 3.5,
    particleDuration: 4.1,
    particleDelay: 0.8,
  },

  // LEFT MID-UPPER: GitHub
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    darkInvert: true,
    originSide: "left",
    dx: 130,
    dy: 235,
    dcp1: [260, 300],
    dcp2: [170, 260],
    mx: 45,
    my: 190,
    mcp1: [95, 270],
    mcp2: [55, 220],
    pulseDuration: 3.8,
    particleDuration: 4.4,
    particleDelay: 1.5,
  },

  // LEFT MID-UPPER-CENTER: Kubernetes
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    originSide: "left",
    dx: 80,
    dy: 335,
    dcp1: [240, 370],
    dcp2: [140, 350],
    mx: 35,
    my: 270,
    mcp1: [90, 320],
    mcp2: [50, 290],
    pulseDuration: 3.4,
    particleDuration: 4.0,
    particleDelay: 0.4,
  },

  // LEFT MID-LOWER-CENTER: Bash
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    darkInvert: true,
    originSide: "left",
    dx: 80,
    dy: 440,
    dcp1: [240, 420],
    dcp2: [140, 430],
    mx: 35,
    my: 350,
    mcp1: [90, 350],
    mcp2: [50, 350],
    pulseDuration: 3.9,
    particleDuration: 4.6,
    particleDelay: 2.1,
  },

  // LEFT MID-LOWER: Linux
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    originSide: "left",
    dx: 130,
    dy: 535,
    dcp1: [260, 480],
    dcp2: [170, 520],
    mx: 45,
    my: 430,
    mcp1: [95, 390],
    mcp2: [55, 420],
    pulseDuration: 3.3,
    particleDuration: 3.8,
    particleDelay: 0.6,
  },

  // BOTTOM LEFT APEX: Python
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    originSide: "left",
    dx: 230,
    dy: 630,
    dcp1: [320, 540],
    dcp2: [250, 600],
    mx: 80,
    my: 510,
    mcp1: [115, 430],
    mcp2: [90, 480],
    pulseDuration: 3.6,
    particleDuration: 4.3,
    particleDelay: 1.1,
  },

  // ==================== RIGHT HAND CLUSTER (6 TECHS) ====================
  // TOP RIGHT APEX: VS Code
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    originSide: "right",
    dx: 770,
    dy: 140,
    dcp1: [680, 240],
    dcp2: [750, 180],
    mx: 320,
    my: 110,
    mcp1: [285, 220],
    mcp2: [310, 150],
    pulseDuration: 3.2,
    particleDuration: 3.6,
    particleDelay: 0.1,
  },

  // RIGHT MID-UPPER: AWS
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    darkInvert: true,
    originSide: "right",
    dx: 870,
    dy: 235,
    dcp1: [740, 300],
    dcp2: [830, 260],
    mx: 355,
    my: 190,
    mcp1: [305, 270],
    mcp2: [345, 220],
    pulseDuration: 3.3,
    particleDuration: 3.9,
    particleDelay: 0.3,
  },

  // RIGHT MID-UPPER-CENTER: Git
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    originSide: "right",
    dx: 920,
    dy: 335,
    dcp1: [760, 370],
    dcp2: [860, 350],
    mx: 365,
    my: 270,
    mcp1: [310, 320],
    mcp2: [350, 290],
    pulseDuration: 3.7,
    particleDuration: 4.2,
    particleDelay: 1.3,
  },

  // RIGHT MID-LOWER-CENTER: Jenkins
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    originSide: "right",
    dx: 920,
    dy: 440,
    dcp1: [760, 420],
    dcp2: [860, 430],
    mx: 365,
    my: 350,
    mcp1: [310, 350],
    mcp2: [350, 350],
    pulseDuration: 3.5,
    particleDuration: 4.1,
    particleDelay: 0.9,
  },

  // RIGHT MID-LOWER: Nginx
  {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    originSide: "right",
    dx: 870,
    dy: 535,
    dcp1: [740, 480],
    dcp2: [830, 520],
    mx: 355,
    my: 430,
    mcp1: [305, 390],
    mcp2: [345, 420],
    pulseDuration: 3.8,
    particleDuration: 4.5,
    particleDelay: 1.8,
  },

  // BOTTOM RIGHT APEX: Docker
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    originSide: "right",
    dx: 770,
    dy: 630,
    dcp1: [680, 540],
    dcp2: [750, 600],
    mx: 320,
    my: 510,
    mcp1: [285, 430],
    mcp2: [310, 480],
    pulseDuration: 3.4,
    particleDuration: 3.9,
    particleDelay: 0.5,
  },
];

export default function TechStack() {
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const uniquePrefix = useId().replace(/:/g, "_");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Screen-specific dimensions
  const viewWidth = isMobile ? 400 : 1000;
  const viewHeight = isMobile ? 640 : 720;

  // Origin coordinates (Centered dead-in-palm for both hands)
  const leftOrigin = isMobile ? { x: 152, y: 333 } : { x: 395, y: 390 };
  const rightOrigin = isMobile ? { x: 248, y: 333 } : { x: 607, y: 390 };
  const crownOrigin = isMobile ? { x: 200, y: 274 } : { x: 500, y: 275 };

  return (
    <section className="py-[80px] sm:py-[120px] bg-black overflow-hidden relative select-none">
      {/* Global CSS for cinematic animations & reduced-motion safety */}
      <style jsx global>{`
        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @keyframes auraBreathing {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.06);
            opacity: 0.65;
          }
        }
        @keyframes energyDashTravel {
          0% {
            stroke-dashoffset: 120;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .tech-node-float {
          animation: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-node-float,
          .loki-aura-pulse {
            animation: none !important;
          }
          .energy-dash-path {
            animation: none !important;
            stroke-dasharray: none !important;
          }
        }
      `}</style>

      {/* Cinematic Deep Space & Multiverse Atmosphere Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12)_0%,_rgba(6,78,59,0.06)_45%,_transparent_75%)] blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08)_0%,_transparent_70%)] blur-[110px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.18)_0%,_transparent_65%)] blur-[80px] rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Section Heading — Preserved 100% untouched */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4 leading-tight">
            Cloud & DevOps
            <br className="lg:hidden" />
            <span> Technology Stack</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 font-medium text-sm sm:text-base">
            The tools and platforms I use to build, automate, and manage cloud
            infrastructure and deployment pipelines.
          </p>
        </motion.div>

        {/* Cinematic Timeline Interactive Stage */}
        <div
          className="relative w-full max-w-[1040px] aspect-[400/640] sm:aspect-[1000/720] mx-auto flex items-center justify-center"
          role="region"
          aria-label="Interactive Cloud and DevOps Technology Stack timeline network centered around Loki God of Stories"
          onClick={() => setActiveTechIndex(null)}
        >

          {/* SVG Animated Energy Strands */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox={`0 0 ${viewWidth} ${viewHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              {/* Primary Emerald-Amber-Cyan Temporal Gradient */}
              <linearGradient id={`${uniquePrefix}_cinematicGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#34d399" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
              </linearGradient>

              {/* Active Golden-Emerald Highlight Gradient */}
              <linearGradient id={`${uniquePrefix}_activeGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="1" />
              </linearGradient>

              {/* Intense Atmospheric Energy Glow Filter */}
              <filter id={`${uniquePrefix}_intenseGlow`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Particle Spark Filter */}
              <filter id={`${uniquePrefix}_particleSpark`} x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Render Energy Strands & Traveling Photons */}
            {techs.map((tech, idx) => {
              const tx = isMobile ? tech.mx : tech.dx;
              const ty = isMobile ? tech.my : tech.dy;
              const cp1 = isMobile ? tech.mcp1 : tech.dcp1;
              const cp2 = isMobile ? tech.mcp2 : tech.dcp2;

              const origin =
                tech.originSide === "top"
                  ? crownOrigin
                  : tech.originSide === "left"
                    ? leftOrigin
                    : rightOrigin;

              const pathD = `M ${origin.x} ${origin.y} C ${cp1[0]} ${cp1[1]}, ${cp2[0]} ${cp2[1]}, ${tx} ${ty}`;
              const isActive = activeTechIndex === idx;
              const isAnyActive = activeTechIndex !== null;
              const pathId = `${uniquePrefix}_path_${idx}`;

              return (
                <g
                  key={tech.name}
                  className="transition-opacity duration-300"
                  style={{
                    opacity: isAnyActive ? (isActive ? 1 : 0.22) : 0.85,
                  }}
                >
                  {/* Layer 1: Wide Diffuse Atmospheric Glow */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? "#fbbf24" : "#10b981"}
                    strokeWidth={isActive ? (isMobile ? 5 : 7) : isMobile ? 2.5 : 3.5}
                    strokeOpacity={isActive ? 0.75 : 0.2}
                    filter={`url(#${uniquePrefix}_intenseGlow)`}
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Layer 2: Core Glowing Solid Timeline Strand */}
                  <path
                    id={pathId}
                    d={pathD}
                    fill="none"
                    stroke={`url(#${isActive ? `${uniquePrefix}_activeGrad` : `${uniquePrefix}_cinematicGrad`})`}
                    strokeWidth={isActive ? (isMobile ? 2.2 : 2.8) : isMobile ? 1.0 : 1.35}
                    strokeOpacity={isActive ? 1 : 0.7}
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Layer 3: Continuous Flowing Energy Pulse (CSS Dashed Travel) */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? "#ffffff" : "#6ee7b7"}
                    strokeWidth={isActive ? (isMobile ? 2.6 : 3.2) : isMobile ? 1.4 : 1.8}
                    strokeDasharray="18 90"
                    className="energy-dash-path"
                    style={{
                      animation: `energyDashTravel ${tech.pulseDuration}s linear infinite`,
                      opacity: isActive ? 0.95 : 0.6,
                    }}
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Layer 4: Traveling Photon Energy Spark (Native SVG Compositor Accelerated) */}
                  <circle
                    r={isActive ? (isMobile ? 3.5 : 4.5) : isMobile ? 2.2 : 2.8}
                    fill={isActive ? "#fef08a" : "#a7f3d0"}
                    filter={`url(#${uniquePrefix}_particleSpark)`}
                    opacity="0"
                  >
                    <animateMotion
                      dur={`${tech.particleDuration}s`}
                      repeatCount="indefinite"
                      begin={`${tech.particleDelay}s`}
                      path={pathD}
                      keyPoints="0;0.12;0.5;0.88;1"
                      keyTimes="0;0.15;0.5;0.85;1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.9;1;0.9;0"
                      keyTimes="0;0.15;0.5;0.85;1"
                      dur={`${tech.particleDuration}s`}
                      repeatCount="indefinite"
                      begin={`${tech.particleDelay}s`}
                    />
                  </circle>

                  {/* Terminal Node Connection Socket Circle */}
                  <circle
                    cx={tx}
                    cy={ty}
                    r={isActive ? (isMobile ? 3.5 : 4.5) : isMobile ? 2.0 : 2.8}
                    fill={isActive ? "#fbbf24" : "#34d399"}
                    filter={`url(#${uniquePrefix}_intenseGlow)`}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}

            {/* Glowing Marvel/Loki Cosmic Palm Energy Orbs (Pure Emerald Green) */}
            {[leftOrigin, rightOrigin].map((pos, pIdx) => (
              <g key={`palm_orb_${pIdx}`}>
                {/* Layer 1: Outer Atmospheric Radiance Aura */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isMobile ? 14 : 22}
                  fill="#10b981"
                  opacity="0.45"
                  filter={`url(#${uniquePrefix}_intenseGlow)`}
                />

                {/* Layer 2: Expanding Emerald Energy Shockwave Ring */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  fill="none"
                  stroke="#34d399"
                  strokeWidth={isMobile ? "1.5" : "2"}
                  filter={`url(#${uniquePrefix}_intenseGlow)`}
                >
                  <animate
                    attributeName="r"
                    values={isMobile ? "4;16;4" : "6;24;6"}
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;0.1;0.9"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Layer 3: Vivid Emerald Core Power Socket */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isMobile ? 5.5 : 8.5}
                  fill="#10b981"
                  filter={`url(#${uniquePrefix}_intenseGlow)`}
                />

                {/* Layer 4: Ultra-Bright Mint Emerald Nucleus */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isMobile ? 2.8 : 4.2}
                  fill="#a7f3d0"
                  filter={`url(#${uniquePrefix}_intenseGlow)`}
                />
              </g>
            ))}
          </svg>

          {/* Central Loki God of Stories Visual Centerpiece (Backward / Behind Energy Lines) */}
          <div
            className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
            style={{
              width: isMobile ? "165px" : "440px",
              height: isMobile ? "165px" : "440px",
            }}
          >
            {/* Ambient Multi-Ring Cosmic Auras & Intense Glow Backdrop */}
            <div
              className="loki-aura-pulse absolute top-1/2 left-1/2 w-[130%] h-[130%] rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.45)_0%,_rgba(5,150,105,0.2)_45%,_transparent_75%)] pointer-events-none filter blur-xl"
              style={{ animation: "auraBreathing 4.5s ease-in-out infinite" }}
            />

            {/* Intense Emerald Inner Backdrop Glow */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl pointer-events-none animate-pulse" />

            {/* Rotating Subtle Celestial Energy Rings */}
            <div
              className="absolute w-[88%] h-[88%] rounded-full border border-emerald-400/40 border-dashed pointer-events-none animate-spin shadow-[0_0_20px_rgba(52,211,153,0.3)]"
              style={{ animationDuration: "55s" }}
            />
            <div
              className="absolute w-[105%] h-[105%] rounded-full border border-emerald-500/30 border-dotted pointer-events-none animate-spin"
              style={{ animationDuration: "80s", animationDirection: "reverse" }}
            />

            {/* Centerpiece Image Container */}
            <div className="relative w-full h-full flex items-center justify-center rounded-full overflow-hidden [mask-image:radial-gradient(circle_at_center,black_55%,transparent_88%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_55%,transparent_88%)]">
              <Image
                src="/loki-centerpiece.png"
                alt="Loki God of Stories Timeline Controller"
                fill
                sizes="(max-width: 640px) 240px, 440px"
                className="object-contain object-center drop-shadow-[0_0_25px_rgba(52,211,153,0.8)] drop-shadow-[0_0_55px_rgba(16,185,129,0.55)] rounded-full"
                priority
                unoptimized
              />
              {/* Overlay Energy Sheen on top of PNG Image */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.25)_0%,_rgba(16,185,129,0.1)_45%,_transparent_75%)] pointer-events-none rounded-full mix-blend-screen animate-pulse" />
              {/* Seamless Radial Vignette so image edges softly blend into pure black */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_rgba(0,0,0,0.75)_70%,_black_98%)] pointer-events-none rounded-full" />
            </div>
          </div>

          {/* Technology Nodes (Interactive HTML / React Elements) */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {techs.map((tech, idx) => {
              const tx = isMobile ? tech.mx : tech.dx;
              const ty = isMobile ? tech.my : tech.dy;
              const px = (tx / viewWidth) * 100;
              const py = (ty / viewHeight) * 100;
              const isActive = activeTechIndex === idx;

              return (
                <div
                  key={tech.name}
                  style={{
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${idx * 0.25}s`,
                  }}
                  className="absolute pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActiveTechIndex(idx)}
                  onMouseLeave={() => setActiveTechIndex(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTechIndex(isActive ? null : idx);
                  }}
                  tabIndex={0}
                  onFocus={() => setActiveTechIndex(idx)}
                  onBlur={() => setActiveTechIndex(null)}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`${tech.name} technology node`}
                >
                  {/* Subtle Floating Ambient Glow Behind Badge */}
                  <div
                    className={`absolute -inset-1.5 rounded-full transition-all duration-300 pointer-events-none ${isActive
                      ? "bg-amber-400/50 blur-md scale-125 opacity-100"
                      : "bg-emerald-500/25 blur-sm opacity-50 group-hover:opacity-100 group-hover:scale-115"
                      }`}
                  />

                  {/* Pulsing Active Energy Ripple Ring */}
                  {isActive && (
                    <div className="absolute -inset-3 rounded-full border border-amber-400/50 animate-ping pointer-events-none" />
                  )}

                  {/* Glassmorphic Circular Node Socket */}
                  <div
                    className={`relative w-10 h-10 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md ${isActive
                      ? "bg-[#111913]/95 border-2 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.65),0_0_50px_rgba(16,185,129,0.4)] scale-115"
                      : "bg-[#080d09]/90 border border-emerald-500/40 hover:border-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.3)] hover:scale-110"
                      }`}
                  >
                    {/* Inner Metallic Radial Sheen */}
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,_rgba(255,255,255,0.12)_0%,_transparent_65%)] pointer-events-none" />

                    {/* Technology Icon */}
                    <FallbackImage
                      src={tech.icon}
                      alt={tech.name}
                      width={22}
                      height={22}
                      title={tech.name}
                      className={`transition-transform duration-300 ${tech.darkInvert ? "brightness-0 invert sm:w-7 sm:h-7" : "sm:w-7 sm:h-7"
                        } ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                    />
                  </div>

                  {/* High Contrast Tooltip Badge */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-7 sm:-bottom-8 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/95 border text-[10px] sm:text-[11.5px] font-bold tracking-wide text-white shadow-xl pointer-events-none whitespace-nowrap transition-all duration-200 z-50 ${isActive
                      ? "opacity-100 scale-100 border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                      : "opacity-0 scale-90 border-emerald-500/40 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                  >
                    <span
                      className={`font-extrabold mr-1.5 transition-colors ${isActive ? "text-amber-400" : "text-emerald-400"
                        }`}
                    >
                      •
                    </span>
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
