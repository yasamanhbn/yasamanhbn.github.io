import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yasamanhbn", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yasaman-haghbin-3615b1235/", label: "LinkedIn" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=J6fG7ocAAAAJ", label: "Google Scholar" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-secondary/30 from-neutral-100 to-neutral-200">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 px-4 py-20">
        {/* Left Profile Card */}
        <div className="bg-secondary/10 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center">
          <div className="w-3/4 overflow-hidden bg-gray-300 mb-8 shadow-xl">
            <img src="prof.jpeg"/>
          </div>
          
          <div className="w-16 h-1 bg-primary mb-8"></div>
          
          <p className="text-xl tbg-primary tracking-wider mb-12 text-center">
            AI RESEARCHER
          </p>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center px-4 md:px-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Yasaman Haghbin
          </h2>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Passionate about Natural Language Processing, Speech Processing, and applying 
              Machine Learning to Healthcare and Cognitive Science. I specialize in developing 
              innovative AI solutions that bridge the gap between technology and human understanding.
            </p>
            
            <p>
              With a strong foundation in research and development, I'm dedicated to pushing 
              the boundaries of what's possible with artificial intelligence and creating 
              meaningful impact through cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;