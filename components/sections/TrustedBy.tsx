"use client";

import { motion } from "framer-motion";
import { Cloud, Container, GitBranch, Terminal, Server, Settings, Shield, Code2 } from "lucide-react";

const tools = [
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Server },
  { name: "Terraform", icon: Code2 },
  { name: "Jenkins", icon: Settings },
  { name: "Linux", icon: Terminal },
  { name: "Git", icon: GitBranch },
  { name: "CI/CD", icon: Shield },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white dark:bg-background border-b border-gray-200 dark:border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-8 text-center">
        <p className="text-gray-500 dark:text-muted text-sm font-medium tracking-wider uppercase">
          Core Technologies I Work With
        </p>
      </div>

      <div className="relative flex overflow-x-hidden md:overflow-visible">
        {/* Gradients for fade effect on edges (Desktop Only) */}
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-white dark:from-background to-transparent" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-white dark:from-background to-transparent" />

        {/* Infinite Scroll for Desktop / Tablet */}
        <motion.div
          className="hidden md:flex whitespace-nowrap min-w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-8 md:mx-16 opacity-70 hover:opacity-100 transition-opacity"
            >
              <tool.icon className="w-8 h-8 text-black dark:text-white" />
              <span className="text-xl font-bold text-black dark:text-white tracking-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Mobile: Grid/Wrap layout instead of scroll to prevent overflow issues */}
        <div className="flex md:hidden flex-wrap justify-center gap-8 px-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2 opacity-70"
            >
              <tool.icon className="w-6 h-6 text-black dark:text-white" />
              <span className="text-lg font-bold text-black dark:text-white tracking-tight text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
