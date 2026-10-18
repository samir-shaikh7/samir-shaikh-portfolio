"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  issued: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    issued: "January 2026",
  },
  {
    name: "AWS DevOps Training - Certificate of Completion",
    issuer: "Full Stack Academy",
    issued: "September 2026",
  },
  {
    name: "DevOps Challenge - Certificate of Completion",
    issuer: "Full Stack Academy",
    issued: "August 2026",
  },
  {
    name: "AWS Challenge - Certificate of Completion",
    issuer: "Full Stack Academy",
    issued: "July 2026",
  },
  {
    name: "Linux Challenge - Certificate of Completion",
    issuer: "Full Stack Academy",
    issued: "June 2026",
  },
  {
    name: "Generative AI with AWS",
    issuer: "Analytics Vidhya",
    issued: "February 2026",
  },
  {
    name: "Virtual Internship Program in Cloud Computing",
    issuer: "CodeAlpha",
    issued: "February 2026",
  },
  {
    name: "HTML & CSS - Certificate of Completion",
    issuer: "HCL GUVI",
    issued: "June 2025",
  },
];

const logoMap: Record<string, string> = {
  "Amazon Web Services (AWS)": "https://media.licdn.com/dms/image/v2/D4E0BAQFqdm1TZ-RZKQ/company-logo_200_200/B4EZgOay6gHEAQ-/0/1752588562343/amazon_web_services_logo?e=1793836800&v=beta&t=7gEuGhSI07qY_avvAiT9OMpPfyOUVLUo3VBlbdtO6h4",
  "Full Stack Academy": "https://media.licdn.com/dms/image/v2/C560BAQHH2T0uyBaPqA/company-logo_200_200/company-logo_200_200/0/1630661862300/full_stack_academy_india_logo?e=1793836800&v=beta&t=2xkVxesM3Of5_PETTStsUOlBExbssanw8Q-Km8w2F1E",
  "Analytics Vidhya": "https://media.licdn.com/dms/image/v2/C4E0BAQGfHu3OJEbNzQ/company-logo_200_200/company-logo_200_200/0/1630640318052/analytics_vidhya_logo?e=1793836800&v=beta&t=KFUwXnll2AEOuAr-7DmOtpAhYjYn8IlTiLlEX60JyG4",
  "CodeAlpha": "https://media.licdn.com/dms/image/v2/D560BAQFre31Ub_xdCA/company-logo_200_200/B56Z9iwo.RH4AI-/0/1784068345992/codealpha_logo?e=1793836800&v=beta&t=sTEJtz_LEVq12t0hlYD-Uz0e8MNE3D8s3xKCfd7gxxs",
  "HCL GUVI": "https://media.licdn.com/dms/image/v2/D560BAQEH1cTeuT8ZfQ/company-logo_200_200/B56ZjMQ9vkHMAI-/0/1755773656636/guviofficial_logo?e=1793836800&v=beta&t=8iB3dh9EL-vl3PCn-YRdlwDDtz8US-NbpP54Wnej038"
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-10 sm:py-16 bg-gray-50 dark:bg-background border-t border-gray-200 dark:border-border overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl bg-white dark:bg-card border border-gray-200 dark:border-border transition-all hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <img src={logoMap[cert.issuer]} alt={`${cert.issuer} logo`} className="w-full h-full object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/48?text=Icon'; }} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-muted px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {cert.issued}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white mb-2 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
