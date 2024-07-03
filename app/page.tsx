import { AboutSection } from "@/components/home/about-section"
import { HeroSection } from "@/components/home/hero-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SkillsSection } from "@/components/home/skills-sectoin"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}
export default HomePage
