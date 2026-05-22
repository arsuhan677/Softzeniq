import { Users } from "lucide-react";
import { Reveal } from "../shared/Revel";
import { SectionHeading } from "../shared/SectionHeading";

const team = [
  { name: "Anaya Sharma", role: "Founder & CEO" },
  { name: "Marcus Reid", role: "Head of Engineering" },
  { name: "Lena Brooks", role: "Design Director" },
  { name: "Kai Tanaka", role: "Growth Lead" },
];

export default function Team() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="The people"
          title={
            <>
              A team built from{" "}
              <span className="text-gradient">senior operators</span>.
            </>
          }
          description="Engineers, designers and growth leads who've shipped at scale — and want to do it again with you."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.05}>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-brand shadow-glow grid place-items-center">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h4 className="mt-5 font-semibold">{person.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {person.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
