import { create } from "zustand";

const useRegisterToolTipCheckOutDate = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterToolTipCheckOutDate;
