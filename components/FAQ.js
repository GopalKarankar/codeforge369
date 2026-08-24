"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What type of software does Codeforge build?",
      a: "We specialize in modern web applications, full-stack SaaS platforms, AI-powered tools (including RAG), REST APIs, and scalable cloud deployments. We also have expertise in blockchain and Web3 integrations."
    },
    {
      q: "Do you work with startups?",
      a: "Yes. We frequently partner with startups to architect and build their MVPs to production standards, ensuring the codebase is scalable and maintainable for future teams."
    },
    {
      q: "Can you build AI-powered applications?",
      a: "Absolutely. We build robust AI applications using LLMs, LangChain, vector databases (like Qdrant and ChromaDB), and RAG pipelines for semantic search and data interaction."
    },
    {
      q: "Can you integrate AI into an existing application?",
      a: "Yes. We can design and integrate intelligent agents, automation workflows, and AI capabilities into your existing products via custom APIs or specialized modules."
    },
    {
      q: "Do you build REST APIs?",
      a: "Yes. We architect secure, high-performance REST APIs using Node.js, Express.js, Python, and FastAPI tailored to your data requirements."
    },
    {
      q: "Can you deploy applications?",
      a: "We handle end-to-end deployment, utilizing Docker, Linux environments, and modern cloud infrastructure to take applications from local development to a live production state."
    },
    {
      q: "Do you work with existing development teams?",
      a: "Yes. We can seamlessly integrate with your existing team to provide specialized expertise in AI, backend architecture, or complex frontend systems."
    },
    {
      q: "How does a project usually start?",
      a: "It starts with a discovery phase. We discuss your business goals, technical requirements, and target users. From there, we propose a technical architecture and development roadmap."
    }
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${openIndex === index ? 'border-primary/50 bg-card/50' : 'border-border bg-card'} overflow-hidden transition-colors`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-medium focus:outline-none"
              >
                <span className="text-lg pr-4">{faq.q}</span>
                <span className="shrink-0 text-muted-foreground">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
