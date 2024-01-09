import { create } from "zustand";

const useRegisterNotificationHotelPolicy = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationHotelPolicy;
