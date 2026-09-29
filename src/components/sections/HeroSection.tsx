import { Linkedin, ArrowDown, Mail} from "lucide-react";
import { SiSemanticscholar, SiGooglescholar, SiGithub} from 'react-icons/si';
import profileImg from "@/assets/prof.jpeg";


const HeroSection = () => {
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/yasamanhbn", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yasaman-haghbin-3615b1235/", label: "LinkedIn" },
    { icon: SiGooglescholar, href: "https://scholar.google.com/citations?user=J6fG7ocAAAAJ", label: "Google Scholar" },
    { icon: SiSemanticscholar, href: "https://www.semanticscholar.org/author/Yasaman-Haghbin/2322980600", label: "Semantic Scholar" },
  ];

  return (
    <section id="hero" className="flex items-center justify-center border-b border-border/60 gradient-warm">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 px-6 pt-28 pb-16 md:py-36">
        {/* Left Profile Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-56 md:w-full max-w-sm overflow-hidden rounded-2xl bg-secondary mb-6 shadow-lg rotate-[-2deg]">
            <img src={profileImg} alt="Yasaman Haghbin" className="w-full aspect-[4/5] object-cover" fetchPriority="high" />
          </div>
          
          <div className="w-10 h-1 bg-primary mb-5"></div>
          
          <p className="text-xs font-semibold text-primary tracking-[0.16em] mb-5 text-center">
            PhD RESEARCHER · KU LEUVEN
          </p>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">AI · Healthcare · Equity</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
            Yasaman Haghbin
          </h1>
          
          <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
            <p>
              I am a PhD researcher at KU Leuven, working on decolonized, just, and
              trustworthy foundation models for healthcare. My research focuses on
              assessing freezing of gait (FOG) severity in clinical settings and everyday life.
            </p>
            
            <p>
              I develop privacy-preserving approaches to movement analysis using
              video-derived pose data and, where available, wearable sensor and clinical
              reference measurements. Through interdisciplinary collaboration and
              participatory research, I aim to build robust AI tools that support fair
              and trustworthy assessment.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#publications" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Explore publications <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
            <a href="mailto:hbn.yasaman@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"><Mail className="h-4 w-4" aria-hidden="true" /> Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
