import { create } from "zustand";

const useRegisterExtraBed = create((set) => ({
  extraBed: 0,
  setExtraBed: (newBed) => set({ extraBed: newBed }),
  childrenOld: "No",
  priceGuestChildren: 0.0,
  setPriceGuestChildren: (newPriceChildren) =>
    set({ priceGuestChildren: newPriceChildren }),
  priceGuestAdults: 0.0,
  setPriceGuestAdults: (newPriceAdults) =>
    set({ priceGuestAdults: newPriceAdults }),

  checkedType: [],
  setCheckedType: (newType) => set({ checkedType: newType }),
}));

export default useRegisterExtraBed;
