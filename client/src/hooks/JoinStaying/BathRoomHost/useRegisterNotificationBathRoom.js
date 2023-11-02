import { create } from "zustand";

const useRegisterNotificationBathRoom = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationBathRoom;
