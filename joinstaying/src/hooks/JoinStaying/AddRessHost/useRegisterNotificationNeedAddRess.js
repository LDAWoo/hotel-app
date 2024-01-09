import { create } from "zustand";

const useRegisterNotificationNeedAddRess = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationNeedAddRess;
