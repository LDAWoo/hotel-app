import { create } from "zustand";

const useRegisterToolTipCalendar = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterToolTipCalendar;
