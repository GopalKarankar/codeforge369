"use client";
import { motion } from "motion/react";

export default function Technologies() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Zustand", "AngularJS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "PHP"]
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "Qdrant", "ChromaDB", "FAISS", "Typesense"]
    },
    {
      name: "AI & Machine Learning",
      skills: ["RAG", "LangChain", "SentenceTransformers", "Hugging Face", "Embeddings", "LLMs", "AI Agents"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Docker", "Linux", "Git", "GitHub", "n8n", "Claude Code"]
    },
    {
      name: "Blockchain / Web3",
      skills: ["Blockchain", "Hyperledger", "Web3.js", "Rust"]
    },
    {
      name: "Architecture",
      skills: ["REST APIs", "MERN Stack", "Full-Stack", "API Integrations", "Authentication", "OAuth"]
    }
  ];

  return (
    <section id="technologies" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive ecosystem of modern tools, languages, and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-background border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
