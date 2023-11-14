import { create } from "zustand";

const useRegisterPinMap = create((set) => ({
  value: null,
  setValue: (newValue) => set({ value: newValue }),
}));

export default useRegisterPinMap;
