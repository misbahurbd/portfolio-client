"use client"

import BgLine from "@/components/animation/bg-line"
import Image from "next/image"
import { SectionHeading } from "@/components/animation/section-heading"
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef } from "react"
import { textUpVariants, zoomInVariants } from "@/constant/motion"
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { LuDownload } from "react-icons/lu"
import { ParallaxText } from "../animation/perallax-text"
import { useContactFormModal } from "@/hooks/use-contact-form-hook"
import Link from "next/link"

export const AboutSection = () => {
  const { onOpen } = useContactFormModal()
  const imgRef = useRef(null)
  const inView = useInView(imgRef, { once: true, amount: 0.5 })
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  useMotionValueEvent(scrollYProgress, "change", x => console.log(x))

  return (
    <section
      id="about"
      className="section bg-secondary relative isolate"
    >
      <div className="absolute top-20 w-full left-0 right-0">
        <ParallaxText baseVelocity={-1}>Misbahur Rahman</ParallaxText>
      </div>
      <div className="container space-y-6">
        <div className="flex flex-col items-center lg:flex-row gap-8">
          <div className="flex-1">
            <div className="relative mx-auto w-max">
              <motion.span
                variants={zoomInVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                custom={2}
                className="absolute aspect-square w-3/4 -left-3 -bottom-3 border-[5px] border-primary border-t-transparent border-r-transparent rounded-bl-3xl"
              />
              <motion.span
                variants={zoomInVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                custom={2}
                className="absolute aspect-square w-2/4 -top-3 -right-3 border-[5px] border-primary border-b-transparent border-l-transparent rounded-tr-3xl"
              />
              <motion.div
                ref={imgRef}
                variants={zoomInVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="block overflow-hidden rounded-xl"
              >
                <motion.div style={{ scale, transformOrigin: "center 40px" }}>
                  <Image
                    src="/assets/img/misbahur-rahman-about.jpeg"
                    width={400}
                    height={560}
                    alt="Misbahur Rahman About"
                    className="aspect-square lg:aspect-[14/16] scale-x-100 object-cover rounded-xl max-w-full"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="flex-1 py-8 space-y-6 max-w-2xl mx-auto text-center lg:text-start">
            <SectionHeading
              className="capitalize text-center lg:text-start w-full mx-auto lg:mx-0"
              subtitle="About Me"
              title="Transforming visions into web experience"
            />
            <motion.p
              variants={textUpVariants}
              initial="hidden"
              custom={3}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="text-muted-foreground"
            >
              Welcome to my digital playground! I&apos;m not just a web
              developer; I&apos;m a passionate creator who turns ideas into
              captivating web experiences.
            </motion.p>
            <motion.p
              variants={textUpVariants}
              initial="hidden"
              custom={4}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="text-muted-foreground"
            >
              As a Full Stack Developer, I craft beautiful user interfaces and
              build robust backend systems for seamless experiences. I excel at
              creating dynamic web applications and optimizing existing ones –
              always aiming for efficiency and scalability.
            </motion.p>
            <motion.div
              variants={textUpVariants}
              initial="hidden"
              custom={5}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <Button
                className="group flex items-center gap-2"
                onClick={onOpen}
              >
                <span>Let&apos;s Contact</span>
                <ArrowTopRightIcon className="w-5 h-5 transition group-hover:rotate-45" />
              </Button>
              <Button
                className="group flex items-center gap-2"
                variant="social"
                asChild
              >
                <Link
                  download="misbahur-rahman-resume"
                  href="/assets/file/misbahur-rahman-resume.pdf"
                >
                  <span>Resume</span>
                  <LuDownload />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <BgLine />
    </section>
  )
}
