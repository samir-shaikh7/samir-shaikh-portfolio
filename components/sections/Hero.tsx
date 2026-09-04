"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Cloud,
  Terminal,
  Container,
  Server,
  GitBranch,
  Shield,
  Zap,
  ArrowRight,
  Download,
} from "lucide-react";
import HeroBackground from "../animations/HeroBackground";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";

/* ─── inline SVG icons for social brands ─────────────────────────── */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── tiny helpers ────────────────────────────────────────────────── */
const LOTTIE_SRC =
  "https://lottie.host/e15745d3-2bfb-49df-83e4-e6db620c3cb1/9sutIc7gYY.lottie";
const LOTTIE_SRC_DARK =
  "https://lottie.host/6ef230ed-add5-44d7-840f-3cc23e14069d/ppAnmLkQH6.lottie";

/* ─── heading words to animate in ────────────────────────────────── */
const HEADLINE_WORDS = ["Building", "Reliable", "Cloud", "Infrastructure", "&", "Automated", "Pipelines."];
const GRADIENT_IDX = new Set([2, 3]); // "Cloud Infrastructure" get the gradient

/* ─── floating glass service cards ───────────────────────────────── */
const FLOAT_CARDS = [
  { icon: Cloud, label: "AWS Cloud", color: "from-orange-500/20 to-amber-500/20", delay: 0 },
  { icon: Terminal, label: "Linux & DevOps", color: "from-blue-500/20 to-cyan-500/20", delay: 0.15 },
  { icon: Container, label: "Docker & K8s", color: "from-cyan-500/20 to-teal-500/20", delay: 0.3 },
  { icon: Server, label: "Terraform IaC", color: "from-violet-500/20 to-blue-500/20", delay: 0.45 },
  { icon: GitBranch, label: "CI/CD Pipelines", color: "from-pink-500/20 to-rose-500/20", delay: 0.6 },
  { icon: Shield, label: "Infrastructure", color: "from-green-500/20 to-emerald-500/20", delay: 0.75 },
];

/* ─── trust badges ────────────────────────────────────────────────── */
const BADGES = [
  "AWS Cloud",
  "Docker & K8s",
  "CI/CD Pipelines",
  "Infrastructure as Code",
  "Linux Systems",
];

