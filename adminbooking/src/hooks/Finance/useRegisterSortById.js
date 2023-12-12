import { create } from "zustand";

const useRegisterSortById = create((set) => ({
  sortBy: "propertyId",
  isIncrease: false,
  setSortBy: (newValue, increase) => set({ sortBy: newValue, isIncrease: increase }),
}));

export default useRegisterSortById;
