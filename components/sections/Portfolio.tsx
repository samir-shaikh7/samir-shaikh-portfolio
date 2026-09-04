"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  Container,
  FileCode,
  Server,
  BookOpen,
  Globe,
  ShoppingCart,
  Code2,
} from "lucide-react";

const mainProjects = [
  {
    title: "AWS Cloud Infrastructure",
    description:
      "Designed and deployed a multi-tier AWS architecture using EC2, VPC, S3, RDS, ALB, Auto Scaling, and CloudWatch for monitoring and high availability.",
    tech: ["AWS", "EC2", "VPC", "RDS", "ALB", "CloudWatch"],
    icon: Cloud,
    color: "from-orange-500/20 to-amber-500/20",
    delay: 0.1,
  },
  {
    title: "Jenkins CI/CD Pipeline",
    description:
      "Built an automated CI/CD pipeline using Jenkins with GitHub webhook integration, multi-stage builds, automated testing, and deployment to AWS.",
    tech: ["Jenkins", "GitHub", "Docker", "AWS", "Shell"],
    icon: GitBranch,
    color: "from-red-500/20 to-pink-500/20",
    delay: 0.15,
  },
  {
    title: "Dockerized Application",
    description:
      "Containerized a full-stack application using Docker with multi-stage builds, Docker Compose for multi-container orchestration, and optimized image sizes.",
    tech: ["Docker", "Docker Compose", "Node.js", "Nginx"],
    icon: Container,
    color: "from-blue-500/20 to-cyan-500/20",
    delay: 0.2,
  },
  {
    title: "Terraform Infrastructure as Code",
    description:
      "Provisioned complete AWS infrastructure using Terraform — including VPC, subnets, security groups, EC2 instances, S3, and IAM roles with state management.",
    tech: ["Terraform", "AWS", "IaC", "HCL"],
    icon: FileCode,
    color: "from-violet-500/20 to-purple-500/20",
    delay: 0.25,
  },
  {
    title: "Kubernetes Practical Project",
    description:
      "Deployed and managed containerized applications on Kubernetes with Deployments, Services, Ingress, ConfigMaps, Secrets, and Horizontal Pod Autoscaling.",
    tech: ["Kubernetes", "Docker", "kubectl", "YAML"],
    icon: Server,
    color: "from-blue-600/20 to-indigo-500/20",
    delay: 0.3,
  },
  {
    title: "Library Management System",
    description:
      "Built a full-stack Library Management System with user authentication, book cataloging, issue/return tracking, and admin dashboard functionality.",
    tech: ["Python", "MySQL", "HTML/CSS", "Flask"],
    icon: BookOpen,
    color: "from-green-500/20 to-emerald-500/20",
    delay: 0.35,
  },
];

const supportingProjects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and modern web technologies.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    icon: Globe,
    delay: 0.1,
  },
  {
    title: "E-Commerce Frontend",
    description: "Responsive e-commerce UI with product listing, cart, and checkout flow.",
    tech: ["React", "CSS", "JavaScript"],
    icon: ShoppingCart,
    delay: 0.15,
  },
  {
    title: "Responsive Web Layouts",
    description: "Collection of responsive web designs showcasing modern CSS and layout techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Code2,
    delay: 0.2,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-[120px] bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
              Hands-on Cloud & DevOps projects demonstrating practical experience
              with AWS, CI/CD, containerization, and Infrastructure as Code.
            </p>
          </div>
        </motion.div>

        {/* Main DevOps Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: project.delay }}
              whileHover={{ y: -6 }}
              className="group relative bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border p-6 transition-all hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-5 h-5 text-foreground dark:text-white" />
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-muted border border-gray-200 dark:border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-muted leading-relaxed text-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting Web Dev Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
            Web Development Projects
          </h3>
          <p className="text-gray-600 dark:text-muted text-sm">
            Supporting projects demonstrating frontend and full-stack web development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportingProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: project.delay }}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border p-5 transition-all hover:border-accent/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                  <project.icon className="w-4 h-4 text-gray-500 dark:text-muted" />
                </div>
                <h4 className="font-semibold text-black dark:text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-muted text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-muted border border-gray-100 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
