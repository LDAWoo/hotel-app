import { create } from "zustand";

const useRegisterToolTipLocation = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterToolTipLocation;
