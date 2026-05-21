import {
  Code2,
  Compass,
  Lightbulb,
  Search,
  TrendingUp,
  Zap,
} from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";

export default function OurMethodology() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery Audits",
      desc: "We fully index your speed metrics, core crawl issues, and brand layout friction limits.",
      icon: Search,
    },
    {
      step: "02",
      title: "Growth Strategy",
      desc: "Map structural improvements, search intent hierarchies, and custom media blueprints.",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Conversion Design",
      desc: "Engineered mobile-first Figma prototypes prioritizing thumbs boundaries and cart checkouts.",
      icon: Compass,
    },
    {
      step: "04",
      title: "Headless Engineering",
      desc: "Write light scalable Next.js layouts, Shopify api, and optimize for Core Web Vitals.",
      icon: Code2,
    },
    {
      step: "05",
      title: "Autonomous Launch",
      desc: "Push code to redundant global CDNs after running 140+ precise precheck tests.",
      icon: Zap,
    },
    {
      step: "06",
      title: "Scale & Growth Sprints",
      desc: "Run bi-weekly ad revisions and CRO audits to boost your average order values (AOV).",
      icon: TrendingUp,
    },
  ];
  return (
    <section className="pt-12 sm:pt-16 bg-background text-foreground text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Methodology"
          title={
            <>
              Structured Sprints to{" "}
              <span className="text-gradient"> DTC Dominance</span>.
            </>
          }
          description="We operate through 6 highly structured, transparent phases that optimize layouts and eliminate checkout friction systemically."
        />

        <div className="relative mt-20 mx-auto">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2 z-0 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10 text-left">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-card border border-border rounded-2xl p-5 relative hover:border-primary transition hover:-translate-y-1 duration-300"
              >
                <div className="flex justify-between items-center mb-5 font-mono">
                  <span className="text-2xl font-black text-primary leading-none">
                    {step.step}
                  </span>
                  <div className="p-1.5 bg-gradient-brand text-primary rounded-md grid place-items-center shadow-glow ">
                    {/* <IconRenderer name={step.icon} className="w-4 h-4" /> */}
                    <step.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-foreground font-display mb-2">
                  {step.title}
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
