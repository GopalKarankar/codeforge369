"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", type: "Full-Stack Web", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          Project_Type: formData.type,
          message: formData.message,
          subject: "New Codeforge Project Inquiry",
          from_name: "Codeforge Website"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", type: "Full-Stack Web", message: "" });
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Abstract Background for dark theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Have an idea <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">worth forging?</span>
            </h2>
            <p className="text-xl text-background/80 max-w-lg mb-8 leading-relaxed">
              Reach out to us directly or fill out the form. We'll help turn your idea into a production-ready digital product.
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/919284840689" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-background/60 mb-0.5">WhatsApp</div>
                  <div className="text-lg font-bold text-background">+91 9284840689</div>
                </div>
              </a>
              <a href="mailto:codeforge369@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-background/60 mb-0.5">Email</div>
                  <div className="text-lg font-bold text-background">codeforge369@gmail.com</div>
                </div>
              </a>
              <a href="https://instagram.com/codeforge369" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram size={24} className="text-pink-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-background/60 mb-0.5">Instagram</div>
                  <div className="text-lg font-bold text-background">@codeforge369</div>
                </div>
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 border border-border shadow-2xl text-foreground">
              <h3 className="text-2xl font-bold mb-6">Start a Project</h3>
              
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Received</h4>
                  <p className="text-muted-foreground">We'll review your project details and get back to you shortly.</p>
                  <button type="button" onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", company: "", type: "Full-Stack Web", budget: "Under $10k", message: "" }); }} className="mt-8 text-sm font-medium text-primary hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-600 text-sm">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <span>Please fill out all required fields (Name, Email, Message).</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Name *</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Email *</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Company (Optional)</label>
                    <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Acme Corp" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Project Type</label>
                    <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                      <option className="bg-[#050505] text-white">Full-Stack Web</option>
                      <option className="bg-[#050505] text-white">AI Application / RAG</option>
                      <option className="bg-[#050505] text-white">Backend API</option>
                      <option className="bg-[#050505] text-white">Blockchain / Web3</option>
                      <option className="bg-[#050505] text-white">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Message *</label>
                    <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-foreground/10 disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending..." : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
