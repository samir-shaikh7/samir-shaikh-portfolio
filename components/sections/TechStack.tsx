"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FallbackImage from "../ui/FallbackImage";

// ===================================================================================
// TECHS ARRAY
// To move a SINGLE icon & timeline on MOBILE only:
// Add 'mobileRadiusPct' or 'mobileAngle' to any tech object!
// Example: { name: "AWS", ..., angle: -40, radiusPct: 25, mobileRadiusPct: 18, mobileAngle: -30 }
// ===================================================================================
const techs: Array<{
  name: string;
  icon: string;
  darkInvert?: boolean;
  angle: number;
  radiusPct: number;
  mobileAngle?: number;
  mobileRadiusPct?: number;
}> = [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", darkInvert: true, angle: -40, radiusPct: 25 },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", angle: 50, radiusPct: 25 },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg", angle: 172, radiusPct: 28 },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg", angle: -110, radiusPct: 35 },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", angle: 8, radiusPct: 34 },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", angle: 115, radiusPct: 33 },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", angle: -20, radiusPct: 33 },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", darkInvert: true, angle: 200, radiusPct: 33 },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg", darkInvert: true, angle: -140, radiusPct: 41 },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg", angle: 32, radiusPct: 41 },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", angle: 145, radiusPct: 41 },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", angle: -70, radiusPct: 38 },
  ];

