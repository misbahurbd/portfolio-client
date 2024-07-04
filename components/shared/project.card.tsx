"use client"

import { skills } from "@/constant/base"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { fadeScaleUpVariants } from "@/constant/motion"
import Image from "next/image"
import { IProject } from "@/interface"

export const ProjectCard = ({
  project,
  idx = 0,
}: {
  project: IProject
  idx?: number
}) => {
  return (
    <motion.div
      variants={fadeScaleUpVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn(
        "flex flex-col bg-background transition group/project hover:shadow-xl hover:shadow-foreground/5 rounded-lg overflow-hidden",
        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className="md:w-1/2 lg:w-2/5 px-4 pt-4 bg-primary/10 overflow-hidden aspect-video">
        <div
          className={cn(
            "h-full transition duration-500 relative rounded-t-xl overflow-hidden scale-125 group-hover/project:scale-100",
            idx % 2 == 0 ? "origin-top-right" : "origin-top-left"
          )}
        >
          <Image
            src={project.featurePhoto}
            fill
            alt={project.title}
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="md:w-1/2 lg:w-3/5 px-8 py-10 space-y-4 flex flex-col justify-center">
        <h3 className="text-foreground font-bold text-lg">{project.title}</h3>
        <p className="line-clamp-3 text-ellipsis text-muted-foreground leading-relaxed text-sm">
          {project.metadata?.description}
        </p>
        <ul className="flex items-center gap-2 flex-wrap">
          {project.skills.map((skill, idx) => {
            const sk = skills.find(sk => sk.value === skill)
            return (
              <li
                className="border rounded-md size-7 text-base grid place-items-center bg-foreground/10 border-foreground/40 text-foreground"
                key={project.id + "-" + skill + idx}
              >
                {sk ? <sk.icon /> : skill}
              </li>
            )
          })}
        </ul>
        <div className="flex items-center flex-wrap gap-2">
          {project.sourceLinks.map(source => (
            <Button
              key={project.id + "-" + source.link}
              asChild
              variant="outline"
              size="sm"
              className="group flex items-center gap-2 grow lg:grow-0"
            >
              <Link
                href={source.link}
                target="_blank"
              >
                <span>{source.label}</span>
                <ArrowTopRightIcon className="w-5 h-5 transition group-hover:rotate-45" />
              </Link>
            </Button>
          ))}
          <Button
            size="sm"
            className="md:ml-auto grow lg:grow-0 lg:ml-auto"
          >
            <Link href={`/projects/${project.slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
