import PricingSection from "@/components/service/PricingSection";
import ServiceGrid from "@/components/service/ServiceGrid";
import ServiceHeader from "@/components/service/ServiceHeader";

export default function page() {
  return (
    <div>
      <ServiceHeader />
      <ServiceGrid />
      <PricingSection />
    </div>
  );
}
