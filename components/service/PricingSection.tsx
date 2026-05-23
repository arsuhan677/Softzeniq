import { Reveal } from "@/components/shared/Revel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Launch",
    price: "$4.9k",
    period: "/ project",
    desc: "Marketing site or MVP in 2–3 weeks.",
    features: ["Up to 6 pages", "Design + build", "SEO setup", "Analytics"],
    cta: "Start small",
  },
  {
    name: "Scale",
    price: "$14k",
    period: "/ month",
    desc: "Embedded product team for growing companies.",
    features: [
      "Dedicated team",
      "Weekly releases",
      "Design + eng + growth",
      "Priority Slack",
    ],
    highlight: true,
    cta: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Complex platforms with SLAs and dedicated infra.",
    features: [
      "SOC 2 ready",
      "99.99% uptime",
      "Dedicated PM",
      "Quarterly roadmap",
    ],
    cta: "Let's talk",
  },
];

export default function PricingSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Engagements"
          title={
            <>
              Simple, <span className="text-gradient">transparent</span> pricing
            </>
          }
          description="Three ways to work with us. No hidden fees, no long lock-ins."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.05}>
              <div
                className={`relative h-full rounded-2xl p-7 flex flex-col ${tier.highlight ? "bg-gradient-brand shadow-glow text-primary-foreground" : "glass"}`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground border border-border">
                    Most popular
                  </span>
                )}
                <h4 className="font-display font-semibold text-lg">
                  {tier.name}
                </h4>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span
                    className={`text-sm ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {tier.desc}
                </p>
                <ul className="mt-6 space-y-2 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 shrink-0 mt-0.5 ${tier.highlight ? "text-primary-foreground" : "text-primary"}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-7 ${tier.highlight ? "bg-background text-foreground hover:bg-background/90" : ""}`}
                  variant={tier.highlight ? "default" : "hero"}
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
