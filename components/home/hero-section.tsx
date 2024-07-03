"use client"

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { Button } from "../ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  fadeUpVariants,
  slideRightVariants,
  textUpVariants,
  zoomInVariants,
} from "@/constant/motion"
import { LuDownload } from "react-icons/lu"
import { socialLinks } from "@/constant/base"

export const HeroSection = () => {
  const heroSec = useRef(null)
  const isInView = useInView(heroSec, { once: true, amount: 0.5 })

  return (
    <section
      id="hero"
      ref={heroSec}
      className="w-full bg:background dark:bg-grid-white/[0.08] bg-grid-black/[0.05] relative flex items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_top_center,transparent_20%,black)]" />
      <div className="container">
        <div className="flex items-center min-h-screen">
          <div className="flex flex-col relative items-center lg:items-start w-full py-20 lg:py-40">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="[mask-image:linear-gradient(to_top,transparent_0%,black_60%)] w-full h-96 relative lg:pt-64 lg:absolute lg:right-0 lg:bottom-0 lg:h-[90%]"
            >
              <Image
                src="/assets/img/misbahur-rahman.png"
                fill
                alt="Misbahur Rahman"
                className="object-contain w-full h-full lg:object-right"
                priority
              />
            </motion.div>
            <div className="text-center -mt-10 relative space-y-4 lg:text-start">
              <motion.p
                variants={zoomInVariants}
                custom={1}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="font-medium text-muted-foreground !-mb-4"
              >
                Hello! I&apos;m
              </motion.p>
              <h1 className="text-6xl lg:text-8xl xl:text-9xl lg:-ml-1.5 font-extrabold uppercase">
                <span className="overflow-hidden block">
                  <motion.span
                    custom={2}
                    variants={textUpVariants}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="block leading-none"
                  >
                    Misbahur
                  </motion.span>
                </span>
                <span className="overflow-hidden block">
                  <motion.span
                    custom={3}
                    variants={textUpVariants}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="block leading-none"
                  >
                    Rahman
                  </motion.span>
                </span>
              </h1>
              <motion.p
                custom={4}
                variants={textUpVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="leading-relaxed text-muted-foreground max-w-md"
              >
                Dedicated to crafting exceptional digital experiences through{" "}
                <span className="text-primary font-semibold">
                  {"{"}Full-Stack Web Development{"}"}
                </span>
                , turning your ideas into lasting online success.
              </motion.p>
              <div className="!mt-6 flex items-center gap-3 justify-center lg:justify-start">
                <motion.div
                  custom={5}
                  variants={zoomInVariants}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                >
                  <Button asChild>
                    <Link
                      download="misbahur-rahman-resume"
                      href="/assets/file/misbahur-rahman-resume.pdf"
                      target="_blank"
                    >
                      <span className="mr-2">Resume</span>
                      <LuDownload />
                    </Link>
                  </Button>
                </motion.div>
                <ul className="flex items-center">
                  {socialLinks.map((acc, i) => (
                    <motion.li
                      key={acc.link}
                      variants={slideRightVariants}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                      custom={i + 6}
                    >
                      <Button
                        size="icon"
                        variant="social"
                        asChild
                      >
                        <Link
                          href={acc.link}
                          target="_blank"
                        >
                          <acc.icon className="size-4" />
                        </Link>
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
