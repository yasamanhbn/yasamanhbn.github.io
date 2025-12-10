import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const experiences = [
  {
    institution: "University of Columbia",
    location: "Remote",
    role: "Research Assistant",
    period: "Nov 2024 – Present",
    highlights: [
      "Conducting research on natural language and speech processing for cognitive impairment detection from spontaneous speech",
      "Designed multi-modal Transformer-based pipelines for detecting cognitive impairment using speech, text, and EHR data",
      "Achieved state-of-the-art performance in Alzheimer's Disease detection using LLMs, Audio-LLMs, Text-to-Speech, and Voice Conversion models",
      "Finalist (top 4) in NIA PREPARE Challenge (70+ international teams)",
      "Fine-tuned open-weight LLMs and Audio-LLMs using techniques like LoRA",
      "Currently focused on multi-disease classification using Multi-Task Learning with speech transformers",
    ],
  },
  {
    institution: "University of Tehran",
    role: "Research Assistant",
    period: "Jul 2023 – Mar 2025",
    highlights: [
      "Research on Machine Learning, Synthetic Data Generation, and Parkinson's Disease Detection",
      "Managed multi-modal data collection including vision (facial), speech, handwriting, and questionnaire data",
      "Generated facial synthetic data using GANs and Diffusion Models",
      "Explored Self-Supervised and Semi-Supervised Learning methods for synthetic data generation",
      "Oral presentation at 13th Basic and Clinical Neuroscience Congress, Tehran, 2024",
      "Speaker at 4th Symposium on AI in Health and Medicine: Parkinson's Disease, Tehran, 2024",
    ],
  },
  {
    institution: "Amirkabir University of Technology",
    role: "Research Assistant",
    period: "Mar 2022 – Sep 2022",
    highlights: [
      "Research on Machine Vision, CNNs, and Transfer Learning for real-world applications",
      "Fine-tuned CNN models (ResNet, MobileNetV2) for real-time driver drowsiness detection",
      "Utilized Docker for model deployment for in-car real-time inference",
      "Developed user interface for Android and other Operating Systems",
    ],
  },
];

const ResearchExperienceSection = () => {
  return (
    <section id="research-experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Research Experience
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <Accordion type="single" collapsible className="space-y-4">
          {experiences.map((exp, index) => (
            <AccordionItem 
              key={exp.institution}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        {exp.institution}
                      </h3>
                      {exp.location && (
                        <Badge variant="secondary" className="text-xs">
                          {exp.location}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.role}</p>
                    <p className="text-primary text-sm font-medium">{exp.period}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <ul className="space-y-2 ml-16">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ResearchExperienceSection;
