"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  slideRightVariants,
  textUpChildVariants,
  textUpVariants,
} from "@/constant/motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  desc?: string
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  desc,
  className,
}) => {
  return (
    <div className={cn("max-w-xl md:max-w-3xl space-y-2 mb-5", className)}>
      <motion.h4 className="capitalize w-full overflow-hidden text-muted-foreground">
        <motion.span
          variants={slideRightVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-flex text-primary uppercase font-semibold"
        >
          {subtitle}
        </motion.span>
      </motion.h4>
      <motion.h2
        variants={textUpVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={1}
        className="text-2xl sm:text-3xl lg:text-[2rem] lg:leading-tight 2xl:text-[2.5rem] 2xl:leading-tight font-black overflow-hidden"
      >
        {title.split(" ").map((word, i) => {
          return (
            <motion.span
              variants={textUpChildVariants}
              key={i}
              className="inline-block"
            >
              {word}
              <span className="inline-flex">&nbsp;</span>
            </motion.span>
          )
        })}
      </motion.h2>
      {desc && (
        <motion.p
          variants={textUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-muted-foreground"
        >
          {desc}
        </motion.p>
      )}
    </div>
  )
}
