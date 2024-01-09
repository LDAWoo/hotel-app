import { create } from "zustand";

const useRegisterNotificationAddRoom = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationAddRoom;
