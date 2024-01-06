import { create } from "zustand";

const useRegisterToolTipTheme = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterToolTipTheme;
