import { create } from "zustand";

const useRegisterLocationStore = create((set) => ({
  valueLocation: "",
  setValueLocation: (newValue) => set({ valueLocation: newValue }),
  isOpen: false,
  onOpenAlert: () => set({ isOpen: true }),
  onCloseAlert: () => set({ isOpen: false }),
}));

export default useRegisterLocationStore;
