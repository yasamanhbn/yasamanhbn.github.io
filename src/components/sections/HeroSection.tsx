import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:hbn.yasaman@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/yasamanhbn", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yasaman-haghbin-3615b1235/", label: "LinkedIn" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=J6fG7ocAAAAJ", label: "Google Scholar" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-40 h-40 mx-auto rounded-full border-4 border-primary bg-secondary flex items-center justify-center overflow-hidden shadow-lg">
            <span className="text-5xl font-display text-primary">YH</span>
          </div>
        </div>
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Yasaman Haghbin
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          AI Researcher
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Passionate about Natural Language Processing, Speech Processing, and applying Machine Learning to Healthcare and Cognitive Science.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              asChild
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
