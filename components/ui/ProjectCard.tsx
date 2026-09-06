"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, type LucideIcon } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export interface ProjectData {
  category: string;
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  color: string;
  delay: number;
  github?: string;
  liveUrl?: string;
  projectUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  /** If true, renders a slightly larger card for the Featured section */
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: project.delay }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border transition-all hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] h-full"
      style={{ padding: featured ? "1.75rem" : "1.5rem" }}
    >
      {/* 1. Category Label */}
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}
        >
          <project.icon className="w-4 h-4 text-foreground dark:text-white" />
        </div>
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-accent">
          {project.category}
        </span>
      </div>

      {/* 2. Project Title */}
      <h3
        className={`font-bold text-black dark:text-white mb-2.5 group-hover:text-accent transition-colors leading-tight ${
          featured ? "text-xl" : "text-lg"
        }`}
      >
        {project.title}
      </h3>

      {/* 3. Short Description */}
      <p className="text-gray-600 dark:text-muted leading-relaxed text-[14px] mb-5 flex-grow">
        {project.description}
      </p>

      {/* 4. Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t, idx) => (
          <span
            key={idx}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </div>

      {/* 5. Project Actions */}
      {(project.github || project.liveUrl || project.projectUrl) && (
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gray-600 dark:text-muted hover:text-accent dark:hover:text-accent transition-colors group/link"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gray-600 dark:text-muted hover:text-accent dark:hover:text-accent transition-colors group/link"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          )}
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent hover:text-accent/80 transition-colors group/link"
            >
              View Project
              <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
