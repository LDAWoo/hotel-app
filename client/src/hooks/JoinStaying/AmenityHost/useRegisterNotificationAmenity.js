import { create } from "zustand";

const useRegisterNotificationAmenity = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationAmenity;
