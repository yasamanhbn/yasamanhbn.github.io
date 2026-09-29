import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ResearchInterestsSection from "@/components/sections/ResearchInterestsSection";
import EducationSection from "@/components/sections/EducationSection";
import ResearchExperienceSection from "@/components/sections/ResearchExperienceSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ProfessionalActivitySection from "@/components/sections/ProfessionalActivitySection";
import TeachingSection from "@/components/sections/TeachingSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import HonorsSection from "@/components/sections/HonorsSection";
import SkillsSection from "@/components/sections/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-card focus:px-4 focus:py-3">Skip to content</a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ResearchInterestsSection />
        <EducationSection />
        <ResearchExperienceSection />
        <PublicationsSection />
        <ProfessionalActivitySection />
        <TeachingSection />
        <WorkExperienceSection />
        <HonorsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
