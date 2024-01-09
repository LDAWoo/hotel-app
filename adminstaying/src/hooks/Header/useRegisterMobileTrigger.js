import { create } from "zustand";

const useRegisterMobileTrigger = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterMobileTrigger;
