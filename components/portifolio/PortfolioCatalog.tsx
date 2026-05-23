"use client";

import { Project, projects } from "@/data/Project";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal";

const categories = ["All", "Web", "SaaS", "E-commerce", "Mobile"] as const;
type Cat = (typeof categories)[number];

export default function PortfolioCatalog() {
  const [active, setActive] = useState<Cat>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === category
                  ? "bg-gradient-brand text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.button
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.04 }}
                onClick={() => setOpen(project)}
                className="group text-left rounded-2xl overflow-hidden glass hover:border-primary/40 transition-colors"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative`}
                >
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground font-display text-2xl font-bold drop-shadow">
                    {project.title}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                  <p className="mt-3 text-sm font-medium text-gradient">
                    {project.result}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <PortfolioModal open={open} onClose={() => setOpen(null)} />
    </section>
  );
}
