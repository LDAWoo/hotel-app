import { create } from "zustand";

const useRegisterNotificationHouseRulesChange = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterNotificationHouseRulesChange;
