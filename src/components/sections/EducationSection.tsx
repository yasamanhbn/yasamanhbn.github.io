import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Tehran",
    degree: "M.Sc., Artificial Intelligence and Robotics",
    period: "2022–2025",
    gpa: "19.29/20 (4.00/4.00)",
    thesis: "Small Dataset Classification with Synthetic Data Generation in Feature Space",
    supervisors: "Prof. Reshad Hosseini and Prof. Hadi Moradi",
  },
  {
    institution: "Amirkabir University of Technology",
    subtitle: "Tehran Polytechnic",
    degree: "B.Sc., Computer Engineering",
    period: "2018–2022",
    gpa: "19.06/20 (4.00/4.00)",
    project: "Driver drowsiness detection using convolutional neural networks",
    supervisors: "Prof. Mohammad Rahmati",
  },
  {
    institution: "Farzanegan4",
    degree: "High School, Mathematics and Physics",
    period: "2014–2018",
    gpa: "High School 19.75/20, Pre-University 19.59/20",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={edu.institution}
                className="relative flex gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 border-4 border-background shadow items-center justify-center flex-shrink-0 z-10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">
                        {edu.institution}
                      </h3>
                      {edu.subtitle && (
                        <p className="text-sm text-muted-foreground">{edu.subtitle}</p>
                      )}
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-foreground mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium">GPA:</span> {edu.gpa}
                  </p>
                  
                  {edu.thesis && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Thesis:</span> {edu.thesis}
                    </p>
                  )}
                  {edu.project && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Project:</span> {edu.project}
                    </p>
                  )}
                  {edu.supervisors && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Supervisor:</span> {edu.supervisors}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
