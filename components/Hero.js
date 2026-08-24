"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Terminal, Code2, Database } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-150px] right-[-50px] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Engineering modern digital products
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
            We Forge Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Products That Matter.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Codeforge is a software development company building scalable web applications, AI-powered products, and modern digital experiences for ambitious businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-foreground/10 group"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-card border border-border text-foreground font-medium hover:bg-muted transition-all flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>

        {/* Abstract Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative z-10 hidden md:block"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-border bg-card/40 backdrop-blur-3xl shadow-2xl overflow-hidden p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-2 px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground">~/codeforge/production</div>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex gap-4">
                <motion.div 
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex-1 p-4 rounded-xl border border-border bg-background/50 backdrop-blur-md flex flex-col items-center justify-center gap-2"
                >
                  <Terminal size={24} className="text-primary" />
                  <span className="text-xs font-medium">Backend API</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 5, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="flex-1 p-4 rounded-xl border border-border bg-background/50 backdrop-blur-md flex flex-col items-center justify-center gap-2"
                >
                  <Code2 size={24} className="text-indigo-400" />
                  <span className="text-xs font-medium">Frontend UI</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -5, 0] }} 
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="flex-1 p-4 rounded-xl border border-border bg-background/50 backdrop-blur-md flex flex-col items-center justify-center gap-2"
                >
                  <Database size={24} className="text-emerald-400" />
                  <span className="text-xs font-medium">Vector DB</span>
                </motion.div>
              </div>
              
              <div className="flex-1 rounded-xl border border-border bg-black/5 p-4 font-mono text-xs md:text-sm text-muted-foreground overflow-hidden">
                <div className="text-primary">import</div> {'{'} Codeforge {'}'} <div className="text-primary inline">from</div> 'agency';
                <br /><br />
                <div className="text-indigo-400">const</div> project = <div className="text-primary">await</div> Codeforge.build({'{'}
                <br />
                &nbsp;&nbsp;vision: <div className="text-emerald-400">"disruptive"</div>,
                <br />
                &nbsp;&nbsp;stack: [<div className="text-emerald-400">"Next.js"</div>, <div className="text-emerald-400">"AI"</div>, <div className="text-emerald-400">"Node"</div>],
                <br />
                &nbsp;&nbsp;scalable: <div className="text-primary">true</div>
                <br />
                {'});'}
                <br /><br />
                console.log(project.status); <div className="text-muted-foreground/50">// "Production Ready"</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
