import { AboutSection } from "@/components/home/about-section"
import { BlogSection } from "@/components/home/blog-section"
import { ExperienceEducationSection } from "@/components/home/exprience-education-section"
import { HeroSection } from "@/components/home/hero-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SkillsSection } from "@/components/home/skills-sectoin"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceEducationSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
    </>
  )
}
export default HomePage
