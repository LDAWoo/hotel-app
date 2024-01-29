import { create } from "zustand";

const useRegisterAIImageModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterAIImageModal;
