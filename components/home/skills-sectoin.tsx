"use client"

import { SectionHeading } from "../animation/section-heading"
import { ParallaxText } from "../animation/perallax-text"
import { motion } from "framer-motion"

import { skills } from "@/constant/base"
import { zoomInVariants } from "@/constant/motion"

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="section relative"
    >
      <div className="absolute w-full top-20">
        <ParallaxText>Technology</ParallaxText>
      </div>
      <div className="container space-y-6">
        <SectionHeading
          className="text-center mx-auto"
          subtitle="My Skills"
          title="Building Digital Excellence"
          desc="I bring a diverse skill set to the table, excelling in both front-end and back-end development, as well as strategic marketing expertise."
        />
        <div className="flex  flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              initial="hidden"
              variants={zoomInVariants}
              whileInView="show"
              viewport={{ once: true }}
              custom={2 + idx}
              style={{
                background: `${skill.color}`,
              }}
              className="flex items-center gap-2 px-3 py-2 text-white"
              key={skill.label}
            >
              <skill.icon className="size-5 md:size-6" />
              <span className="font-medium md:font-bold text-sm sm:text-base md:first:text-lg">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
