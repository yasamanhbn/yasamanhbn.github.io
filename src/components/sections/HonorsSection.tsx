import { Award, Trophy, Medal } from "lucide-react";

const honors = [
  {
    icon: Trophy,
    title: "NIA Challenge Competition Awards",
    description: "Special Recognition Prize, Explainability Prize, and Code Cleaning Prize as a member of the 'speechCARE' team",
  },
  {
    icon: Award,
    title: "Oral Presentation",
    description: "13th Basic and Clinical Neuroscience Congress, Tehran, 2024",
  },
  {
    icon: Award,
    title: "Invited Speaker",
    description: "4th Symposium on AI in Health and Medicine: Parkinson's Disease, Tehran, 2024",
  },
  {
    icon: Medal,
    title: "Direct Admission & Full Scholarship",
    description: "M.Sc. in AI and Robotics from University of Tehran (highest-ranked in Iran) and Amirkabir University, 2022",
  },
  {
    icon: Medal,
    title: "Direct Admission",
    description: "M.Sc. in Computer Networking from Sharif University of Technology, 2022",
  },
  {
    icon: Trophy,
    title: "Ranked 4th",
    description: "Among 130 Computer Engineering students, Amirkabir University, 2021 and 2022",
  },
  {
    icon: Award,
    title: "228th Place",
    description: "Among ~140,000 applicants in Nationwide B.Sc. Entrance Exam (Mathematics and Physics), 2018",
  },
  {
    icon: Award,
    title: "Top 0.05%",
    description: "Among ~120,000 applicants in Foreign Languages (English) Entrance Exam, 2018",
  },
  {
    icon: Trophy,
    title: "1st Place",
    description: "Teen Programming Competitions, Tehran, 2015",
  },
];

const HonorsSection = () => {
  return (
    <section id="honors" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Honors & Awards
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid gap-4">
          {honors.map((honor, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <honor.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{honor.title}</h3>
                <p className="text-sm text-muted-foreground">{honor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;
