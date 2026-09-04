"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useIsDesktop } from "../hooks/useIsDesktop";

const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    issued: "January 2026",
  },
  {
    name: "AWS Challenge",
    issuer: "Full Stack Academy",
    issued: "August 2026",
    skills: ["AWS", "EC2", "AWS Cloud Infrastructure"],
  },
  {
    name: "Linux Challenge",
    issuer: "Full Stack Academy",
    issued: "July 2026",
    skills: ["Linux", "Linux System Administration"],
  },
  {
    name: "AWS and DevOps",
    issuer: "Full Stack Academy",
    issued: "January 2026",
  },
  {
    name: "Generative AI with AWS",
    issuer: "Analytics Vidhya",
    issued: "February 2026",
    skills: ["Cloud Computing", "Generative AI", "Prompt Engineering"],
  },
  {
    name: "Virtual Internship Program in Cloud Computing",
    issuer: "CodeAlpha",
    issued: "February 2026",
    credentialId: "CA/DF/1/14136",
  },
  {
    name: "HTML & CSS",
    issuer: "HCL GUVI",
    issued: "June 2025",
    skills: ["HTML5", "CSS3"],
  },
];

export default function Process() {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="experience"
      className="py-[120px] bg-white dark:bg-background border-t border-gray-200 dark:border-border overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Content */}
        <div className="flex-1 w-full lg:max-w-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              Career Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              Experience &
              <span className="block text-primary">Education</span>
            </h2>

            <p className="mt-6 text-gray-600 dark:text-muted text-base md:text-lg leading-relaxed">
              Building practical expertise in cloud infrastructure, DevOps
              practices, and automation through hands-on training and real-world
              project experience.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[20px] before:w-[2px] before:bg-gray-200 dark:before:bg-white/10">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45 }}
              className="relative pl-14 group"
            >
              <div className="absolute left-[10px] top-2 w-5 h-5 rounded-full bg-white dark:bg-background border-4 border-accent transition-all duration-300" />

              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-mono text-gray-400">01</span>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    AWS & DevOps Intern
                  </h3>
                </div>
              </div>

              <div className="ml-14 space-y-2">
                <p className="text-base font-medium text-gray-700 dark:text-slate-300">
                  Full Stack Academy, Hyderabad
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    May 2026 – November 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Hyderabad, India
                  </span>
                </div>
                <ul className="space-y-1.5 mt-3">
                  {[
                    "AWS cloud infrastructure — EC2, S3, IAM, VPC, Route 53, CloudWatch, Load Balancers, Auto Scaling",
                    "Linux administration, shell scripting, and infrastructure troubleshooting",
                    "CI/CD pipeline automation using Jenkins, Git, and GitHub",
                    "Containerization with Docker and orchestration with Kubernetes",
                    "Infrastructure as Code using Terraform",
                    "Cloud security, networking, monitoring, and deployment management",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-muted"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative pl-14 group"
            >
              <div className="absolute left-[10px] top-2 w-5 h-5 rounded-full bg-white dark:bg-background border-4 border-gray-300 dark:border-border group-hover:border-primary transition-all duration-300" />

              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-mono text-gray-400">02</span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                </div>
              </div>

              <div className="ml-14 space-y-2">
                <p className="text-base font-medium text-gray-700 dark:text-slate-300">
                  Institute of Technology & Management College, Nanded
                </p>
                <p className="text-sm text-gray-500 dark:text-muted">
                  Swami Ramanand Teerth Marathwada University, Nanded
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    2023 – 2026
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/5 dark:bg-accent/10 border border-accent/20">
                  <span className="text-sm font-semibold text-accent">
                    CGPA: 8.56
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="relative pl-14 group"
            >
              <div className="absolute left-[10px] top-2 w-5 h-5 rounded-full bg-white dark:bg-background border-4 border-gray-300 dark:border-border group-hover:border-primary transition-all duration-300" />

              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-mono text-gray-400">03</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Certifications
                  </h3>
                </div>
              </div>

              <div className="ml-14 space-y-4 mt-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5"
                  >
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-muted">
                      {cert.issuer} · {cert.issued}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-400 dark:text-muted/70 mt-1">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {cert.skills.map((skill, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/5 dark:bg-accent/10 text-accent border border-accent/15"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full h-[650px] sticky top-28 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-gray-200 dark:border-border hidden lg:flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0"
            role="img"
            aria-label="Animated illustration of cloud and DevOps journey"
          >
            {isDesktop && (
              <DotLottieReact
                src="https://lottie.host/60fdfeb2-4720-423e-8daa-cfee6d67c1f9/xin7ixlJrS.lottie"
                autoplay
                loop
                className="w-full h-full"
              />
            )}
          </div>

          <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/70 dark:bg-black/30 border border-white/20 rounded-2xl p-6">
            <h3 className="font-semibold text-lg text-black dark:text-white">
              Continuous Learning
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-muted">
              Actively building hands-on skills in cloud architecture, automation,
              and DevOps best practices through real-world projects and professional
              training.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
