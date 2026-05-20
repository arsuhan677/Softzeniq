import {
  Code2, ShoppingCart, Cpu, Palette, Search, Megaphone,
  Smartphone, Rocket,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: typeof Code2;
  title: string;
  short: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "web",
    icon: Code2,
    title: "Web Development",
    short: "Lightning-fast websites engineered to convert.",
    description:
      "Marketing sites, dashboards and web platforms built on modern stacks with pixel-perfect UI and stellar Core Web Vitals.",
    benefits: ["100/100 Lighthouse", "SEO-ready architecture", "CMS & headless options"],
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Development",
    short: "Storefronts that turn browsers into buyers.",
    description:
      "Shopify, Medusa, and custom commerce builds with optimized checkout, subscriptions and global payments.",
    benefits: ["Optimized checkout", "Stripe & global payments", "Inventory automation"],
  },
  {
    slug: "software",
    icon: Cpu,
    title: "Custom Software",
    short: "Bespoke platforms tailored to your operations.",
    description:
      "Internal tools, ERPs, CRMs and APIs designed around your workflows, secured and scaled for the long haul.",
    benefits: ["Scalable architecture", "Secure by design", "API-first builds"],
  },
  {
    slug: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    short: "Native-feel iOS & Android apps in record time.",
    description:
      "Cross-platform apps with React Native and native modules where performance matters most.",
    benefits: ["iOS + Android", "Offline-first", "Push, payments, auth"],
  },
  {
    slug: "design",
    icon: Palette,
    title: "UI / UX Design",
    short: "Interfaces people remember and recommend.",
    description:
      "Research-driven product design, design systems and motion that elevates your brand at every interaction.",
    benefits: ["Design systems", "User research", "Prototype to production"],
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO Optimization",
    short: "Rank higher, capture intent, compound traffic.",
    description:
      "Technical SEO, content strategy and on-page execution that delivers durable organic growth.",
    benefits: ["Technical audits", "Content engine", "Schema & Core Web Vitals"],
  },
  {
    slug: "ads",
    icon: Megaphone,
    title: "Ads Campaign Management",
    short: "Performance ads with positive ROAS, on day one.",
    description:
      "Meta, Google and LinkedIn campaigns with creative, tracking and CRO baked in from launch.",
    benefits: ["Creative + media", "Server-side tracking", "Weekly optimization"],
  },
  {
    slug: "saas",
    icon: Rocket,
    title: "SaaS Product Development",
    short: "Zero-to-one SaaS, shipped by senior teams.",
    description:
      "From MVP to scale: multi-tenant infra, billing, auth, dashboards — built like a founding team.",
    benefits: ["MVP in weeks", "Billing & multi-tenant", "Investor-ready"],
  },
];
