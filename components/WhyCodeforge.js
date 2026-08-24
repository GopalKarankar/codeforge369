"use client";
import { motion } from "motion/react";
import { Layers, Zap, Lock, Cpu, Rocket, CodeSquare } from "lucide-react";

export default function WhyCodeforge() {
  const reasons = [
    {
      title: "Clean Architecture",
      description: "Maintainable code designed for long-term development, easy scaling, and team collaboration.",
      icon: <Layers size={24} className="text-primary" />
    },
    {
      title: "Scalable Systems",
      description: "Architecture designed to grow seamlessly with your users, data, and business requirements.",
      icon: <Rocket size={24} className="text-emerald-500" />
    },
    {
      title: "AI-Ready Development",
      description: "Modern AI, RAG, and automation capabilities integrated deeply into your core product.",
      icon: <Cpu size={24} className="text-indigo-400" />
    },
    {
      title: "Performance First",
      description: "Fast, responsive, and optimized applications that provide exceptional user experiences.",
      icon: <Zap size={24} className="text-emerald-400" />
    },
    {
      title: "Security Conscious",
      description: "Secure authentication, hardened APIs, and strictly controlled data handling processes.",
      icon: <Lock size={24} className="text-primary" />
    },
    {
      title: "Developer Experience",
      description: "Clean codebases, excellent documentation, and environments that teams love working with.",
      icon: <CodeSquare size={24} className="text-emerald-500" />
    }
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-background">Built With Engineering Discipline.</h2>
          <p className="text-lg text-muted">
            We prioritize architecture, performance, and maintainability in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted/80 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
