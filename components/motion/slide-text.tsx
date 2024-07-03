import { cn } from "@/lib/utils"
import { MotionConfig, motion } from "framer-motion"

interface SlideTextProps {
  className?: string
  children: React.ReactNode | string
}

export const SlideText = ({ className, children }: SlideTextProps) => {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <div className="w-max relative">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            transformOrigin: ["left"],
          }}
          className="absolute bg-foreground inset-0"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={cn("block leading-none", className)}
        >
          {children}
        </motion.span>
      </div>
    </MotionConfig>
  )
}
