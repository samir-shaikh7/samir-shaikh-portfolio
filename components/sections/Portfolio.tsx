"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  Shield,
  Terminal,
  Globe,
} from "lucide-react";
import ProjectCard, { type ProjectData } from "@/components/ui/ProjectCard";

const featuredProjects: ProjectData[] = [
  {
    category: "AWS / CLOUD",
    title: "AWS ALB Zero Downtime Deployment Using Weighted Target Groups",
    description:
      "Implemented a zero-downtime deployment strategy using AWS Application Load Balancer and weighted target groups. Deployed Version 1 and Version 2 on separate EC2 instances, configured weighted routing to gradually shift traffic, and maintained the same ALB DNS URL throughout the deployment.",
    tech: ["AWS EC2", "ALB", "Target Groups", "Weighted Routing", "Security Groups"],
    icon: Shield,
    color: "from-emerald-500/20 to-teal-500/20",
    delay: 0.1,
    github: "https://github.com/samir-shaikh7/aws-alb-zero-downtime-deployment",
  },
  {
    category: "DEVOPS / CI-CD",
    title: "Enterprise Java DevOps CI/CD Pipeline on AWS",
    description:
      "Built an end-to-end CI/CD pipeline for a Maven-based Java web application using Jenkins and AWS services. Pipeline includes automated source-code checkout, Maven builds, SonarQube analysis, Quality Gate checks, WAR packaging, artifact storage in S3, and deployment to testing and production environments.",
    tech: ["Jenkins", "Maven", "SonarQube", "Amazon S3", "EC2", "Tomcat", "CI/CD"],
    icon: GitBranch,
    color: "from-red-500/20 to-pink-500/20",
    delay: 0.15,
    github: "https://github.com/samir-shaikh7/enterprise-java-devops-cicd",
  },
  {
    category: "AWS / ARCHITECTURE",
    title: "AWS Three-Tier Web Application Architecture",
    description:
      "Designed and implemented a three-tier web application architecture on AWS with separate web, application, and database layers. Configured custom VPC with public and private subnets, Internet and NAT Gateways, ALB for traffic distribution, EC2 application servers with Apache and PHP, and Amazon RDS MySQL in a private subnet.",
    tech: ["AWS VPC", "EC2", "ALB", "RDS MySQL", "NAT Gateway", "Bastion Host"],
    icon: Cloud,
    color: "from-orange-500/20 to-amber-500/20",
    delay: 0.2,
    github: "https://github.com/samir-shaikh7/AWS-Three-Tier-Web-Application",
  },
  {
    category: "LINUX / DEVOPS",
    title: "Linux System Administration & DevOps Project",
    description:
      "Hands-on Linux system administration and DevOps practice covering server administration, automation, monitoring, networking and security. Built automation scripts for backups, cleanup, log rotation, resource monitoring, and bulk user creation.",
    tech: ["Linux", "Bash", "Shell Scripting", "Cron", "UFW", "Networking"],
    icon: Terminal,
    color: "from-yellow-500/20 to-orange-500/20",
    delay: 0.25,
    github: "https://github.com/samir-shaikh7/linux-system-administration-project",
  },
];

const additionalProjects: ProjectData[] = [
  {
    category: "WEB DEVELOPMENT",
    title: "Filipino Food Kuwait — Restaurant Ordering Platform",
    description:
      "Built a production-style restaurant ordering platform with dynamic menu management, WhatsApp ordering workflow, secure admin panel, Supabase database integration, and mobile-first responsive design. Includes SEO implementation and performance optimization.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite", "Vercel"],
    icon: Globe,
    color: "from-green-500/20 to-emerald-500/20",
    delay: 0.1,
    liveUrl: "https://www.filipinofood.online",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Soniya Patange Makeover — Premium Bridal Makeup & Academy Website",
    description:
      "Built a premium bridal makeup and academy website with portfolio galleries, pricing, WhatsApp lead generation, and contact workflows. Implemented SEO with Google Search Console, sitemap, and robots.txt. Migrated from a database-driven architecture to a fully static architecture for improved performance.",
    tech: ["Git", "GitHub", "Vercel", "SEO", "Responsive Design"],
    icon: Globe,
    color: "from-pink-500/20 to-rose-500/20",
    delay: 0.15,
    liveUrl: "https://soniyapatangemakeups.in",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-16 bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Featured Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left"
        >
          <div>
            <div className="mb-4">
              <h2 className="text-3xl md:text-[40px] font-bold text-black dark:text-white inline-block">
                Featured Projects
              </h2>
            </div>
            <p className="text-gray-600 dark:text-muted max-w-xl text-sm md:text-base">
              Hands-on Cloud &amp; DevOps projects demonstrating practical experience
              with AWS, CI/CD, containerization, and Infrastructure as Code.
            </p>
          </div>
        </motion.div>

        {/* Featured Projects Grid — 2 columns for 4 projects */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured
            />
          ))}
        </div>

        {/* Additional Development Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
            Additional Development Projects
          </h3>
          <p className="text-gray-600 dark:text-muted text-sm md:text-base">
            Web development projects demonstrating frontend, full-stack, and software engineering skills.
          </p>
        </motion.div>

        {/* Additional Projects Grid — 2 columns for 2 projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {additionalProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