export default function TechStack() {
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Default Mobile Scale Factor for all techs (unless individual mobileRadiusPct is provided)
  const mobileScale = 1.1;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SVG Percentage Center Coordinates
  const cx = 50;
  const cy = 50;

  return (
    <section className="py-[80px] sm:py-[120px] bg-black overflow-hidden relative select-none">
      {/* Cinematic Ambient Atmosphere Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-radial from-emerald-600/15 via-cyan-900/10 to-transparent blur-[160px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-amber-500/10 to-transparent blur-[120px] rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Section Heading */}
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

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-16 font-medium text-sm sm:text-base">
            The tools and platforms I use to build, automate, and manage cloud
            infrastructure and deployment pipelines.
          </p>
        </motion.div>

        {/* Timeline Visualization Canvas */}
        <div
          className="relative w-full max-w-[900px] h-[440px] sm:h-[660px] mx-auto flex items-center justify-center"
          role="img"
          aria-label="Realistic cinematic timeline visualization of DevOps technologies controlled by central timeline master"
        >

          {/* Solid Glowing Energy Timeline SVG Canvas */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Primary Emerald-Gold Timeline Gradient */}
              <linearGradient id="cinematicTimelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
              </linearGradient>

              {/* Active Highlighted Timeline Gradient */}
              <linearGradient id="activeCinematicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
              </linearGradient>

              {/* Intense Energy Glow Filter */}
              <filter id="intenseGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.5" result="blur1" />
                <feGaussianBlur stdDeviation="0.6" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {techs.map((tech, idx) => {
              const currentRadius = isMobile
                ? (tech.mobileRadiusPct !== undefined ? tech.mobileRadiusPct : tech.radiusPct * mobileScale)
                : tech.radiusPct;
              const currentAngle = isMobile && tech.mobileAngle !== undefined ? tech.mobileAngle : tech.angle;

              const rad = (currentAngle * Math.PI) / 180;
              const tx = cx + currentRadius * Math.cos(rad);
              const ty = cy + currentRadius * Math.sin(rad);

              // Organic Bézier curve paths with dynamic control points & horizontal curve offset
              const dx = tx - cx;
              const dy = ty - cy;
              const perpY = Math.abs(dy) < 6 ? (dx > 0 ? 6 : -6) : 0;
              const cp1x = cx + dx * 0.4;
              const cp1y = cy + dy * 0.1 + perpY;
              const cp2x = cx + dx * 0.6;
              const cp2y = cy + dy * 0.9 - perpY;

              const pathData = `M ${cx} ${cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${tx} ${ty}`;
              const isActive = activeTechIndex === idx;

              return (
                <motion.g key={tech.name} animate={{ y: [0, -1.5, 0] }}
                  transition={{
                    duration: 3.5 + (idx % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.15,
                  }}>

                  {/* Ambient Energy Glow Underlayer */}
                  <path
                    d={pathData}
                    fill="none"
                    stroke={isActive ? "#fbbf24" : "#10b981"}
                    strokeWidth={isActive ? 2.5 : 1.2}
                    strokeOpacity={isActive ? 0.5 : 0.25}
                    filter="url(#intenseGlow)"
                    vectorEffect="non-scaling-stroke"
                    className="transition-all duration-300"
                  />

                  {/* Core Glowing Solid Timeline Energy Path */}
                  <path
                    d={pathData}
                    fill="none"
                    stroke={isActive ? "url(#activeCinematicGrad)" : "url(#cinematicTimelineGrad)"}
                    strokeWidth={isActive ? 1.2 : 0.65}
                    strokeOpacity={isActive ? 1 : 0.85}
                    vectorEffect="non-scaling-stroke"
                    className="transition-all duration-300"
                  />
                </motion.g>
              );
            })}
          </svg>

          {/* Central Realistic Cinematic Loki Character Hub */}
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            {/* Halo Ring Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute w-28 h-28 sm:w-56 sm:h-56 rounded-full border border-emerald-500/20 border-dashed pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute w-32 h-32 sm:w-64 sm:h-64 rounded-full border border-amber-500/15 border-dotted pointer-events-none"
            />

            {/* Realistic Character Avatar Sphere */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-22 h-22 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-[#091b12] via-[#040c08] to-[#010403] border-2 border-emerald-400/60 shadow-[0_0_45px_rgba(16,185,129,0.45)] overflow-hidden cursor-pointer group"
            >
              {/* Radial Energy Backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35)_0%,transparent_75%)] animate-pulse" />

              {/* Realistic Cinematic Character Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/loki-timeline-controller.png"
                  alt="Cinematic Timeline Controller"
                  fill
                  sizes="(max-width: 768px) 88px, 176px"
                  className="object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  priority
                  unoptimized
                />
                {/* Vignette Blend Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-emerald-500/40 rounded-full pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Technology Nodes */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {techs.map((tech, idx) => {
              const currentRadius = isMobile
                ? (tech.mobileRadiusPct !== undefined ? tech.mobileRadiusPct : tech.radiusPct * mobileScale)
                : tech.radiusPct;
              const currentAngle = isMobile && tech.mobileAngle !== undefined ? tech.mobileAngle : tech.angle;

              const rad = (currentAngle * Math.PI) / 180;
              const px = cx + currentRadius * Math.cos(rad);
              const py = cy + currentRadius * Math.sin(rad);
              const isActive = activeTechIndex === idx;

              return (
                <div
                  key={tech.name}
                  style={{
                    left: `${px}%`,
                    top: `${py}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setActiveTechIndex(idx)}
                  onMouseLeave={() => setActiveTechIndex(null)}
                  className="absolute pointer-events-auto cursor-pointer group"
                >
                  {/* Glowing Green Socket Backing */}
                  <div
                    className={`absolute -inset-1 rounded-full bg-emerald-500/40 blur-sm transition-opacity duration-300 ${isActive ? "opacity-100 bg-amber-400/60" : "opacity-70 group-hover:opacity-100"
                      }`}
                  />

                  {/* Active Highlight Ring */}
                  {isActive && (
                    <div className="absolute -inset-2 rounded-full bg-amber-500/20 animate-ping pointer-events-none" />
                  )}

                  {/* Round Icon Badge */}
                  <div
                    className={`relative w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-black/90 dark:bg-card border ${isActive
                      ? "border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.75)] scale-110"
                      : "border-emerald-500/50 hover:border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                      } flex items-center justify-center transition-all duration-300 backdrop-blur-md`}
                  >
                    <FallbackImage
                      src={tech.icon}
                      alt={tech.name}
                      width={20}
                      height={20}
                      title={tech.name}
                      className={tech.darkInvert ? "brightness-0 invert sm:w-7 sm:h-7" : "sm:w-7 sm:h-7"}
                    />
                  </div>

                  {/* Tooltip Label */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-7 sm:-bottom-8 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/90 border border-emerald-500/30 text-[10px] sm:text-[11px] font-bold tracking-wide text-white shadow-lg pointer-events-none whitespace-nowrap transition-all duration-200 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                  >
                    <span className="text-emerald-400 font-extrabold mr-1">•</span>
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



/* Example: AWS ko mobile par alag jagah shift karna
{ 
  name: "AWS", 
  icon: "...", 
  darkInvert: true, 
  angle: -40,          // Desktop angle
  radiusPct: 25,       // Desktop radius
  mobileAngle: -30,    // <-- SIRF Mobile par ye Angle aayega
  mobileRadiusPct: 20  // <-- SIRF Mobile par ye Radius/Distance aayega
}
*/
