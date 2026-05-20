import { projects } from "@/data/Project";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../shared/Revel";
import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../ui/button";

export default function Portfolio() {
  return (
    <div>
      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Recent work"
            title={
              <>
                Products our clients{" "}
                <span className="text-gradient">are proud of</span>.
              </>
            }
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <div className="group rounded-2xl overflow-hidden glass">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative`}
                  >
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.summary}
                    </p>
                    <p className="text-sm text-gradient font-medium mt-3">
                      {p.result}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="glass" size="lg">
              <Link href="/portfolio">
                See all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
