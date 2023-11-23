import { create } from "zustand";

const useRegisterToolTipCheckInDate = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterToolTipCheckInDate;
