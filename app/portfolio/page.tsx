import PortfolioCatalog from "@/components/portifolio/PortfolioCatalog";
import PortfolioHeader from "@/components/portifolio/PortfolioHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Case Studies & Featured Projects",
  description: "Explore our portfolio of high-performing web applications, mobile apps, and custom software systems designed and developed by SoftZeniq.",
  keywords: ["portfolio", "case studies", "software engineering portfolio", "web app design examples", "mobile app showcase", "SoftZeniq work"],
  openGraph: {
    title: "Our Work & Portfolio | SoftZeniq",
    description: "Explore our portfolio of high-performing web applications, mobile apps, and custom software systems designed and developed by SoftZeniq.",
  }
};

export default function page() {
  return (
    <div>
      <PortfolioHeader />
      <PortfolioCatalog />
    </div>
  );
}

