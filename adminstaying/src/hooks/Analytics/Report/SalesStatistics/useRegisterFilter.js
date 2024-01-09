import { create } from "zustand";

export const maxDate = new Date();
maxDate.setDate(maxDate.getDate() - 1);

const useRegisterFilter = create((set) => ({
  compareWith: "none",
  viewBy: "months",
  startDate: new Date(2023, 6, 30),
  endDate: maxDate,

  setState: (state, value) =>
    set((prevState) => ({
      ...prevState,
      [state]: value,
    })),
}));

export default useRegisterFilter;
