import { create } from "zustand";

const useRegisterHotelName = create((set) => ({
  name: "",
  rating: 0.0,
  setField: (field, value) =>
    set((prevState) => ({ ...prevState, [field]: value })),
}));

export default useRegisterHotelName;
