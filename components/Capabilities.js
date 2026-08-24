"use client";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    "Full-Stack Development",
    "AI & RAG Applications",
    "Modern Web Applications",
    "API Development",
    "Database Architecture",
    "Cloud & Deployment",
    "Blockchain Development"
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 flex-wrap">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider hidden md:block">
            Engineering Capabilities
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={cap}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm text-sm font-medium"
              >
                <CheckCircle2 size={16} className="text-primary" />
                {cap}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
