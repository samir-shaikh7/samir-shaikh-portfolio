"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing effect for the outer ring using spring physics
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable cursor on desktop screens with fine pointer devices
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check if the cursor is hovering over an interactive element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central small dot - moves exactly with mouse */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Outer glowing ring - trails behind with spring damping */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/50 bg-accent/5 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          x: trailX,
          y: trailY,
        }}
        animate={{
          width: isHovered ? 40 : 20,
          height: isHovered ? 40 : 20,
          borderColor: isHovered ? "var(--color-accent)" : "rgba(1, 157, 145, 0.4)",
          boxShadow: isHovered 
            ? "0 0 10px var(--color-accent)" 
            : "0 0 0px transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </>
  );
}
