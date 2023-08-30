import { create } from "zustand";

const useRegisterWindowSizeStore = create((set) => ({
  width: window.innerWidth,
  height: window.innerHeight,
  setWidthAndHeight: (width, height) => set({ width, height }),
}));

export default useRegisterWindowSizeStore;
