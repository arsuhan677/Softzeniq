import { GridBackdrop } from "@/components/shared/GridBackDrop";
import { Reveal } from "@/components/shared/Revel";

export default function PortfolioHeader() {
  return (
    <section className="relative pt-20 sm:pt-30 pb-12 overflow-hidden">
      <GridBackdrop />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Work that <span className="text-gradient">moved the needle</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A selection of recent products we've designed, built and grown with
            our partners.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
