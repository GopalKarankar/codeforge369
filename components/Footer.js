import Link from "next/link";
import { Code, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="w-8 h-8 bg-gradient-to-tr from-primary to-emerald-400 rounded-lg flex items-center justify-center font-bold text-black text-xl group-hover:scale-105 transition-transform">
                C
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Codeforge</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We forge digital products that move businesses forward. From idea to production — we design, build, and scale modern digital experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Selected Work</Link></li>
              <li><Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Expertise</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground cursor-default">Full-Stack Web</span></li>
              <li><span className="text-muted-foreground cursor-default">AI & RAG Applications</span></li>
              <li><span className="text-muted-foreground cursor-default">API Architecture</span></li>
              <li><span className="text-muted-foreground cursor-default">Cloud Deployment</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Codeforge. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
