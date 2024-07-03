"use client"

import { fadeInVariants } from "@/constant/motion"
import { AnimatePresence, motion } from "framer-motion"

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="show"
        exit="out"
        custom={2}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default Template
