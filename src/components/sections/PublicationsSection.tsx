import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText, Search } from "lucide-react";

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
    authors: "A. Irani, Y. Haghbin, M. Dadkhah, et al.",
    title: "A multimodal mobile dataset for Parkinson’s disease symptom assessment",
    venue: "Scientific Data",
    year: "2026",
    status: "published",
    doi: "https://doi.org/10.1038/s41597-026-07903-y",
  },
  {
    authors: "S. Rashidi, Y. Haghbin, H. Azadmaleki, A. Zolnour, and M. Zolnoori",
    title: "Leveraging Text-to-Speech and Voice Conversion as Data Augmentation for Alzheimer's Disease Detection from Spontaneous Speech",
    venue: "ICASSP 2026",
    year: "2026",
    status: "published",
    doi: "https://doi.org/10.1109/icassp55912.2026.11462646"
  },
  {
    authors: "M. Zolnoori, A. Zolnour, S. Rashidi, I. Spens, Y. Haghbin, et al.",
    title: "Detecting mild cognitive impairment using follow-up call speech and electronic health record data in home health care settings",
    venue: "Journal of Gerontological Nursing",
    year: "2026",
    status: "published",
    doi: "https://doi.org/10.3928/00989134-20251208-03",
  },
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
    venue: "Medinfo 2025",
    year: "2025",
    status: "published",
    doi: "https://doi.org/10.3233/SHTI251249",
  },
    {
    authors: "H. Azadmaleki, A. Zolnour, Y. Haghbin, F. Taherinezhad, M. J. Momeni Nezhad, et al.",
    title: "LLMCARE: early detection of cognitive impairment via transformer models enhanced by LLM-generated synthetic data",
    venue: "Frontiers in Artificial Intelligence",
    year: "2025",
    status: "published",
    doi: "https://doi.org/10.3389/frai.2025.1669896",
  },
  {
    authors: "Y. Haghbin, H. Moradi, and R. Hosseini",
    title: "FICAug: Feature-Informed Clustering and Augmentation for Facial-Expression-Based Parkinson's Disease Screening",
    venue: "3RD INTERNATIONAL CONFERENCE ON MEDICINE AND ARTIFICIAL INTELLIGENCE IN HEALTH PROMOTION 2026",
    year: "2026",
    status: "published",
    arxiv: "https://arxiv.org/abs/2409.17685",
  },
  {
    authors: "F. Taherinezhad, M. J. Momeni Nezhad, S. Karimi, et al., Y. Haghbin, et al.",
    title: "Large language model adaptation strategies in speech-based cognitive screening: Systematic evaluation",
    venue: "JMIR AI",
    year: "2026",
    status: "published",
    arxiv: "https://doi.org/10.2196/82608",
  },
  {
    authors: "Y. Haghbin, S. Rashidi, A. Zolnour, M. Zolnoori",
    title: "The Voice of Equity: A Systematic Evaluation of Bias Mitigation Techniques for Speech-Based Cognitive Impairment Detection Across Architectures and Demographics",
    venue: "npj dementia",
    year: "2026",
    status: "under-review",
    doi: "https://arxiv.org/abs/2601.16989",
  },
  {
    authors: "M. Zolnoori, H. Azadmaleki, Y. Haghbin, A. Zolnour, M. J. Momeni Nezhad, S. Rashidi, et al.",
    title: "National Institute on Aging PREPARE Challenge: Early Detection of Cognitive Impairment Using Speech--The SpeechCARE Solution",
    venue: "Frontiers in Artificial Intelligence",
    year: "2025",
    status: "preprint",
    doi: "https://arxiv.org/abs/2511.08132",
  },
];

const statusConfig: Record<PublicationStatus, { label: string; className: string }> = {
  published: { label: "Published", className: "bg-green-100 text-green-800 border-green-200" },
  preprint: { label: "Preprint", className: "bg-blue-100 text-blue-800 border-blue-200" },
  "under-review": { label: "Under Review", className: "bg-amber-100 text-amber-800 border-amber-200" },
};

const PublicationsSection = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<PublicationStatus | "all">("all");
  const filteredPublications = publications
    .filter((pub) => (status === "all" || pub.status === status) &&
      `${pub.title} ${pub.authors} ${pub.venue} ${pub.year}`.toLowerCase().includes(query.trim().toLowerCase()))
    .sort((a, b) => Number(b.year) - Number(a.year));
  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Publications
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="mb-8 rounded-xl border border-border bg-card p-4 sm:p-5">
          <label htmlFor="publication-search" className="block text-sm font-medium mb-2">Find a publication</label>
          <div className="relative">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input id="publication-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, author, venue, or year…" className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-3 text-sm" />
          </div>
          <div className="flex flex-wrap gap-2 mt-4" role="group" aria-label="Filter publications by status">
            {(["all", "published", "preprint", "under-review"] as const).map((value) => (
              <button key={value} type="button" aria-pressed={status === value} onClick={() => setStatus(value)} className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${status === value ? "bg-primary text-primary-foreground" : "bg-secondary/60 text-muted-foreground hover:bg-secondary"}`}>
                {value === "all" ? "All publications" : statusConfig[value].label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground" role="status">{filteredPublications.length} of {publications.length} publications · Newest first</p>
        </div>
        {filteredPublications.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="font-medium">No matching publications</p>
            <p className="text-sm text-muted-foreground mt-1">Try another keyword or clear the filters.</p>
            <button onClick={() => { setQuery(""); setStatus("all"); }} className="mt-4 px-4 py-3 text-sm font-medium text-primary underline">Clear filters</button>
          </div>
        )}
        <div className="space-y-4">
          {filteredPublications.map((pub) => (
            <Card 
              key={pub.title}
              className="border-border/50 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className={statusConfig[pub.status].className}>
                        {statusConfig[pub.status].label}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{pub.year}</span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2 leading-snug">
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
                        aria-label={`Read ${pub.title} (opens in a new tab)`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-2 py-2"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {(pub.doi || pub.arxiv)?.includes("arxiv.org") ? "Read preprint" : "Read publication"}
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
