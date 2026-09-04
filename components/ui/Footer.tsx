"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, ExternalLink } from "lucide-react";

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
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.2 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-black border-t border-gray-200 dark:border-border z-99999 relative"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* ── Personal Contact Section ── */}
        <div className="py-20 border-b border-gray-200 dark:border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              <Mail className="w-4 h-4" />
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Let&apos;s Connect
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 dark:text-muted text-base md:text-lg">
              I&apos;m open to entry-level opportunities in AWS Cloud & DevOps. Let&apos;s connect and discuss how I can contribute.
            </p>
          </motion.div>

          {/* Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Card: Get in Touch */}
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
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Get in Touch
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-muted">
                      Direct contact methods
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:shaikhsamir4325@gmail.com"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-muted">Email</p>
                        <p className="text-sm font-semibold text-black dark:text-white group-hover:text-accent transition-colors">
                          shaikhsamir4325@gmail.com
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/samir-shaikh7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <LinkedinIcon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-muted">LinkedIn</p>
                        <p className="text-sm font-semibold text-black dark:text-white group-hover:text-accent transition-colors">
                          LinkedIn Profile
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                  </a>

                  <a
                    href="https://github.com/samir-shaikh7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <GithubIcon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-muted">GitHub</p>
                        <p className="text-sm font-semibold text-black dark:text-white group-hover:text-accent transition-colors">
                          GitHub Profile
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-200 dark:border-white/10 flex items-center gap-2 text-xs text-gray-500 dark:text-muted">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Based in Hyderabad, India</span>
              </div>
            </motion.div>

            {/* Right Card: Open to Opportunities */}
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
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Open to Opportunities
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-muted">
                      Target roles for entry-level positions
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {targetRoles.map((role, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-800 dark:text-slate-200 shadow-xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-200 dark:border-white/10 text-xs text-gray-500 dark:text-muted">
                <span>Eager to contribute hands-on skills to early-career cloud & DevOps roles.</span>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons Bar */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shaikhsamir4325@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white dark:text-black font-semibold hover:opacity-90 transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/samir-shaikh7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-border text-black dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/samir-shaikh7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-border text-black dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Profile
            </a>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter mb-5 inline-block"
            >
              <span className="bg-gradient-to-r from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent">
                Samir Shaikh
              </span>
            </Link>

            <p className="text-gray-600 dark:text-muted leading-relaxed text-sm">
              AWS Cloud & DevOps Engineer building practical experience in cloud
              infrastructure, automation, containerization, and CI/CD pipelines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#skills"
                  className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/#certifications"
                  className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/#career-focus"
                  className="text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  Career Focus
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-6">
              Core Technologies
            </h4>

            <ul className="space-y-3 text-sm">
              {["AWS Cloud", "Docker & Kubernetes", "Terraform (IaC)", "Jenkins & CI/CD", "Linux & Bash", "Git & GitHub"].map((tech) => (
                <li key={tech}>
                  <span className="text-gray-500 dark:text-muted">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-6">
              Contact Details
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:shaikhsamir4325@gmail.com"
                  className="inline-flex items-center gap-2 text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>shaikhsamir4325@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/samir-shaikh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 shrink-0" />
                  <span>GitHub Profile</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/samir-shaikh7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-500 dark:text-muted hover:text-black dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>

              <li className="inline-flex items-center gap-2 text-gray-500 dark:text-muted">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="py-6 border-t border-gray-200 dark:border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-muted text-sm">
            © {new Date().getFullYear()} Samir Shaikh. All rights reserved.
          </p>

          <p className="text-gray-400 dark:text-muted/60 text-xs">
            AWS Cloud & DevOps Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}