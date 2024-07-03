"use client"

import { Modal } from "@/components/ui/modal"
import { useContactFormModal } from "@/hooks/use-contact-form-hook"

const ContactFormModal = () => {
  const { isOpen, onClose } = useContactFormModal()

  return (
    <Modal
      title="Let's Work Toghter"
      description=""
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="grid border-separate border-border border grid-cols-2"></div>
    </Modal>
  )
}
export default ContactFormModal
