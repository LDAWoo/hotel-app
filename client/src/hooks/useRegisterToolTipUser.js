import { create } from "zustand";

const useRegisterToolTipUser = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterToolTipUser;
