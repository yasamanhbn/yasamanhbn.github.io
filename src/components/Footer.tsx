import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold mb-4">Yasaman Haghbin</h3>
        <p className="text-background/70 mb-6">AI Researcher</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="mailto:hbn.yasaman@gmail.com"
            className="text-background/70 hover:text-background transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/yasamanhbn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/70 hover:text-background transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/yasaman-haghbin-3615b1235/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/70 hover:text-background transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://scholar.google.com/citations?user=J6fG7ocAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/70 hover:text-background transition-colors"
            aria-label="Google Scholar"
          >
            <GraduationCap className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm text-background/50">
          © {new Date().getFullYear()} Yasaman Haghbin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
