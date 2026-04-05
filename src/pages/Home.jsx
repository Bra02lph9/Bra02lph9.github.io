import BackgroundEffects from "../components/layout/BackgroundEffects";
import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ServicesSection from "../components/services/ServicesSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ContactSection from "../components/contact/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white">
      <BackgroundEffects />
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
