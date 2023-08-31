import { create } from "zustand";

const useRegisterDateStore = create((set) => ({
  startDate: new Date(),
  endDate: new Date(),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));

export default useRegisterDateStore;
