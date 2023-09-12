import { create } from "zustand";

const useRegisterToolTipMenuMore = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterToolTipMenuMore;
