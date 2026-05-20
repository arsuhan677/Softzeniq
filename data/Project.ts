export type Project = {
  slug: string;
  title: string;
  category: "Web" | "SaaS" | "E-commerce" | "Mobile";
  client: string;
  summary: string;
  result: string;
  tags: string[];
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "northwind-saas",
    title: "Northwind Analytics",
    category: "SaaS",
    client: "Northwind",
    summary: "Multi-tenant analytics platform for B2B logistics teams.",
    result: "+312% trial-to-paid conversion",
    tags: ["Next.js", "Postgres", "Stripe"],
    gradient: "from-[oklch(0.6_0.22_250)] to-[oklch(0.55_0.24_290)]",
  },
  {
    slug: "aurora-store",
    title: "Aurora Apparel",
    category: "E-commerce",
    client: "Aurora",
    summary: "Headless commerce storefront with 1-tap checkout.",
    result: "2.4× revenue in 90 days",
    tags: ["Shopify", "Hydrogen", "Klaviyo"],
    gradient: "from-[oklch(0.6_0.22_295)] to-[oklch(0.55_0.2_330)]",
  },
  {
    slug: "lumen-marketing",
    title: "Lumen AI",
    category: "Web",
    client: "Lumen",
    summary: "Marketing site & docs for a Series A AI startup.",
    result: "100/100 Lighthouse",
    tags: ["TanStack", "MDX", "Vercel"],
    gradient: "from-[oklch(0.62_0.22_250)] to-[oklch(0.58_0.22_270)]",
  },
  {
    slug: "pulse-mobile",
    title: "Pulse Fitness",
    category: "Mobile",
    client: "Pulse",
    summary: "iOS & Android workout tracker with social challenges.",
    result: "4.9★ App Store rating",
    tags: ["React Native", "Supabase", "RevenueCat"],
    gradient: "from-[oklch(0.65_0.2_180)] to-[oklch(0.58_0.22_240)]",
  },
  {
    slug: "ledger-saas",
    title: "Ledger Cloud",
    category: "SaaS",
    client: "Ledger",
    summary: "Accounting automation for indie founders.",
    result: "$1.2M ARR in year 1",
    tags: ["Node", "Postgres", "Plaid"],
    gradient: "from-[oklch(0.58_0.22_270)] to-[oklch(0.62_0.24_310)]",
  },
  {
    slug: "kindred-store",
    title: "Kindred Goods",
    category: "E-commerce",
    client: "Kindred",
    summary: "Sustainable home brand DTC launch.",
    result: "12k orders in launch month",
    tags: ["Medusa", "Stripe", "Algolia"],
    gradient: "from-[oklch(0.6_0.18_140)] to-[oklch(0.55_0.22_220)]",
  },
];
