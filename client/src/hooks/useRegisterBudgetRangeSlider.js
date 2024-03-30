import { create } from "zustand";

const min = 100000;
const max = 6000000;
const step = 100000;
const useRegisterBudgetRangeSlider = create((set) => ({
  min: min,
  max: max,
  step: step,
  values: [min, max],
  setValues: (newValues) => set({ values: newValues }),
}));
export default useRegisterBudgetRangeSlider;
