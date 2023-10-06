import { create } from "zustand";

const useRegisterNumberOfProperty = create((set) => ({
  numberOfProperty: 2,
  setNumberOfProperty: (newNumber) => set({ numberOfProperty: newNumber }),
}));

export default useRegisterNumberOfProperty;
