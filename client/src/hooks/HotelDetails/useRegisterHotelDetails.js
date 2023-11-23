import { create } from "zustand";

const useRegisterHotelDetails = create((set) => ({
  hotels: [],
  loading: true,
  setHotels: (newHotel) => set({ hotels: newHotel }),
  setLoading: (isLoading) => set({ loading: isLoading }),
}));

export default useRegisterHotelDetails;
