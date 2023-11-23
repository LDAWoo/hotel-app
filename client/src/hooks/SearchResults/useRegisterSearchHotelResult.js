import { create } from "zustand";

const useRegisterSearchHotelResult = create((set) => ({
  ourHotels: [],
  setOurHotels: (result) => set({ ourHotels: result }),
}));

export default useRegisterSearchHotelResult;
