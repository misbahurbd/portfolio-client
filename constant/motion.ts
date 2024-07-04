import { SpringOptions, Transition, Variants } from "framer-motion"

const animationDuration = 0.6
const delayTime = animationDuration / 5
const springEffect = {
  type: "spring",
  ease: "easeInOut",
  stiffness: 100,
  damping: 10,
}

export const slideRightVariants: Variants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  show: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      ...springEffect,
    },
  }),
}
export const slideLeftVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      ...springEffect,
    },
  }),
}

export const textUpVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      delayChildren: i * delayTime,
      staggerChildren: delayTime,
      ...springEffect,
    },
  }),
}

export const textUpChildVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      ...springEffect,
    },
  },
}

export const fadeUpVariants: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      delayChildren: i * delayTime,
      staggerChildren: delayTime,
      ...springEffect,
    },
  }),
}

export const fadeScaleUpVariants: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
    scale: 0.8,
  },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      delayChildren: i * delayTime,
      staggerChildren: delayTime,
      ...springEffect,
    },
  }),
}

export const fadeUpChildVariants: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      ...springEffect,
    },
  }),
}

export const fadeDownVariants: Variants = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      ...springEffect,
    },
  }),
}
export const fadeLeftVariants: Variants = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  show: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      delayChildren: i * delayTime,
      staggerChildren: delayTime,
      ...springEffect,
    },
  }),
}
export const fadeLeftChildVariants: Variants = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      ...springEffect,
    },
  },
}

export const fadeRightVariants: Variants = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  show: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      ...springEffect,
    },
  }),
}

export const zoomInVariants: Variants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  show: (i = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      delayChildren: i * delayTime,
      staggerChildren: delayTime,
      ...springEffect,
    },
  }),
}
export const zoomInChildVariants: Variants = {
  hidden: {
    scale: 0.3,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: animationDuration,
      ...springEffect,
    },
  },
}

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: animationDuration,
      delay: 0.1 + i * delayTime,
      ...springEffect,
    },
  }),
  out: {
    opacity: 0,
    y: 30,
    transition: {
      duration: animationDuration,
      ...springEffect,
    },
  },
}
