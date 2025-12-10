import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Globe, Languages, User } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "R", "C++", "Java"],
  },
  {
    title: "AI & ML Tools",
    icon: Wrench,
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face Transformers", "LangChain", "OpenCV", "NumPy", "Pandas", "NLTK", "librosa", "Gradio", "W&B"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "VueJS", "NuxtJS", "NodeJS"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Docker", "LaTeX", "Hugging Face", "MongoDB", "Redis", "ROS", "Webots"],
  },
];

const personalSkills = [
  "Self-Motivation",
  "Strong Research Abilities",
  "Problem-solving",
  "Attention to Details",
  "Collaboration",
];

const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Fluent", details: "TOEFL iBT: 107/120 (R:28, L:28, S:22, W:29)" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Skills
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary hover:bg-secondary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                Personal Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {personalSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline"
                    className="border-primary/30 text-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                    {lang.details && (
                      <p className="text-sm text-muted-foreground mt-1">{lang.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
