import { create } from "zustand";

const useRegisterSearchHotelResult = create((set) => ({
  ourHotels: [],
  setOurHotels: (result) => set({ ourHotels: result }),
  loading: true,
  setLoading: (isLoading) => set({ loading: isLoading }),
}));

export default useRegisterSearchHotelResult;
