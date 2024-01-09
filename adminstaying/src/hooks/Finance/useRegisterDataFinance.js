import { create } from "zustand";

const useRegisterDataFinance = create((set) => ({
  items: [],
  currentData: [],
  setCurrentData: (newData) => set({ currentData: newData }),
  setItems: (item) => set({ items: item }),
}));

export default useRegisterDataFinance;
