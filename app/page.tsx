import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import AboutUs from "@/components/sections/AboutUs";
import CareerFocus from "@/components/sections/CareerFocus";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/ui/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your primary area of expertise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "My primary focus is AWS Cloud and DevOps Engineering. I work with AWS cloud services, Docker, Kubernetes, Terraform, Jenkins CI/CD, Linux administration, and Git/GitHub."
      }
    },
    {
      "@type": "Question",
      "name": "Are you available for internships or entry-level positions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. I am actively seeking opportunities in Cloud Engineering, DevOps, and related roles. I am open to internships, entry-level positions, and junior roles."
      }
    },
    {
      "@type": "Question",
      "name": "What AWS services do you have experience with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I have practical experience with EC2, S3, IAM, VPC, RDS, EBS, EFS, Route 53, ALB, Auto Scaling, CloudWatch, SNS, Lambda, and Elastic Beanstalk."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have experience with CI/CD pipelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. I have built CI/CD pipelines using Jenkins with GitHub webhook integration, automated build and deployment stages, Docker image creation, and deployment to AWS."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with containerization and orchestration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. I work with Docker for containerizing applications and Kubernetes for orchestrating deployments using Pods, Deployments, Services, Ingress, ConfigMaps, and Secrets."
      }
    },
  ]
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samir Shaikh",
  "jobTitle": "AWS Cloud & DevOps Engineer",
  "description": "AWS Cloud & DevOps Engineer building practical experience in cloud infrastructure, automation, containerization, CI/CD and Infrastructure as Code.",
  "knowsAbout": [
    "AWS Cloud",
    "DevOps",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "CI/CD",
    "Linux",
    "Infrastructure as Code",
    "Git",
    "GitHub"
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col hide-scrollbar overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <Navbar />

      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Process />
      <div className="border-t border-border" />
      <TechStack />
      <AboutUs />
      <CareerFocus />
      <FAQ />

      <Footer />
    </main>
  );
}
