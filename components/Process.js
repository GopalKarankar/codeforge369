"use client";
import { motion } from "motion/react";

export default function Process() {
  const steps = [
    { num: "01", title: "Discover", desc: "Understand the business, users and technical requirements." },
    { num: "02", title: "Plan", desc: "Define architecture, features, technology and development roadmap." },
    { num: "03", title: "Design", desc: "Create the product interface and user experience." },
    { num: "04", title: "Build", desc: "Develop frontend, backend, APIs, databases and integrations." },
    { num: "05", title: "Test", desc: "Validate functionality, performance, responsiveness and reliability." },
    { num: "06", title: "Launch", desc: "Deploy the product and prepare it for production." },
    { num: "07", title: "Scale", desc: "Improve, maintain and evolve the product based on real-world usage." },
  ];

  return (
    <section id="process" className="py-24 border-b border-border bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">From Idea to Production</h2>
          <p className="text-lg text-muted-foreground">
            A structured, transparent development process designed to deliver reliable software.
          </p>
        </div>

        {/* Desktop horizontal / Mobile vertical timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] md:left-0 top-0 bottom-0 md:bottom-auto md:top-[27px] w-0.5 md:w-full h-full md:h-0.5 bg-border z-0"></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 flex-1 group"
              >
                <div className="w-14 h-14 md:w-14 md:h-14 shrink-0 rounded-full bg-card border-2 border-border flex items-center justify-center font-bold text-lg group-hover:border-primary group-hover:text-primary group-hover:shadow-lg transition-all shadow-sm">
                  {step.num}
                </div>
                <div className="md:text-center mt-2 md:mt-4 md:px-2">
                  <h3 className="text-xl md:text-lg font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed md:max-w-[150px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
