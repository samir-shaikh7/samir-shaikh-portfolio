"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { Download } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const highlights = [
  {
    value: "AWS Cloud",
    label: "Primary Platform",
  },
  {
    value: "DevOps & CI/CD",
    label: "Core Focus",
  },
  {
    value: "Linux & IaC",
    label: "Infrastructure",
  },
];

export default function AboutUs() {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="about"
      className="py-10 sm:py-16 bg-white dark:bg-black"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-border bg-gradient-to-br from-gray-50 dark:from-[#161616] to-white dark:to-[#0A0A0A] p-6 sm:p-10 lg:p-16">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
                About Me
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
                Passionate About
                <span className="block text-accent">Cloud & Automation</span>
              </h2>

              <p className="text-base md:text-lg text-gray-600 dark:text-muted leading-relaxed mb-6">
                I&apos;m Samir Shaikh, an early-career AWS Cloud &amp; DevOps
                Engineer based in Hyderabad, India. I hold a Bachelor of Computer
                Applications (BCA) from Institute of Technology &amp; Management
                College, Nanded, and I specialize in cloud infrastructure,
                CI/CD automation, containerization, and Infrastructure as Code.
              </p>

              <p className="text-gray-600 dark:text-muted leading-relaxed mb-4">
                Through hands-on training at Full Stack Academy, I&apos;ve built
                practical experience with AWS services (EC2, S3, IAM, VPC, Route 53,
                CloudWatch, ALB, Auto Scaling), Linux administration, Docker,
                Kubernetes, Terraform, Jenkins, and shell scripting.
              </p>

              <p className="text-gray-600 dark:text-muted leading-relaxed mb-10">
                I enjoy building and automating cloud infrastructure — from
                provisioning resources and configuring networking to setting up
                CI/CD pipelines and managing deployments. Every project in my
                portfolio represents real, hands-on work.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                      {item.value}
                    </h3>

                    <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-muted font-semibold">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Samir-Shaikh-Resume.pdf"
                  download="Samir-Shaikh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white dark:text-black font-semibold hover:opacity-90 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>

                <a
                  href="https://github.com/samir-shaikh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-border text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden lg:block"
            >
              <div
                className="h-[450px] rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-border overflow-hidden p-8"
                role="img"
                aria-label="Animated illustration representing cloud technology and automation"
              >
                {isDesktop && (
                  <DotLottieReact
                    src="https://lottie.host/2fc8d78f-c184-42c0-ba35-f219aa904df8/vbMMHyX3m5.lottie"
                    autoplay
                    loop
                    className="w-full h-full"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
