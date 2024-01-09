import { create } from "zustand";

const useRegisterNotificationUnitName = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationUnitName;
