import { create } from "zustand";

const useRegisterExtraBed = create((set) => ({
  extraBed: 0,
  setExtraBed: (newBed) => set({ extraBed: newBed }),
  childrenOld: 0,
  setChildrenOld: (newChildOld) => set({ childrenOld: newChildOld }),
  checkedType: [],
  setCheckedType: (newType) => set({ checkedType: newType }),

  resetAllExtraBed: () =>
    set({
      extraBed: 0,
      childrenOld: 0,
      checkedType: [],
    }),
}));

export default useRegisterExtraBed;
