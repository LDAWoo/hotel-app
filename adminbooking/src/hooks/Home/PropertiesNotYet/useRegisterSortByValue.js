import { create } from "zustand";

const useRegisterSortByValue = create((set) => ({
  sortBy: "hotelName",
  isIncrease: false,
  setSortBy: (newValue, increase) => set({ sortBy: newValue, isIncrease: increase }),
}));

export default useRegisterSortByValue;
