import { Button } from "@/components/ui/button";
import { services } from "@/data/Service";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { GridBackdrop } from "../shared/GridBackDrop";
import { Reveal } from "../shared/Revel";
import { SectionHeading } from "../shared/SectionHeading";

// export const Route = createFileRoute("/services")({
//   head: () => ({
//     meta: [
//       { title: "Services — SoftZeniq" },
//       {
//         name: "description",
//         content:
//           "Web, e-commerce, custom software, mobile, UI/UX, SEO and ads — eight disciplines, one senior team. Explore SoftZeniq services.",
//       },
//       { property: "og:title", content: "Services — SoftZeniq" },
//       {
//         property: "og:description",
//         content: "Web, software, mobile, design and growth — by a senior team.",
//       },
//       { property: "og:url", content: "/services" },
//     ],
//     links: [{ rel: "canonical", href: "/services" }],
//   }),
//   component: Services,
// });

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

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <GridBackdrop />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
              Services
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Everything you need to{" "}
              <span className="text-gradient">ship and grow</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Pick one discipline or hire the whole team. Either way, you get
              senior people accountable to your outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <div className="group relative h-full rounded-2xl glass p-7 hover:border-primary/40 transition-colors overflow-hidden flex flex-col">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center shadow-glow mb-5">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Button asChild variant="glass" size="sm" className="w-full">
                    <Link href="/contact">
                      Start Project <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Engagements"
            title={
              <>
                Simple, <span className="text-gradient">transparent</span>{" "}
                pricing
              </>
            }
            description="Three ways to work with us. No hidden fees, no long lock-ins."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div
                  className={`relative h-full rounded-2xl p-7 flex flex-col ${t.highlight ? "bg-gradient-brand shadow-glow text-primary-foreground" : "glass"}`}
                >
                  {t.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground border border-border">
                      Most popular
                    </span>
                  )}
                  <h4 className="font-display font-semibold text-lg">
                    {t.name}
                  </h4>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{t.price}</span>
                    <span
                      className={`text-sm ${t.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {t.period}
                    </span>
                  </div>
                  <p
                    className={`mt-2 text-sm ${t.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {t.desc}
                  </p>
                  <ul className="mt-6 space-y-2 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 ${t.highlight ? "text-primary-foreground" : "text-primary"}`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`mt-7 ${t.highlight ? "bg-background text-foreground hover:bg-background/90" : ""}`}
                    variant={t.highlight ? "default" : "hero"}
                  >
                    <Link href="/contact">{t.cta}</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
