import { create } from "zustand";

const useRegisterAmenityService = create((set) => ({
  amenityServices: [],
  facilities: [],

  setField: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),
}));

export default useRegisterAmenityService;
