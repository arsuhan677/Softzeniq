import PricingSection from "@/components/service/PricingSection";
import ServiceGrid from "@/components/service/ServiceGrid";
import ServiceHeader from "@/components/service/ServiceHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Custom Software, Web & Mobile Development",
  description: "Explore our premium IT services including full-stack web development, custom software engineering, iOS & Android mobile apps, UI/UX design, and SEO growth strategies.",
  keywords: ["custom software development", "full stack web development", "iOS and Android apps", "UI/UX design services", "SEO marketing solutions", "IT agency services"],
  openGraph: {
    title: "Premium IT & Software Development Services | SoftZeniq",
    description: "Explore our premium IT services including full-stack web development, custom software engineering, iOS & Android mobile apps, UI/UX design, and SEO growth strategies.",
  }
};

export default function page() {
  return (
    <div>
      <ServiceHeader />
      <ServiceGrid />
      <PricingSection />
    </div>
  );
}

