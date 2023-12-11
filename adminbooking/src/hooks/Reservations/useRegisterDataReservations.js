import { create } from "zustand";

const useRegisterDataReservations = create((set) => ({
  items: [],
  currentData: [],
  setCurrentData: (newData) => set({ currentData: newData }),
  setItems: (item) => set({ items: item }),
}));

export default useRegisterDataReservations;
