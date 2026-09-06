"use client";

import { useState, useEffect, useId } from "react";
import Image from "next/image";
import FallbackImage from "../ui/FallbackImage";

// ===================================================================================
// THOR LIGHT MODE TECH DEFINITIONS & COORDINATE SYSTEM
// SVG Virtual Space:
// Desktop: 1000 x 720 (Thor Center: 500, 360 | Left Hand: 395, 390 | Right Hand: 607, 390)
// Mobile: 400 x 640 (Thor Center: 200, 320 | Left Hand: 152, 333 | Right Hand: 248, 333)
// ===================================================================================

interface TechItem {
  name: string;
  icon: string;
  darkInvert?: boolean;
  originSide: "left" | "right";
  originGroup: 1 | 2 | 3; // 1: Lower (K8s/Python, Git/Docker), 2: Middle (Linux/Bash, Nginx/Jenkins), 3: Upper (GitHub/Terraform, AWS/VS Code)
  dx: number;
  dy: number;
  dcp1: [number, number];
  dcp2: [number, number];
  mx: number;
  my: number;
  mcp1: [number, number];
  mcp2: [number, number];
  pulseDuration: number;
  particleDuration: number;
  particleDelay: number;
}

const techs: TechItem[] = [
  // ==================== LEFT CLUSTER (6 TECHS) ====================
  // Pair Three: Terraform & GitHub -> Upper Left Origin (leftOrigin3)
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    originSide: "left",
    originGroup: 3,
    dx: 350,
    dy: 95,
    dcp1: [390, 160],
    dcp2: [360, 115],
    mx: 130,
    my: 85,
    mcp1: [150, 140],
    mcp2: [135, 105],
    pulseDuration: 2.5,
    particleDuration: 3.2,
    particleDelay: 0.4,
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    originSide: "left",
    originGroup: 3,
    dx: 230,
    dy: 135,
    dcp1: [320, 200],
    dcp2: [250, 150],
    mx: 85,
    my: 115,
    mcp1: [120, 170],
    mcp2: [95, 135],
    pulseDuration: 2.8,
    particleDuration: 3.5,
    particleDelay: 0.9,
  },
  // Pair Two: Bash & Linux -> Middle Left Origin (leftOrigin2)
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    originSide: "left",
    originGroup: 2,
    dx: 135,
    dy: 185,
    dcp1: [260, 230],
    dcp2: [170, 195],
    mx: 48,
    my: 150,
    mcp1: [100, 200],
    mcp2: [60, 170],
    pulseDuration: 2.9,
    particleDuration: 3.6,
    particleDelay: 1.2,
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    originSide: "left",
    originGroup: 2,
    dx: 75,
    dy: 240,
    dcp1: [230, 265],
    dcp2: [120, 250],
    mx: 30,
    my: 190,
    mcp1: [85, 235],
    mcp2: [45, 210],
    pulseDuration: 2.3,
    particleDuration: 2.9,
    particleDelay: 0.5,
  },
  // Pair One: Python & Kubernetes -> Lower Left Origin (leftOrigin1)
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    originSide: "left",
    originGroup: 1,
    dx: 85,
    dy: 295,
    dcp1: [240, 305],
    dcp2: [135, 295],
    mx: 38,
    my: 235,
    mcp1: [95, 275],
    mcp2: [55, 250],
    pulseDuration: 2.6,
    particleDuration: 3.4,
    particleDelay: 0.7,
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    originSide: "left",
    originGroup: 1,
    dx: 130,
    dy: 345,
    dcp1: [250, 350],
    dcp2: [160, 340],
    mx: 55,
    my: 275,
    mcp1: [105, 315],
    mcp2: [70, 290],
    pulseDuration: 2.4,
    particleDuration: 3.1,
    particleDelay: 0.2,
  },

  // ==================== RIGHT CLUSTER (6 TECHS) ====================
  // Pair Three: VS Code & AWS -> Upper Right Origin (rightOrigin3)
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    originSide: "right",
    originGroup: 3,
    dx: 650,
    dy: 95,
    dcp1: [610, 160],
    dcp2: [640, 115],
    mx: 270,
    my: 85,
    mcp1: [250, 140],
    mcp2: [265, 105],
    pulseDuration: 2.2,
    particleDuration: 3.0,
    particleDelay: 0.1,
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    originSide: "right",
    originGroup: 3,
    dx: 770,
    dy: 135,
    dcp1: [680, 200],
    dcp2: [750, 150],
    mx: 315,
    my: 115,
    mcp1: [280, 170],
    mcp2: [305, 135],
    pulseDuration: 2.5,
    particleDuration: 3.3,
    particleDelay: 0.3,
  },
  // Pair Two: Jenkins & Nginx -> Middle Right Origin (rightOrigin2)
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    originSide: "right",
    originGroup: 2,
    dx: 865,
    dy: 185,
    dcp1: [740, 230],
    dcp2: [830, 195],
    mx: 352,
    my: 150,
    mcp1: [300, 200],
    mcp2: [340, 170],
    pulseDuration: 2.6,
    particleDuration: 3.2,
    particleDelay: 0.6,
  },
  {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    originSide: "right",
    originGroup: 2,
    dx: 925,
    dy: 240,
    dcp1: [770, 265],
    dcp2: [880, 250],
    mx: 370,
    my: 190,
    mcp1: [315, 235],
    mcp2: [355, 210],
    pulseDuration: 2.8,
    particleDuration: 3.6,
    particleDelay: 1.0,
  },
  // Pair One: Docker & Git -> Lower Right Origin (rightOrigin1)
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    originSide: "right",
    originGroup: 1,
    dx: 915,
    dy: 295,
    dcp1: [760, 305],
    dcp2: [865, 295],
    mx: 362,
    my: 235,
    mcp1: [305, 275],
    mcp2: [345, 250],
    pulseDuration: 2.4,
    particleDuration: 3.1,
    particleDelay: 0.3,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    originSide: "right",
    originGroup: 1,
    dx: 870,
    dy: 345,
    dcp1: [750, 350],
    dcp2: [840, 340],
    mx: 345,
    my: 275,
    mcp1: [295, 315],
    mcp2: [330, 290],
    pulseDuration: 2.7,
    particleDuration: 3.5,
    particleDelay: 0.8,
  },
];

