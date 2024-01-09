import { create } from "zustand";

const useRegisterNotificationSeeFacilities = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationSeeFacilities;
