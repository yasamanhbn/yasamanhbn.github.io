import { ClipboardCheck } from "lucide-react";

const professionalActivities = [
  { venue: "IEEE EMBS International Conference on Biomedical and Health Informatics 2026", role: "Abstract Reviewer" },
  { venue: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP) 2027", role: "Reviewer" },
  { venue: "JMIR AI", role: "Reviewer" },
  { venue: "Frontiers in Neurology", role: "Reviewer" },
  { venue: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP) 2026", role: "Reviewer" },
  { venue: "13th Basic and Clinical Neuroscience Congress, Tehran, 2024", role: "Oral Presentation" },
  { venue: "4th Symposium on AI in Health and Medicine: Parkinson's Disease, Tehran, 2024", role: "Invited Speaker" },
];

const ProfessionalActivitySection = () => {
  return (
    <section id="professional-activity" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Professional Activity
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <ul className="grid gap-3">
          {professionalActivities.map((activity) => (
            <li
              key={activity.venue}
              className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border/50 hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium leading-relaxed text-foreground">{activity.venue}</h3>
                <p className="mt-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{activity.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProfessionalActivitySection;