export default function ThorTechStack() {
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const uniquePrefix = useId().replace(/:/g, "_") + "_thor";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const viewWidth = isMobile ? 400 : 1000;
  const viewHeight = isMobile ? 640 : 720;

  // 6 Dedicated Origin Points on Thor (3 Left, 3 Right)
  // Left side origin pairs:
  // leftOrigin1: Lower Left (Kubernetes & Python)
  // leftOrigin2: Middle Left (Linux & Bash)
  // leftOrigin3: Upper Left (GitHub & Terraform)
  const leftOrigin1 = isMobile ? { x: 197, y: 330 } : { x: 492, y: 383 };
  const leftOrigin2 = isMobile ? { x: 195, y: 314 } : { x: 488, y: 345 };
  const leftOrigin3 = isMobile ? { x: 168, y: 250 } : { x: 430, y: 210 };

  // Right side origin pairs:
  // rightOrigin1: Lower Right (Git & Docker)
  // rightOrigin2: Middle Right (Nginx & Jenkins)
  // rightOrigin3: Upper Right (AWS & VS Code)
  const rightOrigin1 = isMobile ? { x: 216, y: 330 } : { x: 535, y: 385 };
  const rightOrigin2 = isMobile ? { x: 217, y: 316 } : { x: 543, y: 349 };
  const rightOrigin3 = isMobile ? { x: 184, y: 255 } : { x: 460, y: 220 };

  return (
    <section id="skills" className="py-10 sm:py-14 bg-gray-50 dark:bg-black overflow-hidden relative select-none">
      {/* Keyframe Animations for Thor Lightning */}
      <style jsx global>{`
        @keyframes thorLightningPulse {
          0%, 100% { stroke-dashoffset: 200; opacity: 0.8; }
          50% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes thorFlicker {
          0%, 100% { opacity: 0.9; }
          15% { opacity: 0.45; }
          30% { opacity: 1; }
          45% { opacity: 0.6; }
          65% { opacity: 0.95; }
          80% { opacity: 0.5; }
        }

        @keyframes thorElectricRing {
          0% { transform: scale(0.92); opacity: 0.6; }
          50% { transform: scale(1.08); opacity: 0.95; }
          100% { transform: scale(0.92); opacity: 0.6; }
        }

        @keyframes thorThorGlowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.6))
                    drop-shadow(0 0 45px rgba(2, 132, 199, 0.4));
          }
          25% {
            filter: drop-shadow(0 0 35px rgba(56, 189, 248, 0.95))
                    drop-shadow(0 0 70px rgba(186, 230, 253, 0.8))
                    brightness(1.12) contrast(1.05);
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(56, 189, 248, 0.7))
                    drop-shadow(0 0 50px rgba(14, 165, 233, 0.5));
          }
          75% {
            filter: drop-shadow(0 0 45px rgba(56, 189, 248, 1))
                    drop-shadow(0 0 85px rgba(56, 189, 248, 0.85))
                    brightness(1.18) contrast(1.08);
          }
        }

        @keyframes thorWildLightningCrackle {
          0%, 100% { stroke-dashoffset: 300; opacity: 0.3; }
          12% { stroke-dashoffset: 0; opacity: 1; filter: drop-shadow(0 0 12px #38bdf8); }
          28% { stroke-dashoffset: 180; opacity: 0.2; }
          45% { stroke-dashoffset: 0; opacity: 0.95; filter: drop-shadow(0 0 20px #e0f2fe); }
          62% { stroke-dashoffset: 240; opacity: 0.4; }
          78% { stroke-dashoffset: 0; opacity: 1; filter: drop-shadow(0 0 16px #38bdf8); }
          90% { stroke-dashoffset: 90; opacity: 0.3; }
        }

        .thor-wild-lightning {
          stroke-dasharray: 40 120;
          animation: thorWildLightningCrackle 1.8s ease-in-out infinite;
        }

        .thor-wild-lightning-fast {
          stroke-dasharray: 25 90;
          animation: thorWildLightningCrackle 1.2s ease-in-out infinite reverse;
        }

        .thor-character-lightning {
          animation: thorThorGlowPulse 2.8s ease-in-out infinite;
        }

        .thor-lightning-dash {
          stroke-dasharray: 20 80;
          animation: thorLightningPulse 2s linear infinite;
        }

        .thor-flicker-group {
          animation: thorFlicker 3.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .thor-lightning-dash, .thor-flicker-group, .thor-character-lightning, .thor-wild-lightning, .thor-wild-lightning-fast {
            animation: none !important;
          }
        }
      `}</style>

      {/* Subtle Light Mode Electric Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] sm:h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12)_0%,_rgba(2,132,199,0.06)_45%,_transparent_75%)] blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Section Heading — Static rendering to prevent reload on scroll */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Cloud &amp; DevOps
            <br className="lg:hidden" />
            <span> Technology Stack</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-6 font-medium text-sm sm:text-base">
            The tools and platforms I use to build, automate, and manage cloud
            infrastructure and deployment pipelines.
          </p>
        </div>

        {/* Thor Interactive Stage */}
        <div
          className="relative w-full max-w-[1040px] aspect-[400/640] sm:aspect-[1000/720] mx-auto flex items-center justify-center"
          role="region"
          aria-label="Thor Technology Stack Lightning Network"
        >
          {/* ==================================================================== */}
          {/* CENTERPIECE: THOR WITH ELECTRIC LIGHTNING AURA */}
          {/* ==================================================================== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex items-center justify-center">
            {/* Outer Electric Atmosphere Halo */}
            <div className="absolute w-[240px] h-[240px] sm:w-[500px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.22)_0%,_rgba(14,165,233,0.08)_50%,_transparent_75%)] blur-2xl animate-pulse" />

            {/* Thor Image Container with Character Electric Overlay */}
            <div className="relative w-[165px] sm:w-[420px] aspect-square flex items-center justify-center">
              {/* Radial gradient mask to blend Thor smoothly into light background */}
              <div className="w-full h-full relative overflow-hidden rounded-full p-2">
                <Image
                  src="/thor.png"
                  alt="Thor - Cloud Infrastructure Lightning Network"
                  fill
                  sizes="(max-width: 640px) 165px, 420px"
                  className="object-contain thor-character-lightning transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* SVG ELECTRIC LIGHTNING NETWORK */}
          {/* ==================================================================== */}
          <svg
            viewBox={`0 0 ${viewWidth} ${viewHeight}`}
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Electric Blue & White Glow Filters */}
              <filter
                id={`${uniquePrefix}_intenseLightningGlow`}
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur stdDeviation="3.5" result="blur1" />
                <feGaussianBlur stdDeviation="7" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id={`${uniquePrefix}_particleSpark`}
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="2.5" result="sparkBlur" />
                <feMerge>
                  <feMergeNode in="sparkBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Electric Blue Gradient for Lightning Strands */}
              <linearGradient
                id={`${uniquePrefix}_lightningGrad`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
              </linearGradient>

              {/* Active Hover Gradient */}
              <linearGradient
                id={`${uniquePrefix}_activeLightningGrad`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="40%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* ==================================================================== */}
            {/* THOR CHARACTER FULL LIGHTNING ERUPTION & BODY ENERGY ARCS */}
            {/* ==================================================================== */}
            <g filter={`url(#${uniquePrefix}_intenseLightningGlow)`} className="thor-flicker-group">
              {(() => {
                const cx = isMobile ? 200 : 500;
                const cy = isMobile ? 310 : 340;
                const scale = isMobile ? 0.5 : 1.0;

                return (
                  <g key="thor-body-lightning-burst">
                    {/* Crackling Body Lightning Bolt 1: Crown & Helmet Eruption */}
                    <path
                      d={`M ${cx} ${cy - 80 * scale} L ${cx - 20 * scale} ${cy - 120 * scale} L ${cx + 10 * scale} ${cy - 150 * scale} L ${cx - 15 * scale} ${cy - 185 * scale}`}
                      fill="none"
                      stroke="#e0f2fe"
                      strokeWidth={2.8 * scale}
                      strokeLinecap="round"
                      className="thor-wild-lightning"
                    />

                    {/* Crackling Body Lightning Bolt 2: Left Shoulder / Mjolnir Hammer Burst */}
                    <path
                      d={`M ${cx - 20 * scale} ${cy - 30 * scale} L ${cx - 70 * scale} ${cy - 60 * scale} L ${cx - 50 * scale} ${cy - 100 * scale} L ${cx - 110 * scale} ${cy - 130 * scale}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth={3 * scale}
                      strokeLinecap="round"
                      className="thor-wild-lightning-fast"
                    />

                    {/* Crackling Body Lightning Bolt 3: Right Arm / Armor Eruption */}
                    <path
                      d={`M ${cx + 25 * scale} ${cy - 20 * scale} L ${cx + 75 * scale} ${cy - 45 * scale} L ${cx + 60 * scale} ${cy - 85 * scale} L ${cx + 120 * scale} ${cy - 115 * scale}`}
                      fill="none"
                      stroke="#7dd3fc"
                      strokeWidth={2.6 * scale}
                      strokeLinecap="round"
                      className="thor-wild-lightning"
                    />

                    {/* Crackling Body Lightning Bolt 4: Lower Torso Left Discharge */}
                    <path
                      d={`M ${cx - 10 * scale} ${cy + 30 * scale} L ${cx - 55 * scale} ${cy + 75 * scale} L ${cx - 40 * scale} ${cy + 105 * scale} L ${cx - 85 * scale} ${cy + 145 * scale}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth={2.8 * scale}
                      strokeLinecap="round"
                      className="thor-wild-lightning-fast"
                    />

                    {/* Crackling Body Lightning Bolt 5: Lower Torso Right Discharge */}
                    <path
                      d={`M ${cx + 15 * scale} ${cy + 35 * scale} L ${cx + 65 * scale} ${cy + 80 * scale} L ${cx + 45 * scale} ${cy + 115 * scale} L ${cx + 90 * scale} ${cy + 150 * scale}`}
                      fill="none"
                      stroke="#e0f2fe"
                      strokeWidth={2.4 * scale}
                      strokeLinecap="round"
                      className="thor-wild-lightning"
                    />

                    {/* Surrounding Electric Spark Nodes on Thor Body */}
                    {[
                      { x: cx - 45 * scale, y: cy - 90 * scale },
                      { x: cx + 55 * scale, y: cy - 70 * scale },
                      { x: cx - 30 * scale, y: cy + 85 * scale },
                      { x: cx + 40 * scale, y: cy + 95 * scale },
                    ].map((sp, sIdx) => (
                      <circle
                        key={sIdx}
                        cx={sp.x}
                        cy={sp.y}
                        r={3.5 * scale}
                        fill="#ffffff"
                        className="animate-ping"
                      />
                    ))}
                  </g>
                );
              })()}
            </g>

            {/* Render Electric Lightning Branches & Traveling Energy Particles */}
            {techs.map((tech, idx) => {
              const tx = isMobile ? tech.mx : tech.dx;
              const ty = isMobile ? tech.my : tech.dy;
              const cp1 = isMobile ? tech.mcp1 : tech.dcp1;
              const cp2 = isMobile ? tech.mcp2 : tech.dcp2;

              const origin =
                tech.originSide === "left"
                  ? tech.originGroup === 3
                    ? leftOrigin3
                    : tech.originGroup === 2
                      ? leftOrigin2
                      : leftOrigin1
                  : tech.originGroup === 3
                    ? rightOrigin3
                    : tech.originGroup === 2
                      ? rightOrigin2
                      : rightOrigin1;

              // Dynamic 3-phase wave control points for electric undulating motion
              const offset = isMobile ? 16 : 30;
              const cp1Alt1: [number, number] = [
                cp1[0] + (idx % 2 === 0 ? offset : -offset),
                cp1[1] + (idx % 3 === 0 ? -offset * 0.8 : offset * 0.8),
              ];
              const cp2Alt1: [number, number] = [
                cp2[0] + (idx % 2 === 0 ? -offset * 0.8 : offset * 0.8),
                cp2[1] + (idx % 3 === 0 ? offset : -offset),
              ];

              const cp1Alt2: [number, number] = [
                cp1[0] + (idx % 2 === 0 ? -offset : offset),
                cp1[1] + (idx % 3 === 0 ? offset * 0.8 : -offset * 0.8),
              ];
              const cp2Alt2: [number, number] = [
                cp2[0] + (idx % 2 === 0 ? offset * 0.8 : -offset * 0.8),
                cp2[1] + (idx % 3 === 0 ? -offset : offset),
              ];

              const pathD = `M ${origin.x} ${origin.y} C ${cp1[0]} ${cp1[1]}, ${cp2[0]} ${cp2[1]}, ${tx} ${ty}`;
              const pathDAlt1 = `M ${origin.x} ${origin.y} C ${cp1Alt1[0]} ${cp1Alt1[1]}, ${cp2Alt1[0]} ${cp2Alt1[1]}, ${tx} ${ty}`;
              const pathDAlt2 = `M ${origin.x} ${origin.y} C ${cp1Alt2[0]} ${cp1Alt2[1]}, ${cp2Alt2[0]} ${cp2Alt2[1]}, ${tx} ${ty}`;

              // Branching side-spark path formula for electric feel
              const forkD = `M ${cp1[0]} ${cp1[1]} L ${cp1[0] + (idx % 2 === 0 ? 18 : -18)} ${cp1[1] + (idx % 3 === 0 ? -15 : 15)}`;

              const animValues = `${pathD}; ${pathDAlt1}; ${pathDAlt2}; ${pathD}`;
              const animDur = `${2.8 + (idx % 4) * 0.5}s`;

              const isActive = activeTechIndex === idx;
              const isAnyActive = activeTechIndex !== null;
              const pathId = `${uniquePrefix}_path_${idx}`;

              return (
                <g
                  key={tech.name}
                  className="transition-opacity duration-300 thor-flicker-group"
                  style={{
                    opacity: 0.85,
                  }}
                >
                  {/* Layer 1: Wide Electric Blue Atmospheric Glow */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? "#0284c7" : "#38bdf8"}
                    strokeWidth={isActive ? (isMobile ? 5 : 7) : isMobile ? 2.5 : 3.5}
                    strokeOpacity={isActive ? 0.85 : 0.25}
                    filter={`url(#${uniquePrefix}_intenseLightningGlow)`}
                    vectorEffect="non-scaling-stroke"
                  >
                    <animate
                      attributeName="d"
                      values={animValues}
                      dur={animDur}
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Layer 2: Core Electric Cyan / White Lightning Strand */}
                  <path
                    id={pathId}
                    d={pathD}
                    fill="none"
                    stroke={`url(#${isActive ? `${uniquePrefix}_activeLightningGrad` : `${uniquePrefix}_lightningGrad`})`}
                    strokeWidth={isActive ? (isMobile ? 2.4 : 3.0) : isMobile ? 1.2 : 1.6}
                    strokeOpacity={isActive ? 1 : 0.8}
                    vectorEffect="non-scaling-stroke"
                  >
                    <animate
                      attributeName="d"
                      values={animValues}
                      dur={animDur}
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Layer 3: Branching Electric Side Sparks */}
                  <path
                    d={forkD}
                    fill="none"
                    stroke={isActive ? "#ffffff" : "#60a5fa"}
                    strokeWidth={isMobile ? 0.8 : 1.2}
                    strokeOpacity={isActive ? 0.9 : 0.4}
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Layer 4: Continuous Flowing Electric Pulse (CSS Dashed Travel) */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? "#ffffff" : "#bae6fd"}
                    strokeWidth={isActive ? (isMobile ? 2.8 : 3.4) : isMobile ? 1.4 : 1.8}
                    strokeDasharray="16 70"
                    className="thor-lightning-dash"
                    style={{
                      animation: `thorLightningPulse ${tech.pulseDuration}s linear infinite`,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    vectorEffect="non-scaling-stroke"
                  >
                    <animate
                      attributeName="d"
                      values={animValues}
                      dur={animDur}
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Layer 5: Traveling Electrical Photon Energy Spark */}
                  <circle
                    r={isActive ? (isMobile ? 4 : 5) : isMobile ? 2.5 : 3.2}
                    fill={isActive ? "#ffffff" : "#7dd3fc"}
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
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0; 1; 1; 1; 0"
                      keyTimes="0; 0.15; 0.5; 0.85; 1"
                      dur={`${tech.particleDuration}s`}
                      repeatCount="indefinite"
                      begin={`${tech.particleDelay}s`}
                    />
                  </circle>
                </g>
              );
            })}

            {/* Thor 6 Origin Electric Glowing Nodes (3 Left, 3 Right) */}
            <g filter={`url(#${uniquePrefix}_intenseLightningGlow)`}>
              {[leftOrigin1, leftOrigin2, leftOrigin3, rightOrigin1, rightOrigin2, rightOrigin3].map((pt, i) => (
                <g key={i}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isMobile ? 5 : 7}
                    fill="#38bdf8"
                    className="animate-pulse"
                  />
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isMobile ? 2.5 : 3.5}
                    fill="#ffffff"
                  />
                </g>
              ))}
            </g>
          </svg>

          {/* ==================================================================== */}
          {/* TECHNOLOGY BADGE NODES */}
          {/* ==================================================================== */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {techs.map((tech, idx) => {
              const tx = isMobile ? tech.mx : tech.dx;
              const ty = isMobile ? tech.my : tech.dy;

              const leftPercent = (tx / viewWidth) * 100;
              const topPercent = (ty / viewHeight) * 100;

              const isActive = activeTechIndex === idx;
              const isAnyActive = activeTechIndex !== null;

              return (
                <div
                  key={tech.name}
                  className="absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    opacity: 1,
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={() => setActiveTechIndex(idx)}
                  onMouseLeave={() => setActiveTechIndex(null)}
                  onClick={() =>
                    setActiveTechIndex(isActive ? null : idx)
                  }
                >
                  <div
                    className={`relative flex items-center justify-center transition-all duration-300 cursor-pointer ${isActive
                      ? "scale-115"
                      : "scale-100 group-hover:scale-110"
                      }`}
                  >
                    {/* Node Glassmorphic Container for Light Mode */}
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white/90 dark:bg-black/80 backdrop-blur-md transition-all duration-300 shadow-md ${isActive
                        ? "border-2 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.7)] bg-sky-50 dark:bg-sky-950/40"
                        : "border border-sky-200 dark:border-sky-900/60 hover:border-sky-400 hover:shadow-[0_0_18px_rgba(56,189,248,0.4)]"
                        }`}
                    >
                      <div className="relative w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
                        <FallbackImage
                          src={tech.icon}
                          alt={tech.name}
                          width={28}
                          height={28}
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Tooltip Label Badge */}
                    <div
                      className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold whitespace-nowrap pointer-events-none transition-all duration-200 shadow-lg ${isActive
                        ? "opacity-100 translate-y-0 bg-gray-900 text-white dark:bg-white dark:text-black border border-sky-400"
                        : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 bg-gray-900/90 text-white dark:bg-gray-800 dark:text-white"
                        }`}
                    >
                      {tech.name}
                    </div>
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
