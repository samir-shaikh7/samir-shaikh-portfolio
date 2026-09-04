"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ShieldCheck } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  skills?: string[];
}

const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    issued: "January 2026",
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
    name: "Linux Challenge",
    issuer: "Full Stack Academy",
    issued: "July 2026",
    skills: ["Linux", "Linux System Administration"],
  },
  {
    name: "AWS Challenge",
    issuer: "Full Stack Academy",
    issued: "August 2026",
    skills: ["AWS", "EC2", "AWS Cloud Infrastructure"],
  },
  {
    name: "HTML & CSS",
    issuer: "HCL GUVI",
    issued: "June 2025",
    skills: ["HTML5", "CSS3"],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-[100px] md:py-[120px] bg-gray-50 dark:bg-background border-t border-gray-200 dark:border-border overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-5">
            <Award className="w-4 h-4" />
            Verified Credentials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            Professional <span className="text-accent">Certifications</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-muted text-base md:text-lg leading-relaxed">
            Technical certifications and completion credentials validating core competencies in AWS Cloud, DevOps, Linux, and web technologies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl bg-white dark:bg-card border border-gray-200 dark:border-border transition-all hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-muted px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {cert.issued}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white mb-2 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-3">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-muted bg-gray-50 dark:bg-white/[0.03] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/5 mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Credential ID: <strong className="font-mono text-gray-700 dark:text-slate-200">{cert.credentialId}</strong></span>
                  </div>
                )}
              </div>

              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
