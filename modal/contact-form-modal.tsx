"use client"

import { Modal } from "@/components/ui/modal"
import { useContactFormModal } from "@/hooks/use-contact-form-hook"

const ContactFormModal = () => {
  const { isOpen, onClose } = useContactFormModal()

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2>Hi</h2>
    </Modal>
  )
}
export default ContactFormModal
