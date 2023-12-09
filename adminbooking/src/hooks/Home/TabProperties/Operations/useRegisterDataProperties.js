import { create } from "zustand";

const useRegisterDataProperties = create((set) => ({
  items: [],
  currentData: [],
  setCurrentData: (newData) => set({ currentData: newData }),
  setItems: (item) => set({ items: item }),
}));

export default useRegisterDataProperties;
