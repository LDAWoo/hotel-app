import { create } from "zustand";

const useRegisterScrollStore = create((set) => ({
  isVisible: true,
  onVisible: () => set({ isVisible: true }),
  unVisible: () => set({ isVisible: false }),
}));

export default useRegisterScrollStore;
