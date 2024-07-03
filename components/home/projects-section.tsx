"use client"

import { axiosIstance } from "@/lib/axios"
import { useEffect, useState } from "react"
import { SectionHeading } from "@/components/animation/section-heading"
import { ParallaxText } from "@/components/animation/perallax-text"

import { IProject } from "@/interface"
import { ProjectCard } from "../shared/project.card"

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      try {
        const res = await axiosIstance.get("/projects?limit=6")
        setProjects(res?.data?.data || [])
      } catch (error) {
        console.log(error)
      } finally {
        setIsFetching(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section
      id="projects"
      className="section bg-dot-black/[0.1] dark:bg-dot-white/[0.1] isolate relative bg-secondary overflow-hidden"
    >
      <div className="absolute w-full top-20">
        <ParallaxText baseVelocity={-1.5}>Latest Projects</ParallaxText>
      </div>
      <div className="container space-y-6">
        <div className="flex justify-between items-center">
          <SectionHeading
            className="text-center mx-auto"
            subtitle="Selected Work"
            title="Bringing Ideas To Life"
            desc="Explore a curated selection of my recent projects, each blending creativity and technical finesse to bring your ideas to life."
          />
        </div>
        <div className="space-y-4">
          {projects.length > 0 &&
            projects.map((project: IProject, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
