import { create } from "zustand";

const useRegisterOwner = create((set) => ({
  quantityHotel: 1,
  activeHotel: "",
  setActiveHotel: (hotel) => set({ activeHotel: hotel }),
  setQuantityHotel: (value) => set({ quantityHotel: value }),
}));

export default useRegisterOwner;
