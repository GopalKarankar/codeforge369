"use client";
import { motion } from "motion/react";
import { LayoutTemplate, BrainCircuit, Blocks, Server, Bot, Cloud, Link as LinkIcon } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Build scalable, secure and maintainable web applications using modern frontend and backend technologies.",
      icon: <LayoutTemplate size={24} className="text-primary" />,
      tech: ["React", "Next.js", "Node.js", "Express.js", "PHP", "MongoDB", "MySQL"]
    },
    {
      title: "AI Applications & RAG",
      description: "Build intelligent applications capable of searching, understanding and interacting with business data.",
      icon: <BrainCircuit size={24} className="text-emerald-500" />,
      tech: ["Python", "FastAPI", "LangChain", "Qdrant", "ChromaDB", "LLMs"]
    },
    {
      title: "Frontend Development",
      description: "Build responsive, accessible, and interactive user interfaces with modern toolchains.",
      icon: <Blocks size={24} className="text-indigo-400" />,
      tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Zustand"]
    },
    {
      title: "Backend & API Development",
      description: "Architect scalable backend systems and secure REST APIs designed for high performance.",
      icon: <Server size={24} className="text-emerald-400" />,
      tech: ["Node.js", "Express.js", "Python", "FastAPI", "MongoDB"]
    },
    {
      title: "AI-Powered Automation",
      description: "Create intelligent workflows and automation systems that reduce manual effort.",
      icon: <Bot size={24} className="text-primary" />,
      tech: ["AI Agents", "n8n", "LangChain", "Vector Search"]
    },
    {
      title: "Cloud, Docker & Deployment",
      description: "Help applications move from development to production with reliable infrastructure.",
      icon: <Cloud size={24} className="text-indigo-500" />,
      tech: ["Docker", "Linux", "CI/CD", "Environment Config"]
    },
    {
      title: "Blockchain & Web3",
      description: "Integrate blockchain technology and smart contracts into modern web applications.",
      icon: <LinkIcon size={24} className="text-emerald-500" />,
      tech: ["Blockchain", "Hyperledger", "Web3.js", "Smart Contracts"]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">What We Build</h2>
          <p className="text-lg text-muted-foreground">
            Engineering solutions designed around real business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl p-8 bg-card border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                {service.icon}
              </div>
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 border border-border/50 group-hover:bg-background transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                {service.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
