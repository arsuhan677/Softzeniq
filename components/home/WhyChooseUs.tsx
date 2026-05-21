import { Check, EyeOff, Zap } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";

export default function WhyChosseUs() {
  const comparisonData = [
    {
      title: "Trust & Authenticity",
      without:
        "Low trust, sketchy social DMs layout, fragmented branding elements.",
      with: "Premium dedicated storefront holding custom checkout security certificates.",
      icon: "ShieldCheck",
    },
    {
      title: "Scalability & Sales",
      without: "Low direct checkout volume; capped manually by admin hours.",
      with: "Unlimited concurrent automated sessions driving constant sales around the globe.",
      icon: "Zap",
    },
    {
      title: "Platform Sovereignty",
      without:
        "High vulnerability to platform bans, algorithmic drops, and fee edits.",
      with: "Complete ownership of customer emails, brand pixels, and traffic pipelines.",
      icon: "Award",
    },
    {
      title: "Growth Analytics",
      without:
        "Blind guesswork; completely unaware of actual cart dropoff reasons.",
      with: "Integrated server-side GA4 + Triple Whale intelligence tracking high LTV metrics.",
      icon: "TrendingUp",
    },
  ];
  return (
    <section className="py-12 sm:py-16 border-b border-color-border bg-[var(--color-secondary)]/50  text-center w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Growth Economics"
          title={
            <>
              E-Commerce Growth:{" "}
              <span className="text-gradient"> Legacy vs. Owned Scale</span>.
            </>
          }
          description=" Relying entirely on standard template scripts or restricted social
          platform checkouts limits your branding authority and sales volume.
          Here is how upgrading elevates your revenue."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Without Card */}
          <div className="bg-card  border border-border rounded-3xl p-8 text-left shadow-xs">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-destructive/10 text-destructive rounded-xl">
                <EyeOff className="w-5.5 h-5.5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-color-foregroundfont-display">
                  Legacy, Broken Setup
                </h4>
                <p className="text-xs text-muted-foreground">
                  Stagnant and unstable e-commerce frameworks
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonData.map((item) => (
                <div key={item.title} className="border-b border-border pb-3.5">
                  <h5 className="text-xs font-semibold text-color-foreground font-sans mb-1">
                    {item.title}
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {item.without}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* With Card */}
          <div className="bg-linear-to-b from-brand-indigo/20 to-color-background border-2 border-[var(--brand-indigo)] rounded-3xl p-8 text-left shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[10px] font-bold font-mono tracking-wider py-1 px-4 rounded-bl-xl uppercase bg-brand-indigo text-primary-foreground">
              Optimized Engine
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-brand-blue/15 rounded-xl text-brand-blue">
                <Zap className="w-5.5 h-5.5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-color-foreground font-display">
                  Softzeniq Custom Blueprint
                </h4>
                <p className="text-xs font-medium font-sans text-brand-blue">
                  High-converting asset designed for exponential scale
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonData.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-border  pb-3.5 flex items-start space-x-3"
                >
                  <div className="p-1.5 rounded-lg mt-0.5 bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-color-foreground font-sans">
                      {item.title}
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans mt-0.5">
                      {item.with}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
