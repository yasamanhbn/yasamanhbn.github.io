import { BookOpen } from "lucide-react";

const teaching = [
  { course: "Deep Generative Models", institution: "University of Tehran", period: "Fall 2024" },
  { course: "Analysis and Design of Deep Neural Networks", institution: "University of Tehran", period: "Fall 2024" },
  { course: "Deep Learning with Application in Machine Vision and Audio Processing", institution: "University of Tehran", period: "Fall 2024" },
  { course: "Machine Learning", institution: "University of Tehran", period: "2023–2024" },
  { course: "Generative Models", institution: "Sharif University of Technology", period: "Fall 2024" },
  { course: "Signals and Systems", institution: "Amirkabir University", period: "Spring 2021" },
  { course: "C programming Lab", institution: "Amirkabir University", period: "2019–2020" },
];

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Teaching Experience
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid gap-3">
          {teaching.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border/50 hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground">{item.course}</h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </div>
              <span className="text-sm text-primary font-medium whitespace-nowrap">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
