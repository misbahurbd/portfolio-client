import { create } from "zustand"

interface UseContactFormProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useContactFormModal = create<UseContactFormProps>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
