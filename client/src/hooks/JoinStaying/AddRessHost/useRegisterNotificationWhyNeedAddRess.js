import { create } from "zustand";

const useRegisterNotificationWhyNeedAddRess = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationWhyNeedAddRess;
