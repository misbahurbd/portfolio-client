import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion"

import { cn } from "@/lib/utils"
import { LuStar } from "react-icons/lu"

interface ParallaxProps {
  children: React.ReactNode | string
  baseVelocity?: number
  className?: string
}

export function ParallaxText({
  children,
  baseVelocity = 1,
  className,
}: ParallaxProps) {
  const ele = useRef(null)

  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, v => `${wrap(-20, -50, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap w-full leading-none">
      <motion.div
        ref={ele}
        className={cn(
          "flex gap-8 flex-nowrap uppercase whitespace-nowrap text-8xl font-black text-foreground/5",
          className
        )}
        style={{
          x,
        }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <span
            className="flex items-center gap-8"
            key={index}
          >
            <span>{children}</span>
            <LuStar className="size-[0.5em]" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
