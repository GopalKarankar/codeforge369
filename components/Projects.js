"use client";
import { motion } from "motion/react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Gmail Personal Assistant",
      category: "AI / Automations",
      description: "An AI-powered Gmail assistant using RAG to retrieve relevant email context and generate intelligent responses.",
      tech: ["React", "Vite", "Zustand", "FastAPI", "Python", "MongoDB", "LangChain", "Qdrant"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
    },
    {
      title: "MERN Video Streaming",
      category: "Full-Stack Web App",
      description: "A modern, highly responsive video streaming platform built from the ground up using the MERN stack.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "bg-gradient-to-br from-red-500/20 to-orange-600/20"
    },
    {
      title: "Degree News Portal",
      category: "Content Management",
      description: "A robust blogging and news portal built for scalable article publishing and content management.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20"
    },
    {
      title: "Midwave Productions",
      category: "Corporate Website",
      description: "A professional production and company website featuring a responsive, modern user interface.",
      tech: ["HTML", "CSS", "JavaScript", "Modern Web Tech"],
      image: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Selected Work</h2>
            <p className="text-lg text-muted-foreground">
              A collection of production-grade applications, AI integrations, and digital platforms.
            </p>
          </div>
          <Link href="#contact" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Start a similar project <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              {/* Placeholder for project image */}
              <div className={`w-full aspect-video ${project.image} relative overflow-hidden flex items-center justify-center border-b border-border`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/10 text-foreground font-bold text-xl">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50 mt-auto">
                  <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <Github size={16} /> View Source
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors ml-auto">
                    Live Demo <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
