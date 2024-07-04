"use client"

import {
  fadeUpChildVariants,
  fadeUpVariants,
  zoomInVariants,
} from "@/constant/motion"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./ui/theme-toggle"
import { Button } from "./ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { useContactFormModal } from "@/hooks/use-contact-form-hook"
import { useState } from "react"
import { LuX } from "react-icons/lu"
import { useRouter } from "next/navigation"

const Header = () => {
  const { onOpen } = useContactFormModal()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    {
      label: "Home",
      path: "/#hero",
    },
    {
      label: "About",
      path: "/#about",
    },
    {
      label: "Projects",
      path: "/#projects",
    },
    {
      label: "Skills",
      path: "/#skills",
    },
    {
      label: "Blogs",
      path: "/#blogs",
    },
    {
      label: "Contact",
      path: "/#contact",
    },
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div className="fixed w-full bg-background/90 backdrop-blur top-0 left-0 right-0 z-50 py-2">
        <div className="container">
          <motion.div className="flex items-center justify-between">
            <div className="flex-1">
              <motion.div
                variants={zoomInVariants}
                initial="hidden"
                animate="show"
              >
                <Link
                  href={"/"}
                  className="block relative w-32 h-14"
                >
                  <Image
                    src={"/assets/img/misbahur-rahman-logo-dark.svg"}
                    alt="Misbahur Rahman"
                    fill
                    className="block object-contain dark:hidden"
                  />
                  <Image
                    src={"/assets/img/misbahur-rahman-logo-light.svg"}
                    alt="Misbahur Rahman"
                    fill
                    className="object-contain hidden dark:block"
                  />
                </Link>
              </motion.div>
            </div>

            <ul className="  items-center gap-6 hidden lg:flex">
              {navItems.map((nav, idx) => (
                <motion.li
                  variants={zoomInVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  key={nav.path + "des"}
                  custom={idx}
                >
                  <Link
                    className="text-muted-foreground transition hover:text-primary"
                    href={nav.path}
                  >
                    {nav.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="gap-2 items-center flex-1 flex justify-end">
              <motion.div
                variants={zoomInVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <ModeToggle />
              </motion.div>
              <motion.button
                variants={zoomInVariants}
                initial="hidden"
                animate={!isOpen && "show"}
                type="button"
                className="flex flex-col items-end gap-1.5 lg:hidden group"
                onClick={() => setIsOpen(true)}
              >
                <span className="block w-8 h-0.5 rounded-full transition bg-foreground group-hover:bg-primary" />
                <span className="block w-8 h-0.5 rounded-full transition bg-foreground group-hover:bg-primary" />
                <span className="block w-8 h-0.5 rounded-full transition bg-foreground group-hover:bg-primary" />
              </motion.button>
              <motion.div
                variants={zoomInVariants}
                initial="hidden"
                whileInView="show"
                custom={1}
                viewport={{ once: true }}
                className="hidden lg:block"
              >
                <Button
                  className="group flex items-center gap-2"
                  onClick={onOpen}
                >
                  <span>Let&apos;s Contact</span>
                  <ArrowTopRightIcon className="w-5 h-5 transition group-hover:rotate-45" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{
          display: "none",
          opacity: 0,
        }}
        animate={
          isOpen
            ? {
                display: "flex",
                y: ["100%", "0%"],
                opacity: [1, 1],
              }
            : {
                display: "none",
                opacity: 0,
              }
        }
        exit={{
          display: "none",
          opacity: 0,
          y: "20%",
        }}
        transition={{ duration: 0.3 }}
        className="fixed items-center justify-center inset-0 bg-background z-[100]"
      >
        <motion.button
          type="button"
          layoutId="btn"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4"
        >
          <LuX className="size-10" />
        </motion.button>
        <motion.ul
          layout
          className="flex items-center justify-center flex-col gap-5 text-3xl font-black"
        >
          {navItems.map((nav, idx) => (
            <motion.li
              variants={fadeUpChildVariants}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              custom={1 + idx * 0.3}
              key={nav.path + "mobile"}
              className="relative isolate group/link"
            >
              <button
                onClick={() => {
                  setIsOpen(false)
                  router.push(nav.path)
                }}
              >
                {nav.label}
              </button>
              <motion.span
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                className="absolute transition top-1/2 left-1/2 scale-x-0 origin-right -translate-y-1/2 -translate-x-1/2 h-2 rounded-full -z-10 w-[calc(100%+20px)] bg-primary group-hover/link:origin-left group-hover/link:scale-x-100"
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  )
}
export default Header
