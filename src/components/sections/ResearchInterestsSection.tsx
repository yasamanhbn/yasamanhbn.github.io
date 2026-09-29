import { Brain, ShieldCheck, Sparkles, Heart, Mic, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    icon: ShieldCheck,
    title: "Trustworthy & Just AI",
    description: "Decolonized foundation models guided by fairness, bias mitigation, and responsible development.",
  },
  {
    icon: Brain,
    title: "Foundation Models",
    description: "Developing and fine-tuning foundation models and applications for movement analysis and healthcare.",
  },
  {
    icon: Heart,
    title: "Freezing of Gait Assessment",
    description: "AI-based assessment of freezing of gait (FOG) severity in clinical settings and everyday life.",
  },
  {
    icon: Mic,
    title: "Speech Processing",
    description: "AI-based speech processing for Alzheimer's disease and other neurological disorders.",
  },
  {
    icon: CheckCircle,
    title: "Robustness & Validation",
    description: "Data collection and curation, pilot testing, and validation to assess technical robustness and transferability.",
  },
  {
    icon: Sparkles,
    title: "Generative Models",
    description: "Deep Generative Models and Synthetic Data.",
  },
];

const ResearchInterestsSection = () => {
  return (
    <section id="research-interests" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Research Interests
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card 
              key={interest.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {interest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestsSection;
