import { create } from "zustand";

const useRegisterWindowOnline = create((set) => ({
  isOnline: false,
  setIsOnline: (isOn) => set({ isOnline: isOn }),
}));

export default useRegisterWindowOnline;
