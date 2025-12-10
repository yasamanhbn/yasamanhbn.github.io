import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ResearchInterestsSection from "@/components/sections/ResearchInterestsSection";
import EducationSection from "@/components/sections/EducationSection";
import ResearchExperienceSection from "@/components/sections/ResearchExperienceSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import TeachingSection from "@/components/sections/TeachingSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import HonorsSection from "@/components/sections/HonorsSection";
import SkillsSection from "@/components/sections/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ResearchInterestsSection />
        <EducationSection />
        <ResearchExperienceSection />
        <PublicationsSection />
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
