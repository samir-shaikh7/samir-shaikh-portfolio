import type { Metadata, Viewport } from "next";
import { Inter, Moirai_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const moirai = Moirai_One({
  weight: "400",
  variable: "--font-moirai",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#019d91" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://samirshaikh.dev"),
  title: {
    default: "Samir Shaikh | AWS Cloud & DevOps Engineer",
    template: "%s | Samir Shaikh"
  },
  description: "Samir Shaikh — AWS Cloud & DevOps Engineer specializing in cloud infrastructure, CI/CD automation, Docker, Kubernetes, Terraform, and Infrastructure as Code.",
  keywords: [
    // Personal Branding
    "Samir Shaikh",
    "Samir Shaikh Portfolio",
    "Samir Shaikh DevOps",
    "Samir Shaikh AWS",

    // Core Skills
    "AWS Cloud Engineer",
    "DevOps Engineer",
    "Cloud Infrastructure",
    "CI/CD Pipeline",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Infrastructure as Code",
    "Linux Administration",
    "Git",
    "GitHub",

    // AWS Services
    "EC2",
    "S3",
    "IAM",
    "VPC",
    "RDS",
    "CloudWatch",
    "Lambda",
    "Route 53",
    "Elastic Beanstalk",

    // Career Keywords
    "Cloud DevOps Portfolio",
    "Entry Level DevOps Engineer",
    "Junior Cloud Engineer",
    "DevOps Intern",
    "Cloud Engineer India",
  ],

  authors: [{ name: "Samir Shaikh" }],
  creator: "Samir Shaikh",
  publisher: "Samir Shaikh",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Samir Shaikh | AWS Cloud & DevOps Engineer",
    description: "AWS Cloud & DevOps Engineer building practical experience in cloud infrastructure, automation, containerization, CI/CD and Infrastructure as Code.",
    url: "https://samirshaikh.dev",
    siteName: "Samir Shaikh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samir Shaikh — AWS Cloud & DevOps Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samir Shaikh | AWS Cloud & DevOps Engineer",
    description: "AWS Cloud & DevOps Engineer building practical experience in cloud infrastructure, automation, containerization, CI/CD and Infrastructure as Code.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://samirshaikh.dev",
  },
  applicationName: "Samir Shaikh Portfolio",
  appleWebApp: {
    capable: true,
    title: "Samir Shaikh",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

const jsonLds = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samir Shaikh",
    "jobTitle": "AWS Cloud & DevOps Engineer",
    "url": "https://samirshaikh.dev",
    "description": "AWS Cloud & DevOps Engineer specializing in cloud infrastructure, CI/CD automation, Docker, Kubernetes, Terraform, and Infrastructure as Code.",
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
    "sameAs": [
      "https://github.com/samir-shaikh7",
      "https://linkedin.com/in/samir-shaikh7"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Samir Shaikh Portfolio",
    "url": "https://samirshaikh.dev",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${moirai.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {jsonLds.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
            }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground tracking-tight transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
