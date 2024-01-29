import { create } from "zustand";

const useRegisterExtraBed = create((set) => ({
  extraBed: 0,
  setExtraBed: (newBed) => set({ extraBed: newBed }),
  childrenOld: 0,
  setChildrenOld: (newChildOld) => set({ childrenOld: newChildOld }),
  checkedType: [],
  setCheckedType: (newType) => set({ checkedType: newType }),
}));

export default useRegisterExtraBed;
