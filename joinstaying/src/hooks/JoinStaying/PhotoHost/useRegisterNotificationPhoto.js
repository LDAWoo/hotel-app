import { create } from "zustand";

const useRegisterNotificationPhoto = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationPhoto;
