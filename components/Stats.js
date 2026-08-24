"use client";
import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { value: "20+", label: "Technologies Mastered" },
    { value: "7+", label: "Development Capabilities" },
    { value: "4+", label: "Featured Projects" },
    { value: "100%", label: "Engineering Focus" },
  ];

  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
