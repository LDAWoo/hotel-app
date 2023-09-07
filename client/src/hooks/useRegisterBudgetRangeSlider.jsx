import { create } from "zustand";

const useRegisterBudgetRangeSlider = create((set) => ({
  min: 300000,
  max: 6000000,
  step: 100000,
  values: [300000, 6000000],
  setValues: (newValues) => set({ values: newValues }),
}));
export default useRegisterBudgetRangeSlider;
