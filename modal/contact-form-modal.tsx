"use client"

import { Modal } from "@/components/ui/modal"
import { useContactFormModal } from "@/hooks/use-contact-form-hook"
import Link from "next/link"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

const ContactFormModal = () => {
  const { isOpen, onClose } = useContactFormModal()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-6 ">
        <h4 className="text-4xl max-w-[260px] mx-auto text-center font-black pt-20">
          Let&apos;s Talk About The Next Big Thing
        </h4>
        <div className="border-border border flex  flex-wrap">
          <div className="w-full sm:w-1/2 border-r border-b sm:border-b-transparent border-border flex flex-col">
            <Link
              target="_blank"
              href="tel:+8801721394440"
              className="text-sm font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 border-b border-border transition hover:bg-foreground hover:text-background flex-1"
            >
              <span className="size-4 grid place-items-center">
                <FaPhone />
              </span>
              <span>+880 1721-394 440</span>
            </Link>
            <Link
              target="_blank"
              href="mailto:misbahurbd@gmail.com"
              className="text-sm font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 transition hover:bg-foreground hover:text-background flex-1"
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
              className="text-sm font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 border-b border-border transition hover:bg-foreground hover:text-background flex-1"
            >
              <span className="size-4 grid place-items-center">
                <FaGithub />
              </span>
              <span>GitHub</span>
            </Link>
            <Link
              target="_blank"
              href="http://www.linkedin.com/in/misbahurbd"
              className="text-sm font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 transition border-b border-border hover:bg-foreground hover:text-background flex-1"
            >
              <span className="size-4 grid place-items-center">
                <FaLinkedinIn />
              </span>
              <span>LinkedIn</span>
            </Link>
            <Link
              href="http://www.facebook.com/misbahurbd"
              target="_blank"
              className="text-sm font-bold flex flex-col sm:flex-row items-center gap-3 justify-center px-2 py-5 transition hover:bg-foreground hover:text-background flex-1"
            >
              <span className="size-4 grid place-items-center">
                <FaFacebookF />
              </span>
              <span>Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default ContactFormModal
