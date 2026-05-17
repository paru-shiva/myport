import ecommerceImage from "../assets/projects/ecommerce.png";
import jobPortalImage from "../assets/projects/job-portal.png";
import subscriptionPlatformImage from "../assets/projects/subscription-platform.png";
import aiAuditImage from "../assets/projects/ai-audit.png";
import youtubeCloneImage from "../assets/projects/youtube-clone.png";
import covidImage from "../assets/projects/covid.png";

export const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Web Application",
    category: "fullstack",
    image: ecommerceImage,
    fallbackImage: "/assets/projects/ecommerce.svg",
    description:
      "Full-featured online store with payments, order management, and admin controls for business operations.",
    features: [
      "Product listings",
      "Shopping cart",
      "Order management",
      "Razorpay payment integration",
      "Admin dashboard",
      "User authentication",
    ],
    tech: ["React", "Node.js", "Express", "MySQL"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "job-portal",
    title: "Job Portal & Interview Scheduling",
    category: "fullstack",
    image: jobPortalImage,
    fallbackImage: "/assets/projects/job-portal.svg",
    description:
      "Platform connecting candidates and employers with scheduling workflows and responsive job discovery.",
    features: [
      "Job listings",
      "Interview scheduling",
      "Responsive UI",
      "REST APIs",
    ],
    tech: ["React", "Express", "SQLite"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "subscription",
    title: "Online Subscription Platform",
    category: "fullstack",
    image: subscriptionPlatformImage,
    fallbackImage: "/assets/projects/subscription.svg",
    description:
      "Scalable subscription service with secure authentication and Python-powered backend logic.",
    features: ["Subscription system", "Authentication", "Scalable backend"],
    tech: ["React", "Flask", "Python"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "ai-spend-audit",
    title: "AI Tools Spend Audit",
    category: "fullstack",
    image: aiAuditImage,
    fallbackImage: "/assets/projects/ai-spend-audit.svg",
    description:
      "AI Spendly is a high-performance SaaS application designed for founders to visualize and optimize their AI tool spend.",
    features: ["Audit Engine", "Expenditure Summary", "AI Recommandations"],
    tech: ["React.js", "Supabase"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "covid",
    title: "COVID-19 Backend System",
    category: "backend",
    image: covidImage,
    fallbackImage: "/assets/projects/covid.svg",
    description:
      "Backend services for pandemic-related data handling with structured APIs and reliable processing.",
    features: ["Backend APIs", "Data handling services", "REST endpoints"],
    tech: ["Node.js", "Express"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    category: "frontend",
    image: youtubeCloneImage,
    fallbackImage: "/assets/projects/youtube.svg",
    description:
      "Video platform UI clone showcasing component architecture and responsive layout patterns.",
    features: ["Responsive UI", "Reusable components", "Modern layout"],
    tech: ["React"],
    liveUrl: null,
    githubUrl: null,
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];
