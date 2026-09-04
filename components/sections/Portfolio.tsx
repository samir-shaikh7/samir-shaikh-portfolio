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
  Shield,
  Terminal,
} from "lucide-react";
import ProjectCard, { type ProjectData } from "@/components/ui/ProjectCard";

const featuredProjects: ProjectData[] = [
  {
    category: "AWS / ARCHITECTURE",
    title: "AWS Three-Tier Web Application",
    description:
      "Designed a highly available three-tier architecture using AWS VPC, EC2, ALB, and RDS with proper subnet segmentation and security group configuration.",
    tech: ["AWS", "VPC", "EC2", "ALB", "RDS", "CloudWatch"],
    icon: Cloud,
    color: "from-orange-500/20 to-amber-500/20",
    delay: 0.1,
    github: "https://github.com/samir-shaikh7/AWS-Three-Tier-Web-Application",
  },
  {
    category: "DEVOPS / CI-CD",
    title: "Enterprise Java DevOps CI/CD",
    description:
      "Built an end-to-end CI/CD pipeline using Jenkins with GitHub webhook integration, Maven builds, SonarQube analysis, and automated deployment to AWS.",
    tech: ["Jenkins", "Maven", "GitHub", "SonarQube", "AWS"],
    icon: GitBranch,
    color: "from-red-500/20 to-pink-500/20",
    delay: 0.15,
    github: "https://github.com/samir-shaikh7/enterprise-java-devops-cicd",
  },
  {
    category: "AWS / CLOUD",
    title: "AWS ALB Zero Downtime Deployment",
    description:
      "Implemented a zero-downtime deployment strategy using AWS Application Load Balancer with target group switching, health checks, and rolling updates.",
    tech: ["AWS", "ALB", "EC2", "Target Groups", "Shell"],
    icon: Shield,
    color: "from-emerald-500/20 to-teal-500/20",
    delay: 0.2,
    github: "https://github.com/samir-shaikh7/aws-alb-zero-downtime-deployment",
  },
  {
    category: "CONTAINERS",
    title: "Dockerized Full-Stack Application",
    description:
      "Containerized a full-stack application using Docker with multi-stage builds, Docker Compose for multi-container orchestration, and optimized image sizes.",
    tech: ["Docker", "Docker Compose", "Node.js", "Nginx"],
    icon: Container,
    color: "from-blue-500/20 to-cyan-500/20",
    delay: 0.25,
  },
  {
    category: "INFRASTRUCTURE AS CODE",
    title: "Terraform AWS Infrastructure",
    description:
      "Provisioned complete AWS infrastructure using Terraform — including VPC, subnets, security groups, EC2 instances, S3, and IAM roles with remote state management.",
    tech: ["Terraform", "AWS", "HCL", "S3", "IAM"],
    icon: FileCode,
    color: "from-violet-500/20 to-purple-500/20",
    delay: 0.3,
  },
  {
    category: "CONTAINERS / ORCHESTRATION",
    title: "Kubernetes Practical Deployment",
    description:
      "Deployed and managed containerized applications on Kubernetes with Deployments, Services, Ingress, ConfigMaps, Secrets, and Horizontal Pod Autoscaling.",
    tech: ["Kubernetes", "Docker", "kubectl", "YAML"],
    icon: Server,
    color: "from-blue-600/20 to-indigo-500/20",
    delay: 0.35,
  },
  {
    category: "LINUX / DEVOPS",
    title: "Linux System Administration",
    description:
      "Comprehensive Linux system administration project covering user management, file permissions, process control, service management, networking, and shell scripting.",
    tech: ["Linux", "Bash", "Networking", "Systemd", "Cron"],
    icon: Terminal,
    color: "from-yellow-500/20 to-orange-500/20",
    delay: 0.4,
    github: "https://github.com/samir-shaikh7/linux-system-administration-project",
  },
];

const webDevProjects: ProjectData[] = [
  {
    category: "WEB DEVELOPMENT",
    title: "Filipino Food Kuwait",
    description:
      "Full-stack food ordering website for a restaurant in Kuwait with product catalog, cart functionality, and WhatsApp-based order system.",
    tech: ["Next.js", "React", "Supabase", "Vercel"],
    icon: Globe,
    color: "from-green-500/20 to-emerald-500/20",
    delay: 0.1,
    liveUrl: "https://www.filipinofood.online",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Soniya Patange Makeover",
    description:
      "Professional portfolio website for a makeup artist showcasing services, gallery, and client booking information.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    icon: Globe,
    color: "from-pink-500/20 to-rose-500/20",
    delay: 0.15,
    liveUrl: "https://soniyapatangemakeups.in",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Portfolio Website",
    description:
      "Personal cloud engineering portfolio built with Next.js, featuring dark mode, smooth animations, and responsive design.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    icon: Code2,
    color: "from-cyan-500/20 to-blue-500/20",
    delay: 0.2,
  },
  {
    category: "ACADEMIC PROJECT",
    title: "Library Management System",
    description:
      "Full-stack Library Management System with user authentication, book cataloging, issue/return tracking, and admin dashboard.",
    tech: ["Python", "Flask", "MySQL", "HTML/CSS"],
    icon: BookOpen,
    color: "from-amber-500/20 to-yellow-500/20",
    delay: 0.25,
  },
  {
    category: "WEB DEVELOPMENT",
    title: "E-Commerce Frontend",
    description:
      "Responsive e-commerce user interface with product listing, shopping cart, and checkout flow built with modern CSS techniques.",
    tech: ["React", "CSS", "JavaScript"],
    icon: ShoppingCart,
    color: "from-indigo-500/20 to-violet-500/20",
    delay: 0.3,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-[120px] bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Featured Projects Header */}
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
              Hands-on Cloud &amp; DevOps projects demonstrating practical experience
              with AWS, CI/CD, containerization, and Infrastructure as Code.
            </p>
          </div>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured
            />
          ))}
        </div>

        {/* Web Development Projects Header */}
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
            Web development and academic projects demonstrating frontend, full-stack, and software engineering skills.
          </p>
        </motion.div>

        {/* Web Development Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webDevProjects.map((project) => (
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
