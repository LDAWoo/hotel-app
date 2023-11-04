import { create } from "zustand";

const useRegisterNotificationHotelPrice = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationHotelPrice;
