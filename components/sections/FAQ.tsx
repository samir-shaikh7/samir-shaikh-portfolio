"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your primary area of expertise?",
    answer:
      "My primary focus is AWS Cloud and DevOps Engineering. I work with AWS cloud services (EC2, S3, VPC, IAM, RDS, Lambda, CloudWatch, etc.), containerization (Docker & Kubernetes), CI/CD automation (Jenkins), Infrastructure as Code (Terraform), Linux administration, and Git/GitHub for version control.",
  },
  {
    question: "Are you available for internships or entry-level positions?",
    answer:
      "Yes. I am actively seeking opportunities in Cloud Engineering, DevOps, and related roles. I am open to internships, entry-level positions, and junior roles where I can contribute while continuing to grow my skills in a professional environment.",
  },
  {
    question: "What AWS services do you have experience with?",
    answer:
      "I have practical experience with EC2, S3, IAM, VPC, RDS, EBS, EFS, Route 53, Application Load Balancer (ALB), Auto Scaling, CloudWatch, SNS, Lambda, and Elastic Beanstalk. I continue to expand my knowledge across the AWS ecosystem.",
  },
  {
    question: "Do you have experience with CI/CD pipelines?",
    answer:
      "Yes. I have built CI/CD pipelines using Jenkins with GitHub webhook integration, automated build and deployment stages, Docker image creation, and deployment to AWS. I also have experience with GitHub Actions for simpler automation workflows.",
  },
  {
    question: "Can you work with containerization and orchestration?",
    answer:
      "Yes. I work with Docker for containerizing applications (Dockerfiles, multi-stage builds, Docker Compose) and Kubernetes for orchestrating deployments using Pods, Deployments, Services, Ingress, ConfigMaps, and Secrets.",
  },
  {
    question: "What is your experience with Infrastructure as Code?",
    answer:
      "I use Terraform to provision and manage AWS infrastructure declaratively — including VPCs, subnets, security groups, EC2 instances, S3 buckets, and IAM roles. I follow IaC best practices like state management, modular configuration, and version-controlled infrastructure.",
  },
  {
    question: "Do you also have web development skills?",
    answer:
      "Yes. While my primary focus is Cloud & DevOps, I also have experience with web development technologies including HTML, CSS, JavaScript, React, and Next.js. These skills complement my DevOps work by giving me a strong understanding of the applications I deploy and manage.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me through the contact form on this website, connect with me on LinkedIn, check out my work on GitHub, or send me an email directly. All links are available in the contact section below.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-[100px] md:py-[120px] bg-gray-50 dark:bg-[#0A0A0A]"
    >
      <div className="max-w-[850px] mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 dark:text-muted max-w-2xl mx-auto">
            Common questions about my skills, experience, and availability as an
            AWS Cloud & DevOps Engineer.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 dark:border-border rounded-2xl bg-white dark:bg-card overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-black dark:text-white">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}