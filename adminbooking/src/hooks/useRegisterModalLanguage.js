import { create } from "zustand";

const useRegisterModalLanguage = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModalLanguage;
