import { Star } from "lucide-react";
import { Reveal } from "../shared/Revel";
import { SectionHeading } from "../shared/SectionHeading";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "SoftZeniq shipped our MVP in 6 weeks and helped us close our seed round. Easily our highest-leverage partner.",
      name: "Maya Chen",
      role: "CEO, Lumen AI",
    },
    {
      quote:
        "Our checkout conversion jumped 84% in the first month. They feel like an in-house team — just better.",
      name: "Daniel Ortiz",
      role: "Founder, Aurora",
    },
    {
      quote:
        "The level of polish and speed is unmatched. They turned our internal tool into a product investors love.",
      name: "Priya Raman",
      role: "CTO, Northwind",
    },
  ];
  return (
    <section className="relative py-12 sm:py-16 bg-[var(--color-secondary)]/50 border-b border-[var(--border)]">
      <div className="mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by founders{" "}
              <span className="text-gradient">and operators</span>.
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <figure className="h-full glass rounded-2xl p-7 flex flex-col">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border/50">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
