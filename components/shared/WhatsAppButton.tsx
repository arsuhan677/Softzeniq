"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href="https://wa.me/8801791091160"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-brand grid place-items-center shadow-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
      <span className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
    </motion.a>
  );
}
