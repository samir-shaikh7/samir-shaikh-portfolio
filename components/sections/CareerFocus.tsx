"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, MapPin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const targetRoles = [
  "AWS Cloud Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Junior DevOps Engineer",
  "Linux / Infrastructure Engineer",
  "Kubernetes Engineer",
  "Site Reliability Engineer (SRE)",
  "Platform Engineer",
  "Infrastructure Engineer",
  "DevSecOps Engineer",
  "Cloud Automation Engineer",
];

const technicalFocus = [
  "AWS Cloud",
  "Linux Administration",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "CI/CD",
  "Git & GitHub",
  "Shell Scripting",
  "Cloud Networking",
  "Monitoring & Logging",
  "Infrastructure as Code",
];

export default function CareerFocus() {
  return (
    <section
      id="career-focus"
      className="py-10 sm:py-16 bg-white dark:bg-black border-t border-gray-200 dark:border-border overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-5">
            <Target className="w-4 h-4" />
            Career Focus & Goals
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            Target Roles &
            <span className="block text-accent">Opportunity Goals</span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-muted text-base md:text-lg leading-relaxed">
            I am actively seeking entry-level and early-career opportunities where I can apply my AWS Cloud and DevOps skills, work with real infrastructure and deployment environments, and continue growing as an engineer.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Target Roles Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-card border border-gray-200 dark:border-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    Target Roles
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-muted">
                    Roles I am actively pursuing
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {targetRoles.map((role, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-800 dark:text-slate-200 shadow-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex items-center gap-2 text-xs text-gray-500 dark:text-muted">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Location: Hyderabad, India (Open to Remote or On-site)</span>
            </div>
          </motion.div>

          {/* Core Technical Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-card border border-gray-200 dark:border-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    Primary Technical Focus
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-muted">
                    Key engineering domains & technologies
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {technicalFocus.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-2 rounded-xl bg-accent/5 dark:bg-accent/10 border border-accent/20 text-sm font-medium text-accent shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 text-xs text-gray-500 dark:text-muted">
              <span>Focused on automation, continuous learning, and team collaboration.</span>
            </div>
          </motion.div>
        </div>

        {/* Recruiter Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/10 via-primary/5 to-transparent p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent">
              Entry-Level / Early-Career Availability
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              Open to opportunities in AWS Cloud & DevOps.
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-muted max-w-2xl">
              Ready to contribute hands-on skills in cloud infrastructure, CI/CD pipeline automation, containerization, and Linux system management to an active engineering team.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white dark:text-black font-semibold hover:opacity-90 transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://linkedin.com/in/samir-shaikh7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-border text-black dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
