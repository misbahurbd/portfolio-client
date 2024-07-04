"use client"

import { useEffect, useState } from "react"
import { ParallaxText } from "../animation/perallax-text"
import { SectionHeading } from "../animation/section-heading"
import { axiosIstance } from "@/lib/axios"
import { IEducation, IExperience } from "@/interface"
import { format } from "date-fns"
import { motion } from "framer-motion"
import {
  fadeScaleUpVariants,
  slideLeftVariants,
  slideRightVariants,
} from "@/constant/motion"

export const ExperienceEducationSection = () => {
  const [educations, setEducations] = useState([])
  const [experiences, setExperiences] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const fetchData = async (
      url: string,
      setValue: (valur: never[]) => void
    ) => {
      setIsFetching(true)
      try {
        const res = await axiosIstance.get(url)
        setValue(res?.data?.data || [])
      } catch (error) {
        console.log(error)
      } finally {
        setIsFetching(false)
      }
    }

    fetchData("/educations", setEducations)
    fetchData("/experiences", setExperiences)
  }, [])

  return (
    <section className="section relative">
      <div className="absolute w-full top-20">
        <ParallaxText>Achivements</ParallaxText>
      </div>
      <div className="container space-y-6">
        <SectionHeading
          className="text-center mx-auto"
          subtitle="EDUCATION & EXPERIENCE"
          title="The Journey of Growth and Achievement"
          desc="Explore the academic and professional experiences that have shaped my career, contributing to my expertise and commitment to delivering top-notch solutions"
        />
        <div className="grid lg:grid-cols-2 lg:gap-x-8 gap-y-8">
          <div className="space-y-4">
            <motion.h3
              variants={slideRightVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-black text-xl w-max"
            >
              Educations
            </motion.h3>
            <div className="border-primary space-y-6">
              {educations.map((edu: IEducation, idx) => (
                <motion.div
                  variants={fadeScaleUpVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-secondary bg-dot-black/[0.1] dark:bg-dot-white/[0.1] p-6 md:p-8 rounded-md"
                  key={`edu-${edu.id}`}
                >
                  <div className="flex gap-3 items-start flex-col-reverse">
                    <h3 className="text-foreground flex-1 text-lg">
                      <span className="font-bold">{edu.degree}</span>
                      <span className="px-1">-</span>
                      <span>{edu.fieldOfStudy}</span>
                    </h3>
                    <p className="shrink-0 text-xs bg-primary px-1.5 py-1 rounded text-primary-foreground">
                      {format(new Date(edu.startDate), "yyyy")} -{" "}
                      {format(new Date(edu.endDate), "yyyy")}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-xs mt-2">
                    {edu.school}, {edu.location}
                  </p>
                  <span className="w-full block h-px bg-border my-4" />
                  <p className="text-muted-foreground text-sm leading-loose">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <motion.h3
              variants={slideRightVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-black text-xl w-max"
            >
              Experiences
            </motion.h3>
            <div className="border-primary space-y-6">
              {experiences.map((exp: IExperience) => (
                <motion.div
                  variants={fadeScaleUpVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-secondary bg-dot-black/[0.1] dark:bg-dot-white/[0.1] p-6 md:p-8 rounded-md"
                  key={`edu-${exp.id}`}
                >
                  <div className="flex gap-3 items-start flex-col-reverse">
                    <h3 className="text-foreground flex-1 text-lg">
                      <span className="font-bold">{exp.title}</span>
                      <span className="px-1">-</span>
                      <span>{exp.company}</span>
                    </h3>
                    <p className="shrink-0 text-xs bg-primary px-1.5 py-1 rounded text-primary-foreground">
                      {format(new Date(exp.startDate), "yyyy")}-
                      {format(new Date(exp.endDate), "yyyy")}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs mt-2">
                    {exp.location}
                  </p>
                  <span className="w-full block h-px bg-border my-4" />
                  <p className="text-muted-foreground text-sm leading-loose">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
