"use client";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Codeforge delivered a robust, highly scalable web application that exceeded our expectations. Their technical expertise is unmatched.",
      author: "Sarah Jenkins",
      role: "CEO, Tech Startup"
    },
    {
      quote: "Integrating their custom AI pipelines completely transformed our data processing capabilities. Flawless execution and great communication.",
      author: "David Chen",
      role: "CTO, Enterprise Data"
    },
    {
      quote: "Their deep understanding of smart contracts and secure backend architecture was critical to the successful launch of our platform.",
      author: "Elena Rodriguez",
      role: "Founder, Web3 Platform"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Client Feedback</h2>
          <p className="text-lg text-muted-foreground">
            What our partners say about our engineering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm flex flex-col relative transition-shadow hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12" />
              <p className="text-foreground/80 leading-relaxed mb-8 flex-1 italic relative z-10">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-muted-foreground">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{test.author}</div>
                  <div className="text-sm text-muted-foreground">{test.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
