import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const workExperience = [
  {
    title: "AI Developer",
    company: "Arcaptcha",
    period: "Fall 2022 – Winter 2023",
    description: "Enhanced CAPTCHA robustness using adversarial examples.",
  },
  {
    title: "Front-end Developer",
    company: "Arcaptcha",
    period: "Summer 2021 – Fall 2022",
    description: "Developed web apps using Nuxt.js and Fastify.js.",
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="work-experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {workExperience.map((job, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
