"use client";

import { ArrowRight } from "lucide-react";
import CircuitBoard from "./CircuitBoard";
// import {IoChevronForward} from "react-icons/io5";
// import CircuitBoard from "./CircuitBoard.jsx"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <CircuitBoard>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-10 text-center relative z-20 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6 "
        >
          {" "}
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          Global IT Solutions Partner
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Build. Scale. <span className="text-gradient">Transform</span>
          <br className="hidden sm:block" /> with SoftZeniq.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground"
        >
          IT solutions, software and digital growth for startups and businesses
          worldwide. One senior team, end-to-end — from idea to launch to scale.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            variant="hero"
            size="lg"
            className="px-7 h-12 text-sm"
          >
            <Link href="/contact">
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="glass"
            size="lg"
            className="px-7 h-12 text-sm"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </motion.div>
      </div>
    </CircuitBoard>
  );
}
