import { supabase } from "@/lib/supabase";
import { Reveal } from "../shared/Revel";

export default async function Stats() {
  const { data: statsData, error } = await supabase
    .from("stats")
    .select("*")
    .order("display_order", { ascending: true });

  // Fallback to static data if table doesn't exist yet or there's an error
  const defaultStats = [
    { value: "120+", label: "Projects shipped" },
    { value: "40+", label: "Clients worldwide" },
    { value: "8+", label: "Years of craft" },
    { value: "98%", label: "Client retention" },
  ];

  const stats = statsData && statsData.length > 0 ? statsData : defaultStats;

  return (
    <div className="container mx-auto px-5 sm:px-8 mt-10 lg:mt-20 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="glass rounded-2xl p-3 lg:p-6 w-[130px] sm:w-[150px] lg:w-[200px] xl:w-[280px] flex flex-col justify-center items-center text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
