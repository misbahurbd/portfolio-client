"use client"
import { fadeScaleUpVariants, fadeUpVariants } from "@/constant/motion"
import { motion } from "framer-motion"

const ArchivePageHeader = ({
  title,
  form = false,
  children,
}: {
  title: string
  form?: boolean
  children?: React.ReactNode
}) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full py-16 lg:py-32 bg:background dark:bg-grid-white/[0.08] bg-grid-black/[0.05] relative flex items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_top_center,transparent_20%,black)]" />
      <div className="relative z-10 overflow-hidden py-3">
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
      </div>
    </motion.div>
  )
}
export default ArchivePageHeader
