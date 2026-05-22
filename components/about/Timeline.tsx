import { Reveal } from "../shared/Revel";
import { SectionHeading } from "../shared/SectionHeading";

const timeline = [
  {
    year: "2017",
    title: "Founded in stealth",
    text: "Started as a 3-person studio building MVPs for YC founders.",
  },
  {
    year: "2019",
    title: "First $1M ARR client",
    text: "Helped a fintech client cross $1M ARR within 12 months.",
  },
  {
    year: "2021",
    title: "Global team",
    text: "Expanded to a remote-first team across 4 continents.",
  },
  {
    year: "2023",
    title: "120+ products shipped",
    text: "Crossed 120 products with a 98% client retention rate.",
  },
  {
    year: "Today",
    title: "Your turn",
    text: "Building the next wave of category-defining products. Yours?",
  },
];

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our journey"
          title={
            <>
              From <span className="text-gradient">stealth studio</span> to
              global team
            </>
          }
        />
        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.05}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-[26px] sm:-left-[34px] top-1.5 h-3 w-3 rounded-full bg-gradient-brand shadow-glow ring-4 ring-background" />
                <div className="text-xs font-mono text-primary uppercase tracking-wider">
                  {item.year}
                </div>
                <h4 className="mt-1 font-semibold text-lg">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
