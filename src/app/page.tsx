import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SkillsSection } from "@/sections/skills";
import { ResearchSection } from "@/sections/research";
import { ProjectsSection } from "@/sections/projects";
import { ExperienceSection } from "@/sections/experience";
import { MediaSection } from "@/sections/media";
import { BlogSection } from "@/sections/blog";
import { ContactSection } from "@/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResearchSection />
      <ProjectsSection />
      <ExperienceSection />
      <MediaSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
