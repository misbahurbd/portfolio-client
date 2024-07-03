"use client"

import { slideLeftVariants, zoomInVariants } from "@/constant/motion"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <motion.div className="fixed w-full bg-background/90 backdrop-blur top-0 left-0 right-0 z-50">
      <div className="container">
        <motion.div className="flex items-center justify-between">
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
        </motion.div>
      </div>
    </motion.div>
  )
}
export default Header
