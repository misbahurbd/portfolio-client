"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

export default function Footer() {
  return (
    <section
      id="contact"
      className="section"
    >
      <div className="container">
        <div className="space-y-14">
          <h4 className="text-3xl md:text-6xl lg:text-8xl max-w-4xl mx-auto text-center font-black">
            Let&apos;s Talk About The Next Big Thing
          </h4>
          <div className="border-border border flex flex-wrap">
            <div className="w-full sm:w-1/2 border-r border-b sm:border-b-transparent border-border flex flex-col">
              <Link
                target="_blank"
                href="tel:+8801721394440"
                className="text-sm md:text-lg font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 md:px-3 md:py-6 lg:px-4 lg:py-8 border-b border-border transition hover:bg-foreground hover:text-background flex-1"
              >
                <span className="size-4 grid place-items-center">
                  <FaPhone />
                </span>
                <span>+880 1721-394 440</span>
              </Link>
              <Link
                target="_blank"
                href="mailto:misbahurbd@gmail.com"
                className="text-sm md:text-lg font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 md:px-3 md:py-6 lg:px-4 lg:py-8 transition hover:bg-foreground hover:text-background flex-1"
              >
                <span className="size-4 grid place-items-center">
                  <IoMdMail />
                </span>
                <span>misbahurbd@gmail.com</span>
              </Link>
            </div>

            <div className="w-full sm:w-1/2 border-r border-border flex flex-col">
              <Link
                href="http://github.com/misbahurbd"
                target="_blank"
                className="text-sm md:text-lg font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 md:px-3 md:py-6 lg:px-4 lg:py-8 border-b border-border transition hover:bg-foreground hover:text-background flex-1"
              >
                <span className="size-4 grid place-items-center">
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </Link>
              <Link
                target="_blank"
                href="http://www.linkedin.com/in/misbahurbd"
                className="text-sm md:text-lg font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 md:px-3 md:py-6 lg:px-4 lg:py-8 transition border-b border-border hover:bg-foreground hover:text-background flex-1"
              >
                <span className="size-4 grid place-items-center">
                  <FaLinkedinIn />
                </span>
                <span>LinkedIn</span>
              </Link>
              <Link
                href="http://www.facebook.com/misbahurbd"
                target="_blank"
                className="text-sm md:text-lg font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 md:px-3 md:py-6 lg:px-4 lg:py-8 transition hover:bg-foreground hover:text-background flex-1"
              >
                <span className="size-4 grid place-items-center">
                  <FaFacebookF />
                </span>
                <span>Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
