"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Terminal,
  Container,
  Server,
  GitBranch,
  Settings,
  GitFork,
  FileCode,
} from "lucide-react";

const expertise = [
  {
    title: "AWS Cloud",
    description: "Cloud infrastructure and core AWS services.",
    technologies: ["EC2", "S3", "IAM", "VPC", "RDS", "EBS", "EFS", "Route 53", "ALB", "Auto Scaling", "CloudWatch", "SNS", "Lambda", "Elastic Beanstalk"],
    icon: Cloud,
    color: "from-orange-500/20 to-amber-500/20",
    delay: 0.1,
  },
  {
    title: "Linux",
    description: "Linux administration, command-line operations, and troubleshooting.",
    technologies: ["Ubuntu", "File Management", "Permissions", "Users & Groups", "Processes", "Services", "Networking", "Monitoring", "Troubleshooting", "Shell Scripting"],
    icon: Terminal,
    color: "from-yellow-500/20 to-orange-500/20",
    delay: 0.15,
  },
  {
    title: "Docker",
    description: "Containerization and portable application environments.",
    technologies: ["Images", "Containers", "Dockerfiles", "Volumes", "Networks", "Docker Compose"],
    icon: Container,
    color: "from-blue-500/20 to-cyan-500/20",
    delay: 0.2,
  },
  {
    title: "Kubernetes",
    description: "Container orchestration and Kubernetes fundamentals.",
    technologies: ["Pods", "Deployments", "Services", "ConfigMaps", "Secrets", "Namespaces", "Minikube"],
    icon: Server,
    color: "from-blue-600/20 to-indigo-500/20",
    delay: 0.25,
  },
  {
    title: "Terraform",
    description: "Infrastructure as Code for provisioning cloud infrastructure.",
    technologies: ["HCL", "Providers", "Resources", "Variables", "Outputs", "State", "Terraform Workflow"],
    icon: FileCode,
    color: "from-violet-500/20 to-purple-500/20",
    delay: 0.3,
  },
  {
    title: "Jenkins & CI/CD",
    description: "Automated application build and deployment workflows.",
    technologies: ["Jenkins", "Git", "GitHub", "Maven", "CI/CD", "Build Automation"],
    icon: Settings,
    color: "from-red-500/20 to-pink-500/20",
    delay: 0.35,
  },
  {
    title: "Git & GitHub",
    description: "Source control and collaborative development workflows.",
    technologies: ["Git", "GitHub", "Branching", "Merging", "Pull Requests", "Repository Management"],
    icon: GitFork,
    color: "from-gray-500/20 to-slate-500/20",
    delay: 0.4,
  },
  {
    title: "Cloud Automation",
    description: "Automating infrastructure and deployment processes.",
    technologies: ["Infrastructure as Code", "CI/CD", "Shell Scripting", "AWS Automation", "Deployment Automation"],
    icon: GitBranch,
    color: "from-green-500/20 to-emerald-500/20",
    delay: 0.45,
  },
];


export default function Services() {
  return (
    <section id="expertise" className="py-[120px] bg-white dark:bg-black">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-black dark:text-white mb-4">
            Technical Expertise
          </h2>

          <p className="text-gray-600 dark:text-muted max-w-2xl mx-auto">
            Core technologies and tools I work with to build, deploy, and manage
            cloud infrastructure and automated pipelines.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((skill) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: skill.delay }}
              whileHover={{ y: -8 }}
              className="group relative bg-gray-50 dark:bg-card rounded-[16px] border border-gray-200 dark:border-border p-6 transition-all hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] flex flex-col h-full"
            >
              {/* Icon Header */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                <skill.icon className="w-6 h-6 text-foreground dark:text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 shrink-0">
                {skill.title}
              </h3>
              
              <p className="text-[15px] text-gray-600 dark:text-muted mb-6 leading-relaxed shrink-0">
                {skill.description}
              </p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none"
                  >
                    {tech}
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