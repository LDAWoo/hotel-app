import { create } from "zustand";

const userRegisterToolTipAdult = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default userRegisterToolTipAdult;
