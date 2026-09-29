import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Y.png";

const navItems = [
  { label: "About", href: "#hero" },
  { label: "Research", href: "#research-interests" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#research-experience" },
  { label: "Publications", href: "#publications" },
  { label: "Service", href: "#professional-activity" },
  { label: "Honors", href: "#honors" },
  { label: "Skills", href: "#skills" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState("#hero");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, { rootMargin: "-15% 0px -65% 0px" });
    navItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#hero" 
            onClick={() => setIsOpen(false)}
            className="font-display text-xl font-bold text-primary"
          >
            <img src={logo} alt="Yasaman Haghbin — home" className="w-16"/>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={active === item.href ? "location" : undefined}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground aria-[current=location]:bg-primary/10 aria-[current=location]:text-primary hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            ref={menuButton}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                aria-current={active === item.href ? "location" : undefined}
                onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground aria-[current=location]:bg-primary/10 aria-[current=location]:text-primary hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
