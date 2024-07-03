"use client"

import ContactFormModal from "@/modal/contact-form-modal"
import { useEffect, useState } from "react"

const ContacFormModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <ContactFormModal />
}
export default ContacFormModalProvider
