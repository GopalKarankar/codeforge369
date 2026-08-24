"use client";
import { motion } from "motion/react";
import { Code, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Codeforge</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Codeforge</strong> is a software development company focused on turning complex ideas into reliable, production-ready digital products. 
              </p>
              <p>
                We bridge the gap between design and engineering, delivering robust solutions across full-stack web development, intelligent AI applications, and modern cloud architectures. Our expertise lies in building systems that scale, APIs that perform, and interfaces that engage.
              </p>
              <p>
                From integrating advanced RAG pipelines and vector databases to deploying decentralized Web3 applications, we bring a rigorous engineering mindset to every challenge. 
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-h-[500px] w-full rounded-3xl bg-gradient-to-tr from-primary/10 via-emerald-500/5 to-primary/5 border border-border p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
              
              <div className="relative z-10 w-full max-w-sm">
                <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2 bg-muted/50">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="ml-2 text-xs font-mono text-muted-foreground">codeforge.config.js</span>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-primary mb-2">module.exports = {'{'}</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-indigo-400">expertise</span>: [</div>
                      <div className="pl-4 text-emerald-400">"Full-Stack Web"</div>
                      <div className="pl-4 text-emerald-400">"AI Applications & RAG"</div>
                      <div className="pl-4 text-emerald-400">"SaaS Architecture"</div>
                      <div className="pl-4 text-emerald-400">"Cloud Deployment"</div>
                      <div className="pl-4 text-emerald-400">"Blockchain / Web3"</div>
                      <div>],</div>
                      <div><span className="text-indigo-400">quality</span>: <span className="text-primary">true</span>,</div>
                      <div><span className="text-indigo-400">scalable</span>: <span className="text-primary">true</span></div>
                    </div>
                    <div className="text-primary mt-2">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
