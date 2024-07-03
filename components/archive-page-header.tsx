"use client"
import {
  fadeScaleUpVariants,
  fadeUpVariants,
  zoomInVariants,
} from "@/constant/motion"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const PageHeader = ({
  title,
  form = false,
  bgImg,
  children,
}: {
  title: string
  form?: boolean
  bgImg?: string
  children?: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{ y: yValue }}
      className="relative overflow-hidden"
    >
      {bgImg && (
        <Image
          fill
          alt="Project Image"
          className="object-cover opacity-30"
          src={bgImg}
        />
      )}
      <div className="w-full pt-24 pb-16 lg:pt-48 lg:pb-32 bg:background dark:bg-grid-white/[0.08] bg-grid-black/[0.05] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_top_center,transparent_20%,black)]" />
        <div className="relative text-center container z-10 overflow-hidden py-3 space-y-3">
          <motion.h1
            variants={fadeScaleUpVariants}
            initial="hidden"
            animate="show"
            custom={2}
            viewport={{ once: true }}
            className="text-center font-black text-3xl lg:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.div
            variants={zoomInVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
export default PageHeader