/* ─── glass card with float + tilt ───────────────────────────────── */
function GlassCard({
  icon: Icon,
  label,
  color,
  delay,
}: (typeof FLOAT_CARDS)[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.6, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + delay * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 1.5,
        }}
        whileHover={{ scale: 1.06, rotate: 2 }}
        className={`relative group cursor-default
          flex items-center gap-3
          px-4 py-3
          rounded-2xl
          bg-gradient-to-br ${color}
          backdrop-blur-xl
          border border-white/20 dark:border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]
          transition-shadow duration-300
          min-w-[155px]`}
      >
        {/* gradient border shimmer */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="w-8 h-8 rounded-xl bg-white/20 dark:bg-white/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-foreground dark:text-white" />
        </div>
        <span className="text-sm font-semibold text-foreground dark:text-white whitespace-nowrap">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ─── main hero ───────────────────────────────────────────────────── */
export default function Hero() {
  const { resolvedTheme } = useTheme();
  const lottieSrc = resolvedTheme === "dark" ? LOTTIE_SRC_DARK : LOTTIE_SRC;

  /* mouse-follow glow */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const glowY = useSpring(mouseY, { damping: 20, stiffness: 150 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  /* scroll parallax for the blob */
  const scrollY = useMotionValue(0);
  useEffect(() => {
    const onScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);
  const blobY = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="home"
      aria-label="Samir Shaikh – AWS Cloud & DevOps Engineer"
      className="relative min-h-[100svh] flex items-center pt-[48px] overflow-hidden"
    >
      {/* ── premium animated background ── */}
      <HeroBackground />

      {/* ── noise texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── subtle grid lines ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── mouse-follow radial glow ── */}
      <motion.div
        className="pointer-events-none absolute z-[2] w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-15"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(1,157,145,0.35) 0%, transparent 70%)",
        }}
      />

      {/* ── floating blobs (parallax) ── */}
      <motion.div
        style={{ y: blobY }}
        className="pointer-events-none absolute z-[1] top-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full
          bg-gradient-radial from-accent/20 via-blue-500/10 to-transparent
          blur-[120px]"
      />
      <div
        className="pointer-events-none absolute z-[1] bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full
          bg-gradient-radial from-violet-500/15 via-cyan-500/10 to-transparent
          blur-[100px]"
      />

      {/* ══════════════════ MAIN GRID ══════════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full py-20 lg:py-0 min-h-[100svh] flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ─── LEFT COLUMN ──────────────────────────────── */}
          <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">

            {/* eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                border border-accent/30 bg-accent/5 dark:bg-accent/10
                text-accent text-xs font-bold uppercase tracking-widest
                backdrop-blur-sm">
                <Zap className="w-3 h-3" />
                AWS Cloud & DevOps Engineer
              </span>
            </motion.div>

            {/* ── name ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-slate-300 tracking-tight">
                Hi, I&apos;m{" "}
                <span className="text-foreground dark:text-white font-bold">Samir Shaikh</span>
              </p>
            </motion.div>

            {/* ── main headline ── */}
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-tight">
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-[0.22em] ${GRADIENT_IDX.has(i)
                    ? "text-[#019d91] dark:text-orange-400"
                    : "text-black dark:text-white"
                    }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65 }}
              className="text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-gray-600 dark:text-slate-300 max-w-[560px] font-medium"
            >
              I build and automate{" "}
              <span className="text-foreground dark:text-white font-semibold">cloud infrastructure</span>,{" "}
              <span className="text-foreground dark:text-white font-semibold">CI/CD pipelines</span>, and
              containerized deployments using AWS, Docker, Kubernetes, Terraform, and Jenkins.
            </motion.p>

            {/* ── CTA buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* Primary – View Projects */}
              <Link href="/#projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(249,115,22,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3
                    px-8 py-4 rounded-2xl overflow-hidden
                    bg-[#019d91] dark:bg-orange-500
                    text-white font-bold text-base
                    shadow-[0_4px_24px_rgba(1,157,145,0.35)] dark:shadow-[0_4px_24px_rgba(249,115,22,0.35)]
                    transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                  View Projects
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              {/* Secondary – Download Resume */}
              <a
                href="/Samir-Shaikh-Resume.pdf"
                download="Samir-Shaikh-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3
                    px-8 py-4 rounded-2xl
                    border border-gray-300 dark:border-white/20
                    bg-white/60 dark:bg-white/5
                    backdrop-blur-sm
                    text-black dark:text-white font-bold text-base
                    hover:border-accent/50 dark:hover:border-accent/50
                    hover:bg-accent/5 dark:hover:bg-accent/10
                    transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>
              </a>
            </motion.div>

            {/* ── social links ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/samir-shaikh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                  border border-gray-200 dark:border-white/10
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-md
                  text-sm font-semibold text-gray-700 dark:text-slate-300
                  hover:border-accent/50 hover:text-accent dark:hover:text-accent
                  transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/samir-shaikh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                  border border-gray-200 dark:border-white/10
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-md
                  text-sm font-semibold text-gray-700 dark:text-slate-300
                  hover:border-accent/50 hover:text-accent dark:hover:text-accent
                  transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>

            {/* ── trust badges ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                    border border-gray-200 dark:border-white/10
                    bg-white/70 dark:bg-white/5
                    backdrop-blur-md
                    text-xs font-semibold text-gray-700 dark:text-slate-300
                    shadow-sm"
                >
                  <Cloud className="w-3 h-3 text-accent" />
                  {badge}
                </span>
              ))}
            </motion.div>

          </div>

          {/* ─── RIGHT COLUMN ─────────────────────────────── */}
          <div className="relative order-1 lg:order-2 hidden lg:flex justify-center">

            {/* outer glow ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[360px] h-[360px] md:w-[480px] md:h-[480px]
              rounded-full
              bg-gradient-radial from-accent/25 via-blue-400/10 to-transparent
              blur-[80px] animate-pulse pointer-events-none" />

            {/* lottie container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]"
              role="img"
              aria-label="Interactive cloud infrastructure illustration"
            >
              {/* glassmorphism disc behind lottie */}
              <div className="absolute inset-[10%] rounded-full
                bg-white/10 dark:bg-white/5
                backdrop-blur-xl
                border border-white/20 dark:border-white/10
                shadow-[0_0_80px_rgba(1,157,145,0.15)]" />

              <DotLottieReact
                src={lottieSrc}
                loop
                autoplay
                className="relative z-10 w-[90%] h-[90%] mx-auto"
              />

              {/* ── floating service cards ── */}
              {/* top-left */}
              <div className="absolute -top-6 -left-4 sm:-left-10 flex flex-col gap-3 z-20">
                {FLOAT_CARDS.slice(0, 2).map((c) => (
                  <GlassCard key={c.label} {...c} />
                ))}
              </div>

              {/* bottom-left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-10 flex flex-col gap-3 z-20">
                {FLOAT_CARDS.slice(2, 4).map((c) => (
                  <GlassCard key={c.label} {...c} />
                ))}
              </div>

              {/* right side */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 flex flex-col gap-3 z-20">
                {FLOAT_CARDS.slice(4).map((c) => (
                  <GlassCard key={c.label} {...c} />
                ))}
              </div>
            </motion.div>
          </div>
          {/* ── end right column ── */}

        </div>
      </div>

      {/* ── subtle bottom fade ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-[3]
        bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
