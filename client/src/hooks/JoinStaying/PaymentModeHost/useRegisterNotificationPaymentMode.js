import { create } from "zustand";

const useRegisterNotificationPaymentMode = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationPaymentMode;
