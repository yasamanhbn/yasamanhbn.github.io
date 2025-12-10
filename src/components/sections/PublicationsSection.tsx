import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

type PublicationStatus = "published" | "preprint" | "under-review";

interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  status: PublicationStatus;
  doi?: string;
  arxiv?: string;
}

const publications: Publication[] = [
  {
    authors: "H. Azadmaleki, Y. Haghbin, S. Rashidi, M. J. Momeni Nezhad, and M. Zolnoori",
    title: "SpeechCARE: Dynamic Multimodal Modeling for Cognitive Screening in Diverse Linguistic and Speech Task Contexts",
    venue: "npj Digital Medicine",
    year: "2025",
    status: "published",
    doi: "https://doi.org/10.1038/s41746-025-02026-x",
  },
  {
    authors: "Y. Haghbin, M. H. Badiei, N. H. Tran, and M. J. Piran",
    title: "Resilient Federated Adversarial Learning with Auxiliary-Classifier GANs and Probabilistic Synthesis for Heterogeneous Environments",
    venue: "IEEE Transactions on Network and Service Management",
    year: "2025",
    status: "published",
    doi: "https://ieeexplore.ieee.org/document/11007173",
  },
  {
    authors: "A. Zolnour, H. Azadmaleki, Y. Haghbin, et al.",
    title: "Evaluating the Preservation of Linguistic Cues in Synthetic Data Generation by Large Language Models for Cognitive Impairment Detection",
    venue: "Frontiers in Artificial Intelligence",
    year: "2025",
    status: "published",
    doi: "https://doi.org/10.3389/frai.2025.1669896",
  },
  {
    authors: "H. Azadmaleki, Y. Haghbin, S. Rashidi, M. J. Momeni Nezhad, et al.",
    title: "SpeechCARE: Harnessing Multimodal Innovation to Transform Cognitive Impairment Detection",
    venue: "Studies in Health Technology and Informatics",
    year: "2025",
    status: "published",
    doi: "https://doi.org/10.3233/SHTI251249",
  },
  {
    authors: "Y. Haghbin, H. Moradi, and R. Hosseini",
    title: "Feature-to-Image Data Augmentation: Improving Model Feature Extraction with Cluster-Guided Synthetic Samples",
    venue: "arXiv preprint",
    year: "2025",
    status: "preprint",
    arxiv: "https://arxiv.org/abs/2409.17685",
  },
  {
    authors: "F. Taherinezhad, M. J. Momeni Nezhad, S. Karimi, et al., Y. Haghbin, et al.",
    title: "Speech-Based Cognitive Screening: A Systematic Evaluation of LLM Adaptation Strategies",
    venue: "arXiv preprint",
    year: "2025",
    status: "preprint",
    arxiv: "https://arxiv.org/abs/2509.03525",
  },
  {
    authors: "A. Irani, M. Dadkhah, Y. Haghbin, H. Moradi, and R. Hosseini",
    title: "Comprehensive App for Parkinson's Disease Screening and Monitoring: A Pilot Study",
    venue: "Scientific Data",
    year: "2025",
    status: "under-review",
  },
  {
    authors: "Y. Haghbin, S. Rashidi, M. McDonald, and M. Zolnoori",
    title: "Multimodal Attention Fusion of Speech and EHR Data for Early Detection of Cognitive Decline in Home Healthcare",
    venue: "ICASSP 2026",
    year: "2026",
    status: "under-review",
  },
  {
    authors: "S. Rashidi, Y. Haghbin, H. Azadmaleki, A. Zolnour, and M. Zolnoori",
    title: "Leveraging Text-to-Speech and Voice Conversion as Data Augmentation for Alzheimer's Disease Detection from Spontaneous Speech",
    venue: "ICASSP 2026",
    year: "2026",
    status: "under-review",
  },
];

const statusConfig: Record<PublicationStatus, { label: string; className: string }> = {
  published: { label: "Published", className: "bg-green-100 text-green-800 border-green-200" },
  preprint: { label: "Preprint", className: "bg-blue-100 text-blue-800 border-blue-200" },
  "under-review": { label: "Under Review", className: "bg-amber-100 text-amber-800 border-amber-200" },
};

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Publications
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className={statusConfig[pub.status].className}>
                        {statusConfig[pub.status].label}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{pub.year}</span>
                    </div>
                    <h3 className="font-medium text-foreground mb-2 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pub.authors.replace("Y. Haghbin", "**Y. Haghbin**").split("**").map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-primary">{part}</strong> : part
                      )}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground italic">
                      {pub.venue}
                    </p>
                    {(pub.doi || pub.arxiv) && (
                      <a 
                        href={pub.doi || pub.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {pub.doi ? "DOI" : "arXiv"}
                      </a>
                    )}
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

export default PublicationsSection;
