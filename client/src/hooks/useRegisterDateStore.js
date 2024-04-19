import { create } from "zustand";

const currentDate = new Date();
const nextDay = new Date(currentDate);
nextDay.setDate(nextDay.getDate() + 1);

const useRegisterDateStore = create((set) => ({
  startDate: new Date(),
  endDate: nextDay,
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));

export default useRegisterDateStore;
