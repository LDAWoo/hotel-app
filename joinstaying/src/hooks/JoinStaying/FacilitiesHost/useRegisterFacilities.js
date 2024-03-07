import { create } from "zustand";

const useRegisterFacilities = create((set) => ({
  amenityServices: [],
  facilities: [],

  setField: (field, value) =>
    set((prev) => ({
      ...prev,
      [field]: value,
    })),

  resetAllFacilities: () =>
    set({
      amenityServices: [],
      facilities: [],
    }),
}));

export default useRegisterFacilities;
